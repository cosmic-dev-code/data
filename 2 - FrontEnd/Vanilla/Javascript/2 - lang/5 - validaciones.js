"use strict";

/* ##########=====================########## */
/* ######===--- El "use strict" ---===###### */
/* ##########================----=########## */

"use strict";

//Esta forma de declarar variables se vuelve un error.
nombre = "Brandon";

//Esta es la manera correcta de declarar variables.
let nombre = "Brandon";

/* Todos los errores del programador serán ahora errores tomados en cuenta por el navegador. */

let string = "Esta es una cadena";

// Este (error) ahora se vera en consola en lugar de dar (undefined).
string.saludar();

/**
 * Use Strict con With.
 */

 // Cuando el programador decide activar el (modo estricto), la estructura (with) ya no esta disponible.
with(console){
    // Esto daria un (error).
}

/* ##########==================########## */
/* ######===--- Validaciones ---===###### */
/* ##########==================########## */

// Comprueba si el dato es un arreglo.
Array.isArray("Hola"); // false
Array.isArray([]); // true

// Verifica que un dato sea inentendible.
isNaN("Hola"); // false
isNaN(NaN); // true

// Verifica que un dato numerico tenga fin.
isFinite(555); // true
isFinite(Infinity); // false

/* ##########================########## */
/* ######===--- Ver tipado ---===###### */
/* ##########================########## */

// Devuelve el tipo de dato.
typeof "Hola"; // Da: "string".
typeof("Hola"); // Da: "string".
typeof 555; // Da: "number".

// Verifica si un objeto es instancia de una clase en especifico.
(usuario instanceof Usuario) // true