### ==================================== ###
###### ===--- Estilos globales ---=== ######
### ==================================== ###

###### --- --- --- --- --- --- {proyecto}/src/estilos/card.css --- --- --- --- --- --- ######

<!-- Crea un archivo dentro de la carpeta (src), en este caso creamos una carpeta llamada (estilos). -->

```css
	/* Colocamos nuestras clases. */
	.card{
		margin: 1rem;
		padding: 1rem;
		background-color: #fff;
		box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 10%);
		border-radius: .3rem;
	}

		.card-header{
			text-align: center;
			font-size: 3rem;
			letter-spacing: 0.1rem;
		}

		.card-body{
			text-align: justify;
			line-height: 3rem;
			letter-spacing: 0.1rem;
		}
```

###### --- --- --- --- --- --- {proyecto}/src/components/card.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	// Importar el archivo de estilos en el componente que quieras.
	import "estilos/card.css";

	class Card extends Component{
		render(){
			return (
				<article className="card">

					{/* Colocar los nombres de las clases a utilizar. */}
					<dl>
						<dt className="card-header">
							<h1>Titulo</h1>
						</dt>
						<dd className="cardBody">
							<p>Lorem ipsum dolor, sit amet consectetur.</p>
						</dd>
					</dl>

					{/* Esta sintaxis tambien es completamente valida. */}
					<p style={ {backgroundColor: "red", padding: "10px"} }>En linea</p>

				</article>
			);
		}
	}

	export default Card;
```

# ------------------------------- #
# ------ Estilos embebidos ------ #
# ------------------------------- #

```jsx
	import React, { Component } from "react";

	class Card extends Component{
		render(){
			return (
				<article className="card">

					{/* Esta sintaxis tambien es completamente valida. */}
					<p style={ {
						backgroundColor: "red", 
						padding: "10px"
					} }>
						En linea
					</p>

				</article>
			);
		}
	}

	export default Card;
```