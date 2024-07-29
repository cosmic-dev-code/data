"use strict";

// Abrir base de datos.
const peticionDB = window.indexedDB.open("database", 1);

peticionDB.onupgradeneeded = function(event){
	// Crear almacenes con sus indices.
};

peticionDB.onerror = event => {};

/**
 * Por lo general se utiliza (success) ya que este metodo se ejecuta siempre.
 */
peticionDB.onsuccess = event => {

	// Obtener base de datos.
	const baseDeDatos = event.target.result;

	/* ##########====================########## */
	/* ######===--- Transacciones  ---===###### */
	/* ##########====================########## */

	/* Los almacenes de objetos [IDBObjectStore] permiten realizar peticiones a la base de datos indexada, 
	es posible hacer peticiones: 
		--- (add), (get), (openCursor), (getAll), (put), (delete).
	A esto se le conoce como (transaccion de datos).

	Un objeto de tipo [IDBTransaction] se encarga de 
	verificar si las transacciones se realizaron con existo, o si hubo algun error durante la 
	transaccion. */

	/* --------------------------------- */
	/* ------ Obtener transaccion ------ */
	/* --------------------------------- */

	/* El metodo (transaction) realiza una transaccion hacia la base de datos, recibe como parametros: 
		--- Los almacenes o el alamacen con que se van a operar.
		--- El segundo parametro recibe: 
			--- (readwrite), se utiliza cuando vamos a alterar los registros del alamacen.
			--- (readonly), se utiliza cuando solo queremos leer los registros del almacen. */
	const transaccion = baseDeDatos.transaction("almacenUsuarios", "readwrite");

	// Cuando se piensa alterar mas de un almacen se pasa por primer parametro un [array].
	const transaccion = baseDeDatos.transaction(["almacenUsuarios", "almacenProductos"], "readonly");

	/**
	 * Eventos que recibe el IDBTransaccion.
	 */

	transaccion.oncomplete = function(event){
		// Cuando una transaccion se realizo con exito.
	}

	transaccion.onerror = function(event){
		// Cuando se produce un error durante la transaccion.
	}

	transaccion.onabort = function(event){
		// cuando la transacción se cancela explícitamente.
		// Esto puede deberse a un error o a una solicitud del código que inicia la transacción.
	}

	/* ----------------------------- */
	/* ------ Obtener almacen ------ */
	/* ----------------------------- */

	/* De los almacenes de datos traidos con la transaccion, (para hacer transacciones).
		--- Traemos unicamente un almacen.
	Este almacen contendra los metodos para realizar las transacciones. */
	const almacenUsuarios = transaction.objectStore("almacenUsuarios");

	/* ##########==========================########## */
	/* ######===--- Hacer transacciones  ---===###### */
	/* ##########==========================########## */

	/* -------------------------------------- */
	/* ------ Resultado de transaccion ------ */
	/* -------------------------------------- */

	// Al utilizar un metodo este devuelve un objeto con dos eventos.
	const resultado = almacenUsuarios.get(1);

	resultado.onsuccess = event => {
		// Se ejecuta cuando la transaccion se realizo con exito.
	}

	resultado.onerror = event => {
		// Se ejecuta cuando hubo algun error durante la transaccion.
	}

	/* ------------------ */
	/* ------ CRUD ------ */
	/* ------------------ */

	/**
	 * @ADD es el metodo que permite almacenar objetos o cualquier otro tipo de dato.
	 * 
	 * @readwrite es la manera en que debe abrirse la transaccion, ya que vamos a escribir en el almacen, 
	 * por lo que es de tipo (lectura) y (escritura).
	 */
	almacenUsuarios.add({
		nombre: "Brandon", 
		edad: 22, 
		correo: "brandon@gmail.com"
	}).onsuccess = event => {
		// Cuando la transaccion se lleva a cabo con exito.
	};

	/**
	 * @GET es el metodo que permite leer un solo dato, debemos pasar por parametro el (id) del registro que 
	 * queremos recibir, ya sea por (pathKey) o (autoIncrement).
	 * 
	 * @readonly es la manera en que debe abrirse la transaccion, porque solo leeremos un dato, mas no escribiremos 
	 * en el almacen.
	 */
	// La manera de llave (autoIncrement).
	const result = almacenUsuarios.get(1);
	// La manera de llave (keyPath).
	const result = almacenUsuarios.get("555-555-555");

	// El resultado que ambos casos regresan.
	result.onsuccess = event => {
		// Este es el objeto almacenado.
		event.target.result;
	};

	/**
	 * @PUT es el metodo utilizado para actualizar un registro, (sobreescribirlo sin cambiar su llave primaria).
	 * 
	 * @readwrite es utilizado ya que escribiremos en el almacen.
	 */
	// Con llave (autoIncrement).
	/* Recibe por parametros: 
		--- El nuevo objeto a escribir.
		--- La llave primaria del objeto que se desea reemplazar. */
	const result = almacenUsuarios.put(nuevoObjeto, 3);
	// Con llave (keyPath).
	/* Recibe por parametros: 
		--- El nuevo objeto que se escribira.
			--- El objeto debe contener la (propiedad) del (indice) que se declaro como (keyPath) 
				para saber cual es el objeto que se debe reemplazar. */
	const result = almacenUsuarios.put(nuevoObjeto);

	// Los datos que regresa la transaccion.
	result.onsuccess = event => {
		event.returnValue; // Devuelve un booleano que confirma si tenemos un valor o no.
		event.target.result; // Devuelve la llave del objeto modificado.
		event.target.source; // Propiedades del almacen.
	};

	/**
	 * @OPENCURSOR es el metodo utilizado para extraer todos los datos uno por uno.
	 * 
	 * @readonly se establece en la transaccion porque solo leeremos los datos.
	 */
	almacenUsuarios.openCursor().onsuccess = event => {
		// Se obtiene el objeto (cursor).
		const cursor = event.target.result; // IDBCursor

		// Si el cursor tiene un registro.
		if(cursor){
			// Propiedades del registro.
			cursor.key; // Devuelve la llave del (registro).
			cursor.value; // Devuelve el (registro).
			cursor.primaryKey; // Devuelve la llave primaria.
			cursor.indexNames; // Devuelve una lista con los nombres de los indices del almacen.
			// Propiedades del almacen.
			cursor.source.autoIncrement; // Devuelve un booleano para saber si es de tipo autoIncrement.
			cursor.source.keyPath; // Nombre de la llave keyPath de tener uno.
			cursor.source.name; // Nombre del almacen al que pertenece el registro.

			/**
			 * Este es el metodo mas importante, pues al ejecutarlo el (cursor) pasara a tener como 
			 * valor el siguiente registro del almacen.
			 * 
			 * NOTA: Cuando el metodo se ejecuta, todo el bloque del (onsuccess) se reinicia con el 
			 * nuevo valor para el cursor.
			 * 	--- continue == onsuccess().
			 */
			cursor.continue();
		}else{
			// Cuando el cursor ya no tiene un registro.
		}
	};

	/**
	 * @GETALL este metodo devuelve un arreglo con todos los registros del alamcen, (pero consume mas recursos porque 
	 * no trae todos los registros uno por uno).
	 * 
	 * @readonly es el tipo de escritura para la transaccion porque solo se leera el almacen.
	 */
	almacenUsuarios.getAll().onsuccess = event => {
		// Devuelve el arreglo con todos los registros.
		event.target.result.forEach(registro => {
			// ...
		});
	};

	/**
	 * @DELETE es el metodo utilizado para borrar los datos.
	 * 
	 * @readwrite es el tipo de transaccion que se realizara porque escribiremos en el almacen, 
	 * en este caso para borrar un registro.
	 */
	// La manera de llave (autoIncrement).
	const result = almacenUsuarios.delete(1);
	// La manera de llave (keyPath).
	const result = almacenUsuarios.delete("555-555-555");

	result.onsuccess = event => {
		// Indica que el registro se borro con exito.
	};

	/**
	 * @CLEAR es el metodo para vaciar por completo el almacen, borra todos los registros.
	 * 
	 * @readwrite es el tipo de transaccion para escribir en el almacen.
	 */
	const result = almacenUsuarios.clear();

	result.onsuccess = event => {
		// Indica que el registro se borro con exito.
	};
};