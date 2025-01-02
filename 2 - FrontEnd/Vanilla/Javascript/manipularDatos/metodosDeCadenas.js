
/* ##########===================================########## */
/* ######===--- Prototipo del objeto (String) ---===###### */
/* ##########===================================########## */

String.__proto__;
/* Accedemos al prototipo de la clase (String), 
en el prototipo podemos ver todas las propiedades 
y métodos del constructor. */

/* ##########=======================########## */
/* ######===--- De string a Array ---===###### */
/* ##########=======================########## */

let string = "Banana, Manzana, Pera";

// Elimina los separadores (, ) y guarda los elementos en forma de array.
let newArray = string.split(", ");

// Retorna toda la cadena en el indice 0 del nuevo array.
newArray = string.split();

/* Devuelve un array con todos los caracteres de 
la cadena como elementos individuales. */
newArray = string.split("");

/* ##########================================########## */
/* ######===--- Buscar dentro de un string ---===###### */
/* ##########================================########## */

let string = "Esta es una cadena de texto de aprendizaje.";

string.length; // Devuelve el numero de caracteres perteneciente a la cadena.

/* El metodo regresa el indice en donde se encontro la coincidencia, 
naturalmente al encontrarla para, por lo que si hay mas de una 
solo la primera que encuentre. */
string.indexOf("cadena"); // Da 12.

/* Este metodo toma la ultima coincidencia que encontro y devuelve el indice 
en donde se encuentra la coincidencia. */
string.lastIndexOf("de"); // Da 28.

/**
 * Tanto (indexOf) como (lastIndexOf) devuelven (-1) 
 * si ni encuentran la cadena que buscan. 
 */

/* El segundo parametro representa la posicion desde la que se va a 
empezar a buscar la cadena. */
string.indexOf("de", 14); // Da 28.

/* Busca de izquierda a derecha desde el indice definido en el segundo 
parametro. */
string.lastIndexOf("de", 15); // Da: 14.

/* Busca la cadena y regresa la posicion en la que se 
encuentra, una vez que encuentra la cadena para de buscar. */
string.search("cadena"); // Da 12.

/*
	--- Diferencias. ---

		search(): método no puede tomar un segundo 
		argumento de posición inicial.

		indexOf(): método no puede tomar valores 
		de búsqueda potentes (expresiones regulares).
*/

/* Busca una cadena de texto dentro de un string y 
devuelve 'true' cuando la encuentra, devuelve 
'false' cuando no lo encuentra. */
string.includes("cadena"); // Da: true.

// Busca que el string comience con la cadena de texto.
string.startsWith("cadena"); // Da: false.

// Busca que el string termine con la cadena de texto.
string.endsWith("cadena"); // Da: false.

/* ##########=======================########## */
/* ######===--- Cortar una cadena ---===###### */
/* ##########=======================########## */

let string = "Apple, Banana, Kiwi";

/* Corta una cadena y retorna una nueva: 
	--- Desde que posicion cortara la cadena.
	--- Hasta donde cortara la cadena, (mas no toma el ultimo indice). */
let newString = string.slice(7, 13); // Retorna (banana).

/* Corta y devuelve la cadena de derecha a izquierda. */
newString = string.slice(-12, -6); // Retorna (Banana).

/* Corta y retorna la cadena desde la posicion 7. */
newString = string.slice(7); // Retorna (Banana, Kiwi).

/* Corta y retorna la cadena de derecha a izquierda. */
newString = string.slice(-12); // Retorna (Banana, Kiwi).

/* (substring) puede hacer lo mismo que (slice), la diferencia es que 
(substring) solo acepta valores positivos. */
newString = string.substring(7, 13); // Retorna (Banana).

/* Funciona como el metodo (slice), la diferencia es que el segundo 
parametro representa la longitud que cortara. */
newString = string.substr(7, 6); // Retorna (Banana).

/* Corta y retorna la cadena desde la posicion 7. */
newString = string.substr(7); // Retorna (Banana, Kiwi).

/* Cuenta de derecha a izquierda, corta el texto y lo retorna. */
newString = string.substr(-4); // Retorna (Kiwi).

