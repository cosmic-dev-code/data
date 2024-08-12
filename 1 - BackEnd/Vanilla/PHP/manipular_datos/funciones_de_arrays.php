<?php

/* ##########=======================########## */
/* ######===--- De array a string ---===###### */
/* ##########=======================########## */

$arr = array("Hola", true, 35);

/* La funcion (implode) permite convertir un 'array' 
a una cadena de texto: 
	--- El primer parametro recibe el separador de los elementos de la cadena.
	--- El segundo parametro es el 'array' el cual se ha de convertir. */
$str = implode(", ", $arr); // Da: Hola, true, 35.

$str = implode(" ", $arr); // Da: Hola true 35.

$str = implode("", $arr); // Da: Holatrue35.

// ------------------------------------------ //
// ------ Convertir variables a arrays ------ //
// ------------------------------------------ //

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

// ------------------------------------------- //
// ------ Convertir arrays a variables  ------ //
// ------------------------------------------- //

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

// ----------------------------------------- //
// ------ Convertir arrays complejos  ------ //
// ----------------------------------------- //

# En un array complejo, los 'values' pasan a ser 'keys' y los 'keys' 
# pasan a ser 'values'.
array_flip($cursos_complejos);

/* ##########==================================########## */
/* ######===--- Eliminar o agregar elementos ---===###### */
/* ##########==================================########## */

// ------------------------------- //
// ------ Agregar elementos ------ //
// ------------------------------- //

array_push($cursos_complejos, "Otro");
# Agrega un nuevo elemento al final.

// -------------------------------- //
// ------ Eliminar elementos ------ //
// -------------------------------- //

array_pop($cursos);
# Elimina el ultimo elemento y lo retorna.

array_shift($cursos);
# Elimina el primer elemento y lo retorna.

array_unshift($cursos, "nuevoPrimerElemento");
# Reemplaza el primer elemento y retorna la cantidad de elementos.

/* ##########=========================########## */
/* ######===--- Manipular elementos ---===###### */
/* ##########=========================########## */

$array_prueba = array("Amigo", "Tornado", "Musica");

sort($array_prueba); # Ordena los arrays por orden alfabetico.
rsort($array_prueba); # Ordena los arrays por orden alfabetico en reversa.

$array_frutas_verduras = array(
	"valor0" => "Manzana",
    "otro_valor" => "Pera",
    "mas_valores" => "Naranja",
    "fruta_verdura" => "A_comer"
);

asort($array_frutas_verduras); # Se ordena en orden alfabetico de acuerdo al valor y no al elemento.

$valores = array("valor_0" => 35,"my_valor" => 37,"new_valor" => 43);

foreach ($valores as $key => $value) {
	echo "<div>El valor perteneciente al elemento $key es: $value.</div>";
}

ksort($valores); # Se ordenan alfabeticamente de acuerdo al elemento y no a valor.

# Ordena los arrays alfabeticamente en reversa, de acuerdo con el valor.
arsort($array_frutas_verduras);

# Ordena los arrays alfabeticamente en reversa, de acuerdo con el elemento.
krsort($array_frutas_verduras);

# Los ordena en reversa.
array_reverse($array_frutas);

# Los elementos se organizan con tabulacion.
array_chunk($cursos_complejos, 2);

# Los elementos se organizan con tabulacion de uno en uno, 'key' y su 'value'.
array_chunk($cursos_complejos, 1);

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

var_dump($frontend + $backend);
# Se concatena, pero el indice 0 se sobreescribe.

var_dump($cursos_complejos + $cursos_complejos_1);
# Aqui si funciona.

array_merge($frontend, $backend); 
/* Se concatenan correctamente sin importar que un indice 
tenga el mismo nombre, por lo que no se sobreescriben. 
Pero solo funciona con indices numericos. */

array_merge_recursive($frontend, $backend);
# Funciona con indices de tipo 'string'.

$categorias = ['frontend', 'backend', 'framework'];

array_combine($categorias, $cursos);
# Los arrays se conbinan, el primer array pasa a ser los 'keys'.
# El segundo array pasa a ser los 'values'.

// El operador (spread) sirve para concatenar los arrays.
$lenguajes = [...$frontend, ...$backend]; # ['javascript', 'php', 'laravel']

$lenguajes = [...$frontend, "php"]; # ['javascript', 'php']

/* ##########================================########## */
/* ######===--- Contar e imprimir un array ---===###### */
/* ##########================================########## */

$array_frutas = array("Manzana", "Pera", "Uva");

array_slice($cursos_complejos, 1);
# Comenzamos el array desde el elemento 1 y quitamos el indice 0.

print_r($array_frutas);
# (Print_r) permite imprimir un array, tambien imprime los arrays asosiativos.

var_dump($array_frutas);
/* Imprimi el array y ademas el tipo de dato de cada uno de los elementos. */

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
 * 	--- El primer parametro recibe el array que se va a recorrer. 
 * 	--- El segundo array recibe la funcion que recibira por 
 * parametros los elementos del array. 
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
		--- Primero recibe la funcion para alterar el array.
		--- El segundo parametro recibe el array con el que se va a trabajar. */
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
		--- Primero recibe la funcion para alterar el array.
		--- El segundo parametro recibe el array con el que se va a trabajar.
		--- El tercer parametro recibe el otro array con el que tambien se va a trabajar. */
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
$suma = array_reduce($array, "myfunction", 0);
// Da: 45.

// ----------------------------------------------------- //

function myfunction($suma,$numero){
	return ($suma . $numero . "/");
}

$array = array(10,15,20);

// Al no darle el tercer parametro automaticamente la suma es un 'string'.
$suma = array_reduce($array, "myfunction");

echo $suma;
// Da: 10/15/20/.