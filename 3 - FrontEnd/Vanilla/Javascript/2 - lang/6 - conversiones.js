/* ##########=======================########## */
/* ######===--- Convertir a Array ---===###### */
/* ##########=======================########## */

let string = "Banana, Manzana, Pera";

// Elimina los separadores (, ) y guarda los elementos en forma de array.
let newArray = string.split(", ");

// Retorna toda la cadena en el indice 0 del nuevo array.
newArray = string.split();

/* Devuelve un array con todos los caracteres de la cadena como elementos individuales. */
newArray = string.split("");

/* ##########========================########## */
/* ######===--- Convertir a string ---===###### */
/* ##########========================########## */

let array = new Array("Manzana", "Pera", "Mango");

// Convierte un array completo a una cadena pero ademas puede especificarse el separador.
string = array.join(","); // "Manzana,Pera,Mango"

// Convierte a un arreglo.
String(array); // "Manzana,Pera,Mango"

/**
 * El metodo (toString).
 */

let array = Array("Manzana", "Pera", "Mango");
let numero = 5;
function funcion(){}

// Todo tiene el metodo (toString) que convierte a una cadena.
array.toString(); // "Manzana,Pera,Mango"
numero.toString(); // "5"
funcion.toString(); // "function funcion(){}"

/* ##########========================########## */
/* ######===--- De string a numero ---===###### */
/* ##########========================########## */

/* Métodos globales los cuales se pueden aplicar a todos los objetos. */
window.parseInt("10"); // 10
window.parseInt("10.33"); // 10
window.parseInt("10 20 30"); // 10
window.parseInt("10 años"); // 10
window.parseInt("años 10"); // NaN

/* Si el número no se puede convertir, NaN se devuelve (No es un número). */

window.parseFloat("10"); // 10
window.parseFloat("10.33"); // 10.33
window.parseFloat("10 20 30"); // 10
window.parseFloat("10 años"); // 10
window.parseFloat("años 10"); // NaN

Number(true); // 1
Number(false); // 0
Number("10"); // 10
Number("				10"); // 10
Number("10				"); // 10
Number("				10				"); // 10
Number("10.33"); // 10.33
Number("10,33"); // NaN.
Number("10				33"); // NaN.
Number("John"); // NaN.