<?php

/* ##########==================########## */
/* ######===--- Conversiones ---===###### */
/* ##########==================########## */

// -------------------- //
// ------ String ------ //
// -------------------- //

$arr = array("Hola", true, 35);

/* La funcion (implode) permite convertir un 'array' 
a una cadena de texto: 
	--- El primer parametro recibe el separador de los elementos de la cadena.
	--- El segundo parametro es el 'array' el cual se ha de convertir. */
$str = implode(", ", $arr); # Hola, true, 35.

$str = implode(" ", $arr); # Hola true 35.

$str = implode("", $arr); # Holatrue35.

// -------------------------------- //
// ------ Variables a arrays ------ //
// -------------------------------- //

$variable_0 = "Brandon";
$variable_1 = null;
$variable_2 = true;

/* El metodo (compact) crea un nuevo array asociativo con todas las variables 
espeficicadas. */
$arr_variables = compact("variable_0", "variable_1", "variable_2");

print_r($arr_variables);
/*
	Array
	(
	    [variable_0] => Brandon
	    [variable_1] => 
	    [variable_2] => 1
	)
*/

// --------------------------------- //
// ------ Arrays a variables  ------ //
// --------------------------------- //

$array = [
	"uno" => 55, 
	"dos" => true
];

/* Convierte los campos de un array asosiativo a variables, recibe por parametros: 
	--- (EXTR_OVERWRITE), si encuentra una variable declarada la sobreescribe.
	--- (EXTR_PREFIX_SAME), coloca un prefijo para cada variable. */
extract($array, EXTR_OVERWRITE);
print $uno;
print $dos;

// Variables con prefijo.
extract($array, EXTR_PREFIX_SAME, "hola");
print $hola_uno;
print $hola_dos;

/* ##########==================================########## */
/* ######===--- Eliminar o agregar elementos ---===###### */
/* ##########==================================########## */

// ------------------------------- //
// ------ Agregar elementos ------ //
// ------------------------------- //

# Agrega un nuevo elemento al final.
array_push($cursos_complejos, "Otro");

// -------------------------------- //
// ------ Eliminar elementos ------ //
// -------------------------------- //

# Elimina el ultimo elemento y lo retorna.
array_pop($cursos);

# Elimina el primer elemento y lo retorna.
array_shift($cursos);

# Reemplaza el primer elemento y retorna la cantidad de elementos.
array_unshift($cursos, "nuevoPrimerElemento");

/* ##########=========================########## */
/* ######===--- Manipular elementos ---===###### */
/* ##########=========================########## */

$array_prueba = array("Amigo", "Tornado", "Musica");

sort($array_prueba); # Ordena los arrays por orden alfabetico.
rsort($array_prueba); # Ordena los arrays por orden alfabetico en reversa.

$array_complejo = array(
	"valor0" => "Manzana",
    "otro_valor" => "Pera",
    "mas_valores" => "Naranja",
    "fruta_verdura" => "A_comer"
);

# Se ordena en orden alfabetico de acuerdo al valor y no al elemento.
asort($array_complejo);
# Se ordenan alfabeticamente de acuerdo al elemento y no a valor.
ksort($valores);

# Ordena (alfabeticamente) en reversa, de acuerdo con el valor.
arsort($array_complejo);
# Ordena (alfabeticamente) en reversa, de acuerdo con el elemento.
krsort($array_complejo);

# Los ordena en reversa.
array_reverse($array_frutas);

# Los elementos se organizan con tabulacion.
array_chunk($array_complejo, 2);

# Los elementos se organizan con tabulacion de uno en uno, 'key' y su 'value'.
array_chunk($array_complejo, 1);

/* En un array complejo: 
	--- 'values' pasan a ser 'keys'
	--- 'keys' pasan a ser 'values' */
array_flip($array_complejo);

/* ##########======================########## */
/* ######===--- Buscar en arrays ---===###### */
/* ##########======================########## */

# Permite saber la longitud 
count($cursos_complejos);

