"use strict";

/* ##########===============########## */
/* ######===--- (Headers) ---===###### */
/* ##########===============########## */

// Tenemos nuestro encabezado.
var encabezado = new Request('imagen.jpg').headers; // Headers {}

// Esta es otra forma de tener nuestro encabezado.
var encabezado = new Headers();

/* ##########==================================########## */
/* ######===--- Metodos del objeto (Headers) ---===###### */
/* ##########==================================########## */

// ----------------------------- //
// ------ Manipular datos ------ //
// ----------------------------- //

// Agrega un nuevo encabezado.
encabezados.append("Content-type", "image/jpeg");
encabezados.append("Content-type", "image/png");

// Obtiene el valor de un encabezado.
encabezados.get("Content-type"); // Da: 'image/jpeg', 'image/png'

// Verifica si el encabezado existe y retorna un valor (booleano).
encabezados.has("Content-type");

// Elimina un encabezado.
encabezados.delete("Content-type");

// ---------------------------------- //
// ------ Recorrer encabezados ------ //
// ---------------------------------- //

// Podemos iterar los encabezados por medio del metodo (forEach).
encabezados.forEach(encabezado => {
	console.log("Encabezado => "+encabezado);
});

/*
	--- Encabezado => deflate
	--- Encabezado => image/jpeg
*/

// --------------------------------------- //
// ------ Sobreescribir encabezados ------ //
// --------------------------------------- //

// Setea todo el contenido de un encabezado.
encabezados.set("Content-type", "Unico valor");

encabezados.append("Content-type", "image/jpeg"); // 'image/jpeg'.
encabezados.append("Content-type", "image/jpeg"); // 'image/jpeg', 'image/png'.
encabezados.set("Content-type", "Unico valor"); // 'Unico valor'.

/* ##########===========########## */
/* ######===--- (Uso) ---===###### */
/* ##########===========########## */

// Creacion del objeto (headers).

var headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Authorization', 'Bearer ' + token);

/**
 * Hacer una peticion.
 */
fetch('https://ejemplo.com/recurso', {
  method: 'GET',
  // Aqui podemos utilizar el objeto (headers).
  headers
}).then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));