"use strict";

// Requerimos el objeto (fs).
var fs = require("fs");

/* ##########===============================########## */
/* ######===--- Propiedades de un archivo ---===###### */
/* ##########===============================########## */

// ---------------------------- //
// ------ Comprobaciones ------ //
// ---------------------------- //

// (statSync) lee un archivo de forma sincrona.
const stats = fs.statSync("./file.txt");

// Indica si el archivo es un fichero.
stats.isFile(); // boolean

// Indica si se trata de un directorio.
stats.isDirectory(); // boolean

// Si se trata de un enlace simbolico, (referencia).
stats.isSymbolicLink();

// Indica el espacio del archivo en bytes.
stats.size;

// -------------------- //
// ------ Fechas ------ //
// -------------------- //

// Fecha y hora.
stats.atime;

// Ultima modificacion.
stats.mtime;

// Hora de cambio del estado del archivo, (algun cambio de un atributo del archivo).
stats.ctime;

// Hora de creacion del archivo.
stats.birthtime;

// NOTA: Todos estos objetos devuelven un objeto (Date), es decir { new Date() }.

/* ##########=====================########## */
/* ######===--- Leer un archivo ---===###### */
/* ##########=====================########## */

// ---------------------- //
// ------ Sincrona ------ //
// ---------------------- //

// Leemos el archivo de forma sincrona, (utf-8) para leer caracteres especiales.
fs.readFileSync("./file.txt", "utf-8"); // string

// ----------------------- //
// ------ Asincrona ------ //
// ----------------------- //

/* El metodo (readFile) recibe por parametros: 
	--- La hubicacion del archivo que queremos leer.
	--- La codificacion, (opcional).
	--- Callback con dos parametros: 
		--- El (error) en caso de que haya alguno.
		--- La (data) la cual contiene todos los datos del archivo leido. */
fs.readFile("archivo.txt", "utf-8", function (error, data) {
    // Si no hay (error) viene por defecto con un valor (null).
    if (error !== null) throw error;

    // Mostramos los datos.
    console.log(data.toString());
});

/* ##########======================########## */
/* ######===--- Abrir un archivo ---===###### */
/* ##########======================########## */

/* El metodo (open) recibe por parametros: 
	--- La hubicacion del archivo que queremos guardar.
	--- Tipo de forma en que vamos a abrir el archivo, (w -> escritura).
	--- Una funcion que recibe por parametro: 
		--- El (error) en caso de que haya alguno.
		--- El (archivo) que hemos abierto.

Si el archivo no existe, entonces lo crea. */
fs.open("MiArchivo.txt", "w", function (error, file) {
    if (error) throw error;

    console.log("Archivo abierto.");
});

/* ##########========================########## */
/* ######===--- Guardar un archivo ---===###### */
/* ##########========================########## */

// Creamos el contenido de nuestro archivo, el cual debe ser un (string).
let contentFile = `
	"use strict";
	var newFile = ("Token String-" + Math.round(Math.random()*100));
	console.log(newFile);
`;

/* El metodo (appendFile) recibe por parametros: 
	--- La hubicacion del archivo que queremos guardar.
	--- Contenido del archivo.
	--- Una funcion que recibe por parametro: 
		--- El (error) en caso de que haya alguno. */
fs.appendFile("MiArchivo.txt", contentFile, function (error) {
    // Si no hay (error) viene por defecto con un valor (null).
    if (error !== null) throw error;

    // El archivo se guardo correctamente.
    console.log("Archivo guardado.");
});

/* ##########==============================########## */
/* ######===--- Sobreescribir un archivo ---===###### */
/* ##########==============================########## */

// Creamos el contenido de nuestro archivo, el cual debe ser un (string).
let contentFile = `
	"use strict";
	var newFile = ("Token String-" + Math.round(Math.random()*100));
	console.log(newFile);
`;

/* El metodo (writeFile) recibe los mismos parametros que el metodo (appendFile), y hace 
lo mismo, si el archivo no existe, entonces lo crea. */
fs.writeFile("MiArchivo.txt", contentFile, function (error) {
    if (error !== null) throw error;

    console.log("Archivo sobreescrito.");
});

/* ##########==========================########## */
/* ######===--- Renombrar un archivo ---===###### */
/* ##########==========================########## */

/* El metodo (rename) recibe por parametros: 
	--- El nombre del archivo a renombrar.
	--- El nuevo nombre del archivo.
	--- Una funcion que recibe por parametro: 
		--- El (error) en caso de que haya alguno. */
fs.rename("MiArchivo.txt", "miArchivo.js", function (error) {
    if (error !== null) throw error;

    console.log("El archivo se renombro correctamente.");
});

/* ##########=========================########## */
/* ######===--- Eliminar un archivo ---===###### */
/* ##########=========================########## */

/* El metodo (unlink) recibe por parametros: 
	--- El nombre del archivo que se quiere eliminar.
	--- Una funcion que recibe por parametro: 
		--- El (error) en caso de que haya alguno. */
fs.unlink("miArchivo.js", function (error) {
    if (error !== null) throw error;

    console.log("El archivo se renombro correctamente.");
});

/* ##########=============########## */
/* ######===--- Eventos ---===###### */
/* ##########=============########## */

/* El metodo (createReadStream) devuelve un objeto que permite manipular ciertos eventos como: 
	--- (Abrir) o (cerrar) un archivo.
Recibe por parametro la hubicacion del archivo que queremos abrir. */
var eventFile = fs.createReadStream("./MiArchivo.txt");

eventFile.on("open", function () {
    console.log("El archivo (MiArchivo.txt) se ha abierto.");
});

eventFile.on("close", function () {
    console.log("El archivo (MiArchivo.txt) se ha cerrado.");
});

/* ##########==============########## */
/* ######===--- Promesas ---===###### */
/* ##########==============########## */

// El modulo (fs) tambien tiene una version que devuelve promesas, (evitando los callbacks).

const fs = require("fs/promises");

/**
 * Utilizamos (then) y (catch).
 */

fs.readFile("./archivo.txt", "utf-8")
	.then(text => {
		// ...
	})
	.catch(error => {
		// ...
	});

/**
 * Utilizamos (async) y (await).
 */

(async function(){
	try{

		let text = await fs.readFile("./archivo.txt", "utf-8");

	}catch(error){
		// ...
	}
}());