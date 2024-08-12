<?php

/*  (i) Realiza una búsqueda que no distingue entre mayúsculas y minúsculas
	(m) Realiza una búsqueda de varias líneas.
	(los patrones que buscan el principio o el final de una cadena coincidirán 
	con el principio o el final de cada línea).
	(u) Permite la coincidencia correcta de patrones codificados en UTF-8.

	[abc] Encuentra un carácter de las opciones entre corchetes.
	[^ abc] Encuentra cualquier carácter que NO esté entre corchetes.
	[0-9] Encuentra un carácter del rango de 0 a 9.

	| Encuentre una coincidencia para cualquiera de los patrones separados por |
	. Encuentra solo una instancia de cualquier personaje
	^ Encuentra una coincidencia como el comienzo de una cadena como en: ^ Hola
	$ Encuentra una coincidencia al final de la cadena como en: World $
	\d Encuentra un dígito
	\s Encuentra un carácter de espacio en blanco
	\b Encuentra una coincidencia al principio de una palabra como esta: \ bWORD, o al final de una palabra como esta: WORD \ b
	\uxxxx Busque el carácter Unicode especificado por el número hexadecimal xxxx

	n+ Coincide con cualquier cadena que contenga al menos una n
	n* Coincide con cualquier cadena que contenga cero o más ocurrencias de n
	n? Coincide con cualquier cadena que contenga cero o una apariciones de n
	n{x} Coincide con cualquier cadena que contenga una secuencia de X n
	n{x, y} Coincide con cualquier cadena que contenga una secuencia de X a Y n
	n{x,} Coincide con cualquier cadena que contenga una secuencia de al menos X n */

$string = "Esta es una cadena de texto.";
$palabra = "/cadena/i";

preg_match($palabra, $string);
# Esta funcion permite buscar una cadena especifica dentro de otra cadena.

// ---------------------------- //
// ------ preg_match_all ------ //
// ---------------------------- //

$string = "hola, la palabra hola es para saludar: Hola";
$palabra = "/hola/i";

preg_match_all($palabra, $string); # Da 3.
/* Funciona de igual manera que la funcion anterior, sin embargo, esta devuelve la 
cantidad de veces que encuentra la palabra. */

// ------------------------------- //
// ------ preg_preg_replace ------ //
// ------------------------------- //

$string = "Este es un texto";
$palabra = "/texto/i";

preg_replace($palabra, "mensaje", $string); # Da "Este es un mensaje".
/* Busca una palabra dentro del 'string' y la reemplaza por una nueva palabra. */

$password = '123456';

$pas = '/^[0-9]{6,9}$/';
/**
 * Evalua un password con la condicion de que sus 
 * caracteres tengan entre 6 y 9.
 */

preg_match('/^[0-9]{6,9}$/', $password);