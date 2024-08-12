<?php

/* ##########=======================================########## */
/* ######===--- La palabra reservada (namespaces) ---===###### */
/* ##########=======================================########## */

// --- --- --- Archivo (php/functions.php) --- --- --- //

namespace funciones_Matematicas;

/* La palabra reservada (namespace) le da un nombre al documento 
para posteriormente utilizarlo, es como un (identificador). */

function mostrar_numeros(float $numero = 0.000){
	echo "<table cellspacing='3' cellpadding='10' border='1'>";
	echo "<tr>
			<th>Numeros</th>
		  </tr>";
	for($i = 0; $i < $numero; $i++){
		?>
			<tr>
				<td><?php printf("%.2f", $i); ?></td>
			</tr>
		<?php
	}
	echo "</table>";

	return 0;
}

class Math_Functions{
	public static function pow(float $numero = 0.000){
		return "
			<div>
				".pow($numero, 2)."
			</div>
		";
	}

	public static function cube(float $numero = 0.000){
		return "<div>
					".pow($numero, 3)."
				</div>";
	}
}

// --- --- --- Archivo (index.php) --- --- --- //

include 'php/functions.php';

// Colocamos el nombre del (namespace) y la funcion o clase que se desee utilizar.
funciones_Matematicas\mostrar_numeros(33.9);
print funciones_Matematicas\Math_Functions::pow(5);
print funciones_Matematicas\Math_Functions::cube(3);

/* ##########================================########## */
/* ######===--- La palabra reservada (use) ---===###### */
/* ##########================================########## */

require_once 'php/functions.php';
use funciones_Matematicas;

funciones_Matematicas\mostrar_numeros(10);
funciones_Matematicas\Math_Functions::cube(3);

// --- --- --- Archivo (php/functions.php) --- --- --- //

namespace code\funciones\matematicas;
# Podemos poner nombres de espacios un poco mas complejo.

function saludar(){
	echo "Saludo";
}

class Math_Functions{
	public static function pow(float $numero = 0.000){
		return "
			<div>
				".pow($numero, 2)."
			</div>
		";
	}

	public static function cube(float $numero = 0.000){
		return "<div>
					".pow($numero, 3)."
				</div>";
	}
}

// --- --- --- Archivo (index.php) --- --- --- //

require 'php/functions.php';
/* Hacemos uso del nombre de espacio, pero solo importa el ultimo 
nombre, pero no importa el nombre completo. */
use code\funciones\matematicas;

matematicas\saludar();

matematicas\Math_Functions::pow(10);
matematicas\Math_Functions::cube(3);

/* ##########================########## */
/* ######===--- Alias (as) ---===###### */
/* ##########================########## */

// --- --- --- Archivo (index.php) --- --- --- //

include_once 'php/functions.php';
use code\funciones\matematicas as math;
/* Ahora nos vamos a dirigir al espacio de nombre (matematicas) 
por medio de su 'alias' (math). */

math\mostrar_numeros(10);

math\Math_Functions::pow(10);
math\Math_Functions::cube(3);