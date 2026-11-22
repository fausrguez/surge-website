# Donde comprar

## Objetivo

Que alguien que ya quiere una lata sepa en menos de un minuto **dónde comprarla hoy** y qué hacer si tiene una tienda.

No inventar puntos de venta. Mientras no haya acuerdos firmados, la página muestra canales y una lista de espera de tiendas, no un listado falso.

## Ruta

`/donde-comprar`

## Estructura

1. Hero compacto.
2. Venta online.
3. Puntos seleccionados en Canarias.
4. Mapa (placeholder hasta tener datos reales).
5. ¿Tienes una tienda? (contacto).
6. Footer global.

## Copy

### Hero

- Kicker: `CANARIAS · VENTA ONLINE Y PUNTOS SELECCIONADOS`.
- H1: `Dónde comprar`.
- Entradilla: `SURGE se vende online y en puntos seleccionados de Canarias. Si todavía no estamos en tu tienda, pídenos y la buscamos contigo.`
- CTA primario: `Crea tu pack` → abre el modal de packs.
- CTA secundario: `Habla con nosotros` → ancla a la sección de tiendas.

### Venta online

- H2: `Online, sin salir de casa`.
- Texto: `Packs de 6, 12 y 24 latas, con envío a toda España. En Canarias, entrega en 24–72 h laborables.`
- Datos:
  - `Envío 4,00 € · Gratis desde 39,95 €`.
  - `Precios con IGIC incluido`.
  - `Pago pendiente de conectar: la web funciona en modo demostración.`
- CTA: `Elegir pack`.

### Puntos seleccionados en Canarias

- H2: `En tienda, cuando toca`.
- Texto: `Estamos cerrando los primeros puntos en Gran Canaria: gimnasios, cafeterías, tiendas de productos naturales y comercio de barrio.`
- Estado vacío honesto: `Todavía no hay puntos publicados. Si quieres que SURGE esté en tu tienda, escríbenos y lo vemos.`
- Canales previstos (sin nombres inventados): gimnasios y boxes, cafeterías, tiendas de productos naturales, supermercados locales, eventos deportivos.

### Mapa

- Contenedor con el mapa de Canarias y la etiqueta `Mapa de puntos en construcción`.
- No mostrar marcadores inventados.
- Cuando existan datos, cada punto tendrá nombre, dirección, horario y tipo de canal.
- Mientras no haya mapa interactivo, usar una ilustración vectorial de las islas, sin claims.

### ¿Tienes una tienda?

- H2: `¿Tienes una tienda o un gimnasio?`
- Texto: `Cuéntanos dónde estás y qué tipo de espacio tienes. Estudiamos cada punto y te respondemos con condiciones, pedido mínimo y plazo.`
- CTA: `Quiero vender SURGE` → formulario de contacto con asunto preseleccionado `Quiero vender SURGE`.
- Enlace secundario: `hola@surge.es`.

## Requisitos técnicos

- La página reutiliza el header y el footer globales.
- El CTA de packs abre el modal, no navega.
- El formulario de contacto vive en `/sobre-nosotros#hablemos`; el CTA lleva con el asunto preseleccionado mediante query param `?asunto=tienda#hablemos`.
- Sin mapa real no se carga ninguna librería de mapas.
- Responsive a 360 px sin scroll horizontal.
- SEO: título `Dónde comprar · SURGE — Energy from the earth`; meta description con venta online, Canarias y packs.

## Prohibido

- Inventar tiendas, direcciones, horarios o teléfonos.
- Prometer entrega en 24 h si no está contratada.
- Decir «envío gratis» sin el umbral.
- Usar «hecho en Canarias» o «producto canario» hasta verificarlo.
- Mostrar un mapa con puntos falsos.
