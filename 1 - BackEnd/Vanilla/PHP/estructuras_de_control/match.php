<?php

/* ##########===============########## */
/* ######===--- Try Catch ---===###### */
/* ##########===============########## */

/* La estructura de control (match) funciona de la misma manera que 
la estructura de control (switch).

La diferencia es que (match) retorna el valor que es seleccionado. */

$number = 3;
echo match($number) {
	0 => "Numbero 0",
	1 => "Numbero 1",
	2 => "Numbero 2",
	3 => "Numbero 3",
	4 => "Numbero 4",
	5 => "Numbero 5",
	6 => "Numbero 6",
	7 => "Numbero 7",
	8 => "Numbero 8",
	9 => "Numbero 9",
	10 => "Numbero 10",
	default => "Ningun numero seleccionado."
}

// ---------------------------- //
// ------ Retornar valor ------ //
// ---------------------------- //

/* El valor seleccionado se retorna. */
$usuario = match("1999"){
	"2019" => "Brandon", 
	"2020" => "Anthony", 
	"2022" => "Cosmic",
	default => "Ninguno"
}

# --------------------- #
# ------ Funcion ------ #
# --------------------- #

function hola(string $val = ""){
	return match($val){
		"uno" => "1",
		"dos" => "2",
		"tres" => "3",
		default => "nothing",
	};
}