import { computed, Injectable, signal } from '@angular/core';
import { PackMode, PackSize, PACKS, SHIPPING } from './content';

export interface CartLine {
  id: string;
  size: PackSize;
  mode: PackMode;
  qty: Record<'flama' | 'mentisimo' | 'cocus', number>;
  unitPrice: number;
  quantity: number;
}

const STORAGE_KEY = 'surge_cart_v1';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _lines = signal<CartLine[]>(this.restore());

  readonly lines = this._lines.asReadonly();

  readonly count = computed(() =>
    this._lines().reduce((total, line) => total + line.quantity, 0),
  );

  readonly subtotal = computed(() =>
    this._lines().reduce((total, line) => total + line.unitPrice * line.quantity, 0),
  );

  readonly shipping = computed(() =>
    this.subtotal() >= SHIPPING.freeFrom || this.subtotal() === 0 ? 0 : SHIPPING.cost,
  );

  readonly total = computed(() => this.subtotal() + this.shipping());

  readonly missingForFreeShipping = computed(() =>
    Math.max(0, SHIPPING.freeFrom - this.subtotal()),
  );

  add(input: Omit<CartLine, 'id' | 'quantity'>, quantity = 1): void {
    const id = this.idFor(input.size, input.mode, input.qty);
    const current = this._lines();
    const existing = current.find((line) => line.id === id);
    const next = existing
      ? current.map((line) =>
          line.id === id ? { ...line, quantity: line.quantity + quantity } : line,
        )
      : [...current, { ...input, id, quantity }];
    this.commit(next);
  }

  setQuantity(id: string, quantity: number): void {
    const safe = Math.min(99, Math.max(1, Math.round(quantity)));
    this.commit(
      this._lines().map((line) => (line.id === id ? { ...line, quantity: safe } : line)),
    );
  }

  remove(id: string): void {
    this.commit(this._lines().filter((line) => line.id !== id));
  }

  clear(): void {
    this.commit([]);
  }

  priceFor(size: PackSize, mode: PackMode): number {
    const pack = PACKS[size];
    if (mode === 'single' && pack.singlePrice) {
      return pack.singlePrice;
    }
    return pack.price;
  }

  private idFor(
    size: PackSize,
    mode: PackMode,
    qty: Record<'flama' | 'mentisimo' | 'cocus', number>,
  ): string {
    return `${size}-${mode}-${qty.flama}-${qty.mentisimo}-${qty.cocus}`;
  }

  private commit(lines: CartLine[]): void {
    this._lines.set(lines);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
      } catch {
        // Sin almacenamiento: la compra sigue funcionando en memoria.
      }
    }
  }

  private restore(): CartLine[] {
    if (typeof window === 'undefined') {
      return [];
    }
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return [];
      }
      const parsed: unknown = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as CartLine[]) : [];
    } catch {
      return [];
    }
  }
}
