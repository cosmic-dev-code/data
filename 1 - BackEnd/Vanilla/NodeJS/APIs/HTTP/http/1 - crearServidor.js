"use strict";

// Extraemos el objeto (Http).
var http = require('http');

// El metodo (createServer) recibe por parametro una funcion anonima.
// Recibe por parametros la peticion al servidor y la respuesta.
let servidor = http.createServer(function(request, response){

	// Este es el servidor.

});

// Inicia el servidor en el puerto (8080).
servidor.listen(8080, function(){
	console.log("Servidor iniciado en el puerto 80.");
});