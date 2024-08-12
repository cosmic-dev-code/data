"use strict";

/* ##########============================================########## */
/* ######===--- Crear ajustes para el objeto (Request) ---===###### */
/* ##########============================================########## */

// Creamos una peticion para una imagen.
var request = new Request('imagen.jpg');

// Obtener encabezados.
var encabezados = request.headers;

encabezados.append("Content-type", "image/jpeg");

// Ahora creamos el objeto (ajustes), el cual va a llevar los ajustes de la peticion.
var ajustes = {
	headers: encabezados, // Los encabezados.
	mode: 'cors', // El modo.
	cache: 'default' // El cache.
};

// Le pasamos al constructor la imagen de la peticion y los ajustes.
var requestFinal = new Request('imagen.jpg', ajustes);

// Podemos extraer los encabezados.
let contentType = requestFinal.headers.get("Content-Type"); // Retorna: 'image/jpeg'.

/* ##########================================########## */
/* ######===--- (Uso) del objeto (Request) ---===###### */
/* ##########================================########## */

const request = new Request('http://localhost/api');

/**
 * Propiedades del objeto (request).
 */
request.url; // http://localhost/api.
request.method; // GET.
request.credentials; // omit.

/**
 * Se puede utilizar en una peticion.
 */
fetch(request)
	.then(result => result.text())
	.then(response => sendResponse(response));

// ------------------------------------------- //
// ------ Aplicando Request con ajustes ------ //
// ------------------------------------------- //

const request = new Request('http://localhost/api', {
	method: 'POST',
	body: '{"foo": "bar"}'
});

/* Nota: El tipo de cuerpo solo puede ser Blob, BufferSource (en-US), FormData, 
URLSearchParams, USVString (en-US) o tipo ReadableStream (en-US), así que 
para añadir un objeto JSON a la carga útil, necesitas convertir a 
string (stringify) dicho objeto. */

// Podemos operar con el objeto (request) como lo hariamos con una peticion (fetch) normal.
async function requestMethod(request){
	try{
		let result = await fetch(request);
		
		if(result.status === 200){
			let response = await result.text();

			sendResponse(response);
		}else{
			throw new Error("Hubo un error en el servidor.");
		}

	}catch(error){
		sendResponse(error);
	}finally{
		sendFinally("Peticion finalizada.");
	}
}