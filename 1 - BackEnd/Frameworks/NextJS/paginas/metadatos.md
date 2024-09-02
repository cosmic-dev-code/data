### ============================= ###
###### ===--- Metadatos ---=== ######
### ============================= ###

###### --- --- --- --- --- --- {proyecto}/src/app/page.js --- --- --- --- --- --- ######

<!-- Pagina principal. -->

```jsx

	/**
	 * Aqui se manejan los metadatos de la pagina.
	 */
	export const metadata = {
		// Datos generales de la pagina
		title: "Mi titulo de cabecera",
		description: "Descripcion de la pagina", 
		// Palabras clave
		keywords: ["nextjs", "react", "web development"], 
		// Los meta robots.
		robots: {
			index: true,
			follow: true,
		},
	};

	export default function Home() {
		return (
			<main>
				<h1 className="text-3xl">Hola mundo</h1>
			</main>
		);
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/acerca/page.js --- --- --- --- --- --- ######

<!-- Pagina Acerca. -->

```jsx

	// Maneja sus propios metadatos de pagina.
	export const metadata = {
		title: "Mi titulo de cabecera",
		description: "Descripcion de la pagina", 
		keywords: ["nextjs", "react", "web development"], 
		robots: {
			index: true,
			follow: true,
		},
	};

	export default function AcercaPage() {
		return (
			<main>
				<h1 className="text-3xl">Hola mundo</h1>
			</main>
		);
	}
```

### ============================== ###
###### ===--- Parametros ---=== ######
### ============================== ###

<!-- Necesitas setear los metadatos dependiendo de los parametros??? -->

```jsx

	// (generateMetadata) recibe los parametros.
	export async function generateMetadata({ params }) {
		// Obtenemos registro.
		const { id } = params;

		let registro = await obtenerRegistroDB(id);

		// Setear metadatos.
		return {
			title: registro.title,
			description: registro.description,
			keywords: registro.keywords.split(", "), // array
		}
	}

	export default async function Page({ params }){
		// Flujo normal de la pagina.

		return (
			<div>
				{/* ... */}
			</div>
		);
	}
```