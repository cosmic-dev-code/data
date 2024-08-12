"use strict";

/* ##########=====================================########## */
/* ######===--- CRUD con llave (autoIncrement)  ---===###### */
/* ##########=====================================########## */

/**
 * @Base de datos.
 */
var peticionDB = window.indexedDB.open("miBaseDeDatos", 2);

peticionDB.addEventListener('upgradeneeded', function(event){
	// Abrimos la base de datos.
	let baseDeDatos = event.target.result;

	if(!baseDeDatos.objectStoreNames.contains("tablaUsuarios")){
		/**
		 * Haciendo uso de la llave primaria (autoIncrement).
		 * 	--- La base de datos acepta cualquier tipo de datos.
		 */
		const tablaUsuarios = baseDeDatos.createObjectStore(
			"tablaUsuarios", {autoIncrement: true}
		);
	}

});

// Al cargar la base de datos ejecutamos las funciones.
peticionDB.onsuccess = function(event){
	console.log("La base de datos se inicio correctamente.");

	/* -------------------------------------- */
	/* ------ Funciones con los (CRUD) ------ */
	/* -------------------------------------- */

	// Abrimos la base de datos.
	let baseDeDatos = event.target.result;

	/**
	 * @Agregar un registro.
	 */
	function addObject(object = undefined){
		if(object === undefined) return false;

		let result = baseDeDatos.transaction(["tablaUsuarios"], "readwrite")
			.objectStore("tablaUsuarios")
				.add(object);

		result.onsuccess = event => console.log("El objeto de creo.");
		result.onerror = error => console.error("Error al agregar el registro: ", event.target.error.message);
	}

	/**
	 * @Obtener varios registros.
	 */
	function showObjects(){
		let result = baseDeDatos.transaction(["tablaUsuarios"], "readonly")
			.objectStore("tablaUsuarios")
				.openCursor();

		result.onsuccess = function(event){
			let cursor = event.target.result;

			if(cursor){
				console.log(cursor.key+" => ", cursor.value);
				cursor.continue();
			}else{
				console.log("Ya no hay mas registros.");
			}
		}
		result.onerror = error => console.error("Error al traer los registros: ", event.target.error.message);
	}

	/**
	 * @Obtener un registro.
	 */
	function showObject(key = undefined){
		if(key === undefined) return false;

		let result = baseDeDatos.transaction("tablaUsuarios", "readonly")
			.objectStore("tablaUsuarios")
				.get(key);

		result.onsuccess = event => console.log(event.target.result);
		result.onerror = error => console.error("Error al traer el registro: ", event.target.error.message);
	}

	/**
	 * @Actualizar un registro.
	 */
	function updateObject(object = undefined, key = undefined){
		if(object === undefined || key === undefined) return false;

		let result = baseDeDatos.transaction("tablaUsuarios", "readwrite")
			.objectStore("tablaUsuarios")
				/* El metodo (put) recibe dos parametros: 
					--- El valor que se desea asignar.
					--- La llave primaria del objeto que se desea reemplazar. */
				.put(object, key);

		result.onsuccess = function(event){
			event.returnValue; // Devuelve un booleano que confirma si tenemos un valor o no.
			event.target.result; // Devuelve la llave del objeto modificado.
			event.target.source; // Propiedades de la tabla.
			console.log("Objecto actualizado.");
		};
		result.onerror = error => console.error("Error al actualizar el registro: ", event.target.error.message);
	}

	/**
	 * @Borrar un registro.
	 */
	function deleteObject(key = undefined){
		if(key === undefined) return false;
		let result = baseDeDatos.transaction(["tablaUsuarios"], "readwrite")
			.objectStore("tablaUsuarios")
				// Borramos el registro de acuerdo a su llave primaria.
				.delete(key);

		result.onsuccess = () => console.log("Objecto eliminado.");
		result.onerror = error => console.error("Error al eliminar el registro: ", event.target.error.message);
	}

	/**
	 * @Eliminar todos los registros.
	 */
	function clearObject(){
		let result = baseDeDatos.transaction(["tablaUsuarios"], "readwrite")
			.objectStore("tablaUsuarios")
				// Eliminamos todos los registros.
				.clear();

		result.onsuccess = () => console.log("Todos los registros fueron eliminados.");
		result.onerror = error => console.error("Error al eliminar los registros: ", event.target.error.message)
	}

	// Podemos agregar cualquier clase de dato en una base de datos indexada, (autoIncrement).
	addObject({nombres: "Brandon Anthony", apellidos: "Olivares Amador", edad: 22});
	addObject("Cadena de texto para la tabla.");
	addObject([
		5, true, 
		"Cadena de texto", 
		{nombre: "Brandon", apellido: "Olivares", edad: 22}
	]);
	addObject(null);
	addObject(undefined);

	showObjects();

	showObject(1);
	showObject(2);
	showObject(3);

	updateObject({nombres: "Brandon", correo: "brandon@gmail.com"}, 1);

	deleteObject(3);

	clearObject();
};

