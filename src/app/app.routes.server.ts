import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'bestial-race', renderMode: RenderMode.Prerender },
  { path: 'sobre-nosotros', renderMode: RenderMode.Prerender },
  { path: 'donde-comprar', renderMode: RenderMode.Prerender },
  { path: 'legal/privacidad', renderMode: RenderMode.Prerender },
  { path: 'legal/aviso-legal', renderMode: RenderMode.Prerender },
  { path: 'legal/cookies', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Prerender },
];
