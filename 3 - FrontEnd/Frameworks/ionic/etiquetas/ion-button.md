### =========================== ###
###### ===--- Botones ---=== ######
### =========================== ###

```html
	<!-- Solo coloca un boton normal. -->

	<ion-button>Boton</ion-button>

	<!-- Desabilitar boton. -->

	<ion-button disabled>Boton</ion-button>
	<ion-button [disabled]="true">Boton</ion-button>

	<!-- El boton toma todo el ancho disponible, (en bloque). -->

	<ion-button expand="block">Boton en bloque</ion-button>
```

# -------------------------------- #
# ------ Background y borde ------ #
# -------------------------------- #

```html
	<!-- Lados completamente redondeados. -->

	<ion-button shape="round">Boton</ion-button>

	<!-- Relleno del boton: 
		--- (solid), el que viene por defecto.
		--- (clear), sin relleno y sin borde, (solo el texto azul).
		--- (outline), solo el texto y borde sin relleno. -->
	<ion-button fill="solid">Boton</ion-button>
```

# -------------------- #
# ------ Tamaño ------ #
# -------------------- #

```html
	<!-- Dimensiones del boton: 
		--- (default), es la que viene por defecto.
		--- (small), boton mas chico.
		--- (large), boton dos veces mas grande. -->
	<ion-button size="default">Boton</ion-button>
```

# -------------------- #
# ------ Iconos ------ #
# -------------------- #

```html
	<!-- (slot) indica la orientacion en la que se encuentra el icono. -->

	<ion-button>
		<!-- (start), izquierda a la derecha o inicio. -->
		<ion-icon slot="start" name="star"></ion-icon>
		Left Icon
	</ion-button>

	<ion-button>
		Right Icon
		<!-- (end), indica a la derecha o final. -->
		<ion-icon slot="end" name="star"></ion-icon>
	</ion-button>

	<ion-button>
		<!-- (icon-only), indica solo el icono. -->
		<ion-icon slot="icon-only" name="star"></ion-icon>
	</ion-button>
```

# --------------------- #
# ------ Colores ------ #
# --------------------- #

```html
	<!-- Colores para el relleno del boton: 
		--- (primary) y (default): Azul.
		--- (secondary): Celeste.
		--- (tertiary): Morado.
		--- (success): Verde claro.
		--- (warning): Amarillo casi naranja.
		--- (danger): Rojo.
		--- (light): Gris claro tipo plata.
		--- (medium): Gris pronunciado mas no oscuro.
		--- (dark): Negro. -->
	<ion-button color="default">Primary</ion-button>
```

# ------------------------------------ #
# ------ Estilos personalizados ------ #
# ------------------------------------ #

###### --- --- --- --- --- --- {proyecto}/src/app/my-pagina/my-pagina.page.html --- --- --- --- --- --- ######

<!-- Colocas tu boton. -->

```html
	<ion-button>Boton</ion-button>
```

###### --- --- --- --- --- --- {proyecto}/src/app/my-pagina/my-pagina.page.scss --- --- --- --- --- --- ######

<!-- Y le das sus estilos CSS. -->

```css
	ion-button {
	  background: #93e9be;
	  background-hover: #9ce0be;
	  background-activated: #88f4be;
	  background-focused: #88f4be;

	  color: blue;

	  border-radius: 0;
	  border-color: #000;
	  border-style: solid;
	  border-width: 1px;

	  box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

	  ripple-color: deeppink;

	  padding-top: 10px;
	  padding-bottom: 10px;
	}
```