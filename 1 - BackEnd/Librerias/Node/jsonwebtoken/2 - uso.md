### =============================== ###
###### ===--- Crear token ---=== ######
### =============================== ###

```js
	// Importamos la libreria.
	const jwt = require("jsonwebtoken");


	const token = jwt.sign(user, "secreto_super_seguro", { expiresIn: "1h" });

	/**
	 * Creamos un (token)
	 */

	// Datos del (usuario).
	let DATOS = {
		email: "brandon@gmail.com", 
		username: "Brandon", 
		role: "admin"
	}

	/* Creamos el token el cual recibe: 
		--- Los datos del token.
		--- Una palabra clave para cifrarlo.
		--- Los ajustes del token, (opcional). */
	const token = jwt.sign(DATOS, 'palabra_clave_super_secreta');
```

<!-- Podemos establecer fecha de expiracion al token. -->

```js
	const token = jwt.sign(DATOS, 'palabra_clave_super_secreta', {
		// Expira en (86400s) === (1 dia).
		expiresIn: 86400
		// Expira en (86400s) === (1 hora).
		expiresIn: "1h"
	});
```

# NOTA: Lo ideas seria guardar la (palabra) en un .ENV

```js
	// Esto es lo (mejor).
	const token = jwt.sign(DATOS, process.env.NODE_WORD);
```

# ------------------------------- #
# ------ Enviar al cliente ------ #
# ------------------------------- #

<!-- Enviamos al cliente. -->

```js
	const http = require("http");
	const jwt = require("jsonwebtoken");

	let server = http.createServer((request, response) => {

		// Verificar la ruta y metodo.
		if(req.method === 'GET' && req.url === '/api/data'){

			// Crear token.
			const token = jwt.sign(DATOS, process.env.NODE_WORD);

			// Establecer en las cabeceras de la respuesta.
			response.writeHead(200, {
				'Authorization': `Bearer ${token}`, 
				'Content-Type': 'application/json'
			});

            // Responder.
            return response.end(
            	JSON.stringify({ message: 'El token ya va en las cabeceras' })
            );

		}

	});

	server.listen(3000, () => {
		// Puerto escuchando.
	});
```

### =================================== ###
###### ===--- Verificar token ---=== ######
### =================================== ###

```js
	const http = require("http");

	// Importar para verificar token.
	const jwt = require("jsonwebtoken");

	let server = http.createServer((request, response) => {

		if(req.method === 'GET' && req.url === '/api/data'){

			// Extraer el token del header de la (peticion).
			let token = req.headers['authorization'].split(' ')[1];

			try{
				// Deserizalizar con la palabra clave con la que serializamos el token.
				// Lanza un THROW si no pasa la validacion, (utiliza try catch).
				let datos = verify(token, 'palabra_clave_super_secreta');

				// Estos son los datos que guardaba el token.
				datos.email;
				datos.username;
				datos.role;

			}catch(error){
				// La verificacion fallo, (quiza el token no existe, es incorrecto o la palabra es invalida).
			}
		}

	});

	server.listen(3000, () => {
		// Puerto escuchando.
	});
```

# ------------------------------- #
# ------ Enviar al cliente ------ #
# ------------------------------- #

<!-- Tambien podemos utilizar un (callback) en la verificacion. -->

```js
	/* Verificar, se reciben: 
		--- El error, (si lo hay).
		--- Los datos decodificados guardados en el token.
	*/
    jwt.verify(token, "palabra_clave_super_secreta", (error, deserializado) => {

        if (error) {
        	// Establecer cabecera.
            response.writeHead(403, { 'Content-Type': 'application/json' });
            // Enviar respuesta.
            return response.end(
            	JSON.stringify({ message: 'Token inválido o expirado' })
            );
        }

        // Token válido, responder con los datos decodificados.
        response.writeHead(200, { 'Content-Type': 'application/json' });
        return response.end(JSON.stringify({ message: 'Acceso permitido', data: deserializado }));
    });
```