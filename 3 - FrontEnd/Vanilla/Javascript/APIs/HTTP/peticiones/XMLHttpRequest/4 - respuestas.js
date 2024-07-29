"use strict";

/* ##########==========================########## */
/* ######===--- Tipos de (respuesta) ---===###### */
/* ##########==========================########## */

// ------------------------------------ //
// ------ Peticion (por defecto) ------ //
// ------------------------------------ //

function peticionPorDefecto(){

	xhttp.open("GET", "text.txt", true);
	// No especificamos nada, (como viene por defecto).
	// La respuesta por defecto viene como texto.
	xhttp.responseType = ("");
	xhttp.send();

	xhttp.onreadystatechange = () => {
		if(xhttp.readyState === 4 && xhttp.status === 200){

			// La respuesta es recibida como un texto.
			console.info(xhttp.response);
			console.info(xhttp.responseText);
		}
	};
}

// ------------------------------ //
// ------ Peticion (texto) ------ //
// ------------------------------ //

function peticionText(){

	xhttp.open("GET", "text.txt", true);
	// Le especificamos que la respuesta sera recibida como un (texto).
	xhttp.responseType = ("text");
	xhttp.send();

	xhttp.onreadystatechange = () => {
		if(xhttp.readyState === 4 && xhttp.status === 200){

			// Respuesta recibida como texto.
			console.info(xhttp.response);
			console.info(xhttp.responseText);
		}
	};
}

// ----------------------------- //
// ------ Peticion (JSON) ------ //
// ----------------------------- //

function peticionJSON(){

	xhttp.open("GET", "prueba.json", true);
	// Le especificamos que la respuesta sera recibida como un (JSON).
	xhttp.responseType = ("json");
	xhttp.send();

	xhttp.onreadystatechange = () => {
		if(xhttp.readyState === 4 && xhttp.status === 200){

			let objeto = xhttp.response;

			// NOTA: Esto dara un error, dado que la respuesta no es un texto, sino un (JSON).
			console.error(xhttp.responseText);
		}
	};
}

// ------------------------------------- //
// ------ Peticion (HTML) o (XML) ------ //
// ------------------------------------- //

function peticionHTML(){
	xhttp.open("GET", "prueba.html", true);
	// Le especificamos que la respuesta sera recibida como un (JSON).
	xhttp.responseType = ("document");
	xhttp.send();

	xhttp.onreadystatechange = () => {
		if(xhttp.readyState === 4 && xhttp.status === 200){

			xhttp.response.getElementById('idText');

			// NOTA: Esto dara un error, dado que la respuesta no es un texto, sino un (document).
			console.error(xhttp.responseText);
		}
	};
}

function peticionXML(){
	xhttp.open("GET", "prueba.xml", true);
	// Le especificamos que la respuesta sera recibida como un (XML).
	xhttp.responseType = ("xml");
	xhttp.send();

	xhttp.onreadystatechange = () => {
		if(xhttp.readyState === 4 && xhttp.status === 200){

			xhttp.responseXML.getElementsByTagName('books');
			xhttp.response.getElementsByTagName('books');

			// NOTA: Esto dara un error, dado que la respuesta no es un texto, sino un (XML).
			console.error(xhttp.responseText);
		}
	};
}

// ----------------------------- //
// ------ Peticion (Blob) ------ //
// ----------------------------- //

function peticionBlob(){

	xhttp.open("GET", "imagen.png", true);
	// Le especificamos que la respuesta sera recibida como un (Blob).
	xhttp.responseType = ("blob");
	xhttp.send();

	xhttp.onreadystatechange = () => {
		if(xhttp.readyState === 4 && xhttp.status === 200){

			// Convertimos la respuesta a una imagen.
			let url = URL.createObjectURL(xhttp.response);

			// NOTA: Esto dara un error, dado que la respuesta no es un texto, sino un (Blob).
			console.error(xhttp.responseText);
		}
	};
}