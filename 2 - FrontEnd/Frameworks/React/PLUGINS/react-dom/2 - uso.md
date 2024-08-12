### ========================================== ###
###### ===--- Renderizar codigo HTML ---=== ######
### ========================================== ###

###### --- --- --- --- --- --- {proyecto}/src/components/my-component.jsx --- --- --- --- --- --- ######

```jsx
	import React, { useEffect } from "react";

	export default MyComponent = () => {

		// Luego de renderizar el codigo HTML, (render).
		useEffect(() => {

			// Extramemos un elemento.
			const article = document.getElementById("idArticle");

			// Esto es ineficiente, ya que React no lo renderiza correctamente.
			article.innerHTML = (`
				<div>
					<h3>Hello world</h3>
				</div>
			`);

		}, []);

		return (
			<main>
				<article id="idArticle"></article>
			</main>
		);
	};
```

###### --- --- --- --- --- --- {proyecto}/src/components/my-component.jsx --- --- --- --- --- --- ######

```jsx
	import React, { useEffect } from "react";

	// Importamos (React DOM).
	import { createRoot } from "react-dom/client";

	export default MyComponent = () => {

		useEffect(() => {

			const article = document.getElementById("idArticle");

			// Creamos una raiz.
			let root = createRoot(article);

			// Esto si se renderiza correctamente.
			root.render(
				<div>
					<h3>Hello world</h3>
				</div>
			);

			// Claro que tambien podria ser.

			createRoot(article).render(<span>Hello</span>);
		}, []);

		return (
			<main>
				<article id="idArticle"></article>
			</main>
		);
	};
```