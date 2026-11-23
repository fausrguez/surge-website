import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_EMAIL } from '../../core/content';
import { SeoService } from '../../core/seo.service';
import { UiService } from '../../core/ui.service';

interface Store {
  name: string;
  type: string;
  island: string;
  address: string;
  hours: string;
  phone: string;
  phoneHref: string;
  web: string;
  maps: string;
  note: string;
}

@Component({
  selector: 'app-donde-comprar',
  imports: [RouterLink],
  templateUrl: './donde-comprar.html',
  styleUrl: './donde-comprar.scss',
})
export class DondeComprar {
  private readonly seo = inject(SeoService);
  readonly ui = inject(UiService);
  readonly email = CONTACT_EMAIL;

  readonly stores: Store[] = [
    {
      name: 'Decathlon Tamaraceite',
      type: 'Retail deportivo',
      island: 'Gran Canaria',
      address: 'C.C. Tamaraceite, Tamaraceite Sur, 35018 Las Palmas de Gran Canaria',
      hours: 'Lunes a sábado, 10:00–21:30. Domingo cerrado.',
      phone: '928 91 70 60',
      phoneHref: 'tel:+34928917060',
      web: 'https://www.decathlon.es/es/store-view/tienda-de-deportes-tamaraceite-0070139201392',
      maps: 'https://www.google.com/maps?q=Decathlon+C.C.+Tamaraceite%2C+Tamaraceite+Sur%2C+Las+Palmas+de+Gran+Canaria+35018',
      note: 'Recogida en tienda en 1 hora. Pregunta por SURGE en el lineal o en la nevera.',
    },
  ];

  constructor() {
    this.seo.setPage({
      title: 'Dónde comprar · SURGE — Energy from the earth',
      description:
        'Compra SURGE online y en Decathlon Tamaraceite, Las Palmas de Gran Canaria. Packs de 6, 12 y 24 latas. Envío gratis desde 39,95 €.',
      path: '/donde-comprar',
    });
  }

  openPacks(): void {
    this.ui.openPack(6);
  }
}
