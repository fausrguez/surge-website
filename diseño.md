# SURGE — Guía de diseño web

Guía única del sitio. Sale de `surge/branding.md`, `surge/analisis-interno/4ps/producto.md`, `surge-website/configuracion-agente/estructura/*` y del prompt original de packs. Si algo choca, manda esta guía para la web y se anota la discrepancia.

## 1. Idea de diseño

**Editorial botánico premium, no energética de neón.** Crema, verde bosque, menta y sol. Mucho aire, tipografía grande, esquinas suaves, sombras difusas y línea fina. La lata y los modelos 3D son el protagonista; la decoración no compite con el producto.

Tres palabras: **calma, potencia, honestidad**.

- Sí: herbario, papel, piedra clara, luz atlántica, ilustración de línea.
- No: rayos, neón, degradados morados, glassmorphism, gimnasio agresivo, stock de oficinas.

## 2. Paleta

### Marca

| Token | Hex | Uso |
|---|---|---|
| `--crema` | `#FEFAE0` | Fondo principal |
| `--superficie` | `#FFFDF5` | Tarjetas y superficies |
| `--tinta` | `#2A2118` | Texto principal |
| `--tierra` | `#3D2B1F` | Texto fuerte y bordes |
| `--verde` | `#2D6A4F` | Primario, foco, enlaces |
| `--lima` | `#B7E4C7` | Acentos suaves, fondos de tarjeta |
| `--sol` | `#F4D35E` | Acento, nunca texto pequeño sobre crema |
| `--secundario` | `#6B5B4B` | Texto secundario |
| `--linea` | `rgba(61,43,31,.14)` | Bordes de 1 px |

### Producto (solo acentos, no sustituyen a la marca)

| Sabor | Principal | Suave | Patrón |
|---|---|---|---|
| Flama | `#B23A2B` | `#F6E1DB` | Llamas |
| Mentisimo | `#2D6A4F` | `#E4F1E9` | Hojas de menta |
| Cocus | `#1F4E5F` | `#E2EFF4` | Cristales de hielo |

El rojo y el azul solo se usan como fondo de etiqueta o acento de sección. Nunca como color corporativo ni en el logotipo. El verde de Mentisimo sí es verde de marca.

Contraste: todo texto cumple AA. El sol `#F4D35E` no se usa para texto pequeño sobre crema; solo como fondo con tinta encima.

## 3. Tipografía

- Títulos: **Bricolage Grotesque** (Google Fonts), fallback `Georgia, serif`.
- Texto e interfaz: **DM Sans** (Google Fonts), fallback `system-ui, sans-serif`.
- Si las fuentes no cargan, la página debe verse bien con los fallbacks.

| Rol | Tamaño escritorio | Tamaño móvil | Peso |
|---|---|---|---|
| H1 | `clamp(2.6rem, 6vw, 5rem)` | 2,4–3 rem | 700 |
| H2 | `clamp(1.8rem, 3.4vw, 3rem)` | 1,7–2,2 rem | 650 |
| H3 | `1.35rem` | `1.2rem` | 600 |
| Cuerpo | `1.05rem` | `1rem` | 400 |
| Kicker | `0.75rem`, mayúsculas, tracking `.18em` | igual | 600 |
| Botón | `0.95rem` | `0.95rem` | 600 |

Reglas:

- Un solo H1 por página.
- H2 siempre menor que H1; H3 nunca se usa para títulos de sección.
- Cuerpo con máximo 68 caracteres por línea.
- Sentence case salvo kickers y etiquetas.

## 4. Espaciado, radios y sombras

