<!-- La propiedad establece cuán estrictamente se aplican los puntos de ajuste en el contenedor de desplazamiento 
en caso de que haya uno. -->

```html
	<section class="container">
		<article class="element"></article>
		<article class="element"></article>
		<article class="element"></article>
	</section>
```

```css
	section{
		/* La propiedad se encarga de alinear los puntos de ajustes de su contenido, (los elementos), 
		recibe por valores: 
			--- (none), ignora los puntos de ajuste.
			DIRECCIONES.
			--- (x), se ajusta a las posiciones de ajuste solo en su eje horizontal.
			--- (y), se ajusta a las posiciones de ajuste solo en su eje vertical.
			--- (both), se ajusta a posiciones de ajuste en ambos ejes (x/y) de forma independiente, 
				(se ajusta a diferentes elementos en cada eje).
			AJUSTES DE ELEMENTOS.
			--- (block), se ajusta a posiciones de ajuste solo en su eje de bloque.
			--- (inline), se ajusta a posiciones de ajuste solo en su eje de linea.
			--- (mandatory), no permite descansar en un punto intermedio y se ajusta al siguiente elemento.
			--- (proximity), puede descansar en un punto intermedio y se ajusta hasta aproximarse al siguiente elemento.  */
		scroll-snap-type: auto;

		/* NOTA: (mandatory) y (proximity) deben tener un (eje) declarado, de lo contrario no funcionaran. */
		scroll-snap-type: x mandatory;
		scroll-snap-type: y proximity;
		scroll-snap-type: both mandatory;

		/* Una orientacion especifica. */
		scroll-snap-type-x: mandatory;
		scroll-snap-type-y: mandatory;
	}

	/* La (scroll-snap-type) requiere un contenedor ancho con elementos. */

	.container{
		display: flex;
		width: 300px;
		overflow-x: scroll;

		scroll-snap-type: x mandatory;
	}

		.container > .item{
			width: 100px;
		}
```