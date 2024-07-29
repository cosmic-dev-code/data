/* ##########===============================########## */
/* ######===--- Base de datos (Asincrona) ---===###### */
/* ##########===============================########## */

// Funcion que devuelve una promesa.
function createDB(){
	return new Promise((resolve, reject) => {
		var peticionDB = window.indexedDB.open("miBaseDeDatos", 1);

		peticionDB.addEventListener('upgradeneeded', function(event){
			
			// Abrimos la base de datos.
			let baseDeDatos = event.target.result;

			// Crear almacen e indices.
			if(!baseDeDatos.objectStoreNames.contains("tablaUsuarios")){
				const tablaUsuarios = baseDeDatos.createObjectStore("tablaUsuarios", {keyPath: "llave"});

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
			/* -------------------------------------- */
			/* ------ Funciones con los (CRUD) ------ */
			/* -------------------------------------- */

			/**
			 * Funcion que utilizaran todos los metodos CRUD para obtener: 
			 * 	--- (IDBObjectStore).
			 * 	--- (IDBTransaction).
			 */
			function getTransactionStore(mode = "readonly"){
				// Obtener la base de datos
				const baseDeDatos = peticionDB.result;

				const transaction = baseDeDatos.transaction("tablaUsuarios", mode), 
					  objectStore = transaction.objectStore("tablaUsuarios");

				return {
					transaction: transaction, 
					objectStore: objectStore
				};
			};

			/**
			 * @Agregar un registro.
			 */
			function objectAdd(object = undefined){
				if(object === undefined) return false;

				const baseDeDatos = getTransactionStore("readwrite");
				
				baseDeDatos.objectStore.add(object);
				baseDeDatos.transaction.oncomplete = () => {
					console.log("Objeto agregado correctamente.");
				};
			};

			/**
			 * @Obtener varios registros.
			 */
			function objectShowAll(){
				const db = getTransactionStore();

				const openCursor = db.objectStore.openCursor();

				openCursor.addEventListener("success", event => {
					let cursor = event.target.result;

					if(cursor){
						console.log(cursor.key+" => ", cursor.value);
						cursor.continue();
					}else{
						console.log("Todos los datos fueron leidos.");
					}
				});
			};

			/**
			 * @Obtener un registro.
			 */
			function objectShow(key = undefined){
				if(key === undefined) return false;

				const db = getTransactionStore();

				let result = db.objectStore.get(key);

				db.transaction.oncomplete = event => console.log(event.target.result);
				result.onerror = error => console.error("Error al traer el registro: ", event.target.error.message);
			};

			/**
			 * @Actualizar un registro.
			 */
			function objectUpdate(object = undefined, key = undefined){
				if(object === undefined || key === undefined) return false;

				const db = getTransactionStore('readwrite');
				
				let result = db.objectStore.get(key);

				result.onsuccess = event => {
					if(event.target.result === undefined) return false;
					
					let objectOld = event.target.result;

					objectOld.nombres = object.nombres;
					objectOld.apellidos = object.apellidos;
					objectOld.edad = object.edad;
					objectOld.correo = object.correo;

					db.objectStore.put(objectOld);

					db.transaction.oncomplete = () => {
						console.log("Objeto modificado correctamente.");
					};
				};
			};

			/**
			 * @Borrar un registro.
			 */
			function objectDelete(key = undefined){
				if(key === undefined) return false;

				const db = getTransactionStore("readwrite");

				db.objectStore.delete(key);

				db.transaction.addEventListener("complete", () => {
					console.log("Objeto Eliminado correctamente.");
				});
			};

			/**
			 * @Eliminar todos los registros.
			 */
			function objectClear(){
				const db = getTransactionStore("readwrite");

				let result = db.objectStore.clear();

				db.transaction.oncomplete = () => console.log("Todos los registros fueron eliminados.");
				result.onerror = error => console.error("Error al eliminar los registros: ", event.target.error.message)
			};

			// La promesa se resuelve devolviendo un arreglo con las funciones CRUD.
			resolve([
				getTransactionStore, objectAdd, objectShow, objectShowAll, 
				objectUpdate, objectDelete, objectClear
			]);
		};

		peticionDB.onerror = function(event){
			console.error(
				"Error en la base de datos: ", 
				event.target.errorCode
			);
			// Si hay un error, la promesa no se resuelve.
			reject("error");
		};		
	});
}

async function getDB(){
	try{
		// Esperamos a que la promesa se resuelva.
		const db = await createDB();

		// Verificamos que no hayamos recibido un mensaje de error.
		if(typeof db !== "string"){

			// Recibimos las funciones.
			var getTransactionStore = db[0], 
			    objectAdd = db[1], 
			    objectShow = db[2], 
			    objectShowAll = db[3], 
			    objectUpdate = db[4], 
			    objectDelete = db[5], 
			    objectClear = db[6];

			// Podemos realizar las peticiones a la base de datos.
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
		}

	// Cualquier error, mandamos por consola un mensaje de error.
	}catch(error){
		console.info("Hubo un error en la base de datos: ", error);
	}
}

/* Ejecutamos la funcion asincrona que 
hace todas las consultas a la 
base de datos. */
getDB();