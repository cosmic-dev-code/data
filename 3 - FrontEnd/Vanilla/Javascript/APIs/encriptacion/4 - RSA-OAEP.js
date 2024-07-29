"use strict";

/* ##########=======================================########## */
/* ######===--- Generar clave (publica)-(privada) ---===###### */
/* ##########=======================================########## */

/* NOTA: Las propiedades: 
	--- (modulusLength), (publicExponent), (hash). Solo son para el tipo de encriptado (RSA-OAEP). */

window.crypto.subtle.generateKey(
	{
		// Específica el tipo de cifrado.
		name: "RSA-OAEP", 
		// Longitud en bits y exponente público de 65537.
		modulusLength: 2048, 
		publicExponent: new Uint8Array([0x01, 0x00, 0x01]), 
		// El tipo de algoritmo que se utilizará solo para cifrados RSA
		hash: { name: "SHA-256" }
	},
	// Si la clave puede ser exportada de la API Web Crypto.
	true, 
	/* El fin para el cual se utilizarán las claves: (encriptar), (desencriptar). */
	["encrypt", "decrypt"]
).then(keyPair => {

	// Se generan el par de claves, (publica)-(privada).
	console.log(keyPair);

}).catch(error => {
	// ...
});

/* ##########==============================########## */
/* ######===--- Encriptar y desencriptar ---===###### */
/* ##########==============================########## */

// ----------------------- //
// ------ Encriptar ------ //
// ----------------------- //

// Par de llaves.
const keyPair = await window.crypto.subtle.generateKey(OPTIONS);

// Cadena a encriptar.
const message = "Este es un mensaje secreto";

window.crypto.subtle.encrypt(
	{
	  name: "RSA-OAEP"
	}, 
	// Del par de claves que generamos, utilizamos la clave (publica).
	keyPair.publicKey, 
	// Codificamos el texto a encriptar.
	new TextEncoder().encode(message)
).then(encryptedMessage => {

	// Esta es la cadena encriptada.
	console.log(encryptedMessage);

}).catch(error => {
	// ...
});

// -------------------------- //
// ------ Desencriptar ------ //
// -------------------------- //

// Par de llaves.
const keyPair = await window.crypto.subtle.generateKey(OPTIONS);

window.crypto.subtle.decrypt(
	{
		name: "RSA-OAEP"
	}, 
	// Del par de claves que generamos, utilizamos la clave (privada).
	keyPair.privateKey, 
	// Cadena encriptada.
	encryptedMessage
).then(decryptedMessage => {

	// Decodificamos la cadena.
	const decryptedText = new TextDecoder().decode(decryptedMessage);

	// Cadena desencriptada.
	console.log(decryptedText); // "Este es un mensaje secreto"

}).catch(error => {
	// ...
});

/* ##########=======================########## */
/* ######===--- (async) / (await) ---===###### */
/* ##########=======================########## */

/**
 * Generar un par de claves (pública-privada).
 */
async function generateKeyPair(){
	const keyPair = await window.crypto.subtle.generateKey(
		{
			name: "RSA-OAEP", 
			modulusLength: 2048, 
			publicExponent: new Uint8Array([0x01, 0x00, 0x01]), 
			hash: { name: "SHA-256" }
		}, 
		true, 
		["encrypt", "decrypt"]
	);

	return keyPair;
}

/**
 * Encriptar mensaje.
 */
async function encryptData(message = ""){
	// Generar un par de claves (pública-privada).
	const keyPair = await generateKeyPair();

	const encryptedMessage = await window.crypto.subtle.encrypt(
		{
			name: "RSA-OAEP"
		}, 
		// Cifrar un mensaje con la clave (pública).
		keyPair.publicKey, 
		new TextEncoder().encode(message)
	);

	return encryptedMessage;
}

/**
 * Desencriptar mensaje.
 */
async function decryptData(encryptedMessage = ""){
	// Generar un par de claves (pública-privada).
	const keyPair = await generateKeyPair();

	// Descifrar el mensaje con la clave (privada).
	const decryptedMessage = await window.crypto.subtle.decrypt(
		{
			name: "RSA-OAEP"
		}, 
		keyPair.privateKey, 
		encryptedMessage
	);

	const decryptedText = new TextDecoder().decode(decryptedMessage);

	return decryptedText;
}

/**
 * Uso de las funciones.
 */

// Encriptacion.
let mensajeEncriptado = encryptData("Hola mundo");

// Desencriptacion.
let mensajeDesencriptado = decryptData(mensajeEncriptado);