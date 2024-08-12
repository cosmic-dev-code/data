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
	----------------------------------------------- ( / ): Esta es la raiz.
		./app
			layout.js
			loading.js
			page.js
	----------------------------------------------- ( /acerca ): Pagina de acerca de
			./acerca
				page.js ==== index.html
				loading.js
				layout.js
	----------------------------------------------- ( /contacto )
			./contacto
				page.js === index.html
				loading.js
				layout.js
	----------------------------------------------- ( /contacto/redes )
				./redes
					page.js === index.html
					loading.js
					layout.js

Aqui las rutas son: 
	[](/) === {proyecto}/src/app/page.js
	[](/acerca) === {proyecto}/src/app/acerca/page.js
	[](/contacto) === {proyecto}/src/app/contacto/page.js
	[](/contacto/redes) === {proyecto}/src/app/contacto/redes/page.js

Asi de definen las rutas que puedes visitar en tu proyecto.

### ========================== ###
###### ===--- Layout ---=== ######
### ========================== ###

# --------------------- #
# ------ Enlaces ------ #
# --------------------- #

###### --- --- --- --- --- --- {proyecto}/src/app/contacto/layout.js --- --- --- --- --- --- ######

Este archivo [](RootLayout) es el que afecta a todas las paginas, pero cada pagina puede tener su propio layout.

```jsx
	// Permite utilizar logica del lado del cliente.
	"use client";

	import { usePathname } from "next/navigation";

	// La convecion para los (Layout) es (Layout{Nombre}).
	export default function LayoutContact({ children }){

		// Use (usePathname) nos dara la ruta en la que nos encontramos.
	    const path = usePathname();

	    return (
	        <div>

	        	{/* Navegacion entre rutas recargando la pagina. */}
                 <a href="/contact">Contact</a>
                 <a href="/contact/redes">Contact Redes</a>

	            {children}
	        </div>
	    )
	}
```

# ------------------------------ #
# ------ La etiqueta Link ------ #
# ------------------------------ #

```jsx
	"use client";

	// Manejo de reedireccionamientos (asincronos), sin recargar la pagina.
	import Link from "next/link";

	import { usePathname } from "next/navigation";

	export default function LayoutContact({ children }){
	    const path = usePathname();

	    return (
	        <div>

	        	{/* Navegacion entre rutas SIN recargar la pagina */}
                <Link 
                	// El path nos permite saber donde estamos posicionados
                	className={`${path === "/contact" ? 'bg-black' : ''}`} 
                	href="/contact"
                >
                	Contact
                </Link>

                <Link 
                	className={`${path === "/contact/redes" ? 'bg-black' : ''}`} 
                	href="/contact/redes"
                >
                	Redes
                </Link>

	            {children}
	        </div>
	    )
	}
```

### ======================== ###
###### ===--- Page ---=== ######
### ======================== ###

La [](page) funciona como el [](index.html) cuando el usuario visita la ruta.

###### --- --- --- --- --- --- {proyecto}/src/app/contacto/page.js --- --- --- --- --- --- ######

```jsx
	export default function Contact(){
	    return <>
	    	{/* Logica del componente */}
	    </>
	}
```

### =========================== ###
###### ===--- Loading ---=== ######
### =========================== ###

La [](loading) sera tomada cuando el componente [](page) se encuentra cargandose y todavia no se muestra al cliente.

###### --- --- --- --- --- --- {proyecto}/src/app/contacto/loading.js --- --- --- --- --- --- ######

```jsx
	export default function Loading(){
	    return <>
	    	{/* Logica del componente */}
	    </>
	}
```