### ================================= ###
###### ===--- Crear carpeta ---=== ######
### ================================= ###

Es importante tener los componentes en un solo lugar, para lo cual crea una caperta llamada [](components) en 
la ruta [](nombreDelProyecto/src).

### ==================================== ###
###### ===--- Crear componente ---=== ######
### ==================================== ###

Dentro de la carpeta [](components) se deben  crear los componentes, por ejemplo: 
	--- [](my-component.jsx).

###### --- --- --- --- --- --- {proyecto}/src/components/my-component.jsx --- --- --- --- --- --- ######

```jsx
	// Es importante extraer las clases de React.
	import React, { Component } from "react";

	// Logica del componente.
	class MyComponent extends Component{
		// Esta es la sintaxis para renderizar codigo HTML desde JavaScript.
		render(){
			// NOTA: Importante que todas las etiquetas HTML esten dentro de una etiqueta padre.
			return (
				<h1>Hola mundo</h1>
			);
		}
	}

	// NOTA: Debe exportarse el componente para ser importado en otros (componentes) o en el (index.js).
	export default MyComponent;
```

###### --- --- --- --- --- --- {proyecto}/src/index.jsx --- --- --- --- --- --- ######

```jsx
	import React from 'react';
	import ReactDOM from 'react-dom';
	import reportWebVitals from "./reportWebVitals"

	// Archivo CSS global que afecta a todos los componentes, (porque se importa desde la raiz).
	import "./index.css";

	// Importar el componente creado.
	import MyComponent from "./componets/my-component";

	/* (render) recibe: 
		--- El codigo XML a renderizar.
		--- El elemento donde se renderizara el contenido XML, en este caso en (id="root"). */
	ReactDOM.render(
		<React.StrictMode>

			{/* Manda a llamar tu componente. */}
			<MyComponent/>

		</React.StrictMode>,
		document.getElementById('root')
	);

	reportWebVitals();
```

<!-- De esta manera el componente se visualizara en el navegador todo lo definido en tu componente. -->