// Manejamos cualquier error en la base de datos.
peticionDB.onerror = function(event){
	console.error(
		"Error en la base de datos: ", 
		event.target.errorCode
	);
};

/* ##########===============================########## */
/* ######===--- CRUD con llave (keyPath)  ---===###### */
/* ##########===============================########## */

/**
 * @Base de datos.
 */
var peticionDB = window.indexedDB.open("miBaseDeDatos", 1);

peticionDB.addEventListener('upgradeneeded', function(event){
	
	// Abrimos la base de datos.
	let baseDeDatos = event.target.result;

	if(!baseDeDatos.objectStoreNames.contains("tablaUsuarios")){
		/**
		 * Haciendo uso de la llave primaria (keyPath).
		 * 	--- La base de datos solo acepta objetos especificos.
		 */
		const tablaUsuarios = baseDeDatos.createObjectStore(
			"tablaUsuarios", {keyPath: "llave"}
		);

		// Agregamos las (columnas/indices).
		const agregarIndex = function(propiedad){
			tablaUsuarios.createIndex(('index_'+propiedad), propiedad, {
					unique: false, 
					multiEntry: false, 
					locate: null
				}
			);
		};

		agregarIndex("nombres");
		agregarIndex("apellidos");
		agregarIndex("edad");
		agregarIndex("correo");
	}
});

