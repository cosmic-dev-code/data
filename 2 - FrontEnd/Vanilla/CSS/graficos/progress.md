```html
	<!-- Etiqueta HTML de barra de progreso. -->
	<progress value="50" max="100" class="barra-de-progreso">
		<!-- ... -->
	</progress>
```

```css
	/* Modifica el (fondo) de la barra de progreso. */
	::-webkit-meter-bar{
		background-color: green;
	}

	/* Modifica el fondo del (valor) de la barra de progreso. */
	::-webkit-meter-value{
		background-color: blue;
	}

	.barra-de-progreso{
		/* Colocamos esta propiedad en (none) para modificar los estilos que tiene por defecto la 
		barra de progreso. */
		-webkit-appearance: none;
	}
```