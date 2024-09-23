/* ##########=============########## */
/* ######===--- Objetos ---===###### */
/* ##########=============########## */

var http = require('http');

let servidor = http.createServer(function(request, response){

	// Contiene los datos de la peticion del cliente.
	request;

	// Podemos responder al cliente.
	response;
});


servidor.listen(8080, function(){
	console.log("Servidor iniciado en el puerto 80.");
});

/* ##########================########## */
/* ######===--- Peticiones ---===###### */
/* ##########================########## */

// Devuelve la URL de todas las peticiones que hace el navegador.
request.url;

// Devuelve el metodo de envio de un formulario.
request.method; // "POST"

/* --------------------------- */
/* ------ Crear (rutas) ------ */
/* --------------------------- */

// Asi creamos nuestras rutas.

if(request.url === "/users/store" && request.method === "POST"){
	// ...
}

/* ##########================########## */
/* ######===--- Respuestas ---===###### */
/* ##########================########## */

/* ------------------------- */
/* ------ Encabezados ------ */
/* ------------------------- */

// Podemos enviar un codigo de estado.
response.statusCode = 200;

// Establecer encabezados.
response.setHeader('Content-Type', 'text/plain');
response.setHeader('Content-Type', 'text/html; charset=utf-8');

/* Creamos los encabezados de la pagina: 
	--- Recibe el estatus en el que se ejecuta.
	--- El tipo de contenido de la pagina, en este caso texto (html). */
response.writeHead(200, {"Content-type": "text/html"});

/* --------------------- */
/* ------ Cookies ------ */
/* --------------------- */

// En los encabezados de la respuesta establecemos una (cookie).
response.setHeader('Set-Cookie', `
	miCookie=HolaMundo;
	Max-Age=3600;
	HttpOnly; Secure;
	SameSite=Strict
`);

response.json({ message: "Respuesta con cookie" });

/* ----------------------- */
/* ------ Responder ------ */
/* ----------------------- */

// Escribimos en la pagina.
response.write(`<h1>Hola mundo</h1>`);

// Escribimos al finalizar la peticion.
response.end(`
	<p>Peticion finalizada</p>
`);