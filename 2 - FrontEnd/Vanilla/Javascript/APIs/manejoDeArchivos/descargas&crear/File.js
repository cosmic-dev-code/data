/* ##########==========########## */
/* ######===--- File ---===###### */
/* ##########==========########## */

/* Los archivos (File) generalmente son utilizados para ser manipulados o descargados, como evidentemente lo son: 
	--- Drag And Drop: 
		--- event.dataTransfer.files
	--- File Reader: 
		--- event.target.files
	--- Share: 
		--- files: []

Los archivos cargados o arrastrados desde fuera del navegador son archivos de tipo (File). */

/* ##########===================########## */
/* ######===--- Crear archivo ---===###### */
/* ##########===================########## */

// Primero se requiere un objeto (Blob).

var blob = new Blob(
	["Mi contenido"], // Contenido del archivo.
	{type: "text/plain"} // Tipo de archivo.
);

/* El constructor (File) recibe tres parametros: 
	--- El objeto blob el cual contiene la informacion del archivo, (como su contenido y tipo).
	--- El nombre del archivo.
	--- El tipo de archivo que queremos crear. */
const file = new File([blob], "archivo.txt", {type: "text/plain"});

/* ##########=======================########## */
/* ######===--- Tipos de archivos ---===###### */
/* ##########=======================########## */

// Todo recae en el (blob).

// Archivo (TXT).
const file = new File([blobTXT], "archivo.txt", {type: "text/plain"});

// Archivo (HTML).
const file = new File([blobTXT], "archivo.html", {type: "text/html"});

// Archivo (Imagen).
const file = new File([blobTXT], "archivo.png", {type: "image/png"});

// Archivo (Video).
const file = new File([blobTXT], "archivo.mp4", {type: "image/mp4"});