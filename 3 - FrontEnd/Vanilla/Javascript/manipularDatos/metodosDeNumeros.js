
/* ##########===================================########## */
/* ######===--- Prototipo del objeto (Number) ---===###### */
/* ##########===================================########## */

Number.__proto__;
/* Accedemos al prototipo de la clase (Number), 
en el prototipo podemos ver todas las propiedades 
y métodos del constructor. */

let myNumber = 63556.452;

/* ##########========================########## */
/* ######===--- Metodos de numeros ---===###### */
/* ##########========================########## */

//Convierte un número a una cadena de texto.
myNumber = myNumber.toString();

//Devuelve una cadena exponenciada al 'exponente'.
myNumber = myNumber.toExponential(exponente);

// Devuelve una cadena con un número específico de decimales.
// Es perfecto para trabajar con dinero.
myNumber = myNumber.toFixed(2); // 63556.45

//Devuelve una cadena con un número de decimales especificado. 
//En este caso pondrá 4 decimales contando el número '0'.
myNumber = myNumber.toPrecision(3);

//Converte un número en un número primitivo.
myNumber = myNumber.valueOf();

/* ##########========================########## */
/* ######===--- El objeto (Number) ---===###### */
/* ##########========================########## */

// Devuelve el mayor número posible en javascript.
let number = Number.MAX_VALUE;

// Devuelve el menor número posible en javascript.
let number = Number.MIN_VALUE;

// Devuelve un número infinito en caso de serlo.
// *** Ejemplo: 1 / 0 da 'Infinito' ***
let number = Number.POSITIVE_INFINITY;

// Devuelve un número infinito en caso de serlo. Ejemplo: -1 / 0 da 'Infinito'.
let number = Number.NEGATIVE_INFINITY;

/* 
	Si el número no se puede convertir, 
	NaN se devuelve (No es un número).
*/
let myNaN = Number.NaN;

// ----------------------------- //
// ------ Borrar espacios ------ //
// ----------------------------- //

Number(true); //Da 1.
Number(false); //Da 0.
Number("10"); //Da 10.
Number("				10"); //Da 10.
Number("10				"); //Da 10.
Number("				10				"); //Da 10.
Number("10.33"); //Da 10.33.
Number("10,33"); //Da NaN.
Number("10				33"); //Da NaN.
Number("John"); //Da NaN.