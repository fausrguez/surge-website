import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  CAFFEINE_WARNING,
  FLAVORS,
  FlavorId,
  INSTAGRAM_POSTS,
  PACKS,
  PackMode,
  PackSize,
  SOCIALS,
  formatPrice,
} from '../../core/content';
import { SeoService } from '../../core/seo.service';
import { UiService } from '../../core/ui.service';
import { FlavorParticles } from '../../shared/flavor-particles/flavor-particles';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FlavorParticles, Reveal],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home implements AfterViewInit {
  private readonly seo = inject(SeoService);
  private readonly platformId = inject(PLATFORM_ID);
  readonly ui = inject(UiService);

  readonly flavors = FLAVORS;
  readonly packs = PACKS;
  readonly sizes: PackSize[] = [6, 12, 24];
  readonly posts = INSTAGRAM_POSTS;
  readonly socials = SOCIALS;
  readonly warning = CAFFEINE_WARNING;
  readonly formatPrice = formatPrice;
  readonly activeFlavor = signal<FlavorId>('flama');

  readonly faqs = [
    {
      question: '¿Qué es SURGE?',
      answer:
        'SURGE es una bebida energética natural con té y guaraná, nacida en Canarias. Se vende en latas de 330 ml en tres versiones: Flama, Mentisimo y Cocus.',
    },
    {
      question: '¿SURGE lleva azúcar añadido?',
      answer:
        'Flama y Cocus son dos latas de bebida energética sin azúcar añadido: solo llevan los azúcares naturalmente presentes del mango y del agua de coco. Mentisimo es sin azúcar: se queda por debajo de 0,5 g por 100 ml.',
    },
    {
      question: '¿Es una bebida energética vegana?',
      answer:
        'Sí. SURGE se elabora sin ingredientes de origen animal, así que las tres latas son una opción de bebida energética vegana.',
    },
    {
      question: '¿Sirve como bebida energética para deportistas?',
      answer:
        'SURGE acompaña el día y el deporte con cafeína de té y guaraná, sin cafeína aislada. Cada lata aporta entre 50 y 80 mg según el sabor: Flama es la más directa antes de entrenar, Mentisimo encaja en la rutina y Cocus va bien después del esfuerzo.',
    },
    {
      question: '¿Es una alternativa a Red Bull?',
      answer:
        'Si buscas alternativas a Red Bull, SURGE propone otra forma de energía: cafeína de té y guaraná en lugar de cafeína aislada, ingredientes reales y sin azúcar añadido. Cada lata tiene su momento.',
    },
    {
      question: '¿Cuál es la mejor bebida energética natural?',
      answer:
        'No hay una única respuesta. La mejor bebida energética natural es la que encaja con tu día: más cafeína si entrenas, menos si buscas una pausa. El pack de bebida energética de 6 latas permite probar los tres sabores y decidir cuál repites.',
    },
    {
      question: '¿Hay suscripción de bebida energética?',
      answer:
        'Sí. SURGE Club es la suscripción mensual de 24 latas, con reparto libre entre los tres sabores, envío incluido y posibilidad de pausar o cancelar cuando quieras.',
    },
    {
      question: '¿Dónde puedo comprar bebida energética natural?',
      answer:
        'Puedes comprar bebida energética natural SURGE online, en packs de 6, 12 y 24 latas, y en puntos seleccionados de Canarias como Decathlon Tamaraceite, en Las Palmas de Gran Canaria.',
    },
  ];

  constructor() {
    this.seo.setPage({
      title: 'SURGE — Energy from the earth',
      description:
        'Bebida energética natural con té y guaraná, nacida en Canarias. Flama, Mentisimo y Cocus, sin azúcar añadido. Compra tu pack de 6, 12 o 24 latas.',
      path: '/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: this.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const hash = window.location.hash.replace('#', '');
    if (hash === 'flama' || hash === 'mentisimo' || hash === 'cocus') {
      this.activeFlavor.set(hash);
    }

    const loadModelViewer = () => {
      void import('@google/model-viewer');
    };

    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(loadModelViewer, { timeout: 2500 });
    } else {
      setTimeout(loadModelViewer, 1200);
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

  choosePack(size: PackSize, option?: PackMode | FlavorId): void {
    if (option === 'sub' || option === 'single') {
      this.ui.openPack(size, { mode: option });
      return;
    }
    this.ui.openPack(size, option ? { flavor: option } : undefined);
  }
}
