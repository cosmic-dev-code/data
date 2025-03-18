<?php

/* ##########==================########## */
/* ######===--- Conversiones ---===###### */
/* ##########==================########## */

// ------------------- //
// ------ Array ------ //
// ------------------- //

# Variable con datos separados por '/'.
$fecha = "2021/5/13";
$fecha_1 = "2021-5-13";
$fecha_2 = "2021 del mes 5 y el dia 13";

/* Convierte un "string" a un array separandolo por algun caracter. */
$newArray = explode("/", $fecha);

$newArray_1 = explode("-", $fecha_1);

$newArray_2 = explode(" ", $fecha_2);

// -------------------------------- //
// ------ Dividir por partes ------ //
// -------------------------------- //

# El string se va a dividir en (dos) partes.
$array = explode(" ", $fecha_2, 2);
/* 
  2021,
  del mes 5 y el dia 13
*/

# El string se va a dividir en (tres) partes.
$array = explode(" ", $fecha_2, 3);
/* 
  2021,
  del,
  mes 5 y el dia 13
*/

# El string se va a dividir en (cuatro) partes.
$array = explode(" ", $fecha_2, 4);
/* 
  2021,
  del,
  mes,
  5 y el dia 13
*/

# Divide el string en un array (menos el ultimo elemento).
$array = explode(" ", $fecha_1, -1);
/* 
  2021,
  5
*/

# Divide el string en un array (menos los ultimos elemento).
$array = explode(" ", $fecha_1, -2);
/* 
  2021
*/

/* ##########================================########## */
/* ######===--- Buscar dentro de un string ---===###### */
/* ##########================================########## */

// Devuelve el numero de caracteres.
strlen("Hello"); # 5

// Devuelve el numero de palabras.
str_word_count($mensaje);

# Busca una cadena dentro de un mensaje y 
# devuelve el texto a partir de esa cadena.
stristr($mensaje, "hello");

// Busca la palabra y regresa la posicion en que se encuentra.
strpos($mensaje, "como");

// Busca una cadena de texto y devuelve 'true' en caso de encontrarla.
str_contains($mensaje, "Hello"); // 

/* ##########=======================########## */
/* ######===--- Cortar una cadena ---===###### */
/* ##########=======================########## */

/*
  --- El primer parametro es la variable o cadena.
  --- El segundo parametro indica desde que posicion se va a substraer la cadena.
  --- El tercer parametro indica cuantos caracteres se van a substraer. */
substr("Hello world!", 12, 6);

# Extrar el resto de la cadena desde el indice indicado.
substr("Hello world!", 12);

/* ##########============================########## */
/* ######===--- Transformar una cadena ---===###### */
/* ##########============================########## */

// Pone el texto al reves.
strrev($mensaje);

// Convertir a minusculas.
strtolower($mensaje);

// Convertir a mayusculas.
strtoupper($mensaje);

// Esta funcion no convierte los caracteres especiales en mayusculas.
strtoupper("Año de programación.");

// Convertir en mayusculas los caracteres especiales.
mb_strtoupper("Año de programación.");

// Convierte la primera letra del string en mayuscula.
ucfirst($mensaje);

// Convierte la primera letra del string en minuscula.
lcfirst($mensaje);

// Convierte la primera letra de cada palabra en mayuscula.
ucwords($mensaje);

/* ##########========================########## */
/* ######===--- Concatenar cadenas ---===###### */
/* ##########========================########## */

// Las cadenas se pueden concatenar con el operador (.).
$text = "Hola" . " " . "mundo!";

// Otra concatenacion.
$result = "La cadena es: $text";

/* ##########============================########## */
/* ######===--- Comparacion de cadenas ---===###### */
/* ##########============================########## */

// Metodo de comparacion normal.
("Hola" === "Hola");

// (No teniendo en cuenta mayusculas y minusculas).
strcasecmp("Hola", "Hola");

// (Reniendo en cuenta mayusculas y minusculas).
strcmp("Hola", "Adios");

/* Si la primera cadena devuelve cualquier otro valor diferente a 0, entonces las dos cadenas son diferentes. */
if(strcmp("Hola mundo", "hola mundo") !== 0) {
  '$var1 no es igual a $var2 en una comparación que considera mayúsculas y minúsculas';
}

/* ##########========================########## */
/* ######===--- Relleno de cadenas ---===###### */
/* ##########========================########## */
$string = ".  Esta es una cadena   ";

# Remueve el exceso de espacios.
trim($string);

# Remueve solo el espacio del lado izquierdo del texto.
ltrim($string);

# Remueve solo el espacio del lado derecho del texto.
rtrim($string);

# Elimina las etiquetas 'html'.
strip_tags("<h3>Mi titulo</h3>");

# Esta funcion escapa los caracteres especiales (HTML).
htmlspecialchars("<div>Esta es una <b>cadena</b> de texto.</div>");

# Escapa las comillas dobles y simples de una cadena colocando diagonales.
addslashes($string);

# Quita el escape de las comillas dobles y simples, quitando las diagonales.
stripslashes($string);

$code = 39;

/**
 * Detro de la variable 'code' se guarda el nuevo texto con los 
 * elementos agregados:
 * 
 *  --- Valor al cual se le desea agregar elementos.
 *  --- Define hasta que longitud se va a agregar el nuevo elemento.
 *  --- Elemento que se va a agregar.
 *  --- Define a donde se van a agregar el elemento: 
 *         --- (STR_PAD_BOTH), define a ambos lados del valor.
 *         --- (STR_PAD_LEFT), define a la izquierda del valor.
 *         --- (STR_PAD_RIGHT), define a la derecha del valor.
 */

$code = str_pad($code, 8, '#', STR_PAD_BOTH);
$code = str_pad($code, 8, '#', STR_PAD_LEFT);
$code = str_pad($code, 8, '#', STR_PAD_RIGHT);

# Podemos imprimir el valor.
print $code;

/* ##########=======================================########## */
/* ######===--- Extraer un caracter de una cadena ---===###### */
/* ##########=======================================########## */

echo "Hola"[0]; // Da: 'H'.
// Los 'strings' pueden tratarse como arrays.

/* ##########===========================########## */
/* ######===--- Reemplazar una cadena ---===###### */
/* ##########===========================########## */

$text = "Este es un curso de php y javascript para aprender mas.";

# Reemplazamos los espacios con un guion.
$slug = str_replace(' ', '-', $text);

# Reemplazamos dentro del string la palabra 'php' por la palabra 'javascript'.
$slug = str_replace('php', 'javascript', $text);