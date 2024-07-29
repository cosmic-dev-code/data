<?php

/* ##########=================================================########## */
/* ######===--- funciones y funciones flecha, (diferencias) ---===###### */
/* ##########=================================================########## */

/**
 * Una funcion normal.
 */
$funcion_normal = function(string $str = ""):string{
	return strtolower($str);
};

print $funcion_normal("HOLA");

/**
 * Una funcion flecha.
 *
 * Para declarar una funcion flecha se utiliza la palabra reservada (fn), 
 * las funciones flecha no pueden llevar (llaves), unicamente se 
 * utilizan para acortar una funcion cuando solo se va 
 * a retornar algo.
 */
$funcion_flecha = fn(string $str = ""):string => strtolower($str);

print $funcion_flecha("HOLA");