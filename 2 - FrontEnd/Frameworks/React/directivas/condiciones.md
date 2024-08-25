### ================================= ###
###### ===--- Condicionales ---=== ######
### ================================= ###

###### --- --- --- --- --- --- {proyecto}/src/components/my-component.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	class MyComponent extends Component{

		state = {
			nombre: "Brandon", 
			edad: 24
		}

		// Una condicion en un metodo externo.
		getResult = function(){
			if(this.state.edad >= 18) return <h1 className="good">Eres mayor de edad</h1>
			else return <h1 className="bad">Eres menor de edad</h1>
		};

		// En el metodo render.
		render(){
			// Una condicion interna.
			if(this.state.nombre.length >= 6){
				return (
					<div>
						<h2>Muchas felicidades!</h2>
						<article>
							{/* Imprimimos el codigo HTML que retorna el metodo externo al render. */}
							{this.getResult()}
						</article>
					</div>
				);
			}

			// Resultado por defecto.
			return <h1>Tu nombre no cumple con los estandares.</h1>
		}
	}

	export default MyComponent;
```