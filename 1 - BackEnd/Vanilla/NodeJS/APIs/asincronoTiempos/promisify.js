/* ##########========================########## */
/* ######===--- Metodo (promisify) ---===###### */
/* ##########========================########## */

// Es una utilidad que permite convertir funciones o metodos basados en callbacks a promesas.

// ----------------- //
// ------ Uso ------ //
// ----------------- //

// Requerimos la utilidad (util) la cual contiene el metodo (promisify).
const util = require("util"), 
	  // Convertiremos uno de los metodos del (fs).
	  fs = require("fs");

// Pasamos por parametro al metodo (promisify) el metodo o funcion que queremos convertir en promesa.
const readFileAsync = util.promisify(fs.readFile);

// Hacemos uso de ese metodo convertido a promesa.
readFileAsync('./archivo.txt', 'utf8')
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error al leer el archivo:', error);
    });