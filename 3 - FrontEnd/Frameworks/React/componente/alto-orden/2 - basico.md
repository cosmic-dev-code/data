### ================================== ###
###### ===--- Ejemplo basico ---=== ######
### ================================== ###

<!-- Dentro de la carpeta hoc, (solo como ejemplos). -->

###### --- --- --- --- --- --- {proyecto}/src/hoc/conHerramienta.jsx --- --- --- --- --- --- ######

```jsx
	import React from "react";

	// Este es el componente de alto orden que recibe por parametro el componente a renderizar.
	// Retorna un nuevo componente.

	/* La convencion React dicta: 
		--- (conFuncion): duncion que recibe el Componente por parametro.
		--- Retorna un nuevo componente (ConHerramienta) que renderiza el recibido por parametro. */

	function conHerramienta(Componente){
		return class ConHerramienta extends React.Component{
			render(){
				return (
					<div>
						{/* Aqui se renderiza el componente pasado por la funcion (conHerramienta). */}
						<Componente/>

						{/* (Como si el componente [ConHerramienta] recibiera por parametro al [Componente]). */}
					</div>
				);
			}
		}
	}

	export default conHerramienta;
```

###### --- --- --- --- --- --- {proyecto}/src/hoc/movie.jsx --- --- --- --- --- --- ######

<!-- Por ejemplo tenemos un componente. -->

```jsx
	import React, { Component } from "react";

	class Movie extends Component{
		render(){
			return (
				<div>
					<h1>Movie</h1>
				</div>
			);
		}
	}

	export default Movie;
```

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

```jsx
	import './App.css';

	// Importar componente (Movie).
	import Movie from "./hoc/movie";

	function App() {
		// Retorna el componente con un identificador.
		return <Movie id={1}/>
	}

	export default App;
```