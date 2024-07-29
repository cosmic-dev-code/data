<?php

/* ##########====================########## */
/* ######===--- Tipos de datos ---===###### */
/* ##########====================########## */

// Numeros.
$numero = 54353;
(float) $numero = 324235.435345;

// Cadena de texto.
$string = "Brandon Anthony";
$string = 'Brandon Anthony';

// Arreglo.
$array = [10, 20, 30];
$array = ["Hola", "Brandon", "Anthony"];
$array = [10, false, "Brandon"];
$array = array("Hola", "mundo", true);
$array = array(
	"nombre" => "Brandon", 
	"edad" => 22, 
	"Uno", 
	"arreglo" => ["Uno", "Dos", "Tres"]
);

// Booleanos.
(bool) $bool = true;
(bool) $bool = false;

// Sin valor, (nulo).
$nulo = null;

// Funciones anonimas.
$funcion_anonima = function():string{return "string";};
$funcion_anonima = fn ():string => return "string";

// Una clase anonima.
$clase_anonima = class{
	function __construct(){}
};

// Dato de tipo objeto.
$objeto = new Usuario();

// Dato estatico, (no modificable).
static $estatico = 5;

// Constantes.
define("PI", 3.1416);
define("Variable", "Este es el valor");
const PI = 3.1416;
const Variable = "Este es el valor";