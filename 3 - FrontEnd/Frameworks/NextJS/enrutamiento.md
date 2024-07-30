### ================================ ###
###### ===--- Enrutamiento ---=== ######
### ================================ ###

Cada ruta se define por tres cosas.
	--- Una carpeta con el nombre de la ruta.
	--- Un archivo llamado [](page.js) que es como el [](index.html) de esa ruta.
	--- Y si quieres un [](layout.js) que define el layout que tendras todas las paginas 
		desde esa ruta hacia abajo, de sus demas rutas.

	./public
		imagen.png
	./src
		./app
			layout.js
			page.js
			./acerca
				page.js
				layout.js
			./contacto
				page.js
				layout.js
				./redes
					page.js
					layout.js

Aqui las rutas son: 
	[](/) === {proyecto}/src/app/page.js
	[](/acerca) === {proyecto}/src/app/acerca/page.js
	[](/contacto) === {proyecto}/src/app/contacto/page.js
	[](/contacto/redes) === {proyecto}/src/app/contacto/redes/page.js

Asi de definen las rutas que puedes visitar en tu proyecto.

###### --- --- --- --- --- --- {proyecto}/src/app/layout.js --- --- --- --- --- --- ######

Este archivo [](RootLayout) es el que afecta a todas las paginas, pero cada pagina puede tener su propio layout.

```jsx
	// Permite utilizar el (usePathname).
	"use client";

	// Manejo de reedireccionamientos (asincronos), sin recargar la pagina.
	import Link from "next/link";

	import { usePathname } from "next/navigation";

	export default function RootLayout({ children }){
	    const path = usePathname();

	    return (
	        <div>
	        	{/* Navegacion entre rutas recargando la pagina. */}
	        	<div>
	                 <a href="/contact">Contact</a> 
	                 <a href="/contact/redes">Contact Redes</a> 
	        	</div>

	        	{/* Navegacion entre rutas SIN recargar la pagina */}
	            <div>
	                <Link 
	                	// El path nos permite saber donde estamos posicionados
	                	className={`${path === "/contact" ? 'bg-black' : ''}`} 
	                	href="/contact"
	                >
	                	Contact
	                </Link>
	                <Link className={`${path === "/contact/redes" ? 'bg-black' : ''}`} href="/contact/redes"> Redes</Link>
	            </div>
	            {children}
	        </div>
	    )
	}
```