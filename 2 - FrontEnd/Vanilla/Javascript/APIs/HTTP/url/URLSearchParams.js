/* ##########============================########## */
/* ######===--- Parametros de la (URL) ---===###### */
/* ##########============================########## */

// ----------------------------- //
// ------ Crear Instancia ------ //
// ----------------------------- //

// La clase (URLSearchParams), permite instanciar un objeto para crear parametros.
const params = new URLSearchParams();

// Es posible convertir parametros a un objeto.
const params = new URLSearchParams(
	window.location.search
);

// ----------------------- //
// ------ Comprobar ------ //
// ----------------------- //

// Devuelve un booleano verificando si existe cierto parametro.
params.has("age");

// Los parametros que no e encuentran en la URL dan un valor de (null).
params.get("otro"); // null

// ------------------------------ //
// ------ Agregar / Borrar ------ //
// ------------------------------ //

// Agrega un nuevo parametro con su respectivo valor.
params.append("surnames", "Olivares Amador");

/* (Modifica) el primer parametro encontrado dandole un nuevo valor, recibe por parametros: 
	--- El parametro que se va a modificar.
	--- El nuevo valor que va a adquirir. */
params.set("age", "20");

// Elimina un parametro con su valor.
params.delete("age");

// --------------------- //
// ------ Obtener ------ //
// --------------------- //

// Devuelve el valor del primer parametro llamado 'age'.
params.get("age");

// Devuelve un arreglo con todos los valores de todos los parametros llamados 'age'.
params.getAll("age");

// https://example.com?age=22&age=20&age=19
params.getAll('age'); // ["22", "20", "19"]

// Iteramos todos los valores de los parametros.
params.forEach((parametro) => {
	console.info(parametro);
});

// ---------------------- //
// ------ Iterator ------ //
// ---------------------- //

// Devuelve un objeto (iterator) con los parametros, (mas no con sus valores).
let iteratorKeys = params.keys();

// Devuelve un objeto (iterator) con los valores de los parametros, (mas no con los parametros).
let iteratorValues = params.values();

/* Devuelve una serie de arreglos que contienen: 
	--- El parametro y el valor. */
let iteratorEntries = params.entries();

while(true){
	// Mueve a la siguiente iteracion.
	let resultKey = iteratorKeys.next();
	let resultValue = iteratorValues.next();
	let resultEntrie = iteratorEntries.next();

	resultKey.value; // Devuelve el valor.

	console.table([resultKey.value, resultValue.value]);
	console.table([resultEntrie.value[0], resultEntrie.value[1]]);

	// El metodo (done), devuelve un booleano que determina si quedan o no mas valores.
	if(resultKey.done()) break;
}

// Iteramos cada (parametro/key) con su (valor/value).
for(let [key, value] of params){
	console.log(`${key} => ${value}`);
}