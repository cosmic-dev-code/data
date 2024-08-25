### ======================================== ###
###### ===--- Ejecutar Componentes ---=== ######
### ======================================== ###

###### --- --- --- --- --- --- {proyecto}/src/components/obtener.jsx --- --- --- --- --- --- ######

<!-- Tenemos un componente. -->

```jsx
	import React from "react";

	// Recibe un arreglo de funciones y una funcion.
	export default function Obtener({ obtenerFunciones, obtenerComponente }) {
        return (
        	<div>

        		{/* Mapear las funciones */}
        		<div>
        			{ obtenerFunciones().map((Funcion, index) => (
        				// Ejecutamos la funcion y no olvidemos el (key) por el map.
        				// Cada funcion imprime el XML aqui.
        				<Funcion key={ index }/>
        			)) }
        		</div>

        		{/* Ejecutar funcion */}
        		<obtenerComponente/>
        	</div>
        );
	}
```

###### --- --- --- --- --- --- {proyecto}/src/components/pasar.jsx --- --- --- --- --- --- ######

```jsx
	import React from "react";

	// Importamos componente.
	import Obtener from "./obtener";

	export default function Pasar({ nombres }){

		// [Function, Function, Function, Function]
		function obtenerFunciones(){
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
							{ nombres.map((nombre, index) => (
								// No olvidemos que (key) es necesario al mapear datos.
								<span key={ index }>{ nombre }</span>
							)) }
						</div>
					);
				}
			];
		}

		// Otro metodo que retorna XML.
		function obtenerComponente(){
			return <div></div>
		}

        return (
        	<div>
        		<Obtener 
        			// Puede ser asi.
        			componentes={ obtenerFunciones } 
        			componente={ obtenerComponente }
        		/>
        	</div>
        );
	}
```