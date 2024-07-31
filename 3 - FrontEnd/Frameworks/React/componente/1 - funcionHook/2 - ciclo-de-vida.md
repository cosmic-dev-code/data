### ================================= ###
###### ===--- Ciclo de vida ---=== ######
### ================================= ###

```jsx
	// Importa (useEffect), (useRef), (useState).
	import React, { useEffect, useRef, useState } from "react";

	// Tenemos nuestra funcion, (puede ser flecha).
	export default MyComponent => {

        /**
         * (componentDidMount).
         * Se ejecuta (después de que) el componente (haya sido montado en el DOM).
         */
		useEffect(() => {
			// Normalmente aqui se hace (cambios) o (peticiones) para el componente.

			return () => {
		        /**
		         * (componentWillUnmount).
		         * Se ejecuta (antes de que) el componente (sea eliminado del DOM).
		         */
			}

		// Sin dependencias.
		}, []);

        /**
         * (componentDidUpdate).
         * Se ejecuta cada vez que se (actualiza el estado o las props del componente).
         */
		// Declara una propiedad (count) y su modificador (setCount), con valor por defecto (0).
		const [count, setCount] = useState(0);
		useEffect(() => {
			// Indica una dependencia a una propiedad, (se ejecuta cuando la propiedad cambia su valor).
		}, [count]);

        /**
         * (componentDidCatch).
         * Se ejecuta cuando se (produce un error durante el renderizado) del componente.
         */
		const errorRef = useRef(null);

		const componentDidCatch = (error, info) => {
		    console.log("Error durante el renderizado del componente: ", error);

		    // Se puede manejar el error aquí.
		    errorRef.current = error;
		};

		/**
		 * Equivalente al (render).
		 */
		return <div></div>

	};
```