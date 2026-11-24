import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'bestial-race',
    loadComponent: () => import('./pages/bestial-race/bestial-race').then((m) => m.BestialRace),
  },
  {
    path: 'sobre-nosotros',
    loadComponent: () =>
      import('./pages/sobre-nosotros/sobre-nosotros').then((m) => m.SobreNosotros),
  },
  {
    path: 'donde-comprar',
    loadComponent: () => import('./pages/donde-comprar/donde-comprar').then((m) => m.DondeComprar),
  },
  {
    path: 'legal/privacidad',
    loadComponent: () => import('./pages/legal/legal').then((m) => m.Legal),
    data: { slug: 'privacidad' },
  },
  {
    path: 'legal/aviso-legal',
    loadComponent: () => import('./pages/legal/legal').then((m) => m.Legal),
    data: { slug: 'aviso-legal' },
  },
  {
    path: 'legal/cookies',
    loadComponent: () => import('./pages/legal/legal').then((m) => m.Legal),
    data: { slug: 'cookies' },
  },
  {
    path: '**',
    loadComponent: () => import('./pages/no-encontrada/no-encontrada').then((m) => m.NoEncontrada),
  },
];
