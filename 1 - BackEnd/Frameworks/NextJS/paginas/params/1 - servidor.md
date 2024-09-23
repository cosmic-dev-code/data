### ======================================= ###
###### ===--- Componente Servidor ---=== ######
### ======================================= ###

# -------------------------- #
# ------ Un parametro ------ #
# -------------------------- #

<!-- Cuando se visita una pagina en Next JS, hay una forma de extraer los (parametros). -->

<!-- Digamos que tienes la siguiente declaracion. -->

	./public
		imagen.png
	./src
	----------------------------------------------- ( / ): Esta es la raiz.
		./app
			layout.js
			loading.js
			page.js
	----------------------------------------------- ( /[id] ): Pagina que recibe el param (id).
			./[id]
				page.js === index.html
				loading.js
				layout.js

<!-- 
	--- Archivos.
		--- {proyecto}/src/app/[id]/page.jsx
	--- URL
		--- www.example.com/{id}
	--- Ejemplo
		--- /blog/1
-->

<!-- Tienes una carpeta llamada [id], que recibe un parametro, (ruta dinamica). -->

###### --- --- --- --- --- --- {proyecto}/src/app/[id]/page.js --- --- --- --- --- --- ######

<!-- En su componente (Page.js) configuramos como recibira ese parametro. -->

```jsx
	
	// Recibe los parametros.
	export default async function Page({ params }) {
		// El (id) contiene lo que el usuario escribio en la url.
		const { id } = params;

		// Puedes utilizar el parametro en este componente de (servidor).
		let registro = await obtenerRegistroDB(id);

		return (
			<div>
				{/* Renderizar ... */}
			</div>
		);
	}
```

# --------------------------------- #
# ------ Mas de un parametro ------ #
# --------------------------------- #

<!-- 
	--- Archivos.
		--- {proyecto}/src/app/blog/[slug]/[id]/page.jsx
	--- URL
		--- www.example.com/blog/{slug}/{id}
	--- Ejemplo
		--- /blog/mi-primer-post/1
-->

###### --- --- --- --- --- --- {proyecto}/src/appblog/[slug]/[id]/page.tsx --- --- --- --- --- --- ######

```jsx
	
	// Recibe los parametros.
	export default async function Page({ params }) {

		// Extraemos declaraciones.
		const { slug, id } = params;

		return (
			<div>
				{/* Renderizar ... */}
			</div>
		);
	}
```

# -------------------------------- #
# ------ Parametro opcional ------ #
# -------------------------------- #

<!-- 
	--- Archivos.
		--- {proyecto}/src/app/blog/[[slug]]/page.jsx
	--- URL
		--- www.example.com/blog/{slug}
	--- Ejemplo
		--- /blog/my-first-post
		--- /blog/
-->

```jsx
	export default function Page({ params }) {

		// Extraemos el slug (opcional).
		const { slug } = params;

		return (
			<div>
				{
					// Quiza lo recibimos o no.
					slug ? (
						<h1>{/* ... */}</h1>
					) : (
						<h1>{/* ... */}</h1>
					)
				}
			</div>
		);
	}
```