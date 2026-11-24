import {
  Component,
  ElementRef,
  HostListener,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { CartService } from '../../core/cart.service';
import { FLAVORS, FlavorId, PACKS, PackMode, PackSize, formatPrice } from '../../core/content';
import { FocusTrap } from '../../shared/focus-trap/focus-trap';
import { UiService } from '../../core/ui.service';

type Qty = Record<FlavorId, number>;

interface PackCan {
  color: string;
  image: string;
}

@Component({
  selector: 'app-pack-modal',
  imports: [FocusTrap],
  templateUrl: './pack-modal.html',
  styleUrl: './pack-modal.scss',
})
export class PackModal {
  readonly ui = inject(UiService);
  private readonly cart = inject(CartService);

  readonly flavors = FLAVORS;
  readonly PACKS = PACKS;
  readonly sizes: PackSize[] = [6, 12, 24];
  readonly formatPrice = formatPrice;

  readonly size = signal<PackSize>(12);
  readonly mode = signal<PackMode>('sub');
  readonly qty = signal<Qty>({ flama: 4, mentisimo: 4, cocus: 4 });

  readonly pack = computed(() => PACKS[this.size()]);
  readonly unitPrice = computed(() =>
    this.cart.priceFor(this.size(), this.size() === 24 ? this.mode() : 'single'),
  );
  readonly totalCans = computed(() => this.qty().flama + this.qty().mentisimo + this.qty().cocus);
  readonly remaining = computed(() => this.size() - this.totalCans());
  readonly complete = computed(() => this.totalCans() === this.size());
  readonly columns = computed(() => (this.size() === 24 ? 8 : 6));
  readonly options = computed(() => Array.from({ length: this.size() + 1 }, (_, index) => index));

  readonly slots = computed<(PackCan | null)[]>(() => {
    const cans: (PackCan | null)[] = [];
    for (const flavor of this.flavors) {
      for (let i = 0; i < this.qty()[flavor.id]; i += 1) {
        cans.push({ color: flavor.color, image: flavor.canImage });
      }
    }
    while (cans.length < this.size()) {
      cans.push(null);
    }
    return cans.slice(0, this.size());
  });

  readonly breakdown = computed(() =>
    this.flavors
      .filter((flavor) => this.qty()[flavor.id] > 0)
      .map((flavor) => ({ name: flavor.name, qty: this.qty()[flavor.id], color: flavor.color })),
  );

  private readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');

  constructor() {
    effect(() => {
      if (this.ui.packOpen()) {
        const size = this.ui.packInitialSize();
        this.size.set(size);
        this.mode.set(this.ui.packInitialMode());
        this.qty.set(this.balancedFor(size, this.ui.packInitialFlavor()));
        if (typeof document !== 'undefined') {
          document.body.style.overflow = 'hidden';
        }
        queueMicrotask(() => this.closeButton()?.nativeElement.focus());
      } else if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.ui.packOpen()) {
      this.close();
    }
  }

  onSizeKeydown(event: KeyboardEvent): void {
    if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
      return;
    }
    event.preventDefault();
    const current = this.sizes.indexOf(this.size());
    const direction = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1;
    const next = (current + direction + this.sizes.length) % this.sizes.length;
    this.setSize(this.sizes[next]);
    const buttons = (event.currentTarget as HTMLElement).querySelectorAll<HTMLButtonElement>(
      '.tamano',
    );
    buttons[next]?.focus();
  }

  setSize(size: PackSize): void {
    const current = this.totalCans();
    this.size.set(size);
    if (current > size) {
      this.qty.set(this.balancedFor(size));
      this.ui.notify(`Hemos reequilibrado tu pack de ${size} latas.`);
    }
  }

  setMode(mode: PackMode): void {
    this.mode.set(mode);
  }

  balance(): void {
    this.qty.set(this.balancedFor(this.size()));
  }

  increment(id: FlavorId): void {
    if (this.remaining() <= 0) {
      return;
    }
    this.qty.update((qty) => ({ ...qty, [id]: qty[id] + 1 }));
  }

  decrement(id: FlavorId): void {
    if (this.qty()[id] <= 0) {
      return;
    }
    this.qty.update((qty) => ({ ...qty, [id]: qty[id] - 1 }));
  }

  setFlavor(id: FlavorId, value: string): void {
    const requested = Math.max(0, Math.min(Number(value) || 0, this.size()));
    const others = this.totalCans() - this.qty()[id];
    const safe = Math.min(requested, this.size() - others);
    this.qty.update((qty) => ({ ...qty, [id]: safe }));
  }

  add(): void {
    if (!this.complete()) {
      return;
    }
    const qty = this.qty();
    this.cart.add(
      {
        size: this.size(),
        mode: this.size() === 24 ? this.mode() : 'single',
        qty: { ...qty },
        unitPrice: this.unitPrice(),
      },
      1,
    );
    this.ui.notify(`Pack de ${this.size()} latas añadido al carrito.`);
    this.close();
    this.ui.openCart();
  }

  close(): void {
    this.ui.closePack();
  }

  private balancedFor(size: PackSize, flavor: FlavorId | null = null): Qty {
    if (flavor) {
      const qty: Qty = { flama: 0, mentisimo: 0, cocus: 0 };
      qty[flavor] = size;
      return qty;
    }
    const per = size / 3;
    return { flama: per, mentisimo: per, cocus: per };
  }
}
