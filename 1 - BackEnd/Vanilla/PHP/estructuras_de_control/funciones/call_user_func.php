<?php

/* ##########==============================########## */
/* ######===--- funcion (call_user_func) ---===###### */
/* ##########==============================########## */

// ------------------------- //
// ------ Llamamiento ------ //
// ------------------------- //

function funcion(){
	// ...
}

// Usando (call_user_func) para llamar a la función.
call_user_func('funcion');

// ------------------------ //
// ------ Parametros ------ //
// ------------------------ //

function saludar($nombre) {
    echo "¡Hola, $nombre!";
}

// Pasando un (parámetro).
call_user_func('saludar', 'Juan');

// ------------------- //
// ------ Clase ------ //
// ------------------- //

class MiClase {
    public function __invoke() {
        echo "¡Hola desde __invoke!";
    }
}

$objeto = new MiClase();

// Verificar si el objeto es callable
if (is_callable($objeto)) {
    $objeto();  // Llamar al método __invoke
} else {
    echo "El objeto no es callable.";
}

// --------------------- //
// ------ Metodos ------ //
// --------------------- //

class MiClase {
    public function miMetodo() {
        echo "¡Hola desde miMetodo!";
    }
}

$objeto = new MiClase();

// Usando call_user_func con un método de clase
call_user_func([$objeto, 'miMetodo']);

// -------------------------------- //
// ------ Funciones anonimas ------ //
// -------------------------------- //

$miFuncion = function($nombre) {
    echo "¡Hola, $nombre!";
};

// Usando call_user_func con una función anónima
call_user_func($miFuncion, 'Carlos');