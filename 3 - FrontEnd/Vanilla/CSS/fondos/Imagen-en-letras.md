
### ===================================== ###
###### ===--- Recorte de imagen ---=== ######
### ===================================== ###

<!-- Vamos a suponer que tenemos un elemento con texto dentro de el. -->

###### --- --- --- --- --- --- index.html --- --- --- --- --- --- ######

```html
	<!-- Elemento con fondo. -->
	<section class="contenedor">

		<!-- Texto dentro. -->
		<h1>Hola mundo</h1>

	</section>
```

###### --- --- --- --- --- --- estilos.css --- --- --- --- --- --- ######

```css
	.contenedor{
		/* Fondo de imagen del contenedor. */
		background-image: url("imagen.jpg");
		background-position: center center;

		/* Se utiliza para especificar cómo se deben recortar las imágenes de fondo o el color de fondo de un 
		elemento en relación con su borde y/o contenido, recibe: 
			--- (border-box), el fondo se extiende hasta el borde exterior del elemento, 
				incluso debajo de cualquier borde que tenga.
			--- (padding-box), el fondo se extiende hasta el borde exterior del relleno del elemento, 
				pero no debajo de ningún borde que tenga.
			--- (content-box), el fondo se extiende solo hasta el borde exterior del contenido del elemento, 
				sin incluir ningún borde ni relleno.
			--- (text), el fondo se recorta para que solo aparezca detrás del texto dentro del elemento. */
		background-clip: text;

		/* El color del texto es transparente para dejar ver la imagen de fondo. */
		color: transparent;
	}

		.contenedor > h1{
			font-size: 70px;
			font-family: arial, sans-serif, serif;
			
			/* El color del texto es transparente para dejar ver la imagen de fondo. */
			color: transparent;
		}
```