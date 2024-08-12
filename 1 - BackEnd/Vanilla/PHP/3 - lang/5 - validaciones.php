<?php

/* ##########==================########## */
/* ######===--- Validaciones ---===###### */
/* ##########==================########## */

is_int($entero); # Verifica que sea un numero entero.

is_integer($entero); # Funciona exactamentew igual que el 'int'.

is_long($entero); # Verifica un valor entero.

is_float($flotante); # Verifica un valor flotante.

is_double($flotante); # Verifica un valor flotante.

is_string($cadena); # Verifica un valor de cadena.

is_nan($NaN); # Verifica un valor irracional.

is_null($nulo); # Verifica un valor nulo.

is_numeric($numero);
is_numeric($flotante); # Verifica un dato numerico.
is_numeric($numero + $flotante);

is_array($array); # Verifica si se trata de un arreglo.

/* La funcion (filter_var) permite validar tipos de datos.
Para mas informacion visita el archivo (filter.php) en la carpeta (APIs). */
filter_var($variable, TYPE);

/* ##########================########## */
/* ######===--- Ver tipado ---===###### */
/* ##########================########## */

# La funcion (var_dump) permite ver el tipo de dato y su valor.
$variable = 58;
var_dump($variable);

var_dump(is_int($entero)); // true
var_dump(is_int($flotante)); // false

# Verifica el tipo de dato de una variable.
/* Tambien se pueden evaluar condiciones con 'var_dump'. */
var_dump(5 == "5"); # True.
var_dump(5 === "5"); # False.
var_dump(5 > 3); # True.
var_dump(5 < 5); # Falso.

/* Tambien s===e pueden realizar operaciones matematicas con 'var_dump'. */
var_dump(5 * 5); // 25.
var_dump(5 + 5); // 10.
var_dump(5 - 3); // 2.
var_dump(10 / 2); // 2.
var_dump(10 % 2); // 0.

# Es el (var_dump) pero para arreglos, permite ver el contenido de un arreglo.
print_r(array(0,1,2));

// Pueden verse tambien las caracteristicas de un objeto.
var_dump(new Usuario());