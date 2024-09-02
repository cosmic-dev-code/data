### ================================ ###
###### ===--- Dependencias ---=== ######
### ================================ ###

```bat
	: Dependencias para generar la cookie.
	npm install jsonwebtoken
	npm install cookie

	: Dependencia para encrioptar el password del usuario.
	npm install bcryptjs
```

### ============================= ###
###### ===--- Registrar ---=== ######
### ============================= ###

###### --- --- --- --- --- --- {proyecto}/src/app/api/auth/route.js --- --- --- --- --- --- ######

<!-- Ahora procedemos a registrar. -->

```ts
	// Bibliotecas necesarias.
	import jwt from "jsonwebtoken";
	import { serialize } from "cookie";
	import bcrypt from "bcryptjs"

	// Con esto respondemos al servidor.
	import { NextResponse } from "next/server";

	export default function registerHandler(request:NextRequest){

		// Datos para registrar al usuario.
		const body = await request.json();
		let { email, username, password } = body;

		/**
		 * Registrar al usuario.
		 */

		// Encriptar password.
		const passwordBcrypt = await bcrypt.hash(password, 10);

		const user = new User({
			email: "brandon@gmail.com", 
			password: passwordBcrypt
		});

		await user.save();

		/**
		 * Creamos un (token).
		 */

		let datos = {
			email: "brandon@gmail.com", 
			username: "Brandon", 
			exp: Math.floor(Date.now() / 1000) * 60 * 60 * 24 * 30
		}

		// Crear token.
		const token = jwt.sign(datos, 'palabra-clave', {
			expiresIn: 86400
		});

		/**
		 * Crear respuesta.
		 */

		// Creamos una respuesta para enviarla al cliente.
		const response = NextResponse.json(
			{ message: "Usuario creada correctamente" }, 
			{ status: 200 }
		);

		/**
		 * Crear cookie.
		 */

		/* Los parametros: 
				--- Nombre de la cookie.
				--- El valor que almacela la cookie, normalmente un valor (JWT).
				--- Ajustes. */
		response.cookies.set('auth_cookie', token, {
			// La cookie solo se envia a traves de la conexion (HTTPS).
			secure: process.env.NODE_ENV === "production", 
			// Prevenir ataques CSRF, la cookie no se envia con solicitudes iniciadas por terceros.
			sameSite: "strict", 
			sameSite: "none", 
			// Expira en (86400s) === (1d).
			maxAge: 86400, 
			// Disponible en todo el sitio.
			path: "/" 
		});

		// Enviamos la respuesta al cliente.
		return response;
	}
```

<!-- Hacer peticion. -->

```js
	const response = await axios.post('/api/auth', {
		email: "brandon@gmail.com", 
		username: "Brandon"
	});
```

### =========================== ###
###### ===--- Session ---=== ######
### =========================== ###

```ts
	// Para devolver respuesta.
	import { NextResponse } from "next/server";

	export function POST(request:NextRequest)
	{
		// Extraer datos enviados desde el Cliente.
		const body = await request.json();
		let { email, password } = body;

		// Extraer al usuario de la DB.
		const user:User = await User.findOne({ email });

		// Comparar password con (password encriptado).
		let passIs = await bcrypt(password, user.password);

		if(passIs){
			/* Mismo sistema para que el usuario inicie sesion.
					--- Crear TOKEN.
					--- Crear Response.
					--- Crear Cookie. */

			return response;
		}

		return NextResponse.json({ message: "El password no es correcto" });
	}
```

### ========================== ###
###### ===--- Logout ---=== ######
### ========================== ###

```ts
	export default async function logoutHandler(request:NextRequest, response:NextResponse) {

		// No creamos un (token).
		// La respuesta viene en los parametros.
		response;

		// Sin token.
		response.cookies.set('auth_cookie', "", {
			secure: process.env.NODE_ENV === "production", 
			sameSite: "strict", 
			// Expira inmediatamente.
			maxAge: 0, 
			// Se elimina de todo el sitio.
			path: "/" 
		});

		return NextResponse.json({ message: "Sesion cerrada" });
	}
```