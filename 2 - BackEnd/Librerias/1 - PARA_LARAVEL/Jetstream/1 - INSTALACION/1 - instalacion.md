### ====================================================== ###
###### ===--- Instalar (Jetstream) a un proyecto ---=== ######
### ====================================================== ###

<!-- Instalamos via composer. -->

```bat
	composer require laravel/jetstream
```

<!-- ------------------------------------------------------------ -->
<!-- ------ Instalar framework JavaScript para (Jetstream) ------ -->
<!-- ------------------------------------------------------------ -->

```bat
	: Instalamos Livewire.
	php artisan jetstream:install livewire

	: Opcionalmente podemos trabajar con equipos.
	php artisan jetstream:install livewire --teams
```

<!-- O podemos instalar. -->

```bat
	: Instalamos Inertia.
	php artisan jetstream:install inertia

	: Opcionalmente podemos trabajar con equipos.
	php artisan jetstream:install inertia --teams
```

<!-- ---------------------------------- -->
<!-- ------ Migrar base de datos ------ -->
<!-- ---------------------------------- -->

```bat
	: Instalamos las dependencias (npm).
	npm install

	: Compilamos Laravel.
	npm run dev

	: Migramos las bases de datos de Jetstream.
	php artisan migrate
```

### ========================================================= ###
###### ===--- Instalar Tailwindcss para (Jetstream) ---=== ######
### ========================================================= ###

<!-- NOTA: Normalmente Jetstream ya viene instalado con (tailwindcss) si es que elegiste esa opcion, 
por lo tanto, revisa tus archivos (tailwind.config.js) y (postcss.config.js) para ver 
si tienes instalado tailwind. -->

<!-- Para instalar Tailwindcss se necesita el manejador de paquetes (npm), si no cuentas con este 
paquete puedes instalarlo con el siguiente comando:  -->

```bat
	npm install
```

<!-- Ahora compilamos el proyecto Laravel. -->

```bat
	npm run dev
```

<!-- Ahora instalamos Tailwindcss. -->

```bat
	npm install tailwindcss
```

<!-- Creamos el archivo de configuracion de Tailwindcss. -->

```bat
	npx tailwindcss init
```

###### --- --- --- --- --- --- resources/css/app.css --- --- --- --- --- --- ######

<!-- En este archivo importamos las librerias que requiere Tailwind -->

```css
	@import 'tailwindcss/base';
	@import 'tailwindcss/components';
	@import 'tailwindcss/utilities';
```

###### --- --- --- --- --- --- webpack.mix.js --- --- --- --- --- --- ######

<!-- Tambien nos aseguramos de tener la libreria en el archivo (webpack.mix.js). -->

```javascript
	const mix = require('laravel-mix');

	mix.js('resources/js/app.js', 'public/js')
	    .postCss('resources/css/app.css', 'public/css', [
	        require('postcss-import'), 
	        // Libreria necesaria para trabajar con tailwind.
	        require('tailwindcss'), 
	    ]);

	if (mix.inProduction()) {
	    mix.version();
	}
```

# Nota: Cada vez que queramos correr nuestro proyecto, debemos ejecutar el comando.

```bat
	npm run dev
```

El comando anterior compilara el archivo [](resources/css/app.css) y el archivo de configuracion [](tailwind.config.js).