"use strict";

/* ##########=================================########## */
/* ######===--- Propiedades de la respuesta ---===###### */
/* ##########=================================########## */

const response = fetch("www.example.com");

response.then(result => {

	// Devuelve el estado de la peticion.
	result.status; // 200

	/* Devuelve el estado de la peticion en forma de texto, ejemplo: 
		--- 200: "OK"
		--- 201: "Created"
		--- 204: "No Content"
		--- 400: "Bad Request"
		--- 401: "Unauthorized"
		--- 403: "Forbidden"
		--- 404: "Not Found"
		--- 500: "Internal Server Error"
		--- 502: "Bad Gateway"
		--- 503: "Service Unavailable"
	*/
	result.statusText; // "OK"

	// Devuelve la url de respuesta.
	result.url;

	// Indica si la respuesta fue redirigida desde una URL diferente.
	result.redirected; // false

	// Indica si la respuesta fue exitosa, (200-299).
	result.ok; // true

	// Convertir la respuesta a otro tipo de dato, pero esto retorna otra promesa.
	return result.text();

}).then(texto => {
	// ...
}).catch(error => {
	// ...
});

/* ##########==========================########## */
/* ######===--- Tipos de (respuesta) ---===###### */
/* ##########==========================########## */

// ------------------------------------------- //
// ------ Convertir respuesta a (texto) ------ //
// ------------------------------------------- //

fetch("documento.txt")
	// Convertir la respuesta a texto.
	.then(result => result.text())
	.then(respuesta => {
		// ...
	});
	.catch(error => console.error(error));

// ------------------------------------------ //
// ------ Convertir respuesta a (json) ------ //
// ------------------------------------------ //

fetch("files/data/users.json")
	// Recibimos la respuesta encapsulada y la convertimos a formato JSON.
	.then(result => result.json())
	.then(respuesta => {
		// JSON manipulable.
		respuesta.users[0].id;
	});
	.catch(error => console.error(error));

// ------------------------------------------ //
// ------ Convertir respuesta a (blob) ------ //
// ------------------------------------------ //

// Leemos una imagen.
fetch("imagen.png")
	// Transformar respuesta a (blob).
	.then(result => result.blob())
	// Podemos convertir la respuesta en una direccion URL.
	.then(img => {
		// Para visualizar la imagen en una URL valida.
		URL.createObjectURL(img);
	});
	.catch(error => console.error(error));

// ----------------------------------------- //
// ------ Convertir respuesta a (DOM) ------ //
// ----------------------------------------- //

fetch('archivo.xml')
	.then(result => result.text())
	.then(xmlString => {
		// Crea un objeto DOM.
		const parser = new DOMParser();
		// Convierte la resuesta a un objeto DOM manipulable.
		const xmlDocument = parser.parseFromString(xmlString, 'application/xml');

		xmlDocument.getElementsByTagName("books");
	})
	.catch(error => console.error(error));