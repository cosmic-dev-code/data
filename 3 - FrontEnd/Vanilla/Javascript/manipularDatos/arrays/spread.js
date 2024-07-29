/* ##########==========================########## */
/* ######===--- El operador (spread) ---===###### */
/* ##########==========================########## */

// Descompone el array separandolo por comas.
console.log(
	...array
);


// Todos los elementos del array1 se copian al otro array.
array.push(...array1);

// ------------------------ //
// ------ Concatenar ------ //
// ------------------------ //

// Concatena los (arrays).
let combinacion = [
	...array, 
	...array1
];