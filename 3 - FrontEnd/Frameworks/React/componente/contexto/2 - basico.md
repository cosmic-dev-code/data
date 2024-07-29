### =========================== ###
###### ===--- Ejemplo ---=== ######
### =========================== ###

###### --- --- --- --- --- --- {proyecto}/src/context/usuarioContext.js --- --- --- --- --- --- ######

<!-- Este es el archivo JS que va a manejar el contexto. -->

```js
	import React from "react";

	// Creamos un contexto llamado (UsuarioContext).
	const UsuarioContext = React.createContext();

	// Definir el contexto y exportarlo.

	UsuarioContext.displayName = "UsuarioContext";

	export default UsuarioContext;
```

###### --- --- --- --- --- --- {proyecto}/src/context/listaPelicula.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	// Importar el archivo del contexto.
	import UsuarioContext from "./usuarioContext";

	export class listaPelicula extends Component{
		render(){
			return (
				// (UsuarioContext.Consumer) permite consumir propiedades de un contexto, en este caso (UsuarioContexto).
				<UsuarioContext.Consumer>
					{ UsuarioContext => <h2>Pelicula de { UsuarioContext.nombre }</h2> }
				</UsuarioContext.Consumer>
			);
		}
	}

	export default listaPelicula;
```

###### --- --- --- --- --- --- {proyecto}/src/context/paginaPelicula.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	// Importamos el componente.
	import listaPelicula from "./listaPelicula";

	export class paginaPelicula extends Component{
		render(){
			return (
				<div>
					{/* Renderizar componente. */}
					<listaPelicula/>
				</div>
			);
		}
	}

	export default paginaPelicula;
```

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";
	import './App.css';

	// Importar el componente (paginaPelicula) que renderiza el componente (listaPelicula).
	import paginaPelicula from "./context/paginaPelicula";

	// Importar el contexto.
	import UsuarioContext from "./context/usuarioContext";

	class App extends Component{
		state = {
			// Este es el objeto que se dara por valor al (contexto).
			usuarioActual: {
				nombre: "Brandon"
			}
		}

		render(){
			return (
				// (UsuarioContext.Provider) permite darle valores a un contexto por medio del atributo (value).

				/* En este caso, el valor del contexto es el objeto (usuarioActual) el cual utiliza el componente 
				(listaPelicula) apesar de ser llamado desde (paginaPelicula). */
				<UsuarioContext.Provider value={this.state.usuarioActual}>
					<div>
						{/* Renderizar componente. */}
						<paginaPelicula/>
					</div>
				</UsuarioContext.Provider>
			);
		}
	}

	/* NOTA: De esta manera El componente (App) no debe pasarle el objeto a (paginaPelicula) atraves de 
	sus [props] y este a su vez a (listaPelicula).

	Sino que (listaPelicua) accede directamente al valor del contexto. */

	export default App;
```