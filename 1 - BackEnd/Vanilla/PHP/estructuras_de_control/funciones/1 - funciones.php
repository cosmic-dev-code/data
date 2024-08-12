<?php

/* ##########==================================########## */
/* ######===--- Declaracion e inicializacion ---===###### */
/* ##########==================================########## */

// Las funciones declaradas con la palabra reservada (function) se guardan en (pila).
// Las anonimas no se guardan en pila.
function funcion(){
	// ...
}

// Funcion (anonima).
// Esta funcion no se guarda en pila, sino por (declaracion comun).
$function = function(){
	// ...
};

// ------------------------- //
// ------ Llamamiento ------ //
// ------------------------- //

// Las funciones pueden mandar a llamar otras dentro de si mismas.
function funcion(){
	funcionUno();
	funcionDos();
}

funcion();

// ----------------------- //
// ------ Anidacion ------ //
// ----------------------- //

// Pueden haber funciones dentro de funciones y llamarse entre si.
function funcion(){
	$anidadaUno = function(){
		// ...
	};
	function anidadaDos(){
		// ...
	}

	anidadaUno();
	anidadaDos();
}

funcion();

/* ##########================########## */
/* ######===--- Parametros ---===###### */
/* ##########================########## */

// Aqui podemos tener tipado.
function decir_nombre($nombre, int $edad){
	// Recibimos los parametros y los imprimimos.
	printf("%s tiene una edad de: (%d).", $nombre, $edad);
}

decir_nombre("Brandon", 21);

// Funcion anonima.
$my_function = function(int $numero):void{
	for($i = 0; $i < $numero; $i++){
		printf("<div>Numero: %d hasta %d</div>", $i, $numero);
	}
};

$my_function(30);

// ------------------------------------- //
// ------ Valores predeterminados ------ //
// ------------------------------------- //

// Recibimos valores predefinidos.
$informacion = function(string $nombre = "Ninguno", int $edad = 21){
	echo("El usuario {$nombre} tiene la edad de: ".$edad);
};

// En este caso el segundo argumento ya lo toma por defecto como (21).
$informacion("Brandon");

// ----------------------------- //
// ------ Tipado opcional ------ //
// ----------------------------- //

// (?), indica que se recibe una propiedad de tipo (string o null).
function funcion(?string $name){
	// ...
}

// (?), indica que se puede retornar un dato de tipo (string o null).
function get_name():?string{
	return null;
}

// -------------------- //
// ------ Arrays ------ //
// -------------------- //

// Un arreglo (opcional).
$sumar = function(array $array = array()):void{ 
	$suma = 0;
	
	foreach($array as $indice => $valor){
		$suma += $valor;
	}

	echo("La suma es: ".$suma);
};

// Podemos pasarle un array y este sumara cada uno de sus valores.
$sumar([5,5,5]);
$sumar([
	10, 20, 5, 2, 1, 10
]);

/**
 * Otros parametros.
 */
$mostrar_usuarios = function(array $arr_usuarios = [], string $mensaje = "No hay mas usuarios"){

	printf("<div><strong>%s</strong></div>", $mensaje);
    
    for($i = 0; $i < count($arr_usuarios); $i++){
    	echo("<div>{$arr_usuarios[$i]}</div>");
    }

};

$mostrar_usuarios([
	"Brandon", "Anthony", "Cosmic"
]);

$mostrar_usuarios(
	["Brandon", "Anthony", "Cosmic"], 
	"Son todos los usuarios por ahora."
);

// --------------------- //
// ------ Objetos ------ //
// --------------------- //

function obtener($usuario){
	// Aqui podemos recivir cualquier tipo de dato.
}

function objeto(object $objeto){
	// Especifica que debe recibir un objeto, (sin importar el tipo de objeto que sea).
}

function obtener_typado(Usuario $usuario){
	// Aqui se declara que el parametro debe ser una instancia de la clase (Usuario).
}

/* ##########======================########## */
/* ######===--- Retorno de datos ---===###### */
/* ##########======================########## */

function suma(int $numero_0 = 0, int $numero_1 = 0){
	return ($numero_0 + $numero_1);
}

// Podemos pasar algunos parametros ya definidos y trabajar con ellos.
$to_fixed = function(float $numero = 0.000, int $decimales = 0){
	$num_texto = ((string) $numero);
	$num_final = "";
	$decimales++;

	if(str_contains($num_texto, ".")){
		$posicion = strpos($num_texto, ".")+$decimales;
		$num_final = substr($num_texto, 0, $posicion);
	}else{
		return 0;
	}
	return ((float) $num_final);
};

