### ========================================= ###
###### ===--- Instalacion por (CDN) ---=== ######
### ========================================= ###

_(CKEditor5 Classic)_ es un editor que nos permite crear texto 'enriquecido', es como crear una etiqueta 
'textarea' con varias funcionalidades que nos brinda Word. Para su instalacion solo necesitamos el CDN, 
(un archivo javascript).

```html
	<!-- Pegamos nuestro CND. -->
    <script src="https://cdn.ckeditor.com/ckeditor5/30.0.0/classic/ckeditor.js"></script>
```

### ========================================= ###
###### ===--- Instalacion por (npm) ---=== ######
### ========================================= ###

<!-- Instalamos (CKEditor5 Classic) por (npm). -->

```bat
	npm install --save @ckeditor/ckeditor5-build-classic
```

<!-- Podemos importar (CKEditor5 Classic) directamente en nuestro codigo JavaScript. -->

```javascript
	// Podemos importarlo tambien en el (JavaScript).

	import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
```

<!-- Listo para utilizar en el HTML. -->

```html
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>CKEditor5 Classic</title>
		</head>
		<body>
			<!-- Podemos utilizarlo directamente. -->
		</body>
	</html>
```