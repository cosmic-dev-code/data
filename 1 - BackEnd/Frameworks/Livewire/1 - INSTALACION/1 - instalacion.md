### ============================================== ###
###### ===--- Instalacion por (composer) ---=== ######
### ============================================== ###

```bat
	: Instalamos (Livewire) dentro de nuestro proyecto (Laravel).
	composer require livewire/livewire
```

### ==================================== ###
###### ===--- Importar scripts ---=== ######
### ==================================== ###

<!-- Ahora importamos los estilos y scripts de Livewire. -->
```html
	<!DOCTYPE html>
	<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	    <head>
	        <meta charset="utf-8">
	        <meta name="viewport" content="width=device-width, initial-scale=1">

	        <title>Laravel</title>

	        <!-- Importamos los estilos de Livewire. -->
	        @livewireStyles
	        <!-- O como etiqueta. -->
	        <livewire:styles/>

	    </head>
	    <body>
	        <div class="block py-3">
	            <h1 class="text-6xl text-center">Hola</h1>
	        </div>

	        <!-- Importamos los scripts de Livewire. -->
	        @livewireScripts
	        <!-- O como etiqueta. -->
	        <livewire:scripts/>
	        
	    </body>
	</html>
```