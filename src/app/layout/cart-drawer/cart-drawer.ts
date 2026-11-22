import { Component, ElementRef, HostListener, effect, inject, viewChild } from '@angular/core';
import { CartLine, CartService } from '../../core/cart.service';
import { FLAVORS, SHIPPING, formatPrice } from '../../core/content';
import { UiService } from '../../core/ui.service';

@Component({
  selector: 'app-cart-drawer',
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.scss',
})
export class CartDrawer {
  readonly cart = inject(CartService);
  readonly ui = inject(UiService);
  readonly shipping = SHIPPING;
  readonly formatPrice = formatPrice;

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

  breakdown(line: CartLine): { name: string; color: string; qty: number }[] {
    return FLAVORS.filter((flavor) => line.qty[flavor.id] > 0).map((flavor) => ({
      name: flavor.name,
      color: flavor.color,
      qty: line.qty[flavor.id],
    }));
  }

  modeLabel(line: CartLine): string {
    return line.mode === 'sub' ? 'Suscripción mensual' : 'Compra única';
  }

  setQuantity(line: CartLine, value: string): void {
    this.cart.setQuantity(line.id, Number(value));
  }

  checkout(): void {
    this.ui.notify('Checkout pendiente de conectar. Tu carrito se guarda en este navegador.');
  }

  close(): void {
    this.ui.closeCart();
  }
}
