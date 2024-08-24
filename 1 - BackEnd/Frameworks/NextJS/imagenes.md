### ============================ ###
###### ===--- Imagenes ---=== ######
### ============================ ###

<!-- Fuera de la carpeta (src) se encuentra la carpeta (public), ahi guardaremos las imagenes -->
	./public
		imagen.png
	./src
		./app
			page.js

### ====================================== ###
###### ===--- Componente (Image) ---=== ######
### ====================================== ###

<!-- El modulo (Image) esta creado para optimizar la carga de imagenes y se posiciona en la carpeta (public). -->

# NOTA: Es obligatorio utilizarlo y no utilizar la etiqueta IMG.

###### --- --- --- --- --- --- {proyecto}/src/app/page.js --- --- --- --- --- --- ######

```jsx
	// Ahora importamos el modula (Image).
	import Image from "next/image";

	export default function Home() {
		return (
			<main>

				{/* Forma (CORRECTA) de llamar una imagen. */}

				<Image 
					// Se posiciona en la carpeta (public)/imagen.png
					// NOTA: Es necesario que lleve la (/) inicial para indicar que hablamos de la carpeta (public).
					src="/imagen.png" 

					// Define la (calidad) de la imagen al servirse como HTML, es decir el (size) del archivo.
					// Ejemplo: Calidad de (500px) de ancho para optimizar.
					width={500} height={500}

					/* Si quieres concervar un (size) grande, por ejemplo (2000px) pero quieres concervar 
					la optimizacion es necesario utilizar el atributo (quality).  */
					quality={ 75 } // 1 - 100 % de calidad.

					// Podemos colocar su Size real con clases, (Esto no es la calidad).
					className="w-1/2"
				/>

				{/* Forma (INCORRECTA) de llamar una imagen. */}

				{/* Aunque funciona, Next lo califica como incorrecto. */}
				<img src="/imagen.png">

			</main>
		);
	}
```