<?php

/* ##########===================================########## */
/* ######===--- Variables globales ($GLOBALS) ---===###### */
/* ##########===================================########## */

/* 'GLOBALS' es una variable súper global de PHP que se utiliza para acceder a variables globales 
desde cualquier lugar del script PHP (también desde dentro de funciones o métodos). */

$numero_0 = 5; $numero_1 = 6;

function my_globals():void{
	$GLOBALS['resultado'] = $GLOBALS['numero_0'] + $GLOBALS['numero_1'];
}

echo("La variable global es: $resultado"); // Da 11.

$GLOBALS['nombre'] = "Brandon";
$GLOBALS['apellido'] = "Olivares";
$GLOBALS['edad'] = 21;