"use strict";

/* ##########==========================########## */
/* ######===--- Tipos de (respuesta) ---===###### */
/* ##########==========================########## */

// ------------------------------------------- //
// ------ Convertir respuesta a (texto) ------ //
// ------------------------------------------- //

axios.get('documento.txt', {
		// Indicamos que la respuesta sera (texto).
		responseType: 'text'
	})
	.then(function (response) {
		response.data; // string
	})
	.catch(function (error) {
		console.error(error);
	});

// ------------------------------------------ //
// ------ Convertir respuesta a (json) ------ //
// ------------------------------------------ //

axios.get('files/data/users.json', {
	// Indicamos que la respuesta se recibe como JSON.
	responseType: 'json'
})
.then(function (response) {
	response.data; // object
})
.catch(function (error) {
	console.error(error);
});

/**
 * Podemos transformar manualmente.
 */

axios.get('files/data/users.json', {
	// Transformar respuesta.
	transformResponse: [
		// Convertir a JSON.
		(data) => JSON.parse(data)
	]
})
	.then(function (response) {
		response.data; // object
	})
	.catch(function (error) {
		console.error(error);
	});

// ------------------------------------------ //
// ------ Convertir respuesta a (blob) ------ //
// ------------------------------------------ //

axios.get('imagen.png', {
		// Indicamos que la respuesta debe convertirse a (Blob).
		responseType: 'blob'
	})
	.then(function (response) {
		URL.createObjectURL(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});

// ----------------------------------------- //
// ------ Convertir respuesta a (DOM) ------ //
// ----------------------------------------- //

axios.get('archivo.xml', {
		// Transformar el resultado.
		transformResponse: [
			// Convertir a (DOM). 
			(data) => {
				const parser = new DOMParser();
				return parser.parseFromString(data, 'application/xml');
			}
		]
	})
	.then(function (response) {
		response.data; // DOM
	})
	.catch(function (error) {
		console.error(error);
	});