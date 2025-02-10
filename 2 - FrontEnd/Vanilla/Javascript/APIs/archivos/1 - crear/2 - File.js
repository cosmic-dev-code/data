/* ##########==========########## */
/* ######===--- File ---===###### */
/* ##########==========########## */

/* Los archivos (File) generalmente son utilizados para ser manipulados o descargados: 
	--- (Drag And Drop): event.dataTransfer.files
	--- (File Reader): event.target.files
	--- (Share): files
*/

/**
 * NOTA: Util cuando quieres leer archivos proporcionados por el usuario.
 */

/* ##########===================########## */
/* ######===--- Crear archivo ---===###### */
/* ##########===================########## */

// Primero se requiere un objeto (Blob).

/* El constructor (File) recibe tres parametros: 
	--- Contenido del archivo en formato (Blob).
	--- Nombre del archivo.
	--- Tipo de archivo. */
const file = new File([blob], "archivo.txt", {type: "text/plain"});

/**
 * NOTA: Por lo general el (Blob) ya viene configurado en el (File), los files se obtienen de: 
 * 		--- (Drag And Drop).
 * 		--- (File Reader).
 * 		--- (Share).
 * De otro modo no tiene sentido crear un (Blob) manual para crear un (File) manual.
 */

/* ##########=======================########## */
/* ######===--- Tipos de archivos ---===###### */
/* ##########=======================########## */

/**
 * El tipo de contenido se define en el Blob.
 * El tipo de archivo se define en el File.
 */

// Archivo (TXT).
const file = new File([ blob ], "archivo.txt", {type: "text/plain"});

// Archivo (HTML).
const file = new File([ blob ], "archivo.html", {type: "text/html"});

// Archivo (Imagen).
const file = new File([ blob ], "archivo.png", {type: "image/png"});

// Archivo (Video).
const file = new File([ blob ], "archivo.mp4", {type: "image/mp4"});

/* ##########=============================########## */
/* ######===--- Propiedades de archivos ---===###### */
/* ##########=============================########## */

file.type; // "image/jpeg".
file.lastModifield; // 1648012243880.
file.lastModifiedDate; // "Tue Mar 22 2022 22:10:43 GMT-0700".
	file.lastModifiedDate.getMilliseconds();
	file.lastModifiedDate.getSeconds();
	file.lastModifiedDate.getMinutes();
	file.lastModifiedDate.getHours();
	file.lastModifiedDate.getMilliseconds();
	file.lastModifiedDate.getDay();
	file.lastModifiedDate.getDate();
	file.lastModifiedDate.getMonth();
	file.lastModifiedDate.getFullYear();
file.name; // imagen.jpeg
// Ruta alternativa, (si el archivo se elegio desde dentro de una carpeta).
file.webkitRelativePath;
/* Devuelve el peso del archivo en (Bytes).
		--- Bytes: Valor inicial.
		--- Bytes / 1024: KB.
		--- KB / 1024: MB.
		--- MB / 1024: GB.
*/
file.size;

/**
 * NOTA: Informacion que se contiene porque el archivo fue proporcionado por el usuario.
 */

/* ##########=========########## */
/* ######===--- URL ---===###### */
/* ##########=========########## */

/**
 * Crea una URL para (visitar) o (mostrar) el archivo en un element HTML o ventana.
 */
const url = URL.createObjectURL(file);

/**
 * NOTA: Ya viene listo y configurado solo para crear un URL.
 */