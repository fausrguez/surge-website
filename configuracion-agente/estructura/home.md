# Home Requirements

Home va a tener 4 secciones, se hará scroll instantaneo entre sección y sección.

- Hero
- Presentacion de sabores (3 secciones)
	- Flama
	- Mentisimo
	- Cocus
- Subscripciones
- Feed de instagram

en la esquina inferior derecha mostrar un mensaje promocionando nuestra subpagina de bestial race.

## Hero

### Requisitos
- (modelos3d): 3 modelos 3d de las latas, incluidos en assets. Cuando se clica en un modelo la pagina se mueve hacia la seccion de ese sabor
- (lema): "+ Natural - Agresivo"
- (cta text): Texto generado por los datos que tenemos para incentivar el cta.
- (cta): dos botones "Crea tu pack" (abre modal de crea-tu-pack) y "Donde comprar" (redirige a subpagina "donde-comprar")

### Diseño 
- modelos3d a la izquierda, flama en el centro, mentisimo a la izquierda detras de flama, ligeramente inclinado a la izquierda y cocus a la derecha detras de flama ligerammente inclinado a la derecha. los tres tendran un efecto de entrada con efecto de flotacion y ligera rotacion back-and-forward
- lema en dos lineas con nuestros colores principales


## Presentación de sabores

### Requisitos
- (modelo3d): modelo correspondiente a la bebida que se presenta
- (lema-bebida): muestra un texto que corresponda a la bebida
- (ingredientes): muestra los main ingredients en una linea
- (cta): dos botones "Crea tu pack" (abre modal de crea-tu-pack) y "Donde comprar" (redirige a subpagina "donde-comprar") 
- (flavor-overlay): imagenes de los ingredientes flotando en los extremos inferiores de la seccion

### Diseño
- colores correspondientes de la bebida
- modelo a la izquierda, texto a la derecha
- overlay en extremos
- cta colors en base a la bebida

## Subscripciones

### Requisitos
- Muestra las posibles subscriptions y un boton de subscribirse. on click sale un modal explicando subscripcion en detalle.


## Feed instagram
- Muestra un screenshot the nuestra pagina de instagram a la derecha con un link directo a la misma
- A la izquierda muestra nuestros ultimos posts
