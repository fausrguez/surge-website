import { Injectable, signal } from '@angular/core';
import { PackSize } from './content';

@Injectable({ providedIn: 'root' })
export class UiService {
  readonly packOpen = signal(false);
  readonly packInitialSize = signal<PackSize>(12);
  readonly subscriptionOpen = signal(false);
  readonly cartOpen = signal(false);
  readonly mobileMenuOpen = signal(false);
  readonly toast = signal<string | null>(null);

  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  openPack(size: PackSize = 12): void {
    this.packInitialSize.set(size);
    this.packOpen.set(true);
    this.subscriptionOpen.set(false);
    this.mobileMenuOpen.set(false);
  }

  closePack(): void {
    this.packOpen.set(false);
  }

  openSubscription(): void {
    this.subscriptionOpen.set(true);
    this.packOpen.set(false);
  }

  closeSubscription(): void {
    this.subscriptionOpen.set(false);
  }

  openCart(): void {
    this.cartOpen.set(true);
    this.mobileMenuOpen.set(false);
  }

  closeCart(): void {
    this.cartOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  notify(message: string): void {
    this.toast.set(message);
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }
    this.toastTimer = setTimeout(() => this.toast.set(null), 3600);
  }

  dismissToast(): void {
    this.toast.set(null);
  }
}
