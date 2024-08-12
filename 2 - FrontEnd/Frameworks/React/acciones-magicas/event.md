### ================================ ###
###### ===--- Como (clase) ---=== ######
### ================================ ###

###### --- --- --- --- --- --- {proyecto}/src/components/formulario.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	class Formulario extends Component{

		// Metodo que recibira el evento del click.
		handleClick(event){

			// Manipular el elemento que disparo el evento.
			event.target;
		}

		render(){
			return (
				<div>

					{/* (onClick) ejecuta el metodo que recibe el parametro por defecto. */}
					<input type="button" value="Click" onClick={this.handleClick}>

					{/* Otra manera de acerlo. */}
					<input type="button" value="Click" onClick={event => {
						// Otros procesos...
						this.handleClick(event);
					}}>

				</div>
			);
		}
	}

	export default Formulario;
```

### ======================================= ###
###### ===--- Como (funcion Hook) ---=== ######
### ======================================= ###

###### --- --- --- --- --- --- {proyecto}/src/components/formulario.jsx --- --- --- --- --- --- ######

```jsx
	import React, { useState } from "react";

	function Formulario() {

	    // Funcion que recibe el evento.
	    function handleClick(event) {
	        // Manipular el elemento que disparo el evento.
	        event.target;
	    }

	    return (
	        <div>
	            {/* (onClick) ejecuta la funcion que recibe el parametro por defecto. */}
	            <input type="button" value="Click" onClick={handleClick} />

	            {/* Otra manera de acerlo. */}
	            <input
	                type="button"
	                value="Click"
	                onClick={(event) => {
	                    // Otros procesos...
	                    handleClick(event);
	                }}
	            />
	        </div>
	    );
	}

	export default Formulario;
```