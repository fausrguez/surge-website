import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-no-encontrada',
  imports: [RouterLink],
  templateUrl: './no-encontrada.html',
  styleUrl: './no-encontrada.scss',
})
export class NoEncontrada {
  constructor() {
    inject(SeoService).setPage({
      title: 'Página no encontrada · SURGE',
      description:
        'La página que buscas no existe. Vuelve a la home de SURGE o consulta dónde comprar.',
      path: '/404',
    });
  }
}
