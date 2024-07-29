### ==================================== ###
###### ===--- Funciones (Hook) ---=== ######
### ==================================== ###

Los hooks son funciones que te permiten utilizar el estado y otras características de React en __componentes de función__.
De manera que no es necesario crear una clase [](class) para implementar los ciclos de vida y caracteristicas de 
un componente, pues una funcion lo puede hacer utilizando un [](hook).

### ====================================== ###
###### ===--- Implementar (Hook) ---=== ######
### ====================================== ###

###### --- --- --- --- --- --- {proyecto}/src/components/contador.jsx --- --- --- --- --- --- ######

```jsx
	// Importamos React.
	import React from "react";

	// Funcion que retorna directamente el HTML, similar a una clase de componente (Contador).
	function Contador(){
		return (
			<div className="title">
				<h1>Hola mundo</h1>
			</div>
		);
	}

	export default Contador;
```

### ================================= ###
###### ===--- Ciclo de vida ---=== ######
### ================================= ###

```jsx
	// Importa (useEffect), (useRef), (useState).
	import React, { useEffect, useRef, useState } from "react";

	// Tenemos nuestra funcion, (puede ser flecha).
	export default MyComponent => {

		/**
		 * Equivalente al (componentDidMount).
		 */

		useEffect(() => {
			// El contenido se ha renderizado.

			/**
			 * Equivalente a (componentWillUnmount).
			 */
			return () => {
				// Antes que el componente sea eliminado del DOM.
			}

		// Sin dependencias.
		}, []);

		/**
		 * Equivalente al (componentDidUpdate).
		 */

		// Declara una propiedad (count) y su modificador (setCount), con valor por defecto (0).
		const [count, setCount] = useState(0);

		useEffect(() => {

		// Indica una dependencia a una propiedad, (se ejecuta cuando la propiedad cambia su valor).
		}, [count]);

		/**
		 * Equivalente al (componentDidCatch).
		 */
		
		const errorRef = useRef(null);

		const componentDidCatch = (error, info) => {
		    console.log("Error durante el renderizado del componente: ", error);

		    // Se puede manejar el error aquí.
		    errorRef.current = error;
		};

		/**
		 * Equivalente al (render).
		 */

		return <div></div>

	};
```

### ========================= ###
###### ===--- Props ---=== ######
### ========================= ###

###### --- --- --- --- --- --- {proyecto}/src/components/contador.jsx --- --- --- --- --- --- ######

```jsx
	import React from "react";

	export default function Contador(props){

		/**
		 * Es el objeto que contiene todos los atributos y valores pasados al componente.
		 * 
		 * <Contador value={10} nombre="Brandon"/>
		 */
		props.value; // 10
		props.nombre; // "Brandon"

		return (
			<div>
				<p>{props.nombre} tiene {props.value} año(s).</p>
			</div>
		);
	}
```

<!-- Otra forma de hacerlo. -->

```jsx
	import React from "react";

	export default function Contador({ value, nombre }){
		// ...
	}
```

### ======================== ###
###### ===--- Slot ---=== ######
### ======================== ###

```jsx
	import React from "react";

	// Extraes de (props.children).
	export default function Contador({ children }){

		return (
			<>
				{/* (children) contiene todo el codigo HTML que se inyecta al componente. */}
				{ children }
			</>
		);
	}
```

### =============================== ###
###### ===--- Hidratacion ---=== ######
### =============================== ###

###### --- --- --- --- --- --- {proyecto}/src/components/contador.jsx --- --- --- --- --- --- ######

```jsx
	// Importamos React y el uso de (useState) para manejar los estados.
	import React, { useState } from "react";

	function Contador(){
		
		/**
		 * Propiedades.
		 */

		// Declaramos una variable y su funcion modificadora (set).
		// En este caso (useState) recibe como parametro el valor por defecto de la variable.
		var [valor, setContador] = useState(0);

		// nombre = "Brandon".
		var [nombre, setNombre] = useState("Brandon");

		/**
		 * Modificadores.
		 */

		function modificar(){
			// Modifica el valor de la variable (valor) y vuelve a renderizar el contenido XML.
			setContador(valor + 1);
			setContador(10);

			// Modifica la variable nombre.
			setNombre("Anthony");
		}

		/**
		 * Renderizado.
		 */

		return (
			<div>
				{/* Imprimir el valor. */}
				<h1>{nombre} tiene: {valor} dinero</h1>
				<div>
					{/* Asignar la referencia de la funcion, (como los metodos de un componente de clase). */}
					<button onClick={ modificar }>Incrementar</button>
				</div>
			</div>
		);
	}

	export default Contador;
```

### ============================================== ###
###### ===--- Mandar a llamar componente ---=== ######
### ============================================== ###

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

```jsx
	import React from "react";

	import './App.css';

	// Importar la funcion (hook).
	import Contadores from "./components/contador";

	function App() {
		return (
			<div className="App">

				{/* Puede instanciarse como si se tratara de un componente de clase. */}
				<Contador/>

			</div>
		);
	}

	export default App;
```