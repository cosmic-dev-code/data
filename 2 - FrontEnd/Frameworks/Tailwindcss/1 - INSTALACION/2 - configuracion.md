### ==================================================== ###
###### ===--- Crear archivo de (configuracion) ---=== ######
### ==================================================== ###

###### --- --- --- --- --- --- {proyecto}/tailwind.config.js --- --- --- --- --- --- ######

<!-- Este archivo se encarga de crear las configuraciones de las utilidades de (tailwindcss). 

NOTA: Este es un ejemplo con el archivo completamente vacio, (no es recomendable asi). -->

```javascript
	module.exports = {
	  /* Es importante indicar en nuestro archivo de configuracion aquellos archivos (HTML) que se van a observar.
	  Esto se hace solo para compilar las utilidades necesarias, (las que estan en uso). */
	  content: [
	  	"./public/index.html", 
	  	"./public/pages/contact.html"
	  ],
	  theme: {
		fontFamily: {
			bills: ['Stick No Bills']
		},
	    extend: {}
	  },
	  plugins: [],
	}
```

### ========================================= ###
###### ===--- Crear archivo (index) ---=== ######
### ========================================= ###

<!-- Ahora debemos tener un archivo al cual aplicaremos las utilidades definidas en (tailwind.config.js). -->

```bat
	type nul > public/index.html
```

###### --- --- --- --- --- --- {proyecto}/public/index.html --- --- --- --- --- --- ######

```html
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Hola mundo</title>

		<!-- Enlazamos el archivo de salida de (tailwindcss) del mismo directorio raiz. -->
		<link rel="stylesheet" type="text/css" href="final.css">
	</head>

	<!-- Hacemos uso de las utilidades de (tailwindcss) que contiene nuestro archivo (tailwind.config.js)  -->

	<body>

		<section class="bg-rojo">
			<article>
				<div>
					<h3 class="text-informacion-900 font-bills-400">Titulo</h3>
					<h4 class="text-informacion-800 font-bills-300">Sub titulo</h4>
					<div class="bg-informacion-800">
						<p class="text-informacion-900">Parrafo</p>
					</div>
				</div>
			</article>
		</section>

	</body>
	</html>
```

### ============================================== ###
###### ===--- Crear archivo (styles.css) ---=== ######
### ============================================== ###

###### --- --- --- --- --- --- {proyecto}/src/styles.css --- --- --- --- --- --- ######

<!-- Podemos modificar tambien este archivo, porque tambien se compilara, (es opcional modificarlo). -->

```bat
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	/* ... */
```

El archivo [](public/final.css) no tiene utilidades, debemos *compilar* el archivo [](tailwind.config.js) y el archivo 
[](src/styles.css) para que incruste las utilidades que tenemos en nuestro archivo [](public/final.css).

```bat
	Rem (src/styles.css), son los archivos de estilos que tambien seran compilados.
	Rem (public/final.css), indica la salida de la compilacion.

	npx tailwindcss build src/styles.css -o public/final.css

	Rem NOTA: Si cambiamos el nombre de nuestro archivo (tailwind.config.js), entonces lo especificamos.
	Rem (./tailwind.config.js), indicamos donde esta el archivo de configuracion para compilar.

	npx tailwindcss -c ./tailwind.config.js -i src/styles.css -o public/final.css
```