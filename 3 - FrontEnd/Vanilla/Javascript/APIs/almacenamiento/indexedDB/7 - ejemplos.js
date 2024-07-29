/* ##########=================================########## */
/* ######===--- Anidacion de transacciones  ---===###### */
/* ##########=================================########## */

/* Continuando con las transacciones, una manera acortada de utilizar las transacciones, es de la siguiente manera. */

// Abrir base de datos y ejecutar el evento de primer inicio (upgradeneeded).
window.indexedDB.open("database", 1).addEventListener("upgradeneeded", function(event){
	// Extraer base de datos.
	const baseDeDatos = event.target.result;

	// Crear un almacen.
	var almacenUsuarios = database.createObjectStore("usuarios", {keyPath: "identificador"});

	// Crear los indices mas importantes.
	almacenUsuarios.createIndex("indexNombre", "nombre", {unique: false});
	almacenUsuarios.createIndex("indexApellidos", "apellidos", {unique: false});
	almacenUsuarios.createIndex("indexEdad", "edad", {unique: false});

	// Se abre una transaccion cuando el almacen esta listo.
	almacenUsuarios.transaction.oncomplete = event => {

		let registro = {
			// Llave primaria (keyPath).
			identificador: "brandon-1", 
			// Los demas indices del almacen (usuarios).
			nombre: "Brandon", 
			apellidos: "Olivares", 
			edad: 22, 
			// Datos adicionales.
			pais: "Mexico", 
			codigoPostal: 22170, 
			colonia: "Urbi", 
			lenguaje: "PHP"
		};

		// Insertar un nuevo registro en el almacen (usuarios).
		database.transaction("usuarios", "readwrite").objectStore("usuarios").add(registro).onsuccess = event => {

			// Se realiza una nueva peticion para extraer al registro de acuerdo a su (keyPath).
			database.transaction("usuarios", "readonly").objectStore("usuarios").get("brandon-1").onsuccess = event => {
				// Obtener el registro.
				let registro = event.target.result;

				// Hacer un par de modificaciones.
				registro.name = "Anthony";
				registro.edad = 20;
				registro.lenguaje = "JavaScript";

				// Ahora guardamos las modificaciones sobrescribiendo el objeto.
				database.transaction("usuarios", "readwrite").objectStore("usuarios").put(registro).onsuccess = e => {
					// Registro que se modifico.
					e.target.result;
				};
			};
		};

	};
});

/* ##########=========================########## */
/* ######===--- Manera conveniente  ---===###### */
/* ##########=========================########## */

// Version de base de datos (5).
const peticionDB = window.indexedDB.open("database", 5);

// Crear almacenes e indices.
peticionDB.addEventListener("upgradeneeded", function(event){
	const baseDeDatos = event.target.result;

	// Antes verificamos que la base de datos no haya cambiado de version.
	verificarCambioDeVersion(baseDeDatos);

	// Si no existe el almacen, entonces se crea con sus indices.
	if(!baseDeDatos.objectStoreNames.contains("usuarios")){
		var almacenUsuarios = database.createObjectStore("usuarios", {keyPath: "identificador"});

		almacenUsuarios.createIndex("indexNombre", "nombre", {unique: false});
		almacenUsuarios.createIndex("indexApellidos", "apellidos", {unique: false});
		almacenUsuarios.createIndex("indexEdad", "edad", {unique: false});
	}
});

peticionDB.addEventListener("success", function(event){
	const baseDeDatos = event.target.result;

	verificarCambioDeVersion(baseDeDatos);

	// Funcion para agregar multiples objetos.
	const agregarObjeto = (objeto) => {
		baseDeDatos.transaction("usuarios", "readwrite").objectStore("usuarios").add(objeto);

		baseDeDatos.transaction.oncomplete = event => {
			// ...
		};
	};

	agregarObjeto({
		identificador: "brandon-1", 
		nombre: "Brandon", 
		apellidos: "Olivares", 
		edad: 22
	});

	agregarObjeto({
		identificador: "anthony", 
		nombre: "Anthony", 
		apellidos: "Amador Olivares", 
		edad: 20, 
		codigoPostal: 22170, 
		activo: true
	});

});

// En caso de que las transacciones se vean interrumpidas, entonces le avisamos al usuario.
peticionDB.addEventListener("blocked", event => {
	window.alert("Nueva actualizacion disponible");
});

/**
 * Funcion para verificar si la base de datos recibida ha cambiado de version.
 */
function verificarCambioDeVersion(baseDeDatos){
	baseDeDatos.onversionchange = event => {
		// De cambiar le avisamos al usuario y cerramos las transacciones.
		window.alert("Nueva actualizacion disponible");
		baseDeDatos.close();
	};
}

/* ##########================########## */
/* ######===--- Funciones  ---===###### */
/* ##########================########## */

window.indexedDB.open("database", 5).onsuccess = event => {
	const baseDeDatos = event.target.result;

	/**
	 * @CRUD que pormos crear con cada funcion.
	 */

	function agregar(objeto){
		baseDeDatos.transaction("usuarios", "readwrite").objectStore("usuarios").add(objeto);
	}

	function obtener(identificador, callback){
		baseDeDatos.transaction("usuarios", "readonly").objectStore("usuarios").get(identificador)
			.onsuccess = event => {
				callback(event.target.result);
			};
	}

	function obtenerTodo(callback){
		baseDeDatos.transaction("usuarios", "readonly").objectStore("usuarios").getAll()
			.onsuccess = event => {
				callback(event.target.result);
			};
	}

	function obtenerUnoPorUno(callback){
		baseDeDatos.transaction("usuarios", "readonly").objectStore("usuarios").openCursor()
			.onsuccess = event => {
				let cursor = event.target.result;

				if(cursor) callback(cursor.value);
			};
	}

	function Actualizar(objeto, identificador = null){
		// (pathKey).
		if(identificador === null){
			baseDeDatos.transaction("usuarios", "readwrite").objectStore("usuarios").put(objeto);
		// (autoIncrement).
		}else{
			baseDeDatos.transaction("usuarios", "readwrite").objectStore("usuarios").put(objeto, identificador);
		}
	}

	function eliminar(identificador){
		baseDeDatos.transaction("usuarios", "readwrite").objectStore("usuarios").delete(identificador);
	}

	/**
	 * @Utilizar CRUD.
	 */

	agregarObjeto({
		identificador: "brand", 
		nombre: "Brandon", 
		edad: 23, 
		correo: "brandon@gmail.com"
	});

	agregarObjeto({
		identificador: "anthony-0", 
		nombre: "Anthony", 
		edad: 20, 
		correo: "anthony@gmail.com"
	});

	obtener("brand", function(registro){
		// ...
	});

	obtenerTodo(function(registros){
		// ...
	});

	obtenerUnoPorUno(function(registro){
		// El codigo que se encuentre aqui se reinicia con el siguiente registro.
	});

	eliminar("brand");
};