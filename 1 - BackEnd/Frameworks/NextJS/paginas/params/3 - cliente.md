### ====================================== ###
###### ===--- Componente cliente ---=== ######
### ====================================== ###

<!-- En el cliente se utiliza (useParams). -->

###### --- --- --- --- --- --- {proyecto}/src/app/blog/[slug]/[id]/page.js --- --- --- --- --- --- ######

```jsx
	// Declarado como cliente.
	"use client";

	// Importamos biblioteca necesaria.
	import { useParams } from 'next/navigation';

	export default async function Page(){

		// Obtenemos los parametros.
		const { slug, id } = useParams();

		return (
			<div>
				{/* Renderizar ... */}
			</div>
		);
	}
```