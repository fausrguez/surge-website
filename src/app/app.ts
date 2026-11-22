import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BestialPromo } from './layout/bestial-promo/bestial-promo';
import { CartDrawer } from './layout/cart-drawer/cart-drawer';
import { CookieBanner } from './layout/cookie-banner/cookie-banner';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { PackModal } from './layout/pack-modal/pack-modal';
import { SubscriptionModal } from './layout/subscription-modal/subscription-modal';
import { Toast } from './layout/toast/toast';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    CartDrawer,
    PackModal,
    SubscriptionModal,
    BestialPromo,
    CookieBanner,
    Toast,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
