###### --- --- --- --- --- --- {proyecto}/src/components/grupo-lista.jsx --- --- --- --- --- --- ######

```jsx
	import React, { useState } from "react";

	function GrupoLista(props){
		// Declarar una variable que maneje los filtros, un (arreglo).
		const [filtrados, setFiltrados] = useState([]);
		// Obtener los articulos.
		const { articulos } = props;

		// Cuando la variable (filtrados) se actualize, el componente se renderiza.
		function handleFiltrar(event){
			setFiltrados(
				// Extraer solo los articulos que cumplan con la regla.
				articulos.filter(articulo => {
					return (articulo.name.includes(event.target.value));
				})
			);
		}

		if(filtrados.length > 0){
			return (
				// Imprimir los articulos filtrados.
				<article>
					<ul className="lista">
						{filtrados.map(articulo => (
							<li key={articulo.id} className="item">
								{articulo.name}
							</li>
						))}
					</ul>
					<div>
						{/* El evento se escucha y se renderiza el componente por el (set) del (state). */}
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