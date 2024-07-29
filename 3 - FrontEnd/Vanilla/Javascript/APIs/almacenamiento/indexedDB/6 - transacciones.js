"use strict";

// Abrir base de datos.
const peticionDB = window.indexedDB.open("database", 1);

peticionDB.onupgradeneeded = function(event){
	// Crear almacenes con sus indices.
};

peticionDB.onerror = event => {};

peticionDB.onsuccess = function(event){
	// Obtener base de datos.
	const baseDeDatos = event.target.result;

	almacen(baseDeDatos);
	transaccionAlmacen(baseDeDatos);
	transaccionEnUnaLinea(baseDeDatos);
};

/**
 * Hacer transacciones solo con el almacen.
 */
function almacen(baseDeDatos){
	// Obtener el almacen de la transaccion.
	const almacenUsuarios = baseDeDatos.transaction("usuarios", "readwrite").objectStore("usuarios");

	almacenUsuarios.add("Brandon");

	almacenUsuarios.onsuccess = function(event){
		// La transaccion se realizo con exito.
	}

	almacenUsuarios.onerror = function(error){
		// Mensaje de error.
		event.target.error.message;
	}
}

/**
 * Separar el almacen y las transacciones.
 */
function transaccionAlmacen(baseDeDatos){
	// Obtener transaccion.
	const transaccion = baseDeDatos.transaction("usuarios", "readwrite");
	// Obtener almacen.
	const almacenUsuarios = transaction.objectStore("usuarios");

	almacenUsuarios.add("Brandon");

	transaction.oncomplete = function(event){
		// La transaccion fue realizada con exito.
	}
}

/**
 * Todo en una linea.
 */
function transaccionEnUnaLinea(baseDeDatos){
	// Todo puede realizarse en una sola linea.
	baseDeDatos.transaction("usuarios", "readwrite").objectStore("usuarios").add("Brandon").onsuccess = event => {
		// La transaccion fue realizada con exito.
	};
}