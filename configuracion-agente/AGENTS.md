# Config

## Tech

Lee tech.md sobre los requisitos técnicos de la página.

## Estructura

Lee estructura/core.md sobre la configuración general de la página.

La web se compone de 4 subpáginas, un modal de packs, un modal de suscripción y las páginas legales.

### Rutas

- `/`: lee `estructura/home.md`
- `/bestial-race`: lee `estructura/bestial-race.md`
- `/sobre-nosotros`: lee `estructura/sobre-nosotros.md`
- `/donde-comprar`: lee `estructura/donde-comprar.md`
- Modal de packs: lee `estructura/diseña-tu-pack.md`
- Modal de suscripción: contenido en `estructura/home.md` y `diseña-tu-pack.md`
- Legal: `/legal/privacidad`, `/legal/aviso-legal`, `/legal/cookies`

`Packs` es el prompt histórico de la página de packs. La versión vigente para la web es `estructura/diseña-tu-pack.md`.

### Precios

Manda la tabla de `estructura/diseña-tu-pack.md`: 6 latas 12,90 €, 12 latas 24,90 €, 24 latas 49,90 € suscripción / 59,90 € compra única. Envío 4,00 €, gratis desde 39,95 €.

### Copy

- Lema del hero: `+ Natural - Agresivo`.
- No usar «Hecho en Canarias». Usar «Marca canaria» o «Desde Canarias».
- Email provisional: `hola@surge.es`.

## Deploy

Haz deploy en la cuenta de Vercel de `fausrguez` y deja el proyecto conectado a `github.com/fausrguez/surge-website` para que cada push a `main` actualice producción.
