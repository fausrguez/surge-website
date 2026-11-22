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
- Los assets vienen de `../surge/assets`, renombrados y optimizados a WebP/GLB.

## Pendientes

1. Sustituir `inicial.webp`, `lata-flama.webp` y `lata-cocus.webp` por versiones con la etiqueta correcta.
2. Confirmar el email `hola@surge.es`.
3. Conectar el formulario a un servicio real.
4. Publicar puntos de venta reales para el mapa.
5. Confirmar fecha y acuerdo de Bestial Race 2027.
6. Revisar legalmente privacidad, cookies y aviso legal.

## Despliegue

Vercel, proyecto `surge-website`, conectado a `github.com/fausrguez/surge-website`. Cada push a `main` actualiza producción.
