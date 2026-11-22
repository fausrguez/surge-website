# SURGE website

Proyecto Angular 21 del sitio de SURGE. La especificación funcional vive en `configuracion-agente/`.

## Antes de tocar código

1. Lee `diseño.md` (guía visual y de copy).
2. Lee `configuracion-agente/AGENTS.md` (rutas y requisitos).
3. Lee `configuracion-agente/tech.md`.
4. Para copy y datos de producto, la fuente es `../surge/` (branding, producto, precio).

## Reglas que no se rompen

- Todo el contenido en español.
- Un solo H1 por página.
- No inventar tiendas, premios, certificaciones, teléfonos, direcciones ni testimonios.
- No usar «hecho en Canarias», «producto canario», «sostenible», «eco» ni «100 % natural».
- El aviso de cafeína aparece en el footer.
- Precios vigentes: los de `configuracion-agente/estructura/diseña-tu-pack.md`.
- El checkout es una demo: no pedir datos de tarjeta.

## Comandos

```bash
npm install --legacy-peer-deps
npm start
npm run build
```

## Deploy

Vercel, proyecto `surge-website`, conectado a `github.com/fausrguez/surge-website`. Producción desde `main`.
