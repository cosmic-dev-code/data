### =============================== ###
###### ===--- Especifidad ---=== ######
### =============================== ###

Se refiere a la manera en que se determina cuál estilo se aplicará a un elemento en particular 
cuando hay más de una regla CSS que se aplica al mismo elemento.

La especificidad es importante porque puede haber casos en los que varias reglas CSS se apliquen a 
un mismo elemento y pueden entrar en conflicto.

### =============================== ###
###### ===--- Importancia ---=== ######
### =============================== ###

Las reglas CSS pueden tener diferentes niveles de importancia.

# -------------------------- #
# ------ Transiciones ------ #
# -------------------------- #

Prevalecen sobre todo.

```css
	.elemento {
		background-color: red;
		transition: background-color 1s ease;
	}
	
	.elemento:hover {
		/* No se aplica. */
		background-color: blue !important;
	}
```

# ------------------------ #
# ------ !important ------ #
# ------------------------ #

Aveces es necesario forzar reglas CSS para y priorizarlas.

```css
	/* Regla normal que no se aplica. */
	p {color: red;}

	/* Esta regla se aplica. */
	p {color: blue !important;}
```

# ------------------------- #
# ------ Animaciones ------ #
# ------------------------- #

Involucra varios estados de reglas, parecido a las transiciones tiene prioridad.

```css
	p{
		color: yellow;
	}

	/* Esta regla cambia el color anterior. */
	p {
		animation: colores 1s;
		color: purple;
	}
```

# ----------------------------- #
# ------ Reglas normales ------ #
# ----------------------------- #

Son las reglas CSS que se aplican a un conjunto de elementos.

```css
	h1, h2, h3, h4, h5, h6 {
		font-family: 'Helvetica Neue', sans-serif;
		font-weight: bold;
		color: #333333;
	}
```

### ========================== ###
###### ===--- Origen ---=== ######
### ========================== ###

# ------------------------------- #
# ------ user-agent styles ------ #
# ------------------------------- #

Representan los estilos predeterminados que vienen en el navegador. Ejemplo en el navegador [](Brave).

```css
	/* Estilos preestablecidos por el (navegador). */
	h1{
		display: block;
	    font-size: 2em;
	    margin-block-start: 0.67em;
	    margin-block-end: 0.67em;
	    margin-inline-start: 0px;
	    margin-inline-end: 0px;
	    font-weight: bold;
	}
```

# -------------------------------- #
# ------ local agent styles ------ #
# -------------------------------- #

<!-- Se refiere a los estilos CSS identados a una pagina web, estilos propios del usuario, es mas comun 
colocar estos estilos por medio de extensiones que concatenan los estilos. -->

```css
	h1{
		/* Nuestros estilos concatenados a una pagina. */
	}
```

# ---------------------------- #
# ------ Custom web CSS ------ #
# ---------------------------- #

Se refiere a los estilos CSS establecidos por el usuario en el proyecto local.

```css
	h1{
		/* Nuestros estilos propios. */
	}
```

### =============================== ###
###### ===--- Especifidad ---=== ######
### =============================== ###

# ------------------------------ #
# ------ Estilos en linea ------ #
# ------------------------------ #

Conocidos como (elementos en linea) o (estilos embebidos), son los que se aplican directamente a los elementos 
[](html) por medio del atributo [](style). Es el selector que mas peso tiene.

```html
	<div>
		<!-- Elementos en linea, son los que tienen mayor peso. -->
		<button style="color: #fff;">Boton</button>
	</div>
```

# -------------------------------- #
# ------ Selector por (#id) ------ #
# -------------------------------- #

<!-- Es el selector, que se refiere a un elemento por (id). -->

```html
	<div>
		<!-- El id es (idBtn), no es reutilizable y solo identifica a un elemento. -->
		<button id="idBtn">Boton</button>
	</div>
```

```css
	/* Se refiere al elemento por su id. */
	#idBtn{
		color: white;
	}
```

# ----------------------------------- #
# ------ Selector por (.clase) ------ #
# ----------------------------------- #

<!-- Se refiere a darle estilos a un elemento por medio de su clase, tiene menos peso que 
las anteriores. -->

```html
	<div>
		<!-- La clase es (btn-blue). -->
		<button class="btn-blue">Boton</button>

		<div>
			<!-- Las clases pueden reutilizarse y se refieren a varios elementos. -->
			<button class="btn-blue">Boton 1</button>
			<button>Boton 2</button>
			<button class="btn-blue">Boton 3</button>
		</div>

	</div>
```

```css
	/* Se refiere al elemento por su id. */
	.btn-blue{
		color: lightblue;
	}

	/* Cuando el elemento tenga la clase (colores). */
	div.colores{
		/* ... */
	}
```

# ---------------------------------------------- #
# ------ (elementos) y (pseudo elementos) ------ #
# ---------------------------------------------- #

<!-- Ahora se refiere a los elementos como tal asi como sus atributos. -->

```css
	/* Selector de elemento. */
	input{
		text-align: center;
	}

	/* Selector de atributo. */
	input[type="submit"]{
		/* ... */
	}

	/* Selector de pseudo elemento. */
	div::before{
		content: "";
		padding: 10px;
	}
```

### ========================= ###
###### ===--- Orden ---=== ######
### ========================= ###

<!-- Se refiere al orden en el que se estilan los elementos. -->

# ------------------------------ #
# ------ Etiqueta (style) ------ #
# ------------------------------ #

<!-- La etiqueta (style) tiene prevalencia y se define en el HTML. -->

```html
	<!-- Etiqueta (style) definida en el HTML. -->
	<style type="text/css">
		/* Elementos a los cuales se le dan valores CSS. */
		div{
			width: 80%;
			background-color: red;
			padding: 10px;
		}
	</style>

	<div></div>
```

# ----------------------------- #
# ------ Etiqueta (link) ------ #
# ----------------------------- #

###### --- --- --- --- --- --- index.html --- --- --- --- --- --- ######

<!-- Se refiere a los estilos (CSS) fuera de la pagina, los cuales se mandan a llamar por medio de 
la etiqueta (link). -->

```html
	<!-- Mandar a llamar la hoja de estilos (global.css). -->
	<link rel="stylesheet" type="text/css" href="estilos/global.css">

	<div></div>
```
###### --- --- --- --- --- --- estilos/global.css --- --- --- --- --- --- ######

```css
	/* Se aplican los estilos a los elementos del HTML. */
	div{
		width: 80%;
		background-color: red;
		padding: 10px;
	}
```