// Al cargar la base de datos ejecutamos las funciones.
peticionDB.onsuccess = function(event){
	console.log("La base de datos se inicio correctamente.");

	/* -------------------------------------- */
	/* ------ Funciones con los (CRUD) ------ */
	/* -------------------------------------- */

	function getTransactionStore(mode = "readonly"){
		// Hacemos la peticion a la base de datos.
		const baseDeDatos = peticionDB.result;

		const transaction = baseDeDatos.transaction("tablaUsuarios", mode), 
			  objectStore = transaction.objectStore("tablaUsuarios");

		/* Retornamos ambos objetos: 
			--- El objeto para comprobar si la transaccion se realizo, (IDBTransaction).
			--- El objeto para realizar las transacciones, (IDBObjectStore). */
		return {
			transaction: transaction, 
			objectStore: objectStore
		};
	}

	/**
	 * @Agregar un registro.
	 */
	function objectAdd(object = undefined){
		if(object === undefined) return false;

		// Recibimos ambos objetos, (transaccion) y (store).
		const baseDeDatos = getTransactionStore("readwrite");

		baseDeDatos.objectStore.add(object);
		baseDeDatos.transaction.oncomplete = () => {
			console.log("Objeto agregado correctamente.");
		};
	}

	/**
	 * @Obtener varios registros.
	 */
	function objectShowAll(){
		// Recibimos ambos objetos, (transaccion) y (store).
		const db = getTransactionStore();

		const openCursor = db.objectStore.openCursor();

		// Los iteramos.
		openCursor.addEventListener("success", event => {
			let cursor = event.target.result;

			if(cursor){
				console.log(cursor.key+" => ", cursor.value);
				cursor.continue();
			}else{
				console.log("Todos los datos fueron leidos.");
			}
		});
	}

	/**
	 * @Obtener un registro.
	 */
	function objectShow(key = undefined){
		if(key === undefined) return false;
		// Recibimos ambos objetos, (transaccion) y (store).
		const db = getTransactionStore();

		let result = db.objectStore.get(key);

		db.transaction.oncomplete = event => console.log(event.target.result);
		result.onerror = error => console.error("Error al traer el registro: ", event.target.error.message);
	}

	/**
	 * @Actualizar un registro.
	 */
	function objectUpdate(object = undefined, key = undefined){
		if(object === undefined || key === undefined) return false;

		// Recibimos ambos objetos, (transaccion) y (store).
		const db = getTransactionStore('readwrite');
		
		let result = db.objectStore.get(key);

		result.onsuccess = event => {
			if(event.target.result === undefined) return false;

			// Obtenemos el objeto de acuerdo a la (llave primaria).
			let objectOld = event.target.result;

			// Cambioamos los datos.
			objectOld.nombres = object.nombres;
			objectOld.apellidos = object.apellidos;
			objectOld.edad = object.edad;
			objectOld.correo = object.correo;

			// Guardamos el objeto que recibimos de acuerdo a su (llave primaria).
			db.objectStore.put(objectOld);

			db.transaction.oncomplete = () => {
				console.log("Objeto modificado correctamente.");
			};
		};
	}

	/**
	 * @Borrar un registro.
	 */
	function objectDelete(key = undefined){
		if(key === undefined) return false;

		// Recibimos ambos objetos, (transaccion) y (store).
		const db = getTransactionStore("readwrite");

		db.objectStore.delete(key);

		db.transaction.oncomplete = () => {
			console.log("Objeto Eliminado correctamente.");
		};
	}

	/**
	 * @Eliminar todos los registros.
	 */
	function objectClear(){
		// Recibimos ambos objetos, (transaccion) y (store).
		const db = getTransactionStore("readwrite");

		let result = db.objectStore.clear();

		result.onsuccess = () => console.log("Todos los registros fueron eliminados.");
		result.onerror = error => console.error("Error al eliminar los registros: ", event.target.error.message)
	}

	/* Agregamos los objetos con las propiedades de acuerdo a las (indices), incluyendo el nombre y valor de la 
	(llave primaria).

	NOTA: Si esto no se hace, entonces tendremos un error porque no estamos siguiendo la estructura de la base de datos. */
	objectAdd({
		llave: 0, nombres: "Brandon", apellidos: "Olivares", 
		edad: 22, correo: "brandon@gmail.com"
	});

	objectAdd({
		llave: 'Numero 0', nombres: "Anthony", apellidos: "Amador", 
		edad: 20, correo: "anthony@gmail.com"
	});

	objectAdd({
		llave: [5, 4], nombres: "Cosmic", apellidos: "Cosmico", 
		edad: 19, correo: "cosmic@gmail.com"
	});

	// Mostramos todos los objetos.
	objectShowAll();

	/* Mostramos un solo registro de acuerdo a la (llave primaria), 
	puede ser cualquier cosa, pero procuremos no repetirla. */
	objectShow(0);
	objectShow('Numero 0');
	objectShow([5, 4]);

	// Podemos actualizar un registro.
	objectUpdate({
		llave: [5, 4], nombres: "Cosmic", apellidos: "Cosmico", 
		edad: 19, correo: "cosmic@gmail.com"
	}, 0);

	objectUpdate({
		llave: [5, 4], nombres: "Cosmic", apellidos: "Cosmico", 
		edad: 19, correo: "cosmic@gmail.com"
	}, [5, 4]);

	// Eliminamos un registro de acuerdo a su (llave primaria).
	objectDelete(0);
	objectDelete('Numero 0');
	objectDelete([5, 4]);

	// Eliminamos todos los registros.
	objectClear();
};