### ================================ ###
###### ===--- Crear Cookie ---=== ######
### ================================ ###

```bat
	: Dependencia para crear tokens.
	npm install jsonwebtoken

	: Para serializar el token y crear una cookie en base a el.
	npm install cookie
```

###### --- --- --- --- --- --- {proyecto}/src/app/api/auth/route.js --- --- --- --- --- --- ######

<!-- Ahora procedemos a registrar. -->

```js
	// Bibliotecas necesarias.
	import jwt from "jsonwebtoken";
	import { serialize } from "cookie";

	export default function registerHandler(req, res){

		// Guardar en la base de datos.
		await user.save();

		/**
		 * Creamos un (token)
		 */

		let datos = {
			// Datos del (usuario).
			email: "brandon@gmail.com", 
			username: "Brandon", 
			// El token caduca en 30 dias.
			exp: Math.floor(Date.now() / 1000) * 60 * 60 * 24 * 30
		}

		/* Creamos el token el cual recibe: 
			--- Los datos del token.
			--- Una palabra clave para cifrarlo.
			--- Los ajustes del token, (opcional). */
		const token = jwt.sign(datos, 'palabra-clave');
		const token = jwt.sign(datos, 'palabra-clave', {
			// Podemos establecer fecha de expiracion al token.
			expiresIn: 86400
		});
		// Lo ideas seria guardar la (palabra) en un .ENV
		const token = jwt.sign(datos, process.env.NODE_WORD);

		/**
		 * Serializar (token) para una cookie.
		 */

		/* Recibe: 
			--- Nombre la cookie.
			--- Token a serializar.
			--- Ajustes de la cookie. */
		const serialized = serialize('mi-cookie', token, {
			// En produccion el navegador no la muestra.
			httpOnly: true, 
			// SSL solo en produccion para seguridad.
			secure: false, 
			// Comunicarse con terceros de otros dominios, (none === si).
			nameSite: "none", 
			// 30 dias antes de que caduque.
			maxAge: 1000 * 60 * 60 * 24 * 30, 
			// Disponible en todo el website.
			path: "/"
		});

		/**
		 * Enviar cookie al navegador.
		 */

		// Establecemos la cookie en el encabezado de la respuesta.
		res.setHeader('Set-Cookie', serialized);
		// Enviamos la respuesta al navegador, (ya incluye la cookie).
		res.status(200).json({ message: "successfull" });
	}
```

### ================================= ###
###### ===--- Obtener Token ---=== ######
### ================================= ###

###### --- --- --- --- --- --- {proyecto}/src/app/api/auth/show/route.js --- --- --- --- --- --- ######

```js
	import { verify } from "jsonwebtoken";

	export default function profileHandler(req, res){

		// De las cookies de los encabezados, extraemos la cookie que creamos.
		const { miCookie: "mi-cookie" } = req.cookies;

		// Verificamos su existencia.
		if(miCookie){
			// Deserizalizar con la palabra clave con la que serializamos el token.
			// Lanza un THROW si no pasa la validacion, (utiliza try catch).
			let data = verify(miCookie, 'palabra-clave');

			// Estos son los datos del token de la cookie.
			data.email;
			data.username;
			data.exp;

			return res.status(200).json({ error: data });
		}

		return res.status(401).json({ error: "No tienes cookies" });
	}
```

### =================================== ###
###### ===--- Eliminar Cookie ---=== ######
### =================================== ###

###### --- --- --- --- --- --- {proyecto}/src/app/api/auth/destroy/route.js --- --- --- --- --- --- ######

```js
	import { verify } from "jsonwebtoken";
	import { serialize } from "cookie";

	export default function profileHandler(req, res){

		const { miToken } = req.cookies;

		if(!miToken) return res.status(401).json({ error: "" });

		// Verifificar token con palabra clave.
		verify(miToken, 'palabra-clave'); 

		// Sobreescribir cookie.

		// Sin data.
		const serialized = serialize('miToken', null, {
			httpOnly: true, 
			secure: false, 
			nameSite: "strict", 
			maxAge: 0, // Caducidad instantanea.
			path: "/"
		})

		// Establecer cookie.
		res.setHeader('Set-Cookie', serialized);
		res.status(200).json({ message: "successfull" });
	}
```