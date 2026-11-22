import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-banner',
  imports: [RouterLink],
  templateUrl: './cookie-banner.html',
  styleUrl: './cookie-banner.scss',
})
export class CookieBanner {
  readonly visible = signal(false);

  constructor() {
    if (typeof window !== 'undefined' && !window.localStorage.getItem('surge_cookies_v1')) {
      setTimeout(() => this.visible.set(true), 900);
    }
  }

  decide(value: 'all' | 'necessary'): void {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('surge_cookies_v1', value);
      window.dispatchEvent(new CustomEvent('surge:consent'));
    }
    this.visible.set(false);
  }
}
