import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FLAVORS,
  INSTAGRAM_POSTS,
  PACKS,
  PackSize,
  SOCIALS,
  formatPrice,
} from '../../core/content';
import { SeoService } from '../../core/seo.service';
import { UiService } from '../../core/ui.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home implements AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly platformId = inject(PLATFORM_ID);
  readonly ui = inject(UiService);

  private swayTimer: ReturnType<typeof setInterval> | null = null;

  readonly flavors = FLAVORS;
  readonly packs = PACKS;
  readonly sizes: PackSize[] = [6, 12, 24];
  readonly posts = INSTAGRAM_POSTS;
  readonly socials = SOCIALS;
  readonly formatPrice = formatPrice;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      void import('@google/model-viewer');
    }

    this.seo.setPage({
      title: 'SURGE — Energy from the earth',
      description:
        'Bebida energética natural nacida en Canarias. Flama, Mentisimo y Cocus: ingredientes reales, cafeína de té y guaraná. + Natural − Agresivo.',
      path: '/',
    });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const models = Array.from(
      document.querySelectorAll<HTMLElement>('.hero__escena model-viewer'),
    );
    if (models.length === 0) {
      return;
    }
    const start = performance.now();
    this.swayTimer = setInterval(() => {
      const seconds = (performance.now() - start) / 1000;
      const azimuth = 40 + Math.sin(seconds * 0.55) * 4;
      for (const model of models) {
        model.setAttribute('camera-orbit', `${azimuth.toFixed(2)}deg 75deg 1m`);
      }
    }, 60);
  }

  ngOnDestroy(): void {
    if (this.swayTimer) {
      clearInterval(this.swayTimer);
    }
  }

  go(id: string): void {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  }

  choosePack(size: PackSize): void {
    this.ui.openPack(size);
  }

}
