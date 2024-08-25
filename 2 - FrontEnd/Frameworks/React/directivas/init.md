###### --- --- --- --- --- --- {proyecto}/src/pages/usuarios.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";
	import "../usuarios.css";

	// Importamos la libreria (axios) para hacer peticiones.
	import axios from "axios";

	class Usuarios extends Component{

		/* Estos metodos setan los que le daran los valores iniciales al componente (props).
		Lo que se retorne sera lo que tendra.

		// ------------------------ //
		// ------ Al iniciar ------ //
		// ------------------------ //

		NOTA: Esta forma a quedado obsoleta en las utimas versiones de React a partir de la 16.3 */
		static async getInitialProps(){
			try{
				const data = await axios.get("https://api.github.com/users");

				// props.usuarios
				return {usuarios: data};
			}catch(error){
				// props.error
				return {error: error};
			}
		}

		async getStaticProps(){
			// Para obtener los datos antes de la ejecucion, (para componentes que solo muestran informacion).
		}
		
		getStaticProps(){}

		// -------------------------- //
		// ------ En ejecucion ------ //
		// -------------------------- //

		async getServerSideProps(){
			// Para obtener los datos en tiempo de ejecucion, (para componentes que obtendran datos en tiempo real).
		}

		getServerSideProps(){}

		// ------------------------- //
		// ------ Renderizado ------ //
		// ------------------------- //

		// Validar lo que obtuvo el componente inicialmente en sus (props).
		render(){
			// Si en el componente se tuvo un error, se imprime.
			if(this.props.error){
				return (
					<div>
						<span>Error: {this.props.error.message}</span>
					</div>
				);
			}

			return (
				<section>
					<div>
						<h1>Usuarios</h1>
					</div>
					{/* Mapear los datos. */}
					{this.props.usuarios.map((usuario, index) => (
						<div index={index} className="fila">
							<picture>
								<img src={usuario.image} width="50" height="50">
							</picture>
							<figcaption>
								<h2>Usuario: {usuario.names}</h2>
								<span className="block">Id {usuario.id}</span>
								<span className="block">Correo {usuario.mail}</span>
							</figcaption>
						</div>
					))}
				</section>
			);
		}
	}


	export default Usuarios;
```