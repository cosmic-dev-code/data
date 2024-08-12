### ============================== ###
###### ===--- Hidratacion ---=== ######
### =============================== ###

###### --- --- --- --- --- --- {proyecto}/src/components/my-component.jsx --- --- --- --- --- --- ######

<!-- Para hidratar un componente es necesario hacerlo de la siguiente manera. -->

```jsx
	import React, { Component } from "react";

	class MyComponent extends Component {
		// (state).
		// Representa al componente, aqui se definen todas las propiedades del mismo.
	    state = {
	    	// Propiedad del componente.
	        contador: 0
	    };

	    /**
	     * Aqui se definen los metodos del componente.
	     */

	    incremento = () => {
	    	// Indicamos que vamos a modificar el (state) === (componente).
	    	/* NOTA: (setState) permite hacerle saber al componente cuando una propiedad ha sido modificada, 
	    	de manera que puede actualizarla. */
	        this.setState({
	        	// Modificamos la propiedad que queremos.
	        	contador: this.state.contador + 1
	        });
	    };

	    obtener(){
	    	// Obtenemos una propiedad especifica del componente, (state).
	        const { contador } = this.state; //  this.state.contador
	        return contador <= 0 ? "Cero" : contador;
	    }

	    // NOTA: En React al momento de escribir una funcion debe respetarse la siguiente sintaxis.
	    // NOTA: Importante que todas las etiquetas HTML esten dentro de una etiqueta padre.
	    render() {
	        return (
	            <div>
	                <div>
	                	{/* Se manda a llamar el metodo desde que se renderiza el componente. */}
	                    <h1>{this.obtener()}</h1>
	                </div>
	                <div>
	                	{/* Podemos modificar la propiedad desde aqui. */}
	                	{this.setState({contador: 10})}
	                </div>
	                <div>
	                	{/* Se da como referencia el metodo (incremento) al dar click, para modificar el state. */}
	                    <button onClick={ this.incremento }>Incrementar</button>
	                </div>
	            </div>
	        );
	    }
	}

	// NOTA: Debe exportarse el componente.
	export default MyComponent;
```

###### --- --- --- --- --- --- {proyecto}/src/index.jsx --- --- --- --- --- --- ######

```jsx
	import React from 'react';
	import ReactDOM from 'react-dom';

	import reportWebVitals from "./reportWebVitals"

	// Importar el componente creado.
	import MyComponent from "./componets/my-component";

	ReactDOM.render(
		<React.StrictMode>

			{/* Renderizar componente. */}
			<MyComponent/>

		</React.StrictMode>,
		document.getElementById('root')
	);

	reportWebVitals();
```