# Este array verifica si una 'key' existe en un array.
array_key_exists('frontend', $array_complejo);

# Este array verifica si un 'value' existe en un array.
in_array('javascript', $array_complejo);

/* ##########=======================########## */
/* ######===--- Concatenar arrays ---===###### */
/* ##########=======================########## */

$frontend = ['javascript'];
$backend = ['php', 'laravel'];

# Se concatena, pero el indice 0 se sobreescribe.
var_dump(
	$frontend + $backend
);

# Aqui si funciona.
var_dump(
	$array_complejo + $array_complejo_1
);

# No importa que un indice tenga el mismo nombre, no se sobreescriben.
# Pero solo funciona con indices (numericos).
array_merge($frontend, $backend);

# Funciona con indices de tipo (string).
array_merge_recursive($frontend, $backend);

$categorias = ['frontend', 'backend', 'framework'];

# Los arrays se conbinan, el primer array pasa a ser los (keys).
# El segundo array pasa a ser los (values).
array_combine($categorias, $cursos);

// El operador (spread) sirve para concatenar los arrays.
$lenguajes = [...$frontend, ...$backend]; # ['javascript', 'php', 'laravel']
$lenguajes = [...$frontend, "php"]; # ['javascript', 'php']

/* ##########================================########## */
/* ######===--- Contar e imprimir un array ---===###### */
/* ##########================================########## */

$array_frutas = array("Manzana", "Pera", "Uva");

# Corta desde el indice (1) al (final).
array_slice($cursos_complejos, 1);
# Corta desde el indice (1) hasta el limite de (10) elementos.
array_slice($cursos_complejos, 1, 10);

# Permite imprimir un array, tambien imprime los arrays asosiativos.
print_r($array_frutas);

/* Imprimi el array y ademas el tipo de dato de cada uno de los elementos. */
var_dump($array_frutas);

/* ##########========================########## */
/* ######===--- Comparacion arrays ---===###### */
/* ##########========================########## */

$cursos = ['javascript', 'php'];
$requerimientos = ['php','laravel','javascript','vuejs'];

array_diff($requerimientos, $cursos);
# Devuelve la los elementos no encontrados dentro del otro array.

$array_a = [1,2,3,4,5];
$array_b = [3,4,5,6,7];

array_diff($array_a, $array_b);
# Devuelve la diferencia del primer array al segundo.

$cursos_complejos = [
	"frontend" => "javascript",
	"backend" => "php",
	"otro" => "java"
];

$cursos_complejos_1 = [
	"frontend" => "javascript",
	"backend" => "node js",
	"otro" => "python"
];

array_diff_assoc($cursos_complejos, $cursos_complejos_1);
// Compara los 'keys' y los 'values'.

/* ##########===================########## */
/* ######===--- Cortar arrays ---===###### */
/* ##########===================########## */

$arrFrutas = ["Manzana", "Pera", "Uva"];

/* Retorna un nuevo array, toma desde 'Pera' en adelante. */
$nuevo_array = array_slice($array_frutas, 1);

/* Retorna enforma de array la 'Manzana' y la 'Pera'. */
$nuevo_array = array_slice($array_frutas, 0, 2);

/* ##########=====================########## */
/* ######===--- Recorrer arrays ---===###### */
/* ##########=====================########## */

// ----------------------------------------------------- //
// ------ funciones (array_keys) y (array_values) ------ //
// ----------------------------------------------------- //

# Creamos un array complejo, (con 'keys' y 'values').
$array_complejo = [
	'frontend' => 'javascript',
	'framework' => 'laravel',
	'backend' => 'php'
];

# Recorre el array devolviendo las 'keys'.
array_keys($array_complejo);

# Recorre el array devolviendo los 'values'.
array_values($array_complejo);

// ---------------------------------- //
// ------ funcion (array_walk) ------ //
// ---------------------------------- //

$array_complejo = [
	'frontend' => 'javascript',
	'framework' => 'laravel',
	'backend' => 'php'
];

