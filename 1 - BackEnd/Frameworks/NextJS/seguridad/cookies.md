### =========================== ###
###### ===--- Cookies ---=== ######
### =========================== ###

<!-- Next JS tiene su propia biblioteca para extraer las cookies. -->

<!-- Las (cookies) son perfectas para guardar tokens (string) de autenticacion. -->

# NOTA: Solo del lado del servidor.

# ------------------- #
# ------ Crear ------ #
# ------------------- #

```ts
	// Para establecer cookies.
	import { NextResponse } from 'next/server';

	export default function POST(request, response)
	{
		/**
		 * Crear una respuesta.
		 */

		// Creamos una respuesta para enviar las cookies.
		const response = NextResponse.json(
			{ message: 'Estableciendo cookie' }, 
			{ status: 200 }
		);

		/**
		 * Crear una cookie.
		 */

		/* El metodo (set) setea una cookie, recibe por parametros: 
				--- Nombre de la cookie.
				--- Valor de la cookie.
				--- Ajustes de la cookie. */
		response.cookies.set('auth', "valor-de-la-cookie", {
			// En produccion el navegador no la muestra.
		    httpOnly: true, 
		    // SSL solo en produccion para seguridad.
		    // La cookie solo se envia a traves de la conexion (HTTPS).
		    secure: process.env.NODE_ENV === "production", // bool
		    // Comunicarse con terceros de otros dominios, (none === si).
		    // Prevenir ataques CSRF, la cookie no se envia con solicitudes iniciadas por terceros.
		    sameSite: 'lax',
		    // 1 dia en (segundos) antes de que caduque.
		    // Expira en (86400s) === (1d).
		    maxAge: 86400, 
		    // Disponible en todo el website.
		    path: '/'
		});

		/**
		 * Responder.
		 */

		// Retornamos respuesta al cliente.
		return response;
	}
```

# ------------------ #
# ------ Leer ------ #
# ------------------ #

```js
	// Para leer cookies.
	import { cookies } from 'next/headers';

	export default function POST()
	{
		/**
		 * Leer una cookie.
		 */

		// Extraemos las cookies.
		const misCookies = cookies();

		// Extraemos la cookie que queremos.
		let auth = misCookies.get("auth");

		// Verrificamos y extraemos su valor.
		if(auth){
			auth.value; // "valor-de-la-cookie"
		}
	}
```