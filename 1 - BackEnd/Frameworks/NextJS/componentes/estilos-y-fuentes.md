### =========================== ###
###### ===--- Estilos ---=== ######
### =========================== ###

<!-- Podemos importar estilos de manera independiente e inyectarlas como clases o estilos embebidos. -->

Creamos un archivo con la siguiente convencion: 
<!-- 
	--- (nombre.module.css): Donde (Nombre) lo reemplazaremos por (cajas), por dar el ejemplo.
-->

###### --- --- --- --- --- --- {proyecto}/src/app/estilos/cajas.module.css --- --- --- --- --- --- ######

```css
	.box{
	    @apply w-10 h-10 bg-red-500 border-2 border-solid border-black m-10 p-10
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/page.js --- --- --- --- --- --- ######

<!-- Ahora procedemos a importar. -->

```jsx
	import styles from "./my.module.css";

	export default function Home() {
		return (
			<main>

				{/* Podemos accederdirectamente a la clase (box) del archivo (styles). */}
				<div class={ `${styles.box} otras-clases` }></div>

				{/* O inyectarlo como codigo embebido. */}
				<div style={ styles.box }></div>

			</main>
		);
	}
```

### =========================== ###
###### ===--- Fuentes ---=== ######
### =========================== ###

<!-- Next JS tiene un modulo que nos permite importar cualquier fuente desde Google Fonts. -->
<!-- Creamos un archivo, por ejemplo (fuentes.jsx). -->

###### --- --- --- --- --- --- {proyecto}/src/app/fuentes.jsx --- --- --- --- --- --- ######

```jsx
	// Extraemos nuestras fuentes.
	import { Montserrat } from "next/font/google";
	import { Bebas_Neue } from "next/font/google";

	// Seteamos sus valores y (exportamos).
	export const montserrat = Montserrat({ 
	    subsets: ['latin'], 
	    weight: ["100", "200", "300"] 
	});
	export const bebas = Bebas_Neue({ 
		subsets: ['latin'], 
		weight: "400" 
	});
```

###### --- --- --- --- --- --- {proyecto}/src/app/page.js --- --- --- --- --- --- ######

<!-- Ahora procedemos a importar. -->

```jsx
	// Importamos una o mas tipografias de nuestro archivo.
	import { montserrat } from "./fonts";

	export default function Home() {
		return (
			// Colocamos la la tipografia como clase, (antialiased) ayuda al rendimiento.
			<main className={`${montserrat.className} antialiased`}>

			{/* ... */}

			</main>
		);
	}
```