### ======================================== ###
###### ===--- Uso de (referencias) ---=== ######
### ======================================== ###

Nos aseguramos de que las propiedades contengan su valor siempre al obtenerlas del DOM.

# ------------------- #
# ------ Clase ------ #
# ------------------- #

<!-- Ejemplo si queremos almacenar un DIV que permanezca inmutable. -->

```jsx
	import React, { Component } from "react";

	export default class Componente extends Component
	{
		state = {
			// Se crea una referencia.
			inputRef: React.createRef();
		}

		enfocarInput(){
			// Accedemos al (current) que es el elemento.
			if(this.inputRef.current){
				this.inputRef.current.focus();
			}
		}

		render(){
			return (
				<div>
					{/* Current obtiene su valor, (el input). */}
			        <input ref={this.inputRef} type="text" />

			        <button onClick={this.focusInput}>Enfocar Input</button>
				</div>
			);
		}
	}
```

# ----------------------- #
# ------ Funcional ------ #
# ----------------------- #

```jsx
	// Nos importamos (useRef).
	import React, { useRef } from 'react';

	function FunctionalComponent() {
		// Declaramos una referencia.
		const inputRef = useRef(null);

		const focusInput = () => {
			// Acceder al input y enfocarlo.
			if(inputRef.current) inputRef.current.focus();
		};

		return (
			<div>
				{/* La referencia obtiene su valor inmutable, (el input). */}
				<input ref={inputRef} type="text" />

				<button onClick={focusInput}>Enfocar Input</button>
			</div>
		);
	}

	export default FunctionalComponent;
```

Otra forma de acerlo.

```jsx
	// Nos importamos (useEffect).
	import React, { useRef, useEffect } from 'react';

	function FunctionalComponent() {
		const inputRef = useRef(null);

		useEffect(() => {
			// Asiganamos el valor a (current).
			inputRef.current = document.getElementById("idReferencia");
		}, []);

		return (
			<div>
				<input id="idReferencia" type="text" />

				{/* Directamente utilizamos (inputRef.current) que es el input. */}
				<button onClick={ () => inputRef.current.focus() }>Enfocar Input</button>
			</div>
		);
	}

	export default FunctionalComponent;
```