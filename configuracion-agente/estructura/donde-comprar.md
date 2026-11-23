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

- H2: `Ya puedes encontrarla en Las Palmas`.
- Puntos publicados:
  - **Decathlon Tamaraceite**. C.C. Tamaraceite, Tamaraceite Sur, 35018. L–S 10:00–21:30, D cerrado. Tel. 928 91 70 60.
  - **CD Tamaraceite**. C/ José Antonio Gutiérrez Mellado esq. Juan Pulido Rodríguez s/n, 35018. Tel. 928 916 811.
  - **GOfit Las Palmas**. C/ Secretario Padilla 88-90, 35010, Guanarteme · Las Canteras. L–V 6:00–23:00, S 8:00–22:00, D 8:00–18:00.
  - **Areafit Las Palmas**. C/ Henry Dunant 1, C.C. Las Escaleritas, 35011. Abierto 365 días.
  - **Beats Las Palmas**. Av. Escaleritas 31, 35014. L–V 6:00–22:30, S 9:00–21:00, D 9:00–15:00. Tel. 722 340 493.
  - **Macro Fit Las Palmas**. Av. Juan XXIII 3, 35004. Consultar horario.
- Cada tarjeta incluye tipo (tienda/gimnasio), dirección, horario, teléfono si existe, enlace web y enlace a Google Maps.
- Estado de ampliación: `Estamos cerrando más puntos. Si tienes una tienda, un gimnasio o una cafetería, escríbenos.`

### Mapa

- Mapa real interactivo con Leaflet y OpenStreetMap.
- Marcadores para cada punto publicado, con popup de nombre, dirección y tipo.
- Centrado y ajustado a Las Palmas de Gran Canaria.
- Sin scroll de rueda para no secuestrar el scroll de la página.
- Atribución `© OpenStreetMap`.
- Los puntos también aparecen como tarjetas accesibles debajo.

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
