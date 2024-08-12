"use strict";

// Extraemos el objeto (Http).
var http = require('http');

/* El metodo (createServer) recibe por parametro una funcion anonima la cual 
recibe por parametros la peticion al servidor y la respuesta. */
http.createServer(function(request, response){

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

	// Devuelve la 'url' despues del (dominio).
	request.url;

	// Devuelve el metodo de envio de un formulario.
	request.method; // "POST"

	// Establecer encabezados.
	response.setHeader('Content-Type', 'text/plain');

	// Devuelve el estado de la peticion.
	response.statusCode; // 200

// Se ejecuta el servidor en el puerto (8080).
}).listen(8080, function(){
	console.log("Servidor iniciado en el puerto 80.");
});