### ======================================== ###
###### ===--- Ejecutar Componentes ---=== ######
### ======================================== ###

###### --- --- --- --- --- --- {proyecto}/src/components/obtener.jsx --- --- --- --- --- --- ######

<!-- Tenemos un componente. -->

```jsx
	import React, { Component } from "react";

	export default class Obtener extends Component {

	    render() {
	        return (
	        	<div>

	        		{/* Mapear las funciones */}
	        		<div>
	        			{ this.props.obtenerFunciones().map((Funcion, index) => (
	        				// Ejecutamos la funcion y no olvidemos el (key) por el map.
	        				// Cada funcion imprime el XML aqui.
	        				<Funcion key={ index }/>
	        			)) }
	        		</div>

	        		{/* Ejecutar funcion */}
	        		<this.props.obtenerComponente/>
	        	</div>
	        );
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/src/components/pasar.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	// Importamos componente.
	import Obtener from "./obtener";

	export default class Pasar extends Component {

		// [Function, Function, Function, Function]
		obtenerFunciones(){
			return [
				// Tenemos funciones anonimas que devuelven XML.
				() => <div className="mi-clase"> {/* ... */} </div>, 
				() => <div className="mi-clase"> {/* ... */} </div>, 
				() => <div className="mi-clase"> {/* ... */} </div>, 
				// Otra.
				() => {
					return (
						<div className="mi-clase">
							{/* Mapeamos los datos de este componente. */}
							{ this.props.nombres.map((nombre, index) => (
								// No olvidemos que (key) es necesario al mapear datos.
								<span key={ index }>{ nombre }</span>
							)) }
						</div>
					);
				}
			];
		}

		// Otro metodo que retorna XML.
		obtenerComponente(){
			return <div></div>
		}

	    render() {
	        return (
	        	<div>
	        		<Obtener 
	        			// Puede ser asi.
	        			componentes={ this.obtenerFunciones } 
	        			componente={ this.obtenerComponente }

	        			// (bind), asegura el contexto de (this).
	        			// NOTA: Cada vez que se renderiza el componente se instancia cada funcion.
	        			componentes={ this.obtenerFunciones.bind(this) } 
	        			componente={ this.obtenerComponente.bind(this) }
	        		/>
	        	</div>
	        );
	    }
	}
```