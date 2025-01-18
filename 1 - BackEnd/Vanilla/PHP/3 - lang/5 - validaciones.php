<?php

# ##########==================##########
# ######===--- Validaciones ---===######
# ##########==================##########

# Verificar tipo de dato

# Un entero.
is_int(10);  // true

# Un flotante.
is_float(10.5);  // true

# Una cadena de texto.
is_string("texto");  // true

# Valor null (nulo).
is_null(null);  // true

# Numérico (int o float).
is_numeric(123);  // true
is_numeric(10.5);  // true

# Una lista (equivalente a un arreglo).
is_array([1, 2, 3]);  // true

# Verificar si un valor es NaN (Not a Number).
is_nan("dsgshg"); // false

// Verifica si existe un campo en un (array).
isset($my_arreglo["campo"]) # bool

# ---------------------- #
# ------ callable ------ #
# ---------------------- #

/**
 * Verifica si algo se puede llamar, (invocar).
 */

// Verificar una funcion.
//      --- function(){}
is_callable('miFuncion');

// Verificar una funcion anonima.
//      --- $fun = function(){}
is_callable($fun);

// Verificar un metodo.
is_callable([$objeto, 'miMetodo']);

/* ##########================########## */
/* ######===--- Ver tipado ---===###### */
/* ##########================########## */

# La funcion (var_dump) permite ver el tipo de dato y su valor.
$variable = 58;
var_dump($variable);

# Evalua booleanos.
var_dump(is_int($entero)); // true
var_dump(is_int($flotante)); // false

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