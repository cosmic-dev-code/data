
/* ##########=================================########## */
/* ######===--- Crear un intervalo temporal ---===###### */
/* ##########=================================########## */

/* (setTimeout) se ejecuta solo una vez, recibe por 
parametros los siguientes valores:

	--- El primer parametro recibe un callback, (el prototipo de 
	la funcion).
	--- El segundo parametro recibe el tiempo en que 
	se va a ejecutar el callback expresado en (milisegundos). */

// A los tres segundos la funcion (functionTime) se ejecutara.
setTimeout(funcionTime, 3000);

function funcionTime(){
	console.log("Hola.");
}

// -------------------------------------- //
// ------ Recibir callback anonimo ------ //
// -------------------------------------- //
setTimeout(function(){

	console.log("Hola");

}, 3000);

/* ##########====================================########## */
/* ######===--- Eliminar un intervalo temporal ---===###### */
/* ##########====================================########## */

/* Ahora para eliminar un (setTimeout) es necesario referirnos a el 
con un nombre, y para esto lo asignamos a una variable. */

// En tres segundos ejecutamos la funcion (functionDelete).
let timeOut = setTimeout(functionDelete, 3000);

function functionDelete(){
	/* Eliminamos el (setTimeout) pasandolo por parametro a la 
	funcion (clearTimeout). */
	clearTimeout(timeOut);
}