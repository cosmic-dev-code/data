/* ##########================########## */
/* ######===--- Middleware ---===###### */
/* ##########================########## */

// Se declara antes que cualquier otra ruta.
app.use((request, response, next) => {

	// Puedes calidar un (middleware).
	if(request.headers["Content-Type"] === "application/json" && request.method === "POST"){
		return response.status(500).send("Error");
	}

	// La peticion continua.
	next();
});

/* ------------------------------- */
/* ------ Rutas especificas ------ */
/* ------------------------------- */

/**
 * Aplicado a ciertas rutas, en este caso todo despues de (/users).
 */
app.use("users/*", (request, response, next) => {

	// ...

	next();
});

/* ##########===========########## */
/* ######===--- Datos ---===###### */
/* ##########===========########## */

/* ----------------------------------- */
/* ------ Conversion de (datos) ------ */
/* ----------------------------------- */

// Recibimos cualquier solicitud.
app.use((request, response, next) => {

	let completo = "";

	// Obtener cada (chunck) hasta completar los datos, (Buffer).
	request.on("data", chunk => {
		completo += chunk.toString();
	});

	request.on("end", () => {

		// Deserializamos los datos enviados del cliente y obtenidos por (chunks).
		request.body = JSON.parse(completo);

		// Continuamos a las demas rutas.
		next();
	});
});

app.get("/users", (request, response) => {
	// Recibimos el (body) que paso por el middleware.
	request.body; 
});

/* ----------------------------------- */
/* ------ Conversion (acortada) ------ */
/* ----------------------------------- */

// Hace lo mismo que lo anterior, sin convertir cada (Buffer).
app.use(express.json());