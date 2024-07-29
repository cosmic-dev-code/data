"use strict";

window.indexedDB.open("miBaseDeDatos", 1).addEventListener("upgradeneeded", event => {

	// Obtener la base de datos.
	const baseDeDatos = event.target.result; // IDBDatabase

	baseDeDatos.createObjectStore("usuarios", {keyPath: "id"}).oncomplete = function(event){

		// Obtenemos el almacen indexado (usuarios).
		const almacenUsuarios = event.target.result; // IDBObjectStore

		/* ##########==============########## */
		/* ######===--- Indices  ---===###### */
		/* ##########==============########## */

		/* Los indices en los almacenes son representados como (columnas), estos pueden reflejar cualquier 
		dato del regidtro que se alamacena. (Representan las pripiedades del objeto almacenado).

		Los indices tienen como objetivo permitir al desarrollador buscar los datos almacenados por otro 
		medio diferente a la llave primaria. */

		/* --------------------------- */
		/* ------ Crear indices ------ */
		/* --------------------------- */

		/* Hacemos uso del metodo (createIndex) para crear una columna en la tabla "almacenUsuarios", 
		recibe los siguientes parametros: 
			--- Nombre del indice.
			--- La propiedad del objeto a la cual hara referencia el indice.
			--- Los ajustes del indice.
				--- (unique), recibe si el campo es unico o no.
				--- (multiEntry), si el indice permite indexar matrices [].
				--- (locate), indica una hubicacion personalizada para este indice. */
		almacenUsuarios.createIndex("indexNombres", "nombres", {
			unique: false, 
			multiEntry: false, 
			locate: null
		});

		/**
		 * Creando los indices con los mismos ajustes.
		 */
		let ajustes = new Object({
			unique: false, 
			multiEntry: false, 
			locate: null
		});

		almacenUsuarios.createIndex("indexApellidos", "apellidos", ajustes);
		almacenUsuarios.createIndex("indexEdad", "edad", ajustes);
		almacenUsuarios.createIndex("indexActivo", "activo", ajustes);
		almacenUsuarios.createIndex("indexCorreo", "correo", {unique: true});

		/* ----------------------------- */
		/* ------ Eliminar indice ------ */
		/* ----------------------------- */

		// Elimina un indice del almacen de objetos.
		almacenUsuarios.deleteIndex("indexApellidos");

		/* ---------------------------- */
		/* ------ Buscar indices ------ */
		/* ---------------------------- */

		// Busca un indice especifico dentro del arreglo (indexNames).
		almacenUsuarios.indexNames.contains("indexNombres");

		/* ------------------------------------- */
		/* ------ Iterar y buscar indices ------ */
		/* ------------------------------------- */

		// Devuelve una lista con los nombres de los indices de la tabla.
		let nombresIndices = tableUser.indexNames;

		// Iteramos todos los nombres de los indices.
		for(let indice of nombresIndices){
			console.info(
				indice
			);
		}
	};
};