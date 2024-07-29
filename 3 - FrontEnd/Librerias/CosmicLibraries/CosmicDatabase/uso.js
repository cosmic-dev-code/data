"use strict";

// Verifica que la tecnologia (indexedDB) tenga soporte en el navegador.
CosmicAnimation.isSupport(); // Bool.

/* Instanciamos un objeto haciendo uso de la clase (CosmicAnimation), 
recibe por parametros: 
	--- El nombre de la tabla.
	--- La version de la tabla.

La clase crea una nueva base de datos, si la base de datos ya existe, entonces la habre. */
const database = new CosmicDatabase("Dat", 1);

/* ##########============########## */
/* ######===--- Tablas ---===###### */
/* ##########============########## */

// ------------------------- //
// ------ Crear tabla ------ //
// ------------------------- //

/* El metodo (createTable) recibe los siguientes parametros: 
	--- El nombre de la tabla a crear.
	--- In objeto con los ajustes de la tabla: 
		--- AutoIncrement: Indica que la tabla sera auto incrementable.
		--- KeyPath: Indica si la tabla tendra un valor no auto incrementable. */
database.createTable("myTable", {
	autoIncrement: true, 
	keyPath: false
});

/* Creamos una tabla con un valor no auto incrementable, en este caso: 
	--- (myKey) representa la llave de cualquier valor. */
database.createTable("myTable", {
	autoIncrement: false, 
	keyPath: "myKey"
});

// -------------------------- //
// ------ Crear tablas ------ //
// -------------------------- //

/* El metodo (createTables) recibe los siguientes parametros: 
	--- Un array con los nombres de las tablas.
	--- Un arreglo con cada tipo de llave para la tabla: 
		--- AutoIncrement: Indica que la tabla sera auto incrementable.
		--- Otro valor indica que ese valor sera la keyPath de la tabla. */
database.createTables(
	["myTable_0", "myTable_1", "myTable_2"], 
	["autoIncrement", "autoIncrement", "myKey"]
);

/* Las llaves por defecto */
database.createTables(
	["myTable_0", "myTable_1", "myTable_2"], 
	['myKey']
);


// ----------------------------- //
// ------ Eliminar tablas ------ //
// ----------------------------- //

// Colocamos el nombre de la tabla a eliminar.
database.deleteTable("users");

// Colocamos un (array) con los nombres de las tablas a eliminar.
database.deleteTables(["users", "llaves", "Lol"]);

/* ##########=============########## */
/* ######===--- Indices ---===###### */
/* ##########=============########## */

// --------------------------- //
// ------ Crear indices ------ //
// --------------------------- //

/* El metodo (createIndex) recibe por parametro: 
	--- Un objeto con los ajustes del indice: 
		--- Nombre de la tabla a la cual se le quiere agregar el indice.
		--- Nombre del indice.
		--- Propiedad a lacual se sujeta el indice.
		--- Ajustes del indice: 
			--- Indicamos si el campo es unico.
			--- Indicamos si el campo es multientrada.
			--- Indicamos si el campo es local. */
database.createIndex({
	table: "llaves", 
	indexName: "indexKey", 
	property: "myKey", 
	settings: {
		unique: false, 
		multiEntry: false, 
		locate: null
	}
});

/* El metodo (createIndices) recibe por parametro: 
	--- Un objeto con laspropiedades: 
		--- nombre de la tabla: 
			--- Un arreglo con el nombre del indice y su valor. */
database.createIndices({
	tables: ["users", "llaves"], 
	indicesProperties: {
		users: [
			["indexName", "name"], 
			["indexSurnames", "surnames"], 
			["indexAge", "age"]
		], 
		llaves: [
			["indexKey", "myKey"]
		]
	}
});

database.createIndices({
	indices: {
		users: [
			["indexName", "name"], 
			["indexSurnames", "surnames"], 
			["indexAge", "age"]
		], 
		llaves: [
			["indexKey", "myKey"]
		]
	}
});

/* ##########============================########## */
/* ######===--- Ejecutar base de datos ---===###### */
/* ##########============================########## */

// --------------------------- //
// ------ El metodo use ------ //
// --------------------------- //

/* El metodo (use) ejecuta un callback solo cuando la base de datos 
ha recibido todas las instrucciones. */
database.use(() => {
	// ...
});

// --------------------------------- //
// ------ El metodo (execute) ------ //
// --------------------------------- //

/* Hacemos uso de una funcion asincrona. */
(async function use(){
	try{
		/* El metodo (execute) ejecuta la base de datos, devuelve una (promesa), 
		por lo que podramos ejecutarla desde una funcion asincrona. */
		await database.execute();

		// ...

	}catch(error){
		console.log("Error: ", error);
	}
}());

/* Ejecutamos el metodo (execute) el cual devuelve una (promesa) cuando la base de 
datos ya se encuentra lista para trabajar. */
database.execute()
	.then(result => {
		console.log(`La base de datos ha sido ejecutada: (${result})`)
	})
	.catch(error => {
		console.error("Error al ejecutar la base de datos: ", error);
	});

/* ##########===================================########## */
/* ######===--- Peticiones a la base de datos ---===###### */
/* ##########===================================########## */

// Esperamos a que la base de datos se encuentre lista.
database.use(async function(){
	try{

		// Creamos una instancia de la tabla (users).
		let usuarios = new database.Table("users");

		/* Todos los metodos de peticiones devuelven una promesa. */

		/* Agregamos un registro de acuerdo a las propiedades de los indices 
		de la tabla. */
		await usuarios.add({
			name: "Brandon Anthony", 
			surnames: "Olivares Amador", 
			age: 22
		}); // Bool.

		// Verifica que exista cierto registro de acuerdo a su llave.
		await usuarios.has(1); // Bool.
		await usuarios.has("registroBrandon");

		// Devuelve un (array) con todos los registros.
		await usuarios.getAll(); // Array(Objects).

		// Devuelve el registro de acuerdo a su llave.
		await usuarios.get(6); // Object.
		await usuarios.get("registroBrandon"); // Object.

		// Acutaliza un registro de acuerdo a su llave.
		await usuarios.update({
			name: "Brandon Anthony", 
			surnames: "Olivares Amador", 
			age: 22
		}, 6); // Bool.
		await usuarios.update({
			myKey: "key-Brandon", 
			name: "Brandon Anthony", 
			surnames: "Olivares Amador", 
			age: 22
		}, "key-Brandon"); // Bool.

		// Elimina cierto registro de acuerdo a su llave.
		await usuarios.delete(6); // Bool.
		await usuarios.delete("key-Brandon"); // Bool.

		// Elimina todos los registros.
		await usuarios.clear(); // Bool.

		/* Devuelve un registro de acuerdo al valor del indice indicado, 
		por lo que permite obtener un registro de acuerdo al valor de 
		alguna propiedad de su indice. */
		await usuarios.indexWhere("indexName", "Brandon Anthony"); // Object.

	}catch(error){
		console.error("Error al realizar la peticion: ", error);
	}finally{
		// ...
	}
});