$to_fixed(5.553252525425,3); // 5.553
$to_fixed(); // 0
$to_fixed(555.555); // 555

// -------------------- //
// ------ Arrays ------ //
// -------------------- //

$etiquetar_usuarios = function($arr_usuarios = []){
	$etiquetados = [];

	foreach($arr_usuarios as $indice => $key){
		array_push($etiquetados, "(Usuario => {$key})");
	}

	// Retornamos el array nuevo.
	return $etiquetados;
};

$etiquetar_usuarios(array(
	"nombre_0" => "Brandon", 
	"nombre_1" => "Anthony", 
	"nombre_2" => "Cosmic"
));

// ----------------------- //
// ------ Funciones ------ //
// ----------------------- //

function obtener(){
	return function(){
		echo "Hola mundo";
	};
}

// Guardar la funcion devuelta de forma anonima e invocarla.
$funcion = obtener(); $funcion();

// Invocarla directamente.
obtener()();

###### ------------------------------------------------------------------------------- ######

function obtener(callback){
	return callback();
}

// Se recibe la funcion anonima.
obtener(function(){
	// Se retorna otra funcion.
	return function(){
		echo "Hola mundo";
	};

// Se manda a llamar la funcion retornada, ().
})();

// --------------------- //
// ------ Objetos ------ //
// --------------------- //

// Puede devolver cualquier tipo de dato.
function sinEspecificar(){
	return [
		new Unknown(), 
		new Usuario()
	];
}

// Especifica que puede retornar cualquier objeto.
function retornar():object{
	return new Unknown();
}

// Retorna un tipado especifico.
function retornar_usuario():Usuario{
	return new Usuario();
}

/* ##########==============================########## */
/* ######===--- Referencias de variables ---===###### */
/* ##########==============================########## */

$cursos = 'PHP';

# Con el '&' hace referencia a la otra variable que se encuentra fuera.
function path(&$cursos){
	$cursos = 'Laravel';
	echo $cursos;
}

# Ambos terminan imprimiendo 'Laravel'.
path($cursos);
echo $cursos;

// -------------------------------- //
// ------ Varialbes globales ------ //
// -------------------------------- //

$variable_global = true;

function funcion(){
	// De esta manera puede acceder a las variables fuera de ella.
	global $variable_global;
}

/* ##########==================########## */
/* ######===--- Recursividad ---===###### */
/* ##########==================########## */

# Creamos una variable global para llevar el conteo.
$GLOBALS['numero'] = 0;


function recursividad($cadena = "", $numero = 0){
	// Cuando la condicion se cumple finaliza.
	if($GLOBALS['numero'] >= $numero){
		echo "<b>fin</b>";
		return false;
	}else{
		$GLOBALS['numero']++;
		print $GLOBALS['numero'];

		// Se llama a si misma.
		recursividad($cadena, $numero);
	}
}

recursividad("El numero es: ", 10);
/**
 * El numero es: 1
 * El numero es: 2
 * El numero es: 3
 * El numero es: 4
 * El numero es: 5
 * El numero es: 6
 * El numero es: 7
 * El numero es: 8
 * El numero es: 9
 * El numero es: 10
 * Bucle finalizado.
 */

/* ##########==============########## */
/* ######===--- Callback ---===###### */
/* ##########==============########## */

/**
 * NOTA: Las funciones pueden aceptar (funciones anonimas) por (callbacks).
 */

// Recibe un (callback) que retorna algo y ese algo se valida dentro.

function sumar(int $numero_0 = 0, int $numero_1 = 0):int{
	return ($numero_0 + $numero_1);
}

$llamar = function($callback):bool{
	if($callback() > 10) return true;
	else return false;
}

// Llmamiento de la funcion y sus (callbacks).
$llamar(function(){
	return sumar(5, 5);
});

// -------------------------------------------- //
// ------ La palabra reservada (Closure) ------ //
// -------------------------------------------- //

# 'Closure' hace que forsozamente se pase una funcion anonima.
function greet(Closure $lang, $name){
	return $lang($name);
}

$es = function($name){
	return "Hola, $name";
};

$en = function(string $name):string{
	return "Hello, $name";
};

echo greet($es, "Lynda");