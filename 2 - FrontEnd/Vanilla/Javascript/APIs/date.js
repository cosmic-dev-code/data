/* ##########================########## */
/* ######===--- Instanciar ---===###### */
/* ##########================########## */

// Extrae la fecha  hora actuales del dispositivo, (computadora o celular).
const time = new Date();

// Se puede establecer también de esta manera.
new Date("Abril 12", "2021 20:26:00");

/* Podemos crear un objeto del constructor "date": 
		--- (Año).
		--- (Mes).
			--- Aqui los meses inician de 0 - 11.
		--- (Día).
		--- (Horas).
			--- Horas en un rango de 0 a 23.
		--- (Minutos).
			--- Minutos en un rango de 0 a 59.
		--- (Segundos).
			--- Segundos en un rango de 0 a 59.
		--- (Milisegundos).
			--- Milisegundos en un rango de 0 a 999.
*/
new Date(2024, 0, 24, 23, 60, 60, 200);

/* Podemos proporcionar: 
	--- La fecha (2024-11-01).
	--- La hora (12:00:00).
*/

// Corresponde a las (12:00 PM) del (mediodia).
new Date("2024-11-01T12:00:00");

// Corresponde a las (12:00 AM) de (medianoche), inicio del dia.
new Date("2024-11-01T00:00:00");
new Date(2024, 10, 1, 0, 0, 0);

// Esto representa (Diciembre de 2024 del dia 30).
new Date("2024-12-30");

// NOTA: Cuando pasas la fecha en cadena (string), esta empieza en 0.

/* ##########==================########## */
/* ######===--- Converciones ---===###### */
/* ##########==================########## */

const date = new Date();

// ------------------------------------- //
// ------ Conversiones compleatas ------ //
// ------------------------------------- //

// "Wed, 01 Jan 2025 20:47:38 GMT"
date.toUTCString();

// "Wed Jan 01 2025"
date.toDateString();

/* Propociona: 
		--- 2025-01-01
		--- 20:49:38.413Z
*/
// "2025-01-01T20:49:38.413Z"
date.toISOString();

// "Wed Jan 01 2025 14:55:37 GMT-0600 (hora estándar central)"
date.toString();

// "14:56:15 GMT-0600 (hora estándar central)"
date.toTimeString();

// ---------------------------------- //
// ------ Obtener Fecha y Hora ------ //
// ---------------------------------- //

// "1/1/2025, 2:53:25 p.m."
date.toLocaleString();

// "1/1/2025"
date.toLocaleDateString();

// "2:54:21 p.m."
date.toLocaleTimeString();

/* ##########=========================########## */
/* ######===--- Partes de una fecha ---===###### */
/* ##########=========================########## */

const time = new Date();

// Extrae el tiempo en milisegundos desde el 1 de enero de 1970.
time.getTime();

// Extrae los milisegundos.
time.getMilliseconds();

// Extrae los segundos.
time.getSeconds();

// Extrae los minutos.
time.getMinutes();

// Extrae las horas.
time.getHours();

// Extrae el mes.
time.getMonth(); // 0 - 11, (empieza del 0 como enero).

// Extrae el año.
time.getFullYear();

// Extrae el día del mes.
time.getDate();

// Extrae el dia de la semana.
time.getDay(); // 1 - 7, (empieza del 1 como lunes).

/* ##########================########## */
/* ######===--- Date.now() ---===###### */
/* ##########================########## */

/* Devuelve el número de milisegundos transcurridos desde el: 
	--- 1 de enero de 1970, 00:00:00 UTC (Coordinated Universal Time), hasta la fecha y hora actuales. */
Date.now(); // number

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
	return arguments[0].toString().padStart(2, "0");
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