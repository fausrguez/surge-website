# SURGE — web

Sitio de SURGE, bebida energética natural nacida en Canarias. Angular 21, SCSS y `model-viewer`.

- Especificación funcional: `configuracion-agente/`.
- Guía visual y de copy: `diseño.md`.
- Fuente de producto y marca: `../surge/`.

## Desarrollo

```bash
npm install --legacy-peer-deps
npm start
```

Abre `http://localhost:4200/`.

## Build

```bash
npm run build
```

Genera HTML prerenderizado en `dist/surge-website/browser`. Cada ruta tiene su propio `index.html`, así que el SEO y las Open Graph funcionan sin servidor.

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | Home con hero 3D, sabores, packs e Instagram |
| `/bestial-race` | SURGE × Bestial Race 2027 |
| `/sobre-nosotros` | Origen, misión, visión, valores y contacto |
| `/donde-comprar` | Venta online, canales y mapa pendiente |
| `/legal/privacidad` | Política de privacidad |
| `/legal/aviso-legal` | Aviso legal |
| `/legal/cookies` | Política de cookies |

Modal de packs y modal de suscripción se abren desde cualquier CTA.

## Decisiones tomadas

- Precios: 6 latas 12,90 €, 12 latas 24,90 €, 24 latas 49,90 € suscripción / 59,90 € compra única. Envío 4,00 €, gratis desde 39,95 €.
- Lema del hero: `+ Natural − Agresivo`.
- No se usa «Hecho en Canarias»; sí «marca canaria».
- Checkout en modo demostración: no se piden datos de tarjeta.
- Instagram se muestra como selección estática de contenido, sin API ni cookies de terceros.
- Los fondos de los sabores usan el patrón oficial `08-pattern-board.png`, recortado en tres bandas.
- Dónde comprar usa un mapa real con Leaflet y OpenStreetMap, con Decathlon Tamaraceite y cinco gimnasios de Las Palmas.
- Bestial Race muestra avatares públicos de los influencers, sin enlaces ni biografías.
- Sobre nosotros incluye al equipo: Juan, Antonio, Carla, Marianna y Fausto.
- La suscripción se presenta como SURGE Club; la campaña usa #SurgeCanarias.
- El piloto que se comunica es de 3.000 latas, no las 6.000 de una diapositiva antigua de Canva.
- Los assets vienen de `../surge/assets`, renombrados y optimizados a WebP/GLB.

## Fuentes

- [Ficha de fuentes Canva/Miro](../surge/docs/fuentes-canva-miro.md).
- Canva: presentación de 60 diapositivas.
- Miro: tablero «SURGE: Más natural menos agresivo, Se equilibrado».
- Los datos de los tableros que no están confirmados se marcan como `[SUPUESTO]` en `../surge`.

## Pendientes

1. Sustituir `inicial.webp`, `lata-flama.webp` y `lata-cocus.webp` por versiones con la etiqueta correcta.
2. Confirmar el email `hola@surge.es`.
3. Conectar el formulario a un servicio real.
4. Ampliar el mapa con más puntos y confirmar disponibilidad de stock en cada uno.
5. Confirmar fecha y acuerdo de Bestial Race 2027.
6. Revisar legalmente privacidad, cookies y aviso legal.

## Despliegue

Producción: https://surge-website-plum.vercel.app

Vercel, proyecto `surge-website`. El repositorio `github.com/fausrguez/surge-website` está conectado mediante GitHub Actions (`.github/workflows/deploy.yml`): cada push a `main` lanza un deploy a producción con el token guardado en los secretos del repositorio.
