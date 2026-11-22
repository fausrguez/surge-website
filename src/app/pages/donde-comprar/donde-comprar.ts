import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_EMAIL, SOCIALS } from '../../core/content';
import { SeoService } from '../../core/seo.service';
import { UiService } from '../../core/ui.service';

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
  readonly socials = SOCIALS;

  constructor() {
    this.seo.setPage({
      title: 'Dónde comprar · SURGE — Energy from the earth',
      description:
        'Compra SURGE online y en puntos seleccionados de Canarias. Packs de 6, 12 y 24 latas. Envío gratis desde 39,95 €.',
      path: '/donde-comprar',
    });
  }

  openPacks(): void {
    this.ui.openPack(6);
  }
}
