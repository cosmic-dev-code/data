### ==================================== ###
###### ===--- Filas y columnas ---=== ######
### ==================================== ###

<!-- La clase (row) declara un (flex flex-wrap) internamete. -->

```html
	<div class="row">
		<!-- Todos los elementos se colocan en fila. -->
		<div></div>
		<div></div>
		<div></div>
	</div>
```

<!-- Una (fila) de 3 (columnas). -->

```html
	<article class="row">
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
	</article>
```

<!-- Una (fila) de 2 (columnas), naturalmente columnas con mas espacio. -->

```html
	<article class="row">
		<div class="col"></div>
		<div class="col"></div>
	</article>
```

### =============================== ###
###### ===--- Ancho total ---=== ######
### =============================== ###

<!-- En Boostrap, una (fila) tiene un ancho maximo de (12 parte). -->

```html
	<div class="row">
		<!-- Cada columna adquiere (6/12), por lo que (6 + 6 = 12). -->
		<!-- Cada columna tiene la mitad del ancho disponible., por lo que cuando un elemento ya no cabe en el 
		contenedor, este elemento se tira para abajo. -->
		<div class="col-6"></div>
		<div class="col-6"></div>
	</div>
```

### ============================================ ###
###### ===--- Utilizando (Breakpoints) ---=== ######
### ============================================ ###

<!-- Asi podemos colocar las media queries dentro de un elemento. -->

```html
	<article class="row">
		<!-- Sabiendo que la (row) contiene un ancho de (12) partes, hacemos lo siguiente: 
			--- Inicialmente cada columna (div) adquiere un ancho del (100% === col-12).
			--- En pantalla mediana cada columna adquiere la mitad (50% === 6/12).
			--- En una pantalla muy grande cada columna adquiere (40% === 3/12), aqui se colocan totalmente en fila. -->
		<div class="col-12 col-md-6 col-xxl-3"></div>
		<div class="col-12 col-md-6 col-xxl-3"></div>
		<div class="col-12 col-md-6 col-xxl-3"></div>
		<div class="col-12 col-md-6 col-xxl-3"></div>
	</article>
```