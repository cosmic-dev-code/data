### ==================================== ###
###### ===--- Crear utilidades ---=== ######
### ==================================== ###

###### --- --- --- --- --- --- {proyecto}/src/mis-classes.scss --- --- --- --- --- --- ######

Para crear clases y estilos debemos ir a nuestro archivo [](src/mis-classes.scss).

```css
	/* Importamos tailwindcss aqui para poder utilizar la directiva (@apply). */
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	/* Escribimos el nombre de la clase.  */
	.btn-pd{
		/* Por medio de la palabra (apply) aplicamos a la utilidad (btn-pd) las utilidades de (tailwindcss). */
		@apply py-2 px-3 bg-blue-300 text-center rounded-md text-white hover:bg-blue-500
	}

	/* Tambien pueden aplicarse directamente a las etiquetas. */

	h1, h2, h3{
		@apply text-6xl leading-10 tracking-widest
	}

	h2{@apply text-5xl}
	h3{@apply text-4xl}
```

Compilamos **build** el archivo [](src/mis-classes.scss) colocando el resultado en [](src/public/salida.css)

```bat
	npx tailwindcss build src/mis-classes.scss -o src/public/salida.css
```

### ======================================= ###
###### ===--- Utilizar utilidades ---=== ######
### ======================================= ###

```html
	<main>
		<section>
			<!-- Aplicamos la utilidad creada y compilada en el archivo (styles.css). -->
			<a class="btn-pd" href="https://www.example.com">Click me</a>
		</section>
	</main>
```

### ================================================= ###
###### ===--- Mas de un archivo Tailwindcss ---=== ######
### ================================================= ###

<!-- Puedes tener diferentes hojas de estilos. -->

###### --- --- --- --- --- --- {proyecto}/src/estilos/archivo-1.scss --- --- --- --- --- --- ######

```css
	/* Importamos tailwind aqui para poder crear utilidades. */
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.clase-1{
		@apply block w-full text-center
	}
```

###### --- --- --- --- --- --- {proyecto}/src/estilos/archivo-2.scss --- --- --- --- --- --- ######

```css
	/* Tambien aqui. */
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.clase-2{
		@apply block w-full text-center
	}
```