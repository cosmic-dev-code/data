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

### ============================================== ###
###### ===--- Mandar a llamar componente ---=== ######
### ============================================== ###

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

```jsx
	import React from "react";

	import './App.css';

	// Importar la funcion (hook).
	import Contador from "./components/contador";

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