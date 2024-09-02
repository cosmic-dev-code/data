

### ============================== ###
###### ===--- Middleware ---=== ######
### ============================== ###

# Crear carpeta llamada Middleware.

<!-- Hace lo mismo que verify. -->

```bat
	npm install jose
```

```js
	import { NextResponse } from "next/server";
	import { jwtVerify } from "jose";

	// Se ejecuta en secuencia de acuerdo a la cantidad de datos que pide el navegador.
	export function middleware(request){

		// Muestra cada URL de cada archivo que esta pidiendo el navegador al servidor.
		request.url;

		// Lo mismo pero en formato.
		request.nextUrl; // [ URL Object, URL Object, URL Object ]

		if(request.nextUrl.pathname.includes("/dashboard")){

			// Obtener cookie.
			let cookie = request.cookies.get("miToken");

			// Si no hay token reedireccionar al Login.
			if(!cookie){
				return NextResponse.redirect(new URL("/login"), request.url);
			}

			try{
				
				// Validar token unico con la palabra clave.
				let { payload } = await jwtVerify(jwt, new TextEncoder().encode("palabra-clave"));

				return NextResponse.next();

			}catch(error){
				return NextResponse.redirect(new URL("/login"), request.url);
			}

		}

		// Continuar con la ruta.
		return NextResponse.next();
	}
```

# Proteger rutas especificas

```js
	import { NextResponse } from "next/server";
	import { jwtVerify } from "jose";

	export function middleware(request){
		// Ya no verificamos la ruta con un  (if).

		if(!request.cookies.get("miToken")){
			return NextResponse.redirect(new URL("/login"), request.url);
		}

		try{
			
			// Validar token unico con la palabra clave.
			let { payload } = await jwtVerify(jwt, new TextEncoder().encode("palabra-clave"));

			return NextResponse.next();

		}catch(error){
			return NextResponse.redirect(new URL("/login"), request.url);
		}
	}

	export const config = {
		// Protejer una ruta.
		matcher: "/dashboard", 
		// Proteger mas de una ruta.
		matcher: ["/dashboard", "/"], 
		// Proteger todas las subrutas desde (admin).
		matcher: ["/admin/:path*"]
	}
```