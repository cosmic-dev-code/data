###### --- --- --- --- --- --- {proyecto}/src/components/my-component.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	class MyComponent extends Component {

	    state = {
	    	valor: this.props.value
	    };

	    // Metodo que cambia el valor de (state.valor).
	    incremento = () => {
	        this.setState({
	        	valor: (this.state.valor + 1)
	        });
	    };

	    // De acuerdo al valor del (state.valor) se devuelve una clase.
	    obtenerClase(){
	    	return (this.state.valor > 18) ? "btn-blue" : "btn-red";
	    }

	    /**
	     * NOTA: Dado que (class) es una palabra reservada en JavaScript, debemos utilizar (className) para 
	     * referirnos al atributo de clase de una etiqueta HTML.
	     */

	    render() {
	        return (
	            <div>
	            	{/* (className) representa (class), y esta recibe la clase que se retorna del metodo, 
	            	por lo que la clase cambiara de forma dinamica durante el periodo de ejecucion. */}
	                <div className={ this.obtenerClase() }>
	                    <button onClick={ this.incremento }>Incrementar</button>
	                </div>
	            </div>
	        );
	    }
	}

	// NOTA: Debe exportarse el componente.
	export default MyComponent;
```