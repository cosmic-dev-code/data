### ================================================== ###
###### ===--- Crear componente de paginacion ---=== ######
### ================================================== ###

###### --- --- --- --- --- --- {proyecto}/src/components/paginacion.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	// Importamos la libreria (lodash).
	import lodash from "lodash";

	const Paginacion = props => {
		// Obtener el numero de paginas y el tamaño de la pagina.
		const {conteo, dimPagina} = props;

		// Propiedades para detectar el numero de la pagina.
		const {cambioPagina, paginaActual} = props;

		// Calcular la distribucion de los articulos en las paginas.
		var conteoPagina = Math.ceil(conteo / dimPagina);

		// Cuando el numero de articulos no llena la pagina, no se muestra un conteo de pagina.
		if(conteoPagina === 1) return null;

		// Gestionar el rellenado de las paginas con los articulos.
		const paginas = lodash.range(1, conteoPagina + 1);

		return (
			<nav>
				<ul className="pagination">
					{/* Iterar botones de la paginacion. */}
					{ paginas.map(pagina => (
						// Podemos verificar si estamos en la pagina actual y dar uno u otra clase.
						<li key={pagina} className={ pagina === paginaActual ? "activo" : "normal" }>
							<a 
								className="page-link" 
								// Al dar clik cambia la pagina.
								onClick={() => cambioPagina(pagina)}
							>{pagina}</a>
						</li>
					)) }
				</ul>
			</nav>
		);
	};

	export default Paginacion;
```

### ==================================================== ###
###### ===--- Funcion para el acomodo de datos ---=== ######
### ==================================================== ###

<!-- Para separar un poco la logica, creamos una funcion externa para el acomodo de datos. -->

###### --- --- --- --- --- --- {proyecto}/src/paginate.js --- --- --- --- --- --- ######

```js
	// Importamos la libreria (lodash).
	import lodash from "lodash";

	export function paginate(articulos, numeroDePagina, totalElementos){
		// Numero de pagina por el total de elementos.
		const iniciarEnIndice = (numeroDePagina - 1) * totalElementos;

		// Regresar los valores acomodando las secciones por el.
		return lodash(articulos)
			// Tamaño.
			.slice(iniciarEnIndice)
			// Los valores por cada una.
			.take(totalElementos)
			.value();
	}
```

### ========================================== ###
###### ===--- Implementar paginacion ---=== ######
### ========================================== ###

<!-- Implementamos el componente de paginacion en otro componente. -->

###### --- --- --- --- --- --- {proyecto}/src/components/libros.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	// Imaginemos que importamos un servicio que retorna los datos.
	import { getLibros } from "../services/servicioLibros";

	// Importar componente de paginacion.
	import { Paginacion } from "./pagination";

	// Importar la funcion para el acomodo de los datos.
	import { paginate } from "../paginate";

	class Libros extends Component{
		state = {
			// Obtenemos los datos.
			libros: getLibros(), 

			// Tamaño y página actual.
			dimensionPagina: 4, 
			paginaActual: 1
		};

		// Escuachar el evento click del componente (Paginacion) y setear la pagina actual.
		handleCambioPagina = pagina => {
			this.setState({
				paginaActual: pagina
			});
		};

		render(){
			// Extraer longitud de los datos de la paginacion: contar = this.state.libros.length
			const {lenght: contar} = this.state.libros;

			if(contar === 0) return <p>No hay peliculas</p>

			// Crear paginacion de los elementos con la funcion importada (paginate).
			const librosPaginados = paginate(
				this.state.libros, 
				this.state.paginaActual, 
				this.state.dimensionPagina
			);

			return (
				// Colocamos el HTML dentro de un (fragmento) para detectarlo como un bloque de datos.
				<React.Fragment>
					
					<table className="table">
						<thead>
							<tr>
								<th>Titulo</th>
								<th>Genero</th>
								<th>Autor</th>
							</tr>
						</thead>
						<tbody>
							{/* Iteramos los datos paginados. */}
							{ librosPaginados.map(libro => 
								<tr>
									<td>{ libro.titulo }</td>
									<td>{ libro.genero }</td>
									<td>{ libro.autor }</td>
								</tr>
							) }
						</tbody>
					</table>

					{/* Mandamos a llamar el componente (Paginacion) y pasamos sus propiedades (props). */}
					<Paginacion 
						// Cantidad de paginas.
						conteo={contar} 
						// Dimension de pagina.
						dimPagina={this.state.dimensionPagina}
						// Pasar referencia de funcion para asignar la pagina al dar click.
						cambioPagina={this.handleCambioPagina}
						// Enviar pagina actual.
						paginaActual={this.state.paginaActual}
					/>

				</React.Fragment>
			);
		}
	}

	export default Libros;
```

### ============================================== ###
###### ===--- Mandar a llamar componente ---=== ######
### ============================================== ###

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

<!-- Importar hacia (App.jsx). -->

```jsx
	import React from "react";
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