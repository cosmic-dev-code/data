### ===================================== ###
###### ===--- (getInitialProps) ---=== ######
### ===================================== ###

###### --- --- --- --- --- --- {proyecto}/src/pages/usuarios.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";
	import "../usuarios.css";

	// Importamos la libreria (axios) para hacer peticiones.
	import axios from "axios";

	// ...
```

<!-- Estos metodos daran valores iniciales al componente (props). -->
<!-- Los metodos pueden ser (asincronos). -->

# NOTA: Esta forma a quedado obsoleta en las utimas versiones de React a partir de la 16.3

```jsx
	import React, { Component } from "react";
	import "../usuarios.css";

	import axios from "axios";

	export default class Usuarios extends Component{

		// ------------------------ //
		// ------ Al iniciar ------ //
		// ------------------------ //

		// Dara valor inicial hidratando las props.
		static async getInitialProps(){
			try{
				const data = await axios.get("https://api.github.com/users");

				// props.usuarios
				return {usuarios: data};

			}catch(error){ return {error: error}; }
		}

		async getStaticProps(){
			// Para obtener los datos antes de la ejecucion.
			// (para componentes que solo muestran informacion).
		}

		// ------------------------- //
		// ------ Renderizado ------ //
		// ------------------------- //

		// Verificamos el valor de las props.
		
		render(){
			// Error de la promesa.
			if(this.props.error){
				return (
					<div>
						<span>Error: {this.props.error.message}</span>
					</div>
				);
			}

			// Datos devueltos.
			return (
				<>
					{/* Mapear los datos. */}
					{this.props.usuarios.map((usuario, index) => (
						// ...
					))}
				</>
			);
		}
	}
```

### ======================================== ###
###### ===--- (getServerSideProps) ---=== ######
### ======================================== ###

```jsx
	import React, { Component } from "react";
	import "../usuarios.css";

	import axios from "axios";

	class Usuarios extends Component{

		// -------------------------- //
		// ------ En ejecucion ------ //
		// -------------------------- //

		async getServerSideProps(){
			// Para obtener los datos en tiempo de ejecucion.
			// (para componentes que obtendran datos en tiempo real).
		}

		// ------------------------- //
		// ------ Renderizado ------ //
		// ------------------------- //

		// Hacer la validacion de las props.

		render(){
			// Error de la promesa.
			if(this.props.error){
				return (
					<div>
						<span>Error: {this.props.error.message}</span>
					</div>
				);
			}

			// Datos devueltos.
			return (
				<>
					{/* Mapear los datos. */}
					{this.props.usuarios.map((usuario, index) => (
						// ...
					))}
				</>
			);
		}
	}


	export default Usuarios;
```

### ============================= ###
###### ===--- Funcional ---=== ######
### ============================= ###

<!-- En el modo funcional suele ser distinto. -->

```jsx
	import React, { useEffect, useRef, useState } from "react";

	export default function MyComponent(){

		// Declarar variable.
		let [data, setData] = useState([]);

		// Al montarse en el DOM se ejecuta.
		useEffect(() => {

			// Funcion asincrona para setear una propiedad.
			let pep = async () => {
				let result = await fetch("https://www.example.com/data");
				let response = await result.json();

				setData(response);
			}

			// Mandar a pedir los datos al servidor.
			pep();

		// Sin dependencias (useEffect) se ejecuta solo una vez.
		}, [])

		return (
			<div>
				{ data.map(record => (
					// ...
				)) }
			</div>
		);
	}
```

# NOTA: El (useEffect) no puede recibir una funcion asincrona, por lo que debes crear 
# una funcion asincrona aparte y mandarla a llamar.