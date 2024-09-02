<?php

/* ##########==================########## */
/* ######===--- Conversiones ---===###### */
/* ##########==================########## */

$numero = 5;
$string = "55.55";

// Convertir un dato a (string).
$string = ((string) $numero);

// Convertir un dato a (int).
$numero = ((int) $string);

// Convertir un dato a (float).
$numero = ((float) $string);

// Convertir un dato a (double).
$numero = ((double) $string);

// Convertir un dato a (booleano).
$numero = ((bool) $string);

// Convertir un dato a (objeto).
$objeto = ((object) obtener_objeto());

/* ##########=======================########## */
/* ######===--- De array a string ---===###### */
/* ##########=======================########## */

$arr = array("Hola", true, 35);

/* La funcion (implode) permite convertir un 'array' 
a una cadena de texto: 

	--- El primer parametro recibe el separador de los elementos de la cadena.
	--- El segundo parametro es el 'array' el cual se ha de convertir. */
$str = implode(", ", $arr); // Da: Hola, true, 35.

$str = implode(" ", $arr); // Da: Hola true 35.

$str = implode("", $arr); // Da: Holatrue35.

// ------------------------------------------ //
// ------ Convertir variables a arrays ------ //
// ------------------------------------------ //

$variable_0 = "Brandon";
$variable_1 = null;
$variable_2 = true;

/* El metodo (compact) crea un nuevo array asociativo con todas las variables 
espeficicadas. */
$arr_variables = compact("variable_0", "variable_1", "variable_2");

print_r($arr_variables);
/*
	Array
	(
	    [variable_0] => Brandon
	    [variable_1] => 
	    [variable_2] => 1
	)
*/

/* ##########=======================########## */
/* ######===--- Convertir a array ---===###### */
/* ##########=======================########## */

# Variable con datos separados por '/'.
$fecha = "2021/5/13";
$fecha_1 = "2021-5-13";
$fecha_2 = "2021 del mes 5 y el dia 13";

/* Explode sirve para convertir un string en un array, 
en este caso se separan los datos del string por una diagonal, 
el array elimina la diagonal y separa las palabras en datos de tipo 
array. */
$newArray = explode("/", $fecha);

$newArray_1 = explode("-", $fecha_1);

$newArray_2 = explode(" ", $fecha_2);

/* ===--- Dividir array por partes ---=== */

$newArray_2 = explode(" ", $fecha_2, 2);
/* El string se va a dividir en dos partes. */
/* 
  2021,
  del mes 5 y el dia 13
*/

$newArray_2 = explode(" ", $fecha_2, 3);
/* El string se va a dividir en tres partes. */
/* 
  2021,
  del,
  mes 5 y el dia 13
*/

$newArray_2 = explode(" ", $fecha_2, 4);
/* El string se va a dividir en cuatro partes. */
/* 
  2021,
  del,
  mes,
  5 y el dia 13
*/

$newArray_2 = explode(" ", $fecha_1, -1);
/* Divide el string en un array menos el ultimo elemento. */
/* 
  2021,
  5
*/

$newArray_2 = explode(" ", $fecha_1, -2);
/* Divide el string en un array menos los ultimos elemento. */
/* 
  2021
*/