### ====================================== ###
###### ===--- Instalar via (npm) ---=== ######
### ====================================== ###

```bat
	: Instalamos npm.
	npm install

	: Instalamos tailwindcss.
	npm install -D tailwindcss postcss autoprefixer

	: Crea los archivos de configuracion: 
		: --- El archivo de configuracion de tailwindcss (tailwind.config.js).
		: --- Crea las dependencias (postcss.config.js).
	npx tailwindcss init -p
```

###### --- --- --- --- --- --- {proyecto}/resources/css/tailwind.config.js --- --- --- --- --- --- ######

```js
	/** @type {import('tailwindcss').Config} */
	module.exports = {
	  content: [
	    "./resources/**/*.blade.php",
	    "./resources/**/*.js",
	    "./resources/**/*.vue",
	  ],
	  theme: {
	    extend: {},
	  },
	  plugins: [],
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/css/app.css --- --- --- --- --- --- ######

```css
	/* Esto importa todas las dependencias de tailwind, entre ellas (@apply). */
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
```

<!-- Compilamos e iniciamos el servidor. -->

###### --- --- --- --- --- --- {proyecto}/resources/views/welcome.blade.php --- --- --- --- --- --- ######

<!-- Incluimos los estilos en las vistas que queramos. -->

```html
	<!DOCTYPE html>
	<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	    <head>
	        <meta charset="utf-8">
	        <meta name="viewport" content="width=device-width, initial-scale=1">

	        <title>Laravel</title>

	        <!-- Ahora debemos incluir los estilos por medio de la directiva (@vite) y la ruta del archivo (css). -->
	        @vite('resources/css/app.css')

	    </head>
	    <body>
	        <!-- ... -->
	    </body>
	</html>
```

### ======================================= ###
###### ===--- Ejecutar servidores ---=== ######
### ======================================= ###

<!-- Ahora ejecuta los servidores. -->

```bat
	: Ejecuta (@vite).
	npm run dev

	: Ejecutamos el servidor de PHP.
	php artisan serve
```