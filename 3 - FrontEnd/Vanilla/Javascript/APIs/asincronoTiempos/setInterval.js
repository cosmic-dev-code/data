
/* ##########========================########## */
/* ######===--- Crear un intervalo ---===###### */
/* ##########========================########## */

/* (setInterval) se ejecuta una y otra vez, recibe por 
parametros los siguientes valores:

	--- El primer parametro recibe un callback, (el prototipo de 
	la funcion).
	--- El segundo parametro recibe el tiempo en que 
	se va a ejecutar el callback expresado en (milisegundos). */

// cada tres segundos la funcion (countIncrement) se ejecutara.
setInterval(countIncrement, 3000);

/* Esta variable llevara el conteo de cuantas veces se mando a 
llamar la funcion (countIncrement). */
let i = 0;

function countIncrement(){
	console.log("Iteracion: "+i);
	i++;
}

// -------------------------------------- //
// ------ Recibir callback anonimo ------ //
// -------------------------------------- //

setInterval(function(){

	console.log("Iteracion: "+i);
	i++;

}, 3000);

/* ##########===========================########## */
/* ######===--- Eliminar un intervalo ---===###### */
/* ##########===========================########## */

/* Ahora para eliminar un (setInterval) es necesario referirnos a el 
con un nombre, y para esto lo asignamos a una variable. */

// En tres segundos ejecutamos la funcion (functionDelete).
let timeInterval = setInterval(functionDelete, 3000);

function functionDelete(){
	/* Eliminamos el (setInterval) pasandolo por parametro a la 
	funcion (clearInterval). */
	clearInterval(timeInterval);
}