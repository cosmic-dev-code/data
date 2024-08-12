### ====================================== ###
###### ===--- Instalar via (npm) ---=== ######
### ====================================== ###

<!-- Instalamos SASS como dependencia de desarrollo. -->

```bat
	npm install sass --save-dev
```

<!-- Ahora ve a y cambia las extensiones (CSS) a (SCSS). -->

# []({proyecto}/resources/app.css) a []({proyecto}/resources/app.scss)

<!-- O combierte todos los archivos CSS que tengas. -->

###### --- --- --- --- --- --- {proyecto}/vite.config.php --- --- --- --- --- --- ######

<!-- Configura la directiva (@vite). -->

```js
	import { defineConfig } from 'vite';
	import laravel from 'laravel-vite-plugin';

	export default defineConfig({
	    plugins: [
	        laravel({
	        	// Coloca aqui todos los archivos que debe rastrear la directiva (@vite).
	            input: [
	            	// Archivos SASS.
	                'resources/css/app.scss', 
	                'resources/css/custom.scss', 
	                // Archivos JS.
	                'resources/js/app.js'
	            ],
	            refresh: true,
	        }),
	    ],
	});
```

###### --- --- --- --- --- --- {proyecto}/views/welcome.blade.php --- --- --- --- --- --- ######

<!-- Ahora manda a llamar los archivos en la vista que deseas. -->

```php
	@vite('resources/css/app.scss')
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