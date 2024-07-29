
/**
 * El evento (upgradeneeded) normalmente se utiliza para crear los almacenes con sus indices.
 */
window.indexedDB.open("miBaseDeDatos", 1).addEventListener("upgradeneeded", event => {

	// Obtener base de datos.
	const baseDeDatos = event.target.result; // IDBDatabase

	/* ##########================########## */
	/* ######===--- Almacenes  ---===###### */
	/* ##########================########## */

	/**
	 * Los almacenes de objetos funcionan de una manera orientada a objetos: 
	 * 	--- (clave => valor).
	 * 
	 * Dentro permiten almacenar datos primitivos y tambien complejos como lo son los objetos.
	 * Constan de (indices) los cuales representan las (columnas).
	 */

	/* ----------------------------- */
	/* ------ Crear almacenes ------ */
	/* ----------------------------- */

	// Crea un almacen con una llave primaria auntoincremental.
	// (Numero auto incremental).
	const almacenUsuarios = baseDeDatos.createObjectStore("almacenUsuarios", {
		autoIncrement: true
	});

	// Indica la llave primaria no como auto incremental sino como un valor fijo y unico.
	// (clave => valor).
	const almacenUsuarios = baseDeDatos.createObjectStore("almacenUsuarios", {
		keyPath: "llavePrimaria"
	});

	/* ------------------------------- */
	/* ------ Buscar un almacen ------ */
	/* ------------------------------- */

	// Extrae todos los nombres de los almacenes en una lista.
	let almacenes = baseDeDatos.objectStoreNames;

	// El metodo (contains) verifica si existe un almacen dentro de la lista.
	almacenes.contains("almacenUsuarios"); // true
	almacenes.contains("otraTabla"); // false

	/* --------------------------------- */
	/* ------ Eliminar un almacen ------ */
	/* --------------------------------- */

	// Elimina un almacen de la base de datos.
	baseDeDatos.deleteObjectStore("almacenUsuarios");

	/* ------------------------------ */
	/* ------ Iterar almacenes ------ */
	/* ------------------------------ */

	// Extraer los nombres de los almacenes en una lista.
	let almacenes = baseDeDatos.objectStoreNames;
	
	// Iteramos todos los nombres de las almacenes.
	for(let i = 0; i < restoreNames.length; i++){
		console.log(restoreNames[i]);
	}

	/* ------------------------------------- */
	/* ------ Eventos para el almacen ------ */
	/* ------------------------------------- */

	almacenUsuarios.oncomplete = function(){
		// Cuando una transacción se completa correctamente.
	};

	almacenUsuarios.onerror = function(){
		// Cuando se produce un error en la transacción.
	};

	almacenUsuarios.onabort = function(){
		// Cuando se aborta una transacción de la base de datos.
	};

	almacenUsuarios.oncreateindex = function(){
		// Cuando se crea un índice en el almacén de objetos.
	}

	almacenUsuarios.ondeleteindex = function(){
		// Cuando se elimina un índice del almacén de objetos.
	}
});