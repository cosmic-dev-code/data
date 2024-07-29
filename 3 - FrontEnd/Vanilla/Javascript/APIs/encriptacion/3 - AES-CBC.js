"use strict";

/* ##########===============================########## */
/* ######===--- Generar (clave aleatoria) ---===###### */
/* ##########===============================########## */

/* Para generar una clave secreta, es necesario pasar por parametros: 
	--- Los ajustes de la tipo de encriptacion.
	--- Indicar si se puede exportar o no.
	--- Fines para los cuales se utilizara la clave. */
window.crypto.subtle.generateKey(
	{
		name: 'AES-CBC', // Tipo de cifrado.
		length: 256 // Longitud de la clave secreta.
	}, 
	// Si la clave puede ser exportada de la API Web Crypto.
	true, 
	// Indica que la clave se utilizara para (encriptar) y (desencriptar).
	['encrypt', 'decrypt']
).then(key => {
	// Esta es la clave que se utilizara para ambos casos.
	console.log(key);
})
.catch(error => {
	// En caso de algun error.
	console.error(error);
});

/* ##########==============================########## */
/* ######===--- Encriptar y desencriptar ---===###### */
/* ##########==============================########## */

// ----------------------- //
// ------ Encriptar ------ //
// ----------------------- //

// Cadena a encriptar.
const cadena = 'Hola, mundo!';

// Se convierte la cadena a un ArrayBuffer.
const encoder = new TextEncoder();
const cadenaArrayBuffer = encoder.encode(cadena).buffer;

// Se genera un vector de inicialización aleatorio.
const iv = window.crypto.getRandomValues(new Uint8Array(16));

window.crypto.subtle.encrypt(
	{
		name: 'AES-CBC',
		iv: iv // Pasamos el vector.
	},
	// La clave que generamos para encriptar y desencriptar.
	key, 
	// La cadena convertida a (ArrayBuffer).
	cadenaArrayBuffer 
).then(encrypted => {

	// Esta es la cadena encriptada.
	console.log(encrypted);

}).catch(error => {
	console.error(error);
});

// -------------------------- //
// ------ Desencriptar ------ //
// -------------------------- //

window.crypto.subtle.decrypt(
	{
		name: 'AES-CBC', 
		// Pasamos el vector con el cual (encriptamos al principio).
		iv: iv
	}, 
	// La clave que generamos para encriptar y desencriptar.
	key, 
	// La cadena a desencriptar.
	encrypted
).then(decrypted => {

	// Desconvertimos el (ArrayBuffer) a una cadena.
	const decoder = new TextDecoder();
	const decryptedString = decoder.decode(decrypted);

	// Cadena desencriptada.
	console.log(decryptedString);

}).catch(error => {
	console.error(error);
});