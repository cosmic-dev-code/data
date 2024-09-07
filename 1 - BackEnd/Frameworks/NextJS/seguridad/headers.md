### =========================== ###
###### ===--- Cookies ---=== ######
### =========================== ###

<!-- Next JS tiene su propia biblioteca para extraer las cookies. -->

# NOTA: Solo del lado del servidor.

```ts
	/**
	 * Este archivo extrae las cabeceras de la peticion.
	 */
	import { headers } from 'next/headers';

	// Obtenemos las cabeceras de la peticion.
    const cabeceras = headers();

    // Devuelve las cookies.
    let cookies:string = cabeceras.get("cookie");

    /**
     * Podemos trabajar con ellas.
     */
    if(cookies !== null){
        let arrCookies:string[] = cookies.split(";");

        for(let i in arrCookies){
            let cookie:string = arrCookies[i].trim();

            if(cookie.startsWith("my_cookie")){
            	return cookie.split("=")[1];
            }
        }
    }
```

### ========================== ###
###### ===--- Llamar ---=== ######
### ========================== ###

###### --- --- --- --- --- --- {proyecto}/src/app/acerca/page.jsx --- --- --- --- --- --- ######

# En Page

<!--Podemos mandar a llamar las cabeceras en cualquier peticion del usuario, (GET), (PUT), (POST), etc ... -->

```jsx
	// Este componente es de (servidor), al menos que se marque con "use client".

	import { headers } from 'next/headers';

	export default function AboutPage()
	{
		// Podemos utilizar las cabeceras.
		let cabeceras = headers();

		return (
			<div>
				{/* ... */}
			</div>
		);
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/api/route.js --- --- --- --- --- --- ######

# En API

```js
	// Hacemos nuestras importaciones.
	import { headers } from 'next/headers';
	import { NextResponse } from "next/server";

	export function POST(req, res)
	{
		// Tambien podemos extraer los headers.
		let cabeceras = headers();
	}
```