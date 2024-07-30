### ========================= ###
###### ===--- Image ---=== ######
### ========================= ###

Como optimizacion tenemos las imagenes.

Fuera de la carpeta [](src) se encuentra la carpeta [](public), es ahi donde guardaremos nuestras imagenes.
	./public
		imagen.png
	./src
		./app
			page.js


###### --- --- --- --- --- --- {proyecto}/src/app/page.js --- --- --- --- --- --- ######

El modulo [](Image) esta creado para optimizar la carga de imagenes y se posiciona en la carpeta [](public).

```jsx
	// Ahora importamos el modula (Image).
	import Image from "next/image";

	export default function Home() {
		return (
			<main>
				<Image 
					src="/imagen.png" // Se posiciona en la carpeta (public)/imagen.png 
					width={500} height={500} // Obligatiorios para evitar malas practicas.
					// Clases comunes.
					alt="Imagen"
					className="object-cover"
				/>
			</main>
		);
	}
```