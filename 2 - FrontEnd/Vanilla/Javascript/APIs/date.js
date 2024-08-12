/* ##########==================########## */
/* ######===--- Fechas (UTC) ---===###### */
/* ##########==================########## */

// Extrae la fecha de cadena UTC.
const time = new Date(), 
	// Convierte una cadena UTC en una fecha de tipo estándar.
	newTime = time.toUTCString(),

	// Convierte la cadena UTC en un formato más legible.
	newTime1 = time.toDateString(),

	// Convierte la cadena UTC utilizando el método de formato ISO.
	newTime2 = time.toISOString(),

	// Podemos crear un objeto del constructor 'date' con los datos establecidos.
	timePersonalize = new Date("Año", "Mes", "Día", "Hora", "Minuto", "Segundo", "Milisegundo"),

	// Se puede establecer también de esta manera.
	timePersonalize1 = new Date("Abril 12", "2021 20:26:00");

/* ##########=========================########## */
/* ######===--- Partes de una fecha ---===###### */
/* ##########=========================########## */

const time = new Date();

// extraemos la fecha completa con la hora completa.
let milliseconds = time.getMilliseconds(), 

	// Extrae los segundos.
	seconds = time.getSeconds(), 

	// Extrae los minutos.
	minutes = time.getMinutes(), 

	// Extrae las horas.
	hours = time.getHours(), 

	// Extrae el mes.
	month = time.getMonth(), // 0 - 11, (empieza del 0 como enero).

	// Extrae el año.
	year = time.getFullYear(), 

	// Extrae el día del mes.
	date = time.getDate(), 

	// Extrae el dia de la semana.
	day = time.getDay(), // 1 - 7, (empieza del 1 como lunes).

	// Extrae el tiempo en milisegundos desde el 1 de enero de 1970.
	newGetTime = time.getTime();

/* ##########================########## */
/* ######===--- Date.now() ---===###### */
/* ##########================########## */

/* Devuelve el número de milisegundos transcurridos desde el: 
	--- 1 de enero de 1970, 00:00:00 UTC (Coordinated Universal Time), hasta la fecha y hora actuales. */
const milliseconds = Date.now();

// ------------------------------------------ //
// ------ Medir el tiempo de ejecucion ------ //
// ------------------------------------------ //

/* Puede utilizarse para saber: 
	--- Por ejemplo el tiempo transcurrido de la ejecucion de un codigo. */

// Ejemplo: 
let start = Date.now();

// Aqui va todo el codigo que se realizara.

let end = Date.now();

console.log(`Tiempo transcurrido: ${(start - end)} millisegundos.`);

/* ##########=================########## */
/* ######===--- Dar formato ---===###### */
/* ##########=================########## */

// Agrega un cero a la izquierda.
function addZero(){
	let numero = arguments[0];

	return (numero <= 9 && numero > 0) ? ("0" + numero) : `${numero}`;
}

addZero(6); // "06"
addZero(13); // "13"

// Extrae el nombre del mes.
function getMonth(){
	let arrMonth = [
		"Enero", "Febrero", "Marzo", 
		"Abril", "Mayo", "Junio", 
		"Julio", "Agosto", "Septiembre", 
		"Octubre", "Noviembre", "Diciembre"
	];
	return arrMonth[arguments[0]];
}

getMonth(3); // "Abril"