- Escala: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128` px.
- Ancho máximo de contenido: `1240px`, padding lateral `clamp(20px, 4vw, 48px)`.
- Secciones: `clamp(72px, 10vw, 140px)` de aire vertical.
- Radios: `12px` (chips), `20px` (tarjetas), `24px` (modales), `999px` (píldoras).
- Sombras: `0 18px 40px rgba(61,43,31,.08)`; hover `0 22px 48px rgba(61,43,31,.12)`.
- Bordes: 1 px `--linea`. Nada de bordes duros ni cajas dentro de cajas.

## 5. Componentes

### Botones

- Primario: fondo `--verde`, texto crema, radio píldora, padding `14px 24px`.
- Secundario: fondo transparente, borde 1 px `--verde`, texto `--verde`.
- Terciario: texto con subrayado fino.
- Hover: oscurecer el fondo, no mover el layout. Foco: anillo `2px --verde` con offset `2px`.
- Altura mínima táctil 44 px.

### Tarjetas

- Fondo `--superficie`, borde 1 px, radio 20–24 px, sombra difusa.
- Hover: elevación 4 px y borde más visible. Sin sombras dramáticas.
- Línea superior de 4 px en el color del sabor cuando la tarjeta habla de un sabor.

### Header

- Sticky, fondo crema translúcido con blur suave y borde inferior de 1 px.
- Escritorio: logo a la izquierda; navegación y carrito a la derecha.
- Móvil: logo centrado, hamburguesa a la derecha, carrito a la izquierda.
- Enlace activo: verde y subrayado fino.

### Footer

- Fondo verde bosque, texto crema.
- Redes, email, localización `Las Palmas de Gran Canaria`, aviso de cafeína y copyright.
- Enlaces legales: privacidad, aviso legal, cookies.

### Formularios

- Fondo blanco crema, borde `--tierra` sutil, foco verde visible.
- Etiqueta visible siempre, nunca placeholder como etiqueta.
- Error junto al campo y resumen superior anunciado a lectores de pantalla.
- Sin `alert()`. Sin recargar la página.

### Chips

- Píldora con borde 1 px, fondo crema, texto `--secundario`.
- Usar para `330 ml`, `Vegano`, `Cartón FSC`, `Sin aditivos artificiales`.

### Modales

- `role="dialog"`, `aria-modal="true"`, foco atrapado, cierre con `Esc`.
- Fondo oscuro al 35 %, blur ligero.
- Escritorio centrado; móvil a pantalla completa.
- Bloquear scroll del documento solo mientras está abierto.

## 6. 3D

- `model-viewer` de Google.
- Tres modelos: `flama.glb`, `mentisimo.glb`, `cocus.glb`.
- En el hero: grupo a la izquierda, **Flama en el centro**, Mentisimo detrás a la izquierda inclinada, Cocus detrás a la derecha inclinada.
- Entrada con fade + flotación y rotación suave `back-and-forward`. Sin giro infinito rápido.
- Click en un modelo → scroll a la sección de ese sabor.
- `alt` descriptivo. Fallback a imagen `lata-*.webp` si el navegador no soporta 3D o el usuario prefiere movimiento reducido.
- En móvil, cargar los modelos con `loading="lazy"` y `reveal="interaction"`; si el rendimiento es malo, mostrar solo Flama y las otras dos como imagen.
- Peso máximo por modelo: 300 KB. Los actuales pesan ~250 KB.

## 7. Decoración botánica

No existen recortes reales de frutas en el repositorio (`SIN FONDO/` no está). Por tanto:

- Usar ilustración botánica en SVG de línea fina (hojas, ramas, cítricos estilizados) o prescindir de ella.
- No usar fotos de stock de frutas ni imágenes generadas que parezcan producto real.
- La capa decorativa va detrás del contenido, `pointer-events: none`, `aria-hidden="true"`.
- Nunca delante de texto, botones, logo, carrito o formulario.
- En móvil, como máximo una o dos piezas y opacidad baja.
- Parallax máximo ±48 px, solo vertical, desactivado con `prefers-reduced-motion`.

## 8. Movimiento

- Duraciones: 180–300 ms para interacción; 400 ms para revelado.
- Curva: `cubic-bezier(.2,.8,.2,1)`.
- Revelado al scroll: 12 px + fade.
- Sin confeti, sin sonidos, sin animaciones infinitas.
- Respetar `prefers-reduced-motion` en parallax, flotación y revelados.

## 9. Accesibilidad

- HTML semántico: `header`, `nav`, `main`, `section`, `footer`, `form`, `label`.
- Un H1 por página y jerarquía correcta.
- Foco visible en todos los controles.
- Contraste AA.
- Nada de información solo por color: añadir texto, icono o patrón.
- Formularios con etiqueta visible, autocompletado y errores asociados.
- Resumen de errores y confirmación anunciados con `aria-live`.
- Todo operable con teclado.
- Probar a 360, 390, 768, 1024 y 1440 px. Sin scroll horizontal.

## 10. Voz y copy

- Español de España, de tú, cercano y directo.
- Sin emojis. Sin adjetivos vacíos: «increíble», «revolucionario», «único».
- Rigor en datos, humor suave en el copy. Nunca al revés.
- Una idea por párrafo; máximo 4 líneas seguidas.
- Cifras con fuente o `[SUPUESTO]` en documentos internos; en la web solo cifras confirmadas.

### Permitido

- «Marca canaria», «desde Canarias», «nacida en Gran Canaria».
- «Ingredientes reales», «sin aditivos artificiales», «vegano».
- «Aluminio reciclable», «cartón FSC», «sin film».
- «Sin azúcar añadido; contiene azúcares naturalmente presentes» en Flama y Cocus.
- «Sin azúcar» en Mentisimo.
- Claim de alerta solo en Flama: «La cafeína contribuye a aumentar el estado de alerta y la atención.»

### Prohibido

- «Hecho en Canarias», «producto canario», «km 0», «sostenible», «eco», «cero residuo», «sin plástico» hasta verificarlo.
- «Sin rebote», «sin pico», «energía sostenida», «progresivo», «detox», «quema grasa», «cura», «100 % natural».
- «Somos líderes», «revolucionamos la industria», «sinergias», «disruptivos».
- Inventar premios, certificaciones, años, oficinas, teléfonos, inversores, testimonios o tiendas.
- Cambiar el texto exacto de la confirmación del formulario.

### Aviso obligatorio de cafeína

> Contenido elevado de cafeína. No recomendado para niños ni para mujeres embarazadas o en período de lactancia.

Debe aparecer en el footer y en las páginas donde se hable de cafeína.

## 11. Assets

Nombres limpios en `public/assets/`:

| Archivo | Origen | Estado |
|---|---|---|
| `logo.svg`, `logo.png` | `surge/assets/` | Correcto |
| `models/flama.glb` | `flama.gltf` | Correcto, 1024 px, ~245 KB |
| `models/mentisimo.glb` | `mentisimo.gltf` | Correcto, ~250 KB |
| `models/cocus.glb` | `cocus.gltf` | Correcto, ~254 KB |
| `img/inicial.webp` | `02-family-hero.jpg` | Flama con texto erróneo «Red v0zSszb»; sustituir |
| `img/lata-flama.webp` | `03-flama-pack.jpg` | Texto erróneo «Red #b23a2b»; sustituir |
| `img/lata-mentisimo.webp` | `04-mentisimo-pack.jpg` | Correcto |
| `img/lata-cocus.webp` | `05-cocus-pack.jpg` | Dice «Cortelus»; corregir etiqueta |
| `img/caja-pack.webp` | `06-variatiy-pack.jpg` | Revisar antes de publicar |
| `img/lifestyle.webp` | `07-lifestyle.jpg` | Revisar |
| `img/brand-board.webp` | `01-brand-board.jpg` | Solo referencia |
| `img/label-artwork.webp` | `09-label-artwork.jpg` | Solo referencia |
| `img/fondo-producto.webp` | `04-empty-background.jpg` | Fondo neutro |
| `img/modelo-flama.webp` | Render del GLB de Flama | Etiqueta correcta, para Instagram |
| `img/modelo-mentisimo.webp` | Render del GLB de Mentisimo | Etiqueta correcta, para Instagram |
| `img/modelo-cocus.webp` | Render del GLB de Cocus | Etiqueta correcta, para Instagram |
| `bestial-race/portada-bestial-race.webp` | `assets/bestial-race/portada-bestial-race.jpeg` | Hero de Bestial Race, 1536 px |
| `bestial-race/portada-bestial-race-768.webp` | Versión móvil de la portada | 768 px |
| `bestial-race/merchandising-bestial-race.webp` | `assets/bestial-race/merchandising-bestial-race.jpeg` | Lámina de merchandising, 1312 px |

- `08-pattern-board.jpg` está corrupto (2 bytes) y no se usa.
- Las imágenes definitivas deben sustituir a las actuales conservando el nombre.
- No usar `LATA_COCUS.jpg` como prueba de etiqueta: el nombre es «Cocus», no «Cortelus».
- Optimizar cualquier imagen nueva a WebP, máximo 1600 px de ancho.

## 12. Stack y arquitectura

- Angular 21, standalone, zoneless, SCSS.
- `model-viewer` como web component.
- Prerender estático para SEO (una carpeta por ruta).
- Sin dependencias de UI externas.
- Sin analítica ni cookies de terceros en la primera versión. Si se añade, banner de consentimiento real.
- Datos de packs, sabores y copy centralizados en `src/app/core/content.ts`.

## 13. SEO

- Idioma `es`.
- Títulos por ruta:
  - `/`: `SURGE — Energy from the earth`.
  - `/bestial-race`: `Bestial Race 2027 · SURGE — Energy from the earth`.
  - `/sobre-nosotros`: `Sobre nosotros · SURGE — Energy from the earth`.
  - `/donde-comprar`: `Dónde comprar · SURGE — Energy from the earth`.
- Meta description propia por ruta.
- Open Graph con `assets/og-image.jpg` (1200 × 630).
- JSON-LD `Organization` con nombre, descripción, `Gran Canaria, España`, Instagram y Linktree. Sin dirección ni teléfono inventados.
- `sitemap.xml` y `robots.txt`.
- URLs relativas y sin parámetros innecesarios.

## 14. Pendientes de contenido

1. Sustituir `inicial.webp`, `lata-flama.webp` y `lata-cocus.webp` por versiones con etiqueta correcta.
2. Confirmar email real (`hola@surge.es` es provisional).
3. Confirmar redes sociales además de Instagram y Linktree.
4. Conectar el formulario a un servicio real.
5. Publicar puntos de venta reales para el mapa.
6. Confirmar fecha y acuerdo de Bestial Race 2027.
7. Revisar legalmente textos de privacidad, cookies y aviso legal antes de publicar.
