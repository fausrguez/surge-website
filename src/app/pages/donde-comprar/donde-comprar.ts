import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_EMAIL } from '../../core/content';
import { SeoService } from '../../core/seo.service';
import { UiService } from '../../core/ui.service';
import { Reveal } from '../../shared/reveal/reveal';
import { MapPoint, StoreMap } from '../../shared/store-map';

interface StorePoint extends MapPoint {
  type: string;
  hours: string;
  phone?: string;
  phoneHref?: string;
  web?: string;
  maps: string;
  note: string;
  logo: string;
  logoOscuro?: boolean;
}

@Component({
  selector: 'app-donde-comprar',
  imports: [RouterLink, StoreMap, Reveal],
  templateUrl: './donde-comprar.html',
  styleUrl: './donde-comprar.scss',
})
export class DondeComprar {
  private readonly seo = inject(SeoService);
  readonly ui = inject(UiService);
  readonly email = CONTACT_EMAIL;

  readonly points: StorePoint[] = [
    {
      name: 'Decathlon Tamaraceite',
      kind: 'tienda',
      type: 'Retail deportivo',
      address: 'C.C. Tamaraceite, Tamaraceite Sur, 35018 Las Palmas de Gran Canaria',
      hours: 'Lunes a sábado, 10:00–21:30. Domingo cerrado.',
      phone: '928 91 70 60',
      phoneHref: 'tel:+34928917060',
      web: 'https://www.decathlon.es/es/store-view/tienda-de-deportes-tamaraceite-0070139201392',
      maps: 'https://www.google.com/maps?q=Decathlon+C.C.+Tamaraceite%2C+Tamaraceite+Sur%2C+Las+Palmas+de+Gran+Canaria+35018',
      lat: 28.0949353,
      lng: -15.4729401,
      note: 'Recogida en tienda en 1 hora. Pregunta por SURGE en el lineal o en la nevera.',
      logo: 'assets/tiendas/decathlon.svg',
    },
    {
      name: 'CD Tamaraceite',
      kind: 'gimnasio',
      type: 'Centro deportivo',
      address: 'C/ José Antonio Gutiérrez Mellado esq. Juan Pulido Rodríguez s/n, 35018',
      hours: 'Consultar horario en la web del centro.',
      phone: '928 916 811',
      phoneHref: 'tel:+34928916811',
      web: 'https://cdtamaraceite.com/',
      maps: 'https://www.google.com/maps?q=CD+Tamaraceite+Las+Palmas+de+Gran+Canaria',
      lat: 28.1006654,
      lng: -15.4761532,
      note: 'Centro deportivo de Tamaraceite.',
      logo: 'assets/tiendas/cd-tamaraceite.webp',
    },
    {
      name: 'GOfit Las Palmas',
      kind: 'gimnasio',
      type: 'Gimnasio · Las Canteras',
      address: 'C/ Secretario Padilla, 88-90, 35010 Las Palmas de Gran Canaria',
      hours: 'L–V 6:00–23:00 · S 8:00–22:00 · D 8:00–18:00.',
      web: 'https://go-fit.es/centros/go-fit-las-palmas/',
      maps: 'https://www.google.com/maps?q=GOfit+Las+Palmas+Calle+Secretario+Padilla+88',
      lat: 28.132466,
      lng: -15.4422878,
      note: 'Gimnasio y piscina en Guanarteme, junto a Las Canteras.',
      logo: 'assets/tiendas/gofit.svg',
    },
    {
      name: 'Areafit Las Palmas',
      kind: 'gimnasio',
      type: 'Centro deportivo',
      address: 'C/ Henry Dunant, 1, C.C. Las Escaleritas, 35011',
      hours: 'Abierto 365 días. Consultar horario.',
      web: 'https://www.areafit.es/gimnasio-en-las-palmas-clases-fitness-ludoteca-musculaci%C3%B3n-entrena-en-familia-clases-para-ni%C3%B1os',
      maps: 'https://www.google.com/maps?q=Areafit+Las+Palmas+Calle+Henry+Dunant+1',
      lat: 28.1122677,
      lng: -15.4361753,
      note: 'Centro deportivo en Las Escaleritas.',
      logo: 'assets/tiendas/areafit.webp',
      logoOscuro: true,
    },
    {
      name: 'Beats Las Palmas',
      kind: 'gimnasio',
      type: 'Gimnasio',
      address: 'Av. Escaleritas, 31, 35014 Las Palmas de Gran Canaria',
      hours: 'L–V 6:00–22:30 · S 9:00–21:00 · D 9:00–15:00.',
      phone: '722 340 493',
      phoneHref: 'tel:+34722340493',
      web: 'https://beatsfitness.es/centros/beats-las-palmas/',
      maps: 'https://www.google.com/maps?q=Beats+Las+Palmas+Avenida+Escaleritas+31',
      lat: 28.10236,
      lng: -15.4449527,
      note: 'Gimnasio en Escaleritas.',
      logo: 'assets/tiendas/beats.webp',
    },
    {
      name: 'Macro Fit Las Palmas',
      kind: 'gimnasio',
      type: 'Gimnasio · Juan XXIII',
      address: 'Av. Juan XXIII, 3, 35004 Las Palmas de Gran Canaria',
      hours: 'Consultar horario.',
      maps: 'https://www.google.com/maps?q=Macro+Fit+Las+Palmas+Juan+XXIII+3',
      lat: 28.1192029,
      lng: -15.425962,
      note: 'Gimnasio en Ciudad Jardín.',
      logo: 'assets/tiendas/macrofit.webp',
    },
  ];

  constructor() {
    this.seo.setPage({
      title: 'Dónde comprar · SURGE — Energy from the earth',
      description:
        'Compra bebida energética natural SURGE online y en puntos de Canarias. Packs de 6, 12 y 24 latas, suscripción mensual y envío gratis desde 39,95 €.',
      path: '/donde-comprar',
    });
  }

  openPacks(): void {
    this.ui.openPack(6);
  }
}
