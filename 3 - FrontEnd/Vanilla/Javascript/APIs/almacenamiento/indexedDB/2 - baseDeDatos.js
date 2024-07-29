/* ##########===========================########## */
/* ######===--- (Metodos) y (eventos) ---===###### */
/* ##########===========================########## */

/**
 * (event.target.result) es la propiedad que contiene la base de datos.
 */

window.indexedDB.open("miBaseDeDatos", 1).onsuccess = event => {
	const baseDeDatos = event.target.result; // IDBDatabase

	// ...
};

window.indexedDB.open("miBaseDeDatos", 1).onupgradeneeded = event => {
	let baseDeDatos = event.target.result; // IDBDatabase

	// ----------------------------------- //
	// ------ Metodos y propiedades ------ //
	// ----------------------------------- //

	// Devuelve el nombre de la base de datos.
	baseDeDatos.name;

	// Devuelve la version de la base de datos.
	baseDeDatos.version;

	// Cierra la base de datos.
	baseDeDatos.close();

	// --------------------- //
	// ------ Eventos ------ //
	// --------------------- //

	baseDeDatos.onabort = function(){
		// Cuando se cancela una transaccion, (puede ser utilizado para volver a realizar transacciones fallidas).
	};

	baseDeDatos.onversionchange = function(event){
		// Cuando se actualiza la base de datos.
		event.newVersion;
	};

	baseDeDatos.onclose = function(){
		// Cuando se cierra la conexion a la base de datos.
	};

	baseDeDatos.onerror = function(event){
		// En caso de que haya un error en la base de datos.
		event.target.errorCode
	};
};