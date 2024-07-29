"use strict";

/* ##########========================########## */
/* ######===--- El uso de (index)  ---===###### */
/* ##########========================########## */

/**
 * @index es un metodo que devuelve un objeto indice, nos permite extraer cualquier registro de acuerdo a algunas reglas 
 * que podemos establecer al traer los indices.
 * 
 * (Sirve para filtrar los registros).
 */

// Procedemos a extraer el indice.
let index = db.transaction(["user"], "readonly").objectStore("user").index("indexNombre");

/* ------------------------- */
/* ------ Propiedades ------ */
/* ------------------------- */

index.name; // Nombre del indice.
index.keyPath; // Propiedad a la que se sujeta.
index.multiEntry; // Booleano que verifica si es multientrada.
index.unique; // Booleano que confirma si el campo es es unico o no.
index.objectStore; // Devuelve la tabla, en este caso la tabla (user).

/* --------------------------------- */
/* ------ Obtener un registro ------ */
/* --------------------------------- */

/* Devuelve el registro que coincida: 
	--- (indexName) === "Brandon Anthony". */
index.get("Brandon Anthony").onsuccess = event => {
	event.returnValue; // Devuelve un booleano que confirma si tenemos un valor o no.
	event.target.result; // Devuelve la llave del objeto modificado.
	event.target.source; // Propiedades de la tabla.
};

/* ------------------------- */
/* ------ Iteraciones ------ */
/* ------------------------- */

/* El metodo (openCursor), funciona de la misma manera cuando iteramos los registros. */
index.openCursor().onsuccess = event => {
	let cursor = event.target.result;
	if(cursor){
		// Como el openCursor normal, se obtienen las mismas propiedades del objeto cursor.

		cursor.continue();
	}else{
		// Finaliza la iteracion.
	}
};

/* El metodo (openKeyCursor) solo itera los registros devolviendo unicamente su (llave primaria). */
index.openKeyCursor().onsuccess = event => {
	let cursor = event.target.result;
	if(cursor){
		
		cursor.key; // Devuelve la propiedad (nombre), (indexNombre -> nombre).
		cursor.primaryKey; // Devuelve la llave primaria.

		// NOTA: No hay forma de obtener el resto del objeto almacenado.
		cursor;

		cursor.continue();
	}else{
		// Finaliza la iteracion.
	}
};

/* ##########===================================########## */
/* ######===--- Direcciones de los (indices)  ---===###### */
/* ##########===================================########## */

/* ---------------------------------- */
/* ------ Tipos de direcciones ------ */
/* ---------------------------------- */

// Solo iterara los registros que sean igual a "Brandon Anthony".
IDBKeyRange.only("Brandon Anthony");

// Solo iterara los registros que contengan "Brandon Anthony" y algo mas.
IDBKeyRange.lowerBound("Brandon Anthony");

// Solo iterara los registros mas alla de "Brandon Anthony" incluyendo "Brandon Anthony".
IDBKeyRange.lowerBound("Brandon Anthony");

// Solo iterara los registros mas alla de "Brandon Anthony" pero sin incluir "Brandon Anthony".
IDBKeyRange.lowerBound("Brandon Anthony", true);

// Solo iterara los registros antes de "Brandon Anthony" incluyendo "Brandon Anthony".
IDBKeyRange.upperBound("Brandon Anthony");

// Solo iterara los registros antes de "Brandon Anthony" pero sin incluir "Brandon Anthony".
IDBKeyRange.upperBound("Brandon Anthony", true);

// Cualquier cosa que coincida entre ("Brandon" y "Anthony") pero sin incluir "Anthony".
IDBKeyRange.bound("Brandon", "Anthony", false, true);

// Pasamos la direccion del cursor por parametro de los cursores.
index.openCursor(IDBKeyRange.open("Brandon Anthony")).onsuccess = function(){};
index.openKeyCursor(IDBKeyRange.open("Brandon Anthony")).onsuccess = function(){};

/* ------------------------------------------- */
/* ------ Iterar en orden (descendente) ------ */
/* ------------------------------------------- */

/* Un cursor itera normalmente en orden (ascendente), podemos iterar en orden (ascendente) 
haciendo uso del segundo parametro del cursor, colocando la cadena: 
	--- "prev". */
index.openCursor(IDBKeyRange.open("Brandon Anthony", "prev")).onsuccess = function(){};
index.openKeyCursor(IDBKeyRange.open("Brandon Anthony", "prev")).onsuccess = function(){};

/* ---------------------------------- */
/* ------ Iterar sin direccion ------ */
/* ---------------------------------- */

/* Si solo desea especificar un cambio de dirección pero no restringir los resultados 
que se muestran, puede pasar nulo como primer argumento. */
index.openCursor(null, "prev").onsuccess = function(){};
index.openKeyCursor(null, "prev").onsuccess = function(){};

/* ---------------------------------------------------------------- */
/* ------ Iterar en (ascendente, descendente), campo (unico) ------ */
/* ---------------------------------------------------------------- */

/* Podemos manejar los duplicados de los indices, para esto pasamos como segundo parametro 
una de las siguientes opciones: 
	--- (nextunique), indica que solo se devolvera un registro con dicho indice, (sin duplicados).
	--- (prevunique), indica que solo se devolvera un registro con dicho indice sin duplicados, (pero hacia atras). */
index.openCursor(null, "nextunique").onsuccess = function(){};
index.openKeyCursor(null, "prevunique").onsuccess = function(){};