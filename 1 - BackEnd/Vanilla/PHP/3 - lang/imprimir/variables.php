<?php

/* ##########========================########## */
/* ######===--- Impresion de datos ---===###### */
/* ##########========================########## */

$texto = "Hola mundo";

// Detecta la variable en el (string) y la imprime.
echo "El texto es: $texto";

// Concatena e imprime.
echo "El texto es: ".$texto;

# Con comillas simples no imprime la variable.
echo 'La variable es $texto';

// Imprime un arreglo.
print_r($array);

// La forma de imprimir datos complejos es entre {llaves}.
echo "El nombre es: {$usuario -> name}";
echo "El nombre es: {$usuario["name"]}";
echo "El nombre es: {$usuarios["usuario"] -> name}";

// --------------------------------------- //
// ------ Imprimir por (referencia) ------ //
// --------------------------------------- //

$nombre = "Brandon";
$jugar = "jugador de Smash.";

echo "$nombre es un ${$jugar}"; # "Brandon es un jugador de Smash".

// ---------------------------------- //
// ------ Imprimir (funciones) ------ //
// ---------------------------------- //

/**
 * Funcion (normal).
 */

function funcion(){}

# La funcion se manda a llamar.
echo "funcion()";

$nombre = "funcion";

# Tambien se manda a llamar la funcion.
echo "$nombre()";

/**
 * Funcion (anonima).
 */

$get_name = fn ():string => return "Anthony";

echo "Nombre: ${$get_name()}";

echo "Nombre: {${$get_name()}}";