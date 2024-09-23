<?php

/* ##########=============########## */
/* ######===--- Numeros ---===###### */
/* ##########=============########## */

$i = 0;

switch ($i) {
	case 1:
		echo "Caso 1.";
		break;
	case 2:
		echo "Caso 2.";
		break;
	case 3:
		echo "Caso 3.";
		break;
	default:
		echo 'Ningun caso de la variable $i.';
		break;
}

/* ##########=============########## */
/* ######===--- Cadenas ---===###### */
/* ##########=============########## */

$i = "Lol";

# Se pueden evaluear cadenas.
switch ($i) {
	case "Brandon":
		echo "Primer nivel.";
		break;
	case "Anthony":
		echo "Segundo nivel.";
		break;
	case "Cosmic":
		echo "Tercer nivel.";
		break;
	default:
		echo "Ningun nivel seleccionado de $i";
		break;
}

/* ##########===========########## */
/* ######===--- Ambos ---===###### */
/* ##########===========########## */

$i = 432;

# Se pueden hacer mezclas de cadenas y numeros.
switch ($i) {
	case "Brandon":
		echo "Primer nivel.";
		break;
	case "Anthony":
		echo "Segundo nivel.";
		break;
	case "Cosmic":
		echo "Tercer nivel.";
		break;
	case 432:
		echo "Error 432.";
		break;
	default:
		echo "Ningun nivel seleccionado de $i";
		break;
}