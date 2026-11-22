import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-bestial-promo',
  imports: [RouterLink],
  templateUrl: './bestial-promo.html',
  styleUrl: './bestial-promo.scss',
})
export class BestialPromo {
  private readonly router = inject(Router);
  readonly visible = signal(false);
  private readonly onBestialPage = signal(false);
  private dismissed = false;

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }
    this.onBestialPage.set(this.router.url.startsWith('/bestial-race'));
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.onBestialPage.set(this.router.url.startsWith('/bestial-race'));
        if (this.onBestialPage()) {
          this.visible.set(false);
        }
      });

    if (
      this.onBestialPage() ||
      window.localStorage.getItem('surge_bestial_promo') === 'off'
    ) {
      return;
    }

    if (window.localStorage.getItem('surge_cookies_v1')) {
      this.arm();
    } else {
      window.addEventListener('surge:consent', () => this.arm(), { once: true });
    }
  }

  dismiss(): void {
    this.dismissed = true;
    this.visible.set(false);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('surge_bestial_promo', 'off');
    }
  }

  private arm(): void {
    if (typeof window === 'undefined' || this.onBestialPage()) {
      return;
    }
    const update = () => {
      if (this.dismissed) {
        this.visible.set(false);
        return;
      }
      this.visible.set(window.scrollY < window.innerHeight * 1.05);
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }
}
