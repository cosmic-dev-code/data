### ========================================== ###
###### ===--- Creacion de interfaces ---=== ######
### ========================================== ###

###### --- --- --- --- --- --- {proyecto}/public/index.html --- --- --- --- --- --- ######

<!-- En este archivo (justo debajo de [title] hay que agregar)... -->

```html
	<!DOCTYPE html>
	<html lang="en">
	    <head>
	        <meta charset="utf-8" />
	        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
	        <meta name="viewport" content="width=device-width, initial-scale=1" />
	        <meta name="theme-color" content="#000000" />
	        <meta name="description" content="Web site created using create-react-app" />
	        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
	        <!--
				manifest.json proporciona metadatos utilizados cuando su aplicación web está instalada 
				en un dispositivo móvil o escritorio del usuario.

				Consulte https://developers.google.com/web/fundamentals/web-app-manifest/
			-->
	        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
	        <!--
				Observe el uso de %PUBLIC_URL% en las etiquetas anteriores.
				Se reemplazará con la URL de la carpeta `pública` durante la compilación.
				Solo los archivos dentro de la carpeta `pública` pueden ser referenciados desde el HTML.

				A diferencia de "/favicon.ico" o "favicon.ico", "%PUBLIC_URL%/favicon.ico"
				funcione correctamente tanto con el enrutamiento del lado del cliente como con una URL pública no raíz.
				Aprenda a configurar una URL pública no raíz ejecutando `npm run build`.
			-->
	        <title>React App</title>

	        <!-- Agregar esta linea. -->
	        <link rel="stylesheet" type="text/css" href="https//fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">

	    </head>
	    <body>
	        <noscript>Debe habilitar JavaScript para ejecutar esta aplicación.</noscript>
	        <div id="root"></div>
	        <!--
				Este archivo HTML es una plantilla.
				Si lo abre directamente en el navegador, verá una página vacía.

				Puede agregar fuentes web, metaetiquetas o análisis a este archivo.
				El paso de compilación colocará los scripts incluidos en la etiqueta <body>.

				Para comenzar el desarrollo, ejecute `npm start` o `yarn start`.
				Para crear un paquete de producción, use `npm run build` o `yarn build`.
	    	-->
	    </body>
	</html>
```

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

<!-- Luego convertimos (App.js) a (App.jsx) para quitar la plantilla por defecto. -->

```jsx
	import React from "react";
	import './App.css';

	// Importamos el componente (IconButton).
	import IconButton from "@material-ui/core/IconButton";

	// Importamos un icono.
	import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCartIcon";

	function App(){
		return (
			<div>

				{/* Componente de boton. */}
				<IconButton color="primary" aria-label="comprar">
					{/* Componente de icono. */}
					<AddShoppingCartIcon/>
				</IconButton>

			</div>
		);
	}

	export default App;
```