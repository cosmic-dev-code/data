### ========================= ###
###### ===--- Props ---=== ######
### ========================= ###

###### --- --- --- --- --- --- {proyecto}/src/components/contador.jsx --- --- --- --- --- --- ######

```jsx
	import React from "react";

	export default function Contador(props){

		/**
		 * Es el objeto que contiene todos los atributos y valores pasados al componente.
		 * 
		 * <Contador value={10} nombre="Brandon"/>
		 */
		props.value; // 10
		props.nombre; // "Brandon"

		return (
			<div>
				<p>{props.nombre} tiene {props.value} año(s).</p>
			</div>
		);
	}
```

<!-- Otra forma de hacerlo. -->

```jsx
	import React from "react";

	export default function Contador({ value, nombre }){
		// ...
	}
```

### ======================== ###
###### ===--- Slot ---=== ######
### ======================== ###

```jsx
	import React from "react";

	// Extraes de (props.children).
	export default function Contador({ children }){

		return (
			<>
				{/* (children) contiene todo el codigo HTML que se inyecta al componente. */}
				{ children }
			</>
		);
	}
```