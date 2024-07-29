###### --- --- --- --- --- --- {proyecto}/src/components/my-component.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	class MyComponent extends Component{

		// -------------------------------------------------- //
		// ------ Metodos y propiedades del componente ------ //
		// -------------------------------------------------- //

		state = {
			numero: 10, 
			input: "text"
		};

		getValue(){
			return this.state.numero !== 0 ? `value="${this.state.numero}"` : 'value="null"';
		};

		printDOM(){
			return <p>Hola mundo</p>;
		}

		render(){

			// --------------------------------- //
			// ------ Imprimir en el HTML ------ //
			// --------------------------------- //

			return (
				<div>
					{/* Imprime directamente valores JS. */}
					
					<div>El numero es {this.state.numero}</div>

					{/* Imprimir valores y atributos. */}

					<div>
						<button className={ this.state.numero == 10 ? "clase-1" : "clase-2" }>Boton</button>
					</div>

					<input type={ this.state.input } { getValue() }>

					{/* Imprimir codigo HTML. */}

					<spa>{ printDOM() }</spa>

				</div>
			);
		}
	}

	export default MyComponent;
```