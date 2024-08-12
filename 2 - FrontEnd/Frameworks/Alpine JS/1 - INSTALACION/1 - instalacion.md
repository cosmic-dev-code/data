### ========================================= ###
###### ===--- Instalacion por (CDN) ---=== ######
### ========================================= ###

```html
	<!DOCTYPE HTML>
	<html lang="es">
		<head>
			<meta charset="utf-8">
			<meta name="description" content="Estamos instalando Alphine JS">
			<meta name="robots" content="index,follow">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>Instalar Alphine JS</title>

		  <!-- Colocamos el CDN donde (alpinejs@3.x.x) extraera la (ultima version de Alphine). -->
		  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

		  <!-- Para un funcionamiento mas optimo colocamos el CDN donde (alpinejs@3.10.5) extraera la 
		  (ultima version de Alphine hasta el momento). -->
		  <script defer src="https://unpkg.com/alpinejs@3.10.5/dist/cdn.min.js"></script>

		</head>
		<body>
			<!-- Code -->
		</body>
	</html>
```

### ========================================= ###
###### ===--- Instalacion por (npm) ---=== ######
### ========================================= ###

<!-- Instalamos Alphine con el siguiente comando. -->

```bat
	npm install alpinejs
```

```javascript
	// Importamos Alphine.
	import Alpine from 'alpinejs';

	// Lo declaramos y asignamos al objeto global (window).
	window.Alpine = Alpine;

	// Iniciamos Alphine.
	Alpine.start();
```