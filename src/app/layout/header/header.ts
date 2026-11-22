import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../core/cart.service';
import { NAV_LINKS } from '../../core/content';
import { UiService } from '../../core/ui.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly cart = inject(CartService);
  readonly ui = inject(UiService);
  readonly links = NAV_LINKS;
}
