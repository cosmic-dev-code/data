### ========================= ###
###### ===--- Clase ---=== ######
### ========================= ###

```jsx
	import React, { Component } from "react";

	// Obtener los articulos.
	export default class GrupoLista extends Component{

		// Propiedad para manejar filtros.
		state = {
			filtrados: []
		}

		handleFiltrar(event){
			// Cuando la variable (filtrados) se actualize, el componente se renderiza.
			this.setState(
				// Setear solo los articulos que cumplan con la regla.
				filtrados: this.props.articulos.filter(articulo => {
					return (articulo.name.includes(event.target.value));
				})
			);
		}

		render(){
			if(this.state.filtrados.length > 0){
				return (
					<article>
						<ul className="lista">
							{/* Imprimir los articulos filtrados */}
							{this.state.filtrados.map(articulo => (
								<li key={articulo.id} className="item">{articulo.name}</li>
							))}
						</ul>
						<div>
							{/* El evento se escucha y se renderiza el componente por el (set) del (state).*/}
							<input type="text" onKeyUp={this.handleFiltrar}>
						</div>
					</article>
				);
			}

			return (
				<h1 className="empty">No hay articulos a mostrar</h1>
			);
		}
	}
```

### ============================= ###
###### ===--- Funcional ---=== ######
### ============================= ###

```jsx
	import React, { useState } from "react";

	// Obtener los articulos.
	function GrupoLista({ articulos }){

		// Variable para manejar filtros.
		const [filtrados, setFiltrados] = useState([]);

		function handleFiltrar(event){
			// Cuando la variable (filtrados) se actualize, el componente se renderiza.
			setFiltrados(
				// Setear solo los articulos que cumplan con la regla.
				articulos.filter(articulo => {
					return (articulo.name.includes(event.target.value));
				})
			);
		}

		if(filtrados.length > 0){
			return (
				<article>
					<ul className="lista">
						{/* Imprimir los articulos filtrados */}
						{filtrados.map(articulo => (
							<li key={articulo.id} className="item">
								{articulo.name}
							</li>
						))}
					</ul>
					<div>
						{/* El evento se escucha y se renderiza el componente por el (set) del (state).*/}
						<input type="text" onKeyUp={handleFiltrar}>
					</div>
				</article>
			);
		}

		return (
			<h1 className="empty">No hay articulos a mostrar</h1>
		);
	}

	export default GrupoLista;
```

### ============================ ###
###### ===--- Ejecutar ---=== ######
### ============================ ###

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

```jsx
	import logo from './logo.svg';
	import './App.css';

	// Importar la funcion (hook).
	import GrupoLista from "./components/group-lista";

	// Datos a enviar.
	const articulos = [
		{id: 1, name: "Uno"}, 
		{id: 2, name: "Dos"}
	];

	function App() {
		return (
			<div className="App">

				{/* Mandar a llamar componente con datos. */}
				<GrupoLista articulos={articulos}/>

			</div>
		);
	}

	export default App;
```