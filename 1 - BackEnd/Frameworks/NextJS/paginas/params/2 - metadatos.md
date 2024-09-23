### ============================= ###
###### ===--- Metadatos ---=== ######
### ============================= ###

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