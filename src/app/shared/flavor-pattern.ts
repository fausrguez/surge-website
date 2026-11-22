import { Component, input } from '@angular/core';

@Component({
  selector: 'app-flavor-pattern',
  template: `
    <svg class="patron" viewBox="0 0 640 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern [attr.id]="'patron-' + kind()" width="128" height="128" patternUnits="userSpaceOnUse">
          @switch (kind()) {
            @case ('flames') {
              <path d="M26 100c8-12 4-22 10-32 3 9 11 13 10 23 6-5 7-14 4-22 14 8 19 24 11 35-6 9-19 13-28 8-6-3-10-8-7-12Z" />
              <path d="M74 54c5-8 2-15 6-21 2 6 7 9 6 15 4-3 5-9 3-14 9 5 12 15 7 22-4 6-12 8-18 5-4-2-6-5-4-7Z" />
            }
            @case ('leaves') {
              <path d="M28 96c0-26 18-44 44-44 0 26-18 44-44 44Z" />
              <path d="M28 96c10-18 24-32 42-42" />
              <path d="M78 52c0-16 11-27 27-27 0 16-11 27-27 27Z" />
              <path d="M78 52c6-11 15-20 26-26" />
            }
            @case ('crystals') {
              <path d="M64 20v48M64 68l-18 14M64 68l18 14M64 44l-12-10M64 44l12-10M46 82l-8 14M82 82l8 14" />
              <path d="M64 20l-6 10h12l-6-10ZM46 82l-2 16 10-8-8-8ZM82 82l2 16-10-8 8-8Z" />
            }
          }
        </pattern>
      </defs>
      <rect width="640" height="640" [attr.fill]="'url(#patron-' + kind() + ')'" />
    </svg>
  `,
  styles: `
    :host {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      overflow: hidden;
      color: currentColor;
      opacity: 0.16;
    }

    .patron {
      width: 100%;
      height: 100%;
    }

    path {
      fill: none;
      stroke: currentColor;
      stroke-width: 1.2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `,
})
export class FlavorPattern {
  readonly kind = input.required<'flames' | 'leaves' | 'crystals'>();
}
