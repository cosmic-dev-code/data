/* ##########============================########## */
/* ######===--- Verificar la indexedDB ---===###### */
/* ##########============================########## */

// Busca en el objeto (window) la indexedDB.
if('indexedDB' in window){
	console.log("La indexedDB esta disponible.");
}

if(window.indexedDB){
	console.log("La indexedDB esta disponible.");
}

/* ---------------------------------------- */
/* ------ Una funcion para comprobar ------ */
/* ---------------------------------------- */

function comprobarNavegador(){
	if(('indexedDB' in window) || window.indexedDB){
		return true;
	}else{
		window.alert("La base de datos no esta disponible, actualice su navegador.");
	}
}

/* ##########=============================########## */
/* ######===--- Crear una base de datos ---===###### */
/* ##########=============================########## */

/* Con elmetodo (open) abrimos una nueva base de datos o 
modificamos en caso deque haya una existente: 
	--- Nombre de la base de datos.
	--- Version de la base de datos en caso de actualizarla. */
var peticionDB = window.indexedDB.open("miBaseDeDatos", 1); // IDBOpenDBRequest

/* ##########============================########## */
/* ######===--- Eventos de la peticion ---===###### */
/* ##########============================########## */

peticionDB.onupgradeneeded = function(event){
	// Se ejecuta una vez, luego, hasta que haya otra nueva version de la base de datos.
};

peticionDB.onsuccess = function(event){
	/* (success) verifica cuando todo salio correctamente. */
};

peticionDB.onblocked = function(event){
	/* Cuando la base de datos se actualiza, entonces las transacciones se bloquean.
	Cada vez que se hace una transaccion y se bloquea el evento se ejecuta. */
}

peticionDB.onerror = function(event){
	/* Verifica cuando hay un error. */
};

/**
 * Pueden utilizarse los (addEventListener).
 */

peticionDB.addEventListener("upgradeneeded", function(event){});

peticionDB.addEventListener("success", function(event){});

peticionDB.addEventListener("blocked", function(event){});

peticionDB.addEventListener("error", function(event){});