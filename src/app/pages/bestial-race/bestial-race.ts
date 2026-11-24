import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_EMAIL } from '../../core/content';
import { SeoService } from '../../core/seo.service';
import { UiService } from '../../core/ui.service';
import { Reveal } from '../../shared/reveal/reveal';

interface Influencer {
  name: string;
  handle: string;
  image: string;
}

interface Team {
  name: string;
  color: string;
  tint: string;
  symbol: 'flama' | 'mentisimo' | 'cocus';
  symbolLabel: string;
  concepts: string;
  influencers: Influencer[];
  phrase: string;
  shirt: string;
  canImage: string;
  patternImage: string;
}

interface LightboxImage {
  src: string;
  alt: string;
  caption: string;
}

@Component({
  selector: 'app-bestial-race',
  imports: [RouterLink, Reveal],
  templateUrl: './bestial-race.html',
  styleUrl: './bestial-race.scss',
})
export class BestialRace {
  private readonly seo = inject(SeoService);
  readonly ui = inject(UiService);
  readonly email = CONTACT_EMAIL;
  readonly avisoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    'Avísame de la Bestial Race',
  )}`;

  readonly lightbox = signal<LightboxImage | null>(null);

  readonly teams: Team[] = [
    {
      name: 'Team Flama',
      color: '#B23A2B',
      tint: '#F6E1DB',
      symbol: 'flama',
      symbolLabel: 'Llamas',
      concepts: 'Energía, fuerza y velocidad.',
      influencers: [
        {
          name: 'Armide Soliveres',
          handle: '@armidesoliveres1',
          image: 'assets/influencers/armidesoliveres1.webp',
        },
        { name: 'Anixua Perera', handle: '@anixuapd', image: 'assets/influencers/anixuapd.webp' },
        { name: 'Lola Ortiz', handle: '@lolita_ol', image: 'assets/influencers/lolita_ol.webp' },
      ],
      phrase: 'Enciende tu instinto',
      shirt: 'Camiseta roja con llamas, identidad SURGE y nombre del equipo.',
      canImage: 'assets/img/lata3d-flama.webp',
      patternImage: 'assets/patterns/patron-flama.webp',
    },
    {
      name: 'Team Mentisimo',
      color: '#2D6A4F',
      tint: '#E4F1E9',
      symbol: 'mentisimo',
      symbolLabel: 'Hoja de menta',
      concepts: 'Resistencia, equilibrio y frescura.',
      influencers: [
        { name: 'Iraida Martín', handle: '@iraida_33', image: 'assets/influencers/iraida_33.webp' },
        {
          name: 'Pablo Vera',
          handle: '@pabloverarr',
          image: 'assets/influencers/pabloverarr.webp',
        },
        { name: 'Gazz', handle: '@gaziello', image: 'assets/influencers/gaziello.webp' },
      ],
      phrase: 'Encuentra tu ritmo',
      shirt: 'Camiseta verde con hojas, identidad SURGE y nombre del equipo.',
      canImage: 'assets/img/lata3d-mentisimo.webp',
      patternImage: 'assets/patterns/patron-mentisimo.webp',
    },
    {
      name: 'Team Cocus',
      color: '#1F4E5F',
      tint: '#E2EFF4',
      symbol: 'cocus',
      symbolLabel: 'Cristal de hielo',
      concepts: 'Frescura, agilidad y resistencia.',
      influencers: [
        {
          name: 'Zulay Marrero',
          handle: '@zulay_marrero',
          image: 'assets/influencers/zulay_marrero.webp',
        },
        {
          name: 'El Morito Canario',
          handle: '@elmoritocanario',
          image: 'assets/influencers/elmoritocanario.webp',
        },
        {
          name: 'Tania Pyetku',
          handle: '@taniapyetku',
          image: 'assets/influencers/taniapyetku.webp',
        },
      ],
      phrase: 'Mantente imparable',
      shirt: 'Camiseta azul con ilustraciones de hielo, identidad SURGE y nombre del equipo.',
      canImage: 'assets/img/lata3d-cocus.webp',
      patternImage: 'assets/patterns/patron-cocus.webp',
    },
  ];

  readonly steps = [
    'Descubre los tres equipos.',
    'Elige el equipo con el que te identificas.',
    'Lleva la camiseta de sus colores.',
    'Participa en la experiencia y los retos de SURGE alrededor de la carrera.',
    'Comparte tus momentos y anima a tu equipo.',
  ];

  readonly activations = [
    {
      title: 'Punto de encuentro SURGE',
      text: 'Los tres colores, las latas y el merchandising en un mismo espacio.',
    },
    {
      title: 'Zona de fotografías',
      text: 'Un fondo tematizado para compartir contenido en redes.',
    },
    {
      title: 'Reto para conseguir merchandising',
      text: 'Un juego para acercar la campaña a quien se anime a participar.',
    },
    {
      title: 'Reto entre los tres equipos',
      text: 'Una dinámica simbólica para enfrentar a Flama, Mentisimo y Cocus.',
    },
    {
      title: 'Influencers y suscriptores',
      text: 'La comunidad y los perfiles invitados forman parte de la experiencia.',
    },
    {
      title: 'Gymkana after',
      text: 'Una actividad posterior planteada para cerrar la jornada.',
    },
  ];

  readonly calendar = [
    {
      month: 'Mayo',
      title: 'Pre-lanzamiento',
      items: [
        'Generar expectación.',
        'Presentar SURGE y sus productos.',
        'Contenido de lifestyle, nutrición, hábitos y retos saludables.',
        'Presentar a los influencers y los tres equipos.',
        'Activar conversación y comunidad.',
      ],
    },
    {
      month: 'Junio',
      title: 'Carrera',
      items: [
        '1–15: presentación de equipos y entrenamientos.',
        '16–22: cobertura y retos durante la carrera.',
        '23–30: resumen y agradecimiento.',
      ],
    },
    {
      month: 'Julio',
      title: 'Post-carrera',
      items: [
        '1–13: historias y experiencias.',
        '14–20: retos para la comunidad con #ViveSurge.',
        '21–27: cierre de campaña, impacto social y agradecimiento.',
      ],
    },
  ];

  readonly hashtags = ['#ViveSurge', '#SurgeLifestyle', '#Healthy'];

  constructor() {
    this.seo.setPage({
      title: 'SURGE en la Bestial Race | Elige tu equipo',
      description:
        'Descubre la experiencia SURGE en la Bestial Race: Team Flama, Team Mentisimo y Team Cocus. Tres equipos, merchandising y una misma pasión por el deporte.',
      path: '/bestial-race',
      image: 'assets/bestial-race/portada-bestial-race.webp',
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.lightbox()) {
      this.closeLightbox();
    }
  }

  openLightbox(src: string, alt: string, caption: string): void {
    this.lightbox.set({ src, alt, caption });
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox(): void {
    this.lightbox.set(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  openPacks(): void {
    this.ui.openPack(12);
  }
}