# Funcion que ayuda a recorrer el array
function recorrer($valor, $indice){
	echo "[$indice] => $valor<br>";
}

/**
 * Esta funcion permite recorrer el array: 
 * 	--- Recibe el array que se va a recorrer. 
 * 	--- Recibe la funcion que recibira los elementos del array. 
 */
array_walk($array_complejo, 'recorrer');

/* Da: 

	[frontend] => javascript
	[framework] => laravel
	[backend] => php */

// --------------------------------- //
// ------ funcion (array_map) ------ //
// --------------------------------- //

function cuadrado($numero){
	return ($numero * 2);
}

$arr_nums = array(10, 20, 30, 40, 50, 60, 70, 80, 90);

/* La funcion (array_map) recorre el array y retorna uno nuevo: 
		--- Funcion para alterar el array.
		--- El array con el que se va a trabajar. */
$arr_new_nums = array_map("cuadrado", $arr_nums);

/* Da: 

	Array
	(
	    [0] => 20
	    [1] => 40
	    [2] => 60
	    [3] => 80
	    [4] => 100
	    [5] => 120
	    [6] => 140
	    [7] => 160
	    [8] => 180
	) */

// ----------------------------------------------------- //

function sumar($numero, $numero_1){
	return ($numero + $numero_1);
}

$arr_nums = array(10, 20, 30, 40, 50, 60, 70, 80, 90);
$arr_nums_1 = array(3, 4, 5, 10, 15, 60, 7, 8.9, 10);

/* Aqui: 
		--- Recibe la funcion para alterar el array.
		--- Recibe el array con el que se va a trabajar.
		--- Recibe el otro array con el que tambien se va a trabajar. */
$arr_new_nums = array_map("sumar", $arr_nums, $arr_nums_1);

/* Da: 

	Array
	(
	    [0] => 13
	    [1] => 24
	    [2] => 35
	    [3] => 50
	    [4] => 65
	    [5] => 120
	    [6] => 77
	    [7] => 88.9
	    [8] => 100
	) */

// ----------------------------------------------------- //

$arr_nums = array(1, 2, 3);
$arr_nums_text = array("Uno", "Dos", "Tres", "cuatro", "cinco");

/* Sin funcion los arrays se conbinan de acuerdo al numero de campos que poseen. */
$new_arr = array_map(null, $arr_nums, $arr_nums_text);

/* Da: 

	Array
	(
	    [0] => Array
	        (
	            [0] => 1
	            [1] => Uno
	        )

	    [1] => Array
	        (
	            [0] => 2
	            [1] => Dos
	        )

	    [2] => Array
	        (
	            [0] => 3
	            [1] => Tres
	        )

	    [3] => Array
	        (
	            [0] => 
	            [1] => cuatro
	        )

	    [4] => Array
	        (
	            [0] => 
	            [1] => cinco
	        )

	) */

// ------------------------------- //
// ------ funcion (foreach) ------ //
// ------------------------------- //

$arr = array(35, "campo" => "valor", true);

/* Recorre un 'array' y devuelve el indice y el valor. */
foreach($arr as $indice => $valor){
	echo "[$indice] => $valor<br>";
}

/* Da: 

	[0] => 35
	[campo] => valor
	[1] => 1 */

// ------------------------------ //
// ------ funcion (reduce) ------ //
// ------------------------------ //

function myfunction($suma,$numero){
	return ($suma + $numero);
}

$array = array(10,15,20);

/* La funcion (array_reduce) recibe por parametro: 

	--- Por primer parametro recibe el 'array'.
	--- Por segundo parametro recibe la funcion anonima.
	--- Por tercer parametro recibe el numero, en este caso 
	comenzara en 0. */
array_reduce($array, "myfunction", 0); # 45

// ----------------------------------------------------- //

function myfunction($suma,$numero){
	return ($suma . $numero . "/");
}

$array = array(10,15,20);

// Al no darle el tercer parametro automaticamente la suma es un 'string'.
$suma = array_reduce($array, "myfunction");

echo $suma; # "10/15/20/"