### ==================================== ###
###### ===--- Estilos globales ---=== ######
### ==================================== ###

<!-- Suponiendo que tenemos un componente llamado (card). -->

###### --- --- --- --- --- --- {proyecto}/src/components/card.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	// Exporta el componente para ser llamada dentro de otro archivo.
	export default class Card extends Component{
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

				</article>
			);
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

```jsx
	import React from "react";
	// Los estilos globales se importan en la raiz de la aplicacion y afectan a todos los componentes.
	// Puede ser cualquier archivo CSS.
	import './myfile-css.css';

	// Importamos el componente.
	import Card from "./components/card";

	function App() {
		return (
			<div className="App">
				<header className="App-header">

					<Card/>

				</header>
			</div>
		);
	}

	export default App;
```

###### --- --- --- --- --- --- {proyecto}/src/myfile-css.css --- --- --- --- --- --- ######

<!-- Aqui es donde tenemos nuestros estilos generales CSS. -->

```css
	/* Damos estilos a las clases que se utilizan en los componentes. */
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

# NOTA: Si mandas a llamar un archivo CSS en un componente, este afectara al componente y a 
# todos los componenetes que se manden a llamar dentro del mismo.