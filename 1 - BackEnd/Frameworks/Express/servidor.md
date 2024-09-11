### ============================ ###
###### ===--- Servidor ---=== ######
### ============================ ###

<!-- Creamos un servidor con Express. -->

```js
	const express = require("express");

	/* ##########===============########## */
	/* ######===--- Crear App ---===###### */
	/* ##########===============########## */

	// Creamos la aplicacion.
	const app = express();

	// Extraer del (.env) sino asigna el (3000).
	const PORT = process.env.PORT  ?? 3000

	// Quita la marca de agua que deja express en las cabeceras.
	app.disable("x-powered-by");

	// Escucha nuestra App.
	app.listen(PORT, () => {
		// Servidor corriendo.
	});

	/* ##########================########## */
	/* ######===--- Middleware ---===###### */
	/* ##########================########## */

	// Se declara antes que cualquier otra ruta.
	app.use((request, response, next) => {

		// Logica aqui ...
		if(request.headers["Content-Type"] === "application/json" && request.method === "POST"){
			return response.status(500).send("Error");
		}

		// Convertir datos (Buffer) a (JSON) para que las demas rutas los reciban.

		// La peticion continua.
		next();
	});

	/**
	 * Rutas especificas.
	 */

	// Aplicado a ciertas rutas, en este caso todo despues de (/users).
	app.use("users/*", (request, response, next) => {

		// Puedes cambiar el body de la peticion.
		// La siguiente ruta a la que vaya recibe la (request).
		request.body = { title: "Nueva Data" };

		next();
	});

	app.get("/users", (request, response) => {
		// Recibimos el (body) que paso por el middleware.
		request.body; 
	});

	/**
	 * Conversion de (datos).
	 */

	// Convierte los (body) que se reciben en datos (JSON) y ya no como (Buffer).
	app.use(express.json());

	/* ##########====================########## */
	/* ######===--- Declarar rutas ---===###### */
	/* ##########====================########## */

	// GET en la ruta (/).
	app.get("/", (request, response) => {
		// ...
	});

	app.post("/users/store", (request, response) => {
		// ...
	});

	/**
	 * Errores 404.
	 */

	// Sin definir (path) son todas las rutas (post).
	app.post((request, response) => {
		response.status(404).send("<h1>Error 404</h1>");
	});

	// Todas las rutas independientemente de su (metodo).
	app.use((request, response) => {
		response.status(404).send("<h1>Error 404</h1>");
	});

	/* ##########================########## */
	/* ######===--- Respuestas ---===###### */
	/* ##########================########## */

	app.get("/", (request, response) => {
		// Encadenamiento de metodos.
		response
			// Estado
			.status(200) 
			// Detecta HTML y setea el Content-Type.
			.send(`<b>Bienvenido</b>`);

		// Responde con un JSON serializado.
		response.json({
			name: "Brandon"
		});
	});

	/* ##########===================########## */
	/* ######===--- Recibir datos ---===###### */
	/* ##########===================########## */

	// Otra forma de convertir los datos por medio de un (Middleware).
	app.use(express.json());

	app.post("/users/store", (request, response) => {
		
		/**
		 * Conversion de datos de forma (manual).
		 */

		let completo = "";

		request.on("data", chunk => {
			completo += chunk.toString();
		});

		request.on("end", () => {

			// Leer datos extraidos.
			JSON.parse(completo);

			return response.status(200).send(JSON.stringify(completo));
		});
	});
```