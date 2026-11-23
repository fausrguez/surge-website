# Donde comprar

## Objetivo

Que alguien que ya quiere una lata sepa en menos de un minuto **dónde comprarla hoy** y qué hacer si tiene una tienda.

No inventar puntos de venta. Publicar solo puntos reales y comprobados. Ahora mismo hay un punto: Decathlon Tamaraceite.

## Ruta

`/donde-comprar`

## Estructura

1. Hero compacto.
2. Venta online.
3. Puntos seleccionados en Canarias.
4. Mapa (ilustración con los puntos publicados).
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

- H2: `En tienda, ya puedes encontrarla`.
- Punto publicado:
  - **Decathlon Tamaraceite**.
  - Dirección: `C.C. Tamaraceite, Tamaraceite Sur, 35018 Las Palmas de Gran Canaria`.
  - Horario: lunes a sábado, 10:00–21:30. Domingo cerrado.
  - Teléfono: `928 91 70 60`.
  - Enlaces: ficha oficial de Decathlon y Google Maps.
  - Nota: recogida en tienda en 1 hora. Preguntar por SURGE en el lineal o en la nevera.
- Estado de ampliación: `Estamos cerrando más puntos. Si quieres que SURGE esté en tu tienda, escríbenos.`
- Canales previstos (sin nombres inventados): gimnasios y boxes, cafeterías, tiendas de productos naturales, supermercados locales, eventos deportivos.

### Mapa

- Contenedor con la ilustración de Canarias y la etiqueta `1 punto · Gran Canaria`.
- Mostrar un marcador en Gran Canaria para Decathlon Tamaraceite.
- No mostrar marcadores inventados.
- Cuando existan más datos, cada punto tendrá nombre, dirección, horario y tipo de canal.
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
