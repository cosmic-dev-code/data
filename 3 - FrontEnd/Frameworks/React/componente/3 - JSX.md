### ======================= ###
###### ===--- JSX ---=== ######
### ======================= ###

Es la __sintaxis__ que permite combinar un archivo __JavaScript__ con __XML__, permite utilizar funciones para 
crear clases y optimizar el codigo; su uso depende de la complejidad de los componentes 
pues permite utilizar <tags/> para que los compoentes sean mas simples.

Utilizar esta sintaxis simplifica el codigo.

# Ejemplo con Elemento React: 

```js
	import React from "react";

	const MyComponent = () => {
		return React.createElement(
			"div", 
			null, 
			React.createElement("h1", null, "Hola mundo")
		);
	};

	export default MyComponent;

	// ----------------------------------------------- //

	React.createElement(MyComponent, {
		lista: ["..."]
	});
```

# Ejemplo con JSX: 

```jsx
	import React from "react";

	const MyComponent = () => {
		return (
			<div>
				<h1>Hola mundo</h1>
			</div>
		);
	};

	export default MyComponent;

	// ----------------------------------------------- //

	// JSX.
	<MyComponent list={["..."]}/>
```

### ============================================ ###
###### ===--- Implementar sintaxis JSX ---=== ######
### ============================================ ###

###### --- --- --- --- --- --- {proyecto}/src/components/my-component.jsx --- --- --- --- --- --- ######

<!--
	- Implementacion como (clase).
-->

```jsx
	import React, { Component } from "react";

	// Esta es la clase inicial que tenemos.
	class MyComponent extends Component{
		render(){
			return (
				<h1>Hola mundo</h1>
			);
		}
	}

	export default MyComponent;
```

<!--
	- Implementacion como (funcion), tambien llamada (Hook).
-->

```jsx
	// Ahora importamos de esta forma.
	import React from "react";

	// En lugar de implementar una clase con el metodo (render), implementamos una funcion.
	function MyComponent(){
		return (
			<h1>Hola mundo</h1>
		);
	}

	export default MyComponent;
```

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

<!-- En este archivo. -->

```jsx
	import logo from './logo.svg';
	import './App.css';

	// Importamos nuestro componente.
	import MyComponent from "./components/my-component";

	function App() {
		// Barra el codigo que viene por defecto y coloca tu (componente).
		return (
			<div className="App">

				<MyComponent/>

			</div>
		);
	}

	export default App;
```