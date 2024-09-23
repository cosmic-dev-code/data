/* ##########============########## */
/* ######===--- Imagen ---===###### */
/* ##########============########## */

// Creamos una ruta a una "supuesta imagen".
if(request.url === "/imagen.png"){

	// Leemos una imagen que existe en nuestro servidor.
	fs.readFile("./images/imagen.png", (error, data) => {
		if(error){
			response.statusCode = 500;
			return response.end("Ha habido un error al leer la imagen");
		}

		response.statusCode = 200;

		// Establecer tipo de contenido.
		response.setHeader("Content-Type", "image/png");
		// Datos vinarios, (Buffer).
		response.end(data);
	});
}

/* ##########===================########## */
/* ######===--- Recibir datos ---===###### */
/* ##########===================########## */

/* ------------------ */
/* ------ POST ------ */
/* ------------------ */

if(request.url === "users/store" && request.method === "POST")
{
	// Para almacenar los datos completos.
	let completo = "";

	request.on("data", chunk => {
		// Los datos que se envian del cliente llegan en trozos.
		chunk; // Buffer.

		// Vamos completando nuestros datos.
		completo += chunk.toString();
	});

	// Ha terminado de recibir los datos.
	request.on("end", () => {
		response.writeHead(200, {"Content-type": "text/html"});

		// Podemos leer los datos extraidos.
		JSON.parse(completo);

		// Enviar respuesta.
		response.end("Datos leidos con exito");
	});
}

/* ----------------- */
/* ------ GET ------ */
/* ----------------- */

if(request.url === "users/store" && request.method === "POST")
{
	// 
	const myURL = new URL(req.url, `http://${req.headers.host}`);

	// Obtener los parámetros de la query

	// /?name=Brandon
	const name = myURL.searchParams.get('name');
	// /?name=Brandon&age=25
	const age = myURL.searchParams.get('age');
}