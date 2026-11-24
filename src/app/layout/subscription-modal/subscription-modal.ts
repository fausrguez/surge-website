import { Component, ElementRef, HostListener, effect, inject, viewChild } from '@angular/core';
import { formatPrice } from '../../core/content';
import { FocusTrap } from '../../shared/focus-trap/focus-trap';
import { UiService } from '../../core/ui.service';

@Component({
  selector: 'app-subscription-modal',
  imports: [FocusTrap],
  templateUrl: './subscription-modal.html',
  styleUrl: './subscription-modal.scss',
})
export class SubscriptionModal {
  readonly ui = inject(UiService);
  readonly formatPrice = formatPrice;
  readonly price = 49.9;
  readonly singlePrice = 59.9;

  private readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');

  constructor() {
    effect(() => {
      if (this.ui.subscriptionOpen()) {
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
    if (this.ui.subscriptionOpen()) {
      this.close();
    }
  }

  start(): void {
    this.ui.openPack(24);
  }

  close(): void {
    this.ui.closeSubscription();
  }
}
