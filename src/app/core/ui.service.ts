import { Injectable, signal } from '@angular/core';
import { FlavorId, PackMode, PackSize } from './content';

interface PackOptions {
  mode?: PackMode;
  flavor?: FlavorId;
}

@Injectable({ providedIn: 'root' })
export class UiService {
  readonly packOpen = signal(false);
  readonly packInitialSize = signal<PackSize>(12);
  readonly packInitialMode = signal<PackMode>('sub');
  readonly packInitialFlavor = signal<FlavorId | null>(null);
  readonly subscriptionOpen = signal(false);
  readonly cartOpen = signal(false);
  readonly mobileMenuOpen = signal(false);
  readonly toast = signal<string | null>(null);

  private toastTimer: ReturnType<typeof setTimeout> | null = null;
  private lastTrigger: HTMLElement | null = null;

  openPack(size: PackSize = 12, options: PackOptions = {}): void {
    this.rememberTrigger();
    this.packInitialSize.set(size);
    this.packInitialMode.set(options.mode ?? 'sub');
    this.packInitialFlavor.set(options.flavor ?? null);
    this.packOpen.set(true);
    this.subscriptionOpen.set(false);
    this.mobileMenuOpen.set(false);
  }

  closePack(): void {
    this.packOpen.set(false);
    this.restoreTrigger();
  }

  openSubscription(): void {
    this.rememberTrigger();
    this.subscriptionOpen.set(true);
    this.packOpen.set(false);
  }

  closeSubscription(): void {
    this.subscriptionOpen.set(false);
    this.restoreTrigger();
  }

  openCart(): void {
    this.rememberTrigger();
    this.cartOpen.set(true);
    this.mobileMenuOpen.set(false);
  }

  closeCart(): void {
    this.cartOpen.set(false);
    this.restoreTrigger();
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

  private rememberTrigger(): void {
    if (typeof document === 'undefined') {
      return;
    }
    const active = document.activeElement;
    if (active instanceof HTMLElement && !active.closest('.modal, .drawer')) {
      this.lastTrigger = active;
    }
  }

  private restoreTrigger(): void {
    if (typeof document === 'undefined' || !this.lastTrigger) {
      return;
    }
    const trigger = this.lastTrigger;
    this.lastTrigger = null;
    queueMicrotask(() => {
      if (trigger.offsetParent !== null) {
        trigger.focus();
        return;
      }
      document.querySelector<HTMLElement>('.header__burger, .header__marca')?.focus();
    });
  }
}
