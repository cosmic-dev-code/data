### ========================= ###
###### ===--- Popup ---=== ######
### ========================= ###

<!-- Existe la posibilidad que al hacer click al icono de la extension esta abra un popup que muestre 
una pagina HTML con la cual puede interactuar el usuario. -->

###### --- --- --- --- --- --- proyecto/src/popup.html --- --- --- --- --- --- ######

<!-- La pagina que funcionara como Popup puede tener sus propios archivos de estilos y archivos de script, 
y puede ser tan compleja como se desee. -->

```html
	<!DOCTYPE html>
	<html>
		<head>
			
			<!-- Metadatos de la pagina. -->
			<meta charset="utf-8">

			<!-- Estilos de esta pagina. -->
			<link rel="stylesheet" type="text/css" href="css/resources.css">
			<link rel="stylesheet" type="text/css" href="css/global.css">

			<!-- Scripts de esta pagina. -->
			<script src="js/cosmic.js" type="text/javascript"></script>
			<script defer src="js/global.js" type="text/javascript"></script>

			<title>Titulo de pagina</title>
		</head>
		<body>
			<!-- Contenido HTML de la pagina. -->
		</body>
	</html>
```

###### --- --- --- --- --- --- proyecto/manifest.json --- --- --- --- --- --- ######

<!-- Ahora, dentro de (action) indicamos cual sera el popup. -->

```json
	"name": "Mi extensión", 
	"version": "1.0", 
	"manifest_version": 3, 

	// Dentro de (action).
	"action": {
		// Se manda a llamar la pagina web que se abrira como (popup) al hacer click en el incono de la extension.
		"default_popup": "popup.html"
	}
```