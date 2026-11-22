# Diseña tu pack (modal)

## Objetivo

Permitir que alguien monte su caja en menos de un minuto: elige tamaño, reparte sabores y añade el pack al carrito. El modal se abre desde cualquier CTA `Crea tu pack` y desde la sección de suscripciones.

No es una página independiente. Es un diálogo a pantalla completa en móvil y una ventana centrada en escritorio.

## Precios vigentes

Estos precios mandan sobre cualquier otra tabla del repositorio. Salen del prompt original de packs (`configuracion-agente/Packs`, commit `f219dd9`).

| Pack | Nombre | Precio | Precio/lata | Etiqueta |
|---|---|---|---|---|
| 6 latas | Starter | 12,90 € | 2,15 € | Para probar |
| 12 latas | Equilibrio | 24,90 € | 2,08 € | El más elegido |
| 24 latas | Rutina | 49,90 € suscripción · 59,90 € compra única | 2,08 € / 2,50 € | Mejor precio por lata |

- Lata suelta de referencia: 3,00 €.
- Envío: 4,00 €. Gratis desde 39,95 €.
- Precios con IGIC incluido.
- El precio de 12 latas es una propuesta: dejarlo en una constante `PACKS` fácil de cambiar.
- Ahorro mostrado: 28 % (6), 31 % (12), 31 % (24 suscripción).

## Contenido

- Título: `Diseña tu pack`.
- Subtítulo: `Elige 6, 12 o 24 latas y reparte entre Flama, Mentisimo y Cocus.`
- Paso 1: `Elige tu pack`.
- Paso 2: `Reparte tus latas`.
- Ayuda: `Puedes mezclar los tres sabores. El total debe coincidir con tu pack.`
- CTA deshabilitado: `Reparte las {N} latas (faltan {X})`.
- CTA activo: `Añadir pack al carrito · {precio}`.
- Toast: `Pack de {N} latas añadido al carrito.`
- Botón secundario: `Reparto equilibrado`.
- Cerrar: `Cerrar` con icono y `Esc`.

## Comportamiento

- Selector 6 / 12 / 24 con semántica de radiogroup y `aria-checked`.
- Para 24 latas, selector `Suscripción mensual · 49,90 €` (por defecto, `Cancela cuando quieras`) y `Compra única · 59,90 €`.
- Tres bloques de sabor, siempre visibles, con `−` / `+` y un `<select>` de 0 a N. Las opciones que superen las latas restantes se deshabilitan.
- La suma nunca supera el tamaño del pack.
- Barra de progreso segmentada con los tres colores y el texto `X de N latas`.
- Al cambiar de pack, conservar el reparto si cabe; si no, reequilibrar y avisar con un toast.
- `Reparto equilibrado` reparte 2/2/2, 4/4/4 u 8/8/8.
- Al añadir, mantener la configuración para poder repetir.
- Al añadir, cerrar el modal y abrir el carrito para confirmar el pack. Así el usuario ve el desglose y el total sin buscar el icono.
- Persistencia del carrito en `localStorage` con la clave `surge_cart_v1`.
- El modal no secuestra el scroll del documento: lo bloquea solo mientras está abierto y lo restaura al cerrar.
- Foco atrapado, `role="dialog"`, `aria-modal="true"`, cierre con `Esc` y retorno del foco al botón que lo abrió.

## Carrito

- Drawer lateral de 420 px (pantalla completa en móvil).
- Cabecera `Tu carrito (N)`.
- Barra de envío: `Te faltan X € para el envío gratis.` / `¡Envío gratis conseguido!`.
- Cada línea: pack, desglose con puntos de color, modo suscripción si aplica, precio, cantidad y eliminar.
- Misma configuración se agrupa; distinta configuración crea línea nueva.
- Resumen: subtotal, envío, total, `IGIC incluido`.
- CTA `Finalizar compra`: demo. Al pulsar, toast `Checkout pendiente de conectar`. **No pedir datos de tarjeta ni simular un pago real.**
- Vacío: `Tu carrito está vacío. Monta tu primer pack.`
- Badge del header con número de packs y `aria-live="polite"`.

## Estructura del modal

- Escritorio: dos columnas, izquierda caja + resumen, derecha sabores + CTA. La columna izquierda es sticky.
- Móvil: una columna en orden selector → caja → sabores → CTA fijo abajo.
- La caja es un componente CSS/SVG, no una foto estirada. Muestra los slots según 6/12/24 y el desglose.
- Usar `caja-pack.webp` solo como referencia visual, no para simular 12 o 24 latas.
- Frutas decorativas: no hay recortes reales en el repositorio. Usar ilustración botánica en SVG o prescindir de ella. Nunca tapar controles.

## Accesibilidad

- Contraste AA; no usar el rojo de Flama para texto pequeño sobre crema sin oscurecerlo.
- Objetivos táctiles de 44 × 44 px.
- `label` en cada select y `aria-describedby` para la ayuda.
- Totales y estados en `aria-live="polite"`.
- `prefers-reduced-motion`: sin animaciones de caja ni parallax.
- Todo operable con teclado.

## Prohibido

- Activar el botón con un pack incompleto.
- Superar el total del pack.
- Popups de descuento, cuentas atrás o reseñas inventadas.
- Checkout real sin pasarela contratada.
- Estética neón o de gimnasio agresivo.
- Cambiar los precios sin actualizar `PACKS`.
