<?php

/* ##########================########## */
/* ######===--- Sin tipado ---===###### */
/* ##########================########## */

/**
 * Variables sin tipado.
 * 
 * Aqui las variables no tienen un tipado definido, sino que pueden adquirir cualquier 
 * valor de manera dinamica.
 */

$variable = 50; // int
$variable = true; // bool.
$variable = 5.555; // float.
$variable = new Usuario(); // Usuario

/* ##########=====================########## */
/* ######===--- Tipado opcional ---===###### */
/* ##########=====================########## */

/**
 * Tambien tenemos tipado en las ultimas versiones de PHP.
 */

(int) $variable = 50;
(bool) $variable = true;
(float) $variable = 5.555;
(object) $variable = new Usuario();

/**
 * NOTA: Apesar de que existe el tipado, (este no es obligatorio).
 */

/* ##########===========########## */
/* ######===--- Scope ---===###### */
/* ##########===========########## */

// -------------------- //
// ------ Global ------ //
// -------------------- //

# Al ser declarada fuera, dentro de este archivo, (es global).
# Accesible para todas las funciones y demas.
$variable_global = 70;

/**
 * Utilizando ($GLOBALS).
 */

function crear_global(){
	// Variable global para todos los archivos PHP.
	$GLOBALS["nombre"] = "valor";
}
crear_global();

// Utilizamos la variable global declarada aun dentro de la funcion.
printf("%s", $GLOBALS["nombre"]);

// --------------------- //
// ------ Locales ------ //
// --------------------- //

# Varible global, pero la funcion no tiene acceso a ella.
$local = true;

function funcion(){
	// Variable (local) solo existente en este bloque de codigo.
	$variable_local = "valor";
}

// ------------------------------------ //
// ------ Estáticas en funciones ------ //
// ------------------------------------ //

function staticExample() {
	// Ámbito estático de función.
    static $staticVariable = 0;

    $staticVariable++;
    
    echo $staticVariable;
}

staticExample(); // Imprime 1
staticExample(); // Imprime 2

// ----------------------- //
// ------ (Closure) ------ //
// ----------------------- //

$outsideVar = 5;

/* La palabra reservada (use) se utiliza cuando se quiere que la funcion anonima acceda a una 
variable global que no esta dentro de su ambito, a esto se le conoce como (Closure). */
$myClosure = function () use ($outsideVar) {
	// Acceso a variable externa.
    echo $outsideVar;
};

$myClosure();

###### ---------------------------------------------------------------------------------------------- ######

// Otra forma de acceder a las variables locales.

$local = ["dato"];

function my_function(){
	// Accede a la variable que se encuentra fuera de ella.
	global $local[0];
}

/* ##########================########## */
/* ######===--- Constantes ---===###### */
/* ##########================########## */

// De esta manera se declaran las constantes.
const constante = 50;
define("constante", 50);

/* ##########=================########## */
/* ######===--- Referencias ---===###### */
/* ##########=================########## */

// --------------------------------- //
// ------ Referencia con ($$) ------ //
// --------------------------------- //

$variable = "Hola mundo.";
$segunda_variable = "Hola amigos";

echo $$variable; # "Hola amigos"

/**
 * Esto sucede porque al poner el doble signo '$$' se hace referencia a la segunda variable.
 */

// -------------------------------- //
// ------ Referencia con (&) ------ //
// -------------------------------- //

/**
 * (&) guarda como referencia una variable en otra.
 */

# Valor inicial para ($var) de 80.
$var = 80;

# Guarda la referencia.
$ref_var = &$var;

# Ahora el valor de ($var) es de 50.
$ref_var = 50;