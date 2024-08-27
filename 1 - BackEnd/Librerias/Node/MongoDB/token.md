### ========================= ###
###### ===--- Token ---=== ######
### ========================= ###

# Convencion Api/auth/login.js

```bat
	npm install jsonwebtoken
	npm install cookie
```

```js
	const response = await axios.post('/api/auth/login', {
		email: "brandon@gmail.com", 
		username: "Brandon"
	})
```

```js
	import jwt from "jsonwebtoken";
	import { serialize } from "cookie";

	export default function loginHandler(req, res){
		// Datos del front.
		let { email, username } = req.body;

		const token = jwt.sign({
			// Datos a guardar
			email: "brandon@gmail.com", 
			username: "Brandon", 
			// Caduca en 30 dias.
			exp: Math.floor(Date.now() / 1000) * 60 * 60 * 24 * 30
		}, 'palabra-clave');

		const serialized = serialize('miToken', token, {
			// En produccion el navegador no la muestra.
			httpOnly: true, 
			// SSL solo en produccion para seguridad.
			secure: false, 
			// Comunicarse con terceros de otros dominios, (none === si).
			nameSite: "none", 
			// 30 dias.
			maxAge: 1000 * 60 * 60 * 24 * 30, 
			// Disponible en todo el website.
			path: "/"
		})

		res.setHeader('Set-Cookie', serialized);

		res.status(200).json({ message: "successfull" });
	}
```

### ================================= ###
###### ===--- Obtener Token ---=== ######
### ================================= ###

```js
	import { verify } from "jsonwebtoken";

	export default function profileHandler(req, res){

		const { miToken } = req.cookies;

		if(!miToken) return res.status(401).json({ error: "" });

		// Deserizalizar.
		let data = verify(miToken, 'palabra-clave');

		// Deserializado.
		data.email;
		data.username;
		data.exp;

		return res.json(data);
	}
```

```jsx
	const getProfile = async () => {
		const response = await axios.post("/api/profile");

		setUser(response.data);
	}

	// Ejecutar en el front.
	// O por onClick
	useEffect(() => {
		getProfile();
	}, []);

	return <></>
```

### =================================== ###
###### ===--- Eliminar Cookie ---=== ######
### =================================== ###

```js
	import { verify } from "jsonwebtoken";
	import { serialize } from "cookie";

	export default function profileHandler(req, res){

		const { miToken } = req.cookies;

		if(!miToken) return res.status(401).json({ error: "" });

		// Verifificar token con palabra clave.
		verify(miToken, 'palabra-clave'); // throw dentro de un catch por si no pasa la validacion.

		// Caducar cookie.
		const serialized = serialize('miToken', null, {
			httpOnly: true, 
			secure: false, 
			nameSite: "strict", 
			maxAge: 0, 
			path: "/"
		})

		// Establecer cookie.
		res.setHeader('Set-Cookie', serialized);

		res.status(200).json({ message: "successfull" });
	}
```

```jsx
	import { useRouter } from "next/router";

	// Para reedireccionar.
	const router = useRouter();

	const logout = async () => {
		const response = await axios.post("/api/auth/logout");

		// Reedireccionar a otra pagina.
		router.push("/login");
	}

	// Cerrar por medio del front.
	return <>
		<button onClick={ () => logout() }>Cerrar Sesion</button>
	</>
```

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