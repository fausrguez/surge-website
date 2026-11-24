import {
  Component,
  ElementRef,
  HostListener,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { CartLine, CartService } from '../../core/cart.service';
import {
  CAFFEINE_WARNING,
  CONTACT_EMAIL,
  FLAVORS,
  SHIPPING,
  formatPrice,
} from '../../core/content';
import { FocusTrap } from '../../shared/focus-trap/focus-trap';
import { UiService } from '../../core/ui.service';

@Component({
  selector: 'app-cart-drawer',
  imports: [FocusTrap],
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.scss',
})
export class CartDrawer {
  readonly cart = inject(CartService);
  readonly ui = inject(UiService);
  readonly shipping = SHIPPING;
  readonly warning = CAFFEINE_WARNING;
  readonly formatPrice = formatPrice;

  readonly removed = signal<CartLine | null>(null);
  private removeTimer: ReturnType<typeof setTimeout> | null = null;

  private readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');

  constructor() {
    effect(() => {
      const open = this.ui.cartOpen();
      if (typeof document !== 'undefined') {
        document.body.style.overflow = open ? 'hidden' : '';
      }
      if (open) {
        queueMicrotask(() => this.closeButton()?.nativeElement.focus());
      }
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.ui.cartOpen()) {
      this.ui.closeCart();
    }
  }

  breakdown(line: CartLine): { name: string; image: string; qty: number }[] {
    return FLAVORS.filter((flavor) => line.qty[flavor.id] > 0).map((flavor) => ({
      name: flavor.name,
      image: `assets/img/lata3d-${flavor.id}.webp`,
      qty: line.qty[flavor.id],
    }));
  }

  modeLabel(line: CartLine): string {
    return line.mode === 'sub' ? 'Suscripción mensual' : 'Compra única';
  }

  changeQuantity(line: CartLine, delta: number): void {
    this.cart.setQuantity(line.id, line.quantity + delta);
  }

  removeLine(line: CartLine): void {
    this.removed.set({ ...line });
    this.cart.remove(line.id);
    if (this.removeTimer) {
      clearTimeout(this.removeTimer);
    }
    this.removeTimer = setTimeout(() => this.removed.set(null), 6000);
  }

  undoRemove(): void {
    const line = this.removed();
    if (!line) {
      return;
    }
    this.cart.add(
      {
        size: line.size,
        mode: line.mode,
        qty: { ...line.qty },
        unitPrice: line.unitPrice,
      },
      line.quantity,
    );
    this.removed.set(null);
    if (this.removeTimer) {
      clearTimeout(this.removeTimer);
      this.removeTimer = null;
    }
  }

  checkout(): void {
    const lines = this.cart
      .lines()
      .map((line) => {
        const flavors = this.breakdown(line)
          .map((item) => `${item.qty} × ${item.name}`)
          .join(', ');
        return `· ${line.quantity} × pack de ${line.size} latas (${this.modeLabel(line)}): ${flavors} — ${formatPrice(
          line.unitPrice * line.quantity,
        )}`;
      })
      .join('\n');

    const body = [
      'Quiero reservar este pedido de SURGE:',
      '',
      lines,
      '',
      `Subtotal: ${formatPrice(this.cart.subtotal())}`,
      `Envío: ${this.cart.shipping() === 0 ? 'Gratis' : formatPrice(this.cart.shipping())}`,
      `Total: ${formatPrice(this.cart.total())} (IGIC incluido)`,
      '',
      'Nombre:',
      'Teléfono:',
      'Dirección de entrega:',
      '',
      'Me confirmáis stock, envío y forma de pago, por favor.',
    ].join('\n');

    if (typeof window !== 'undefined') {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        'Reserva de pack SURGE',
      )}&body=${encodeURIComponent(body)}`;
    }
    this.ui.notify('Se ha abierto tu cliente de correo con el resumen del pedido.');
  }

  close(): void {
    this.ui.closeCart();
  }
}
