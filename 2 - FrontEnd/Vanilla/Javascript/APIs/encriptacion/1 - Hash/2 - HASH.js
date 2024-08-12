"use strict";

/* ##########========================########## */
/* ######===--- Operadores de bits ---===###### */
/* ##########========================########## */

/* El operador << es el operador de desplazamiento a la izquierda. Este operador mueve los bits de un número hacia la 
izquierda y rellena los bits vacíos con ceros.
	--- Por ejemplo: (2 << 1) resultaría en (4), porque mueve el bit 1 a la izquierda, dejando un cero en la posición 
		de la derecha. */
operacion = (2 << 1); // 4

/* El operador & en JavaScript es un operador de bits que se utiliza para comparar los bits de dos números y devuelve 
un nuevo número en el que cada bit está configurado en 1 solo si ambos bits correspondientes de los números de 
entrada también son 1. De lo contrario, el bit resultante se establece en 0. */
operacion = (2 & 3);

/* Estos operadores son útiles cuando se trabaja con datos binarios, como al trabajar con codificación o encriptación de datos. */

/* ##########============================########## */
/* ######===--- Funcion para encriptar ---===###### */
/* ##########============================########## */

// Función Hash que implementa el algoritmo (djb2).
function hashCode(str){
	// Valor hash final.
	var hash = 0;
	
	if (str.length == 0) return hash;

	for (var i = 0; i < str.length; i++) {
		// Extrae el código del carácter de la posición actual de la cadena.
		var char = str.charCodeAt(i);
		
		hash = ((hash << 5) - hash) + char;

		// Convertir a 32 bits entero.
		hash = hash & hash;
	}

	return hash;
}

var myHashCode = hashCode("Ejemplo de texto");

// Cadena (hash).
console.log(myHashCode);

/* ##########==================================================########## */
/* ######===--- (Encriptar) y (desencriptar) con una (clave) ---===###### */
/* ##########==================================================########## */

/* Para encripar y desencriptar se asosia a la cadena una (clave) de forma binaria. */

function encrypt(message, key){
	let encryptedMessage = "";

	// Se mezcla el (mensaje) con la (clave) de forma binaria.
	for (let i = 0; i < message.length; i++) {
		let asciiCode = message.charCodeAt(i);

		let keyCode = key.charCodeAt(i % key.length);

		let encryptedCharCode = (asciiCode + keyCode) % 256;
		encryptedMessage += String.fromCharCode(encryptedCharCode);
	}

	return encryptedMessage;
}

function decrypt(encryptedMessage, key){
	let decryptedMessage = "";

	// Se desmezcla el (mensaje) con la (clave) de forma binaria.
	for (let i = 0; i < encryptedMessage.length; i++) {
		let encryptedCharCode = encryptedMessage.charCodeAt(i);

		let keyCode = key.charCodeAt(i % key.length);
		
		let asciiCode = (encryptedCharCode - keyCode + 256) % 256;
		decryptedMessage += String.fromCharCode(asciiCode);
	}

	return decryptedMessage;
}

// Encriptar cadena.
let cadenaEncriptada = encrypt("Hola mundo", "mi-clave");

// Desencriptar cadena.
let resultado = decrypt(cadenaEncriptada, "mi-clave");

/* ##########===============########## */
/* ######===--- Con clase ---===###### */
/* ##########===============########## */

class Encryption{
	// Se recibe la clave.
	constructor(key){
		this.key = key;
	}

	// Metodo para encriptar.
	encrypt(message){
		let encryptedMessage = "";

		for (let i = 0; i < message.length; i++) {
			let asciiCode = message.charCodeAt(i);
			let keyCode = this.key.charCodeAt(i % this.key.length);
			let encryptedCharCode = (asciiCode + keyCode) % 256;
			encryptedMessage += String.fromCharCode(encryptedCharCode);
		}

		return encryptedMessage;
	}

	// Metodo para desencriptar.
	decrypt(encryptedMessage){
		let decryptedMessage = "";

		for (let i = 0; i < encryptedMessage.length; i++){
			let encryptedCharCode = encryptedMessage.charCodeAt(i);
			let keyCode = this.key.charCodeAt(i % this.key.length);
			let asciiCode = (encryptedCharCode - keyCode + 256) % 256;
			decryptedMessage += String.fromCharCode(asciiCode);
		}

		return decryptedMessage;
	}
}

/**
 * Clase con los metodos de encriptacion y desencriptacion.
 */
const encriptacion = new Encryption("mi-clave");

encriptacion.key; // "mi-clave"

// Encriptar cadena.
let cadenaEncriptada = encriptacion.encrypt("Hola mundo");

// Desencriptar cadena.
let resultado = encriptacion.decrypt(cadenaEncriptada);