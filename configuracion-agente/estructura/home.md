# Home Requirements

Home se compone de cinco bloques y un aviso flotante:

1. Hero.
2. Presentación de sabores: Flama, Mentisimo y Cocus.
3. Suscripciones y packs.
4. Feed de Instagram.
5. Cierre con CTA.
6. Aviso flotante de Bestial Race (solo en la zona del hero; se oculta al hacer scroll).

El scroll es suave entre bloques. En escritorio se usa `scroll-snap` con `proximity` para no atrapar al usuario.

## Hero

### Requisitos
- `(modelos3d)`: tres modelos 3D de las latas. Al hacer clic en un modelo, la página baja a la sección de ese sabor.
- `(lema)`: `+ Natural − Agresivo`.
- `(cta text)`: copy que incentive el CTA, sin claims de salud.
- `(cta)`: dos botones, `Crea tu pack` (abre el modal de packs) y `Dónde comprar` (lleva a `/donde-comprar`).

### Diseño
- Grupo 3D a la izquierda de la composición. **Flama en el centro y delante**; Mentisimo detrás a la izquierda, inclinado hacia la izquierda; Cocus detrás a la derecha, inclinado hacia la derecha.
- Los tres tienen entrada con fade y una flotación suave con ligera rotación de vaivén. Sin giro completo.
- El lema va en dos líneas: `+ Natural` en verde y `− Agresivo` en tierra.
- En móvil, el texto va primero y el grupo 3D después. Los modelos se reducen para que no se corten.

## Presentación de sabores

### Requisitos
- `(modelo3d)`: modelo correspondiente a la bebida.
- `(lema-bebida)`: texto propio de cada sabor.
- `(ingredientes)`: ingredientes principales en una línea.
- `(cta)`: `Crea tu pack` y `Dónde comprar`.
- `(flavor-overlay)`: ilustración botánica de línea en el fondo. No hay recortes reales de frutas en el repositorio, así que no se usan fotos de frutas.

### Diseño
- Colores correspondientes de la bebida.
- Modelo a la izquierda, texto a la derecha, en las tres secciones.
- Fondo con tinte del sabor y patrón de línea (llamas, hojas o cristales).
- Botones con el color verde de marca; el acento del sabor se usa en títulos y detalles.

## Suscripciones y packs

- Tres tarjetas con los precios vigentes: Starter 6 latas 12,90 €; Equilibrio 12 latas 24,90 €; Rutina 24 latas 49,90 €/mes en suscripción o 59,90 € en compra única.
- El botón de cada tarjeta abre el modal de packs con ese tamaño preseleccionado.
- En Rutina, un enlace secundario abre el modal de suscripción con la explicación.
- Envío 4,00 €, gratis desde 39,95 €. Precios con IGIC incluido.
- La caja se muestra con `caja-pack.webp` y el texto de envase responsable.

## Feed de Instagram

- A la izquierda, una selección estática de publicaciones con enlace al perfil.
- A la derecha, una tarjeta de perfil con el logo, `@surge.es`, una descripción breve y el enlace a Instagram y Linktree.
- No se usa API de Instagram ni cookies de terceros. Las imágenes son locales.
- Para evitar mostrar etiquetas erróneas, las publicaciones de producto usan renders de los modelos 3D (`modelo-flama.webp`, `modelo-mentisimo.webp`, `modelo-cocus.webp`), no los JPG antiguos.

## Aviso de Bestial Race

- Tarjeta compacta en la esquina inferior izquierda.
- Solo aparece mientras el usuario está en la zona del hero. Al hacer scroll, se oculta.
- Se puede cerrar; la decisión se guarda en `localStorage`.
- Enlace a `/bestial-race`.
- No se muestra en `/bestial-race`.
- Espera a que el usuario acepte el aviso de cookies para no taparlo.
