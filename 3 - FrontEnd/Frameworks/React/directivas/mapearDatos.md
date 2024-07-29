### ================================== ###
###### ===--- Mapeo de datos ---=== ######
### ================================== ###

###### --- --- --- --- --- --- {proyecto}/src/components/libros.jsx --- --- --- --- --- --- ######

<!-- Imaginemos que tenemos un componente -->

```jsx
	import React, { Component } from "react";

	// Imaginemos que importamos un servicio que retorna los datos.
	import { getLibros } from "../services/servicioLibros";

	class Libros extends Component{
		state = {
			// Obtenemos los datos.
			libros: getLibros()
		};

		render(){
			return (
				<table className="table">
					<thead>
						<tr>
							<th>Titulo</th>
							<th>Genero</th>
							<th>Autor</th>
						</tr>
					</thead>
					<tbody>
						{/* Iteramos los datos imprimiendo cada uno. */}
						{ this.state.libros.map(libro => {
							return (
								<tr>
									<td>{ libro.titulo }</td>
									<td>{ libro.genero }</td>
									<td>{ libro.autor }</td>
								</tr>
							);
						}) }

						{/* Es lo mismo, (en una linea sin utilizar llaves). */}
						{ this.state.libros.map(libro => (
							<tr>
								<td>{ libro.titulo }</td>
								<td>{ libro.genero }</td>
								<td>{ libro.autor }</td>
							</tr>
						)) }
						{ this.state.libros.map(libro => 
							<tr>
								<td>{ libro.titulo }</td>
								<td>{ libro.genero }</td>
								<td>{ libro.autor }</td>
							</tr>
						) }
					</tbody>
				</table>
			);
		}
	}

	export default Libros;
```

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

<!-- Importar hacia (App.jsx). -->

```jsx
	import logo from './logo.svg';
	import './App.css';

	// Importamos el componente.
	import Libros from "./componets/libros";

	function App() {
		return (
			<div className="App">

				{/* Renderizar componente. */}
				<Libros/>

			</div>
		);
	}

	export default App;
```