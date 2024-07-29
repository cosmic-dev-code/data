<?php

/* ##########==========########## */
/* ######===--- JSON ---===###### */
/* ##########==========########## */

// Los objetos JSON se utilizan para guardar o enviar informacion en formata de "string".

/* ##########======================########## */
/* ######===--- Convertir a JSON ---===###### */
/* ##########======================########## */

// Solo los arreglos asosiativos pueden convertirse en JSON.
$array = array(
	"nombre" => "Brandon",
	"apellidos" => "Olivares Amador",
	"edad" => 21
);

// Convierte la informacion del arreglo asosiativo en un JSON.
$json_string = json_encode($array);

// "{\"nombre\": \"Brandon\",\"Apellidos\": \"Olivares Amador\",\"Edad\": 21}"
var_dump($json_string);

/* ##########=======================########## */
/* ######===--- Desconvertir JSON ---===###### */
/* ##########=======================########## */

// Tenemos una cadena JSON.
$json_string = '{
	"nombre": "Brandon",
	"apellidos": "Olivares Amador",
	"edad": 21
}';

// Convierte la cadena a un objeto PHP.
$objeto = json_decode($json_string);

$objeto -> nombre;
$objeto -> apellidos;
$objeto -> edad;

// Convierte la cadena a un arreglo asosiativo.
$array = json_decode($json_string, true);

$array["nombre"];
$array["apellidos"];
$array["edad"];