/* ##########============================########## */
/* ######===--- Transformar una cadena ---===###### */
/* ##########============================########## */

/* Convierte todos los caracteres de la cadena 
en mayusculas y retorna una cadena nueva. */
string.toUpperCase();

/* Convierte todos los caracteres de la cadena 
en minusculas y retorna una cadena nueva. */
string.toLowerCase();

/* ##########========================########## */
/* ######===--- Concatenar cadenas ---===###### */
/* ##########========================########## */

let palabra0 = "Hola";
let palabra1 = "mundo.";

/* El metodo (concat) concatena dos cadenas de 
texto y, en este caso concatena las cadenas 
dejando un espacio en medio de ambas. 

Cabe recalcar que se retorna una cadena nueva con el resultado. */
let cadena = palabra0.concat(" ", palabra1);

let text = "Hola" + " " + "mundo!"; // Forma comun.

let text = "Hola".concat(" ", "mundo!"); // Por medio del metodo (concat).

/* ##########============================########## */
/* ######===--- Comparacion de cadenas ---===###### */
/* ##########============================########## */

("Hola" === "Hola"); // Da: True.
("hola" === "Hola"); // Da: False.
("5" == 5); // Da: True.
("5" === 5); // Da: False.

"Brandon".localeCompare("Brandon"); // Da: 0, (B y B alfabeticamente son iguales).
"Brandon".localeCompare("Brand"); // Da: 1, (Son iguales pero 'Brand' viene despues).
"Brandon".localeCompare("Anthony"); // Da: 1, "A viene antes que B".
"Brandon".localeCompare("Cosmic"); // Da: -1, (C viene despues que B).
/* Compara alfabeticamente si el primer caracter viene antes, despues o igual 
al otro caracter de la otra cadena. */

/* ##########========================########## */
/* ######===--- Relleno de cadenas ---===###### */
/* ##########========================########## */

let string = "		Hola mundo.		";

// Elimina los espacios en blanco de una cadena.
string.trim();

// Elimina los espacios en blanco al principio, (del lado izquierdo).
string.trimStart();

// Elimina los espacios en blanco al final, (del lado derecho).
string.trimEnd();

string = "5";

// Rellena al inicio de la cadena con '0' hasta haber 4 caracteres.
"004".padStart(4, 0); // 0004
"4".padStart(4, 0); // 0004

// Rellena al final de la cadena con '0' hasta haber 4 caracteres.
"4".padEnd(4, 0); // 4000
"400".padEnd(4, 0); // 4000

/* ##########=======================================########## */
/* ######===--- Extraer un caracter de una cadena ---===###### */
/* ##########=======================================########## */

let string = "Esta es una cadena de prueba.";

// (charAt) recibe el indice para extraer y retornar el caracter en dicha posicion.
string.charAt(0); // "E"
string.charAt(180); // ""

/* Toma el caracter del indice 0 y retorna el valor 'unicode' de ese caracter.
El método devuelve un código UTF-16 (un número entero entre 0 y 65535). */
string.charCodeAt(0); // Retorna '72'.

string[0]; // Retorna 'E'.

/* A pesar de que las cadenas parezcan matrices no lo son, por lo 
que no se pueden trater igual. */
string[0] = "H"; // No funciona.
string[180]; // Devuelve 'undefined'.

/* ##########===========================########## */
/* ######===--- Reemplazar una cadena ---===###### */
/* ##########===========================########## */

let string = "Esta es una cadena de texto de prueba.";

/* Reemplaza una cadena especifica dentro de la cadena y 
devuelve una nueva cadena con los cambios. */
let newString = string.replace("cadena", "string");

string = "Esta cadena es una cadena de prueba.";

// Reemplaza solo la primera coincidencia y retorna la nueva cadena.
string.replace("cadena", "string");

/* Por defecto el metodo (replace) distingue entre mayusculas y 
minusculas, por lo que de esta manera no funcionara. */
string.replace("CADENA", "string");

/* Poner la palabra como expresion regular.
La letra (i) representa 'insensible' a mayusculas y minusculas. */
string.replace(/CADENA/i, "string");

/* Reemplaza todas las coincidencias de la cadena. */
string.replace(/cadena/g, "string");