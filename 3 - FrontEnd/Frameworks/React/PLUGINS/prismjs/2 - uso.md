### =================================== ###
###### ===--- Colorear codigo ---=== ######
### =================================== ###

###### --- --- --- --- --- --- {proyecto}/src/components/my-component.jsx --- --- --- --- --- --- ######

```jsx
	import React, { useEffect } from "react";

	// Ahora importamos (Prism).
	import Prism from 'prismjs';

	// Importamos los estilos de (Prism).
	import 'prismjs/themes/prism.css';
	// Estos son los estilos adicionales de Prism para habilitar el (modo oscuro).
	import 'prismjs/themes/prism-okaidia.css';

	export default MyComponent = () => {
		useEffect(() => {

			// Cuando todo el contenido se renderiza, activamos los estilos de Prism.
			Prism.highlightAll();

		}, []);

		return (
			// En la etiqueta (code) coloca "language-{nombre del lenguaje a colorear}".
			<code className="language-js">
				function myFunction(){
					console.log("Text")
				}
			</code>
		);
	};
```