"use strict";

// Podemos emitir eventos utilizando el modulo (events).
var events = require('events');

// --------------------------------- //
// ------ Crear objeto evento ------ //
// --------------------------------- //

// Creamos un evento.
const eventEmitter = events.eventEmitter();

// Constructor.
const miEmitter = new events();

// ------------------------------- //
// ------ Emitir y escuchar ------ //
// ------------------------------- //

// Emite un evento personalizado.
eventEmitter.emit("mievent");

// Escucha un evento personalizado.
eventEmitter.on('mievent', () => {
	// ...
});

// ------------------------ //
// ------ Argumentos ------ //
// ------------------------ //

// Emite dos argumentos: 10 y "hola".
miEmitter.emit("mievent", 10, "hola");

// Escucha y recibe los argumentos.
miEmitter.on('mievent', (arg1, arg2) => {
	// ...
});

// ------------------------------ //
// ------ Eliminar escucha ------ //
// ------------------------------ //

// Necesaria para indicar una referencia.
const miFuncionEscuchadora = (arg1, arg2) => {
	// ...
};

// Emitir junto con su callback.
miEmitter.on('miEvento', miFuncionEscuchadora);

// Eliminar el escuchador junto con su callback.
miEmitter.removeListener('miEvento', miFuncionEscuchadora);
