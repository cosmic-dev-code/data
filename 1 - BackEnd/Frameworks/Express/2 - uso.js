
/* ##########===============########## */
/* ######===--- Crear App ---===###### */
/* ##########===============########## */

const express = require("express");

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

/* ##########=================########## */
/* ######===--- Crear Rutas ---===###### */
/* ##########=================########## */

app.get("/", (request, response) => {
	// ...
});

app.post("/users/store", (request, response) => {
	// ...
});

/* ------------------------- */
/* ------ Errores 404 ------ */
/* ------------------------- */

// Sin (path), todas las rutas (POST).
app.post((request, response) => {
	response.status(404).send("<h1>Error 404</h1>");
});

// Sin (path), todas las rutas.
app.use((request, response) => {
	response.status(404).send("<h1>Error 404</h1>");
});

/* ##########================########## */
/* ######===--- Respuestas ---===###### */
/* ##########================########## */

// Detecta tipo de respuesta y setea el (Content-Type).
app.get("/html", (request, response) => {
	// Encadenamiento de metodos.
	response
		// Estado.
		.status(200) 
		// Detecta HTML.
		.send(`<b>Bienvenido</b>`);
});

// Responde con un JSON serializado.
app.get("/json", (request, response) => {
	response.json({
		name: "Brandon" 
	});
});

/* ##########===================########## */
/* ######===--- Recibir datos ---===###### */
/* ##########===================########## */

/* ------------------ */
/* ------ POST ------ */
/* ------------------ */

app.post("/users/store", (request, response) => {

	// Conversion de datos de forma (manual).
	let completo = "";

	// Los datos llegan en partes.
	// Debemos leer los datos chuck por chuck.
	request.on("data", chunk => {

		chunk; // Buffer

		// Lo convertimos a (string) y lo guardamos.
		completo += chunk.toString();
	});

	// Al terminar de leer los datos.
	request.on("end", () => {

		// Leer datos extraidos.
		JSON.parse(completo);

		return response.json({
			message: "Datos leidos"
		});
	});
});

/* ----------------- */
/* ------ GET ------ */
/* ----------------- */

/*
	/users?name=Brandon&age=25
*/

app.get("/users", (request, response) => {

	// Recibimos los parametros (get) por medio de (query).
	request.query.name;
	request.query.age;
});

/* ------------------------ */
/* ------ Parametros ------ */
/* ------------------------ */

/*
	/users/123
*/

app.get("/users/:id", (request, response) => {

	// Obtenemos el dato (123) por medio de la declaracion (id).
    request.params.id;

    /*
		/users/123?nombre=brandon
    */

    // Podemos obtener los (query) de la ruta.
    request.query.nombre;
});