### =================================== ###
###### ===--- Por componentes ---=== ######
### =================================== ###

###### --- --- --- --- --- --- {proyecto}/src/paginas/acerca.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	// Importar el componente de la libreria de enrutamiento (next).
	import Link from "next/link";

	function About(){
		return (
			<div>
				<div>
					{/* Enlace hacia un componente que utiliza el enrutamiento. */}
					<a href="/index">Principal</a>

					{/* O podemos alternar al compoente Link, que permite un mejor rendimiento. */}
					<Link href="/index">
						<a>Principal</a>
					</Link>
				</div>
				<div>
					<h3>Pagina de informacion</h3>
				</div>
			</div>
		);
	}

	export default About;
```

###### --- --- --- --- --- --- {proyecto}/src/paginas/index.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	// Importar el componente de la libreria de enrutamiento (next).
	import Link from "next/link";

	function index(){
		return (
			<div>
				<div>
					{/* Apuntar al componente (About) del arhivo (acerca.jsx). */}

					<a href="/About">Principal</a>

					<Link href="/About">
						<a>Principal</a>
					</Link>
					
				</div>
				<div>
					<h3>Pagina de informacion</h3>
				</div>
			</div>
		);
	}

	export default index;
```

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

```jsx
	import React from "react";
	import logo from './logo.svg';
	import './App.css';

	// Importar uno de los dos componentes del enrutamiento.
	import index from "./paginas/index";

	function App() {
		return (
			<div className="App">
				{/* Mandar a llamar el enrutamiento. */}
				<index/>
			</div>
		);
	}

	export default App;
```

### ===================================== ###
###### ===--- Por configuracion ---=== ######
### ===================================== ###

###### --- --- --- --- --- --- {proyecto}/src/paginas/acerca.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	// Importar el componente de la libreria de enrutamiento (next).
	import Link from "next/link";

	function About(){
		return (
			<div>
				<div>
					<h3>Pagina de informacion</h3>
				</div>
			</div>
		);
	}

	export default About;
```

###### --- --- --- --- --- --- {proyecto}/next.config.js --- --- --- --- --- --- ######

<!-- Podemos crear rutas aqui. -->

```js
	module.exports = {
		// (exportPathMap) contiene de manera asincrona las rutas y sus paginas.
	    exportPathMap: async function(){
	        return{
	        	// Especificamos la (Ruta) y (Componente).
	        	// NOTA: Recalquemos que (acerca.jsx) devuelve el componente (About) y lo renderiza.
	            "/acerca": { page: "/paginas/acerca" },
	        };
	    },
	};
```