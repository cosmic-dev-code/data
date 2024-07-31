### =============================== ###
###### ===--- Hidratacion ---=== ######
### =============================== ###

###### --- --- --- --- --- --- {proyecto}/src/components/contador.jsx --- --- --- --- --- --- ######

```jsx
	// Importamos React y el uso de (useState) para manejar los estados.
	import React, { useState } from "react";

	function Contador(){
		
		/**
		 * Propiedades.
		 */

		// Declaramos una variable y su funcion modificadora (set).
		// En este caso (useState) recibe como parametro el valor por defecto de la variable.
		var [valor, setContador] = useState(0);

		// nombre = "Brandon".
		var [nombre, setNombre] = useState("Brandon");

		/**
		 * Modificadores.
		 */

		function modificar(){
			// Modifica el valor de la variable (valor) y vuelve a renderizar el contenido XML.
			setContador(valor + 1);
			setContador(10);

			// Modifica la variable nombre.
			setNombre("Anthony");
		}

		/**
		 * Renderizado.
		 */

		return (
			<div>
				{/* Imprimir el valor. */}
				<h1>{nombre} tiene: {valor} dinero</h1>
				<div>
					{/* Asignar la referencia de la funcion, (como los metodos de un componente de clase). */}
					<button onClick={ modificar }>Incrementar</button>
				</div>
			</div>
		);
	}

	export default Contador;
```