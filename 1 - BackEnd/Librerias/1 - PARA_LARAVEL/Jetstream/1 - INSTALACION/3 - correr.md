### ======================================== ###
###### ===--- Activar (servidores) ---=== ######
### ======================================== ###

<!-- Ahora debemos correr el servidor de (vite) para ver los cambios de los archivos de 
(tailwindcss) el cual trabaja con Jetstram. -->

```bat
	npm run dev
```

<!-- En una consola aparte corremos el servidor de (Laravel) para ver nuestro sitio. -->

```bat
	php artisan serve
```

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