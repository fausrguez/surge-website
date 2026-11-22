import { Component, inject } from '@angular/core';
import { UiService } from '../../core/ui.service';

@Component({
  selector: 'app-toast',
  template: `
    @if (ui.toast()) {
      <div class="toast" role="status" aria-live="polite">
        <span>{{ ui.toast() }}</span>
        <button type="button" (click)="ui.dismissToast()" aria-label="Cerrar aviso">×</button>
      </div>
    }
  `,
  styles: `
    .toast {
      position: fixed;
      left: 50%;
      bottom: 24px;
      z-index: 120;
      display: flex;
      align-items: center;
      gap: 12px;
      max-width: calc(100vw - 32px);
      padding: 12px 16px;
      border-radius: 12px;
      background: #2a2118;
      color: #fefae0;
      box-shadow: 0 14px 34px rgba(42, 33, 24, 0.28);
      transform: translateX(-50%);
      animation: toast-in 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
      font-size: 0.86rem;
    }

    .toast button {
      border: 0;
      background: transparent;
      color: #fefae0;
      font-size: 1.1rem;
      line-height: 1;
      opacity: 0.7;
    }

    @keyframes toast-in {
      from {
        opacity: 0;
        transform: translate(-50%, 10px);
      }
      to {
        opacity: 1;
        transform: translate(-50%, 0);
      }
    }
  `,
})
export class Toast {
  readonly ui = inject(UiService);
}
