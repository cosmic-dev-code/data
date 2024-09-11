"use strict";

// Extraemos el objeto (Http).
var http = require('http');

/* El metodo (createServer) recibe por parametro una funcion anonima la cual 
recibe por parametros la peticion al servidor y la respuesta. */
let servidor = http.createServer(function(request, response){

	/* ##########================########## */
	/* ######===--- Peticiones ---===###### */
	/* ##########================########## */

	// Devuelve la URL de las peticiones que hace el navegador.
	// (Podemos crear rutas).
	request.url;
	request.url === "/contact";

	// Devuelve el estado de la peticion.
	response.statusCode; // 200

	// Devuelve el metodo de envio de un formulario.
	request.method; // "POST"

	/* ##########===============########## */
	/* ######===--- Respuesta ---===###### */
	/* ##########===============########## */

	// Podemos enviar un codigo de estado.
	response.statusCode = 200;

	// Establecer encabezados.
	response.setHeader('Content-Type', 'text/plain');
	response.setHeader('Content-Type', 'text/html; charset=utf-8');

	/* Creamos los encabezados de la pagina: 
		--- Recibe el estatus en el que se ejecuta.
		--- El tipo de contenido de la pagina, en este caso texto (html). */
	response.writeHead(200, {"Content-type": "text/html"});

	// Escribimos en la pagina.
	response.write(`<h1>Hola mundo</h1>`);

	// Escribimos al finalizar la peticion.
	response.end(`
		<p>Peticion finalizada</p>
	`);

	/* ##########============########## */
	/* ######===--- Imagen ---===###### */
	/* ##########============########## */

	if(request.url === "/imagen.png"){
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

	if(request.url === "users/store" && request.method === "POST")
	{
		// Para almacenar los datos completos.
		let completo = "";

		request.on("data", chunk => {
			// Los datos que se envian del cliente llegan en trozos.
			chunk; // Buffer.

			completo += chunk.toString();
		});

		request.on("end", () => {
			// Ha terminado de recibir los datos.
			response.writeHead(200, {"Content-type": "text/html"});

			// Leer datos extraidos.
			JSON.parse(completo); 

			// Enviar respuesta.
			response.end(
				JSON.stringify(completo)
			);
		});
	}

// Se ejecuta el servidor en el puerto (8080).
});

servidor.listen(8080, function(){
	console.log("Servidor iniciado en el puerto 80.");
});