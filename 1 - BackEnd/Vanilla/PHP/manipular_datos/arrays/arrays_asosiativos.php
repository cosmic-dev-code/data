<?php

/* ##########======================########## */
/* ######===--- Array asosiativo ---===###### */
/* ##########======================########## */

$types = [
    "uno" => "js", 
    "dos" => "php", 
    "tres" => "cpp"
];

$types["uno"]; # "js"

// ------------------------- //
// ------ Anidaciones ------ //
// ------------------------- //

$array = array(
    "nombres" => ["Brandon", "Anthony", "Olivares", "Amador"], 
    "usuarios" => array(
        "Brandon" => 22, 
        "Anthony" => 20, 
        "Cosmic" => 19
    )
);

$array["nombres"][0]; # "Brandon"

$array["usuarios"]["Brandon"]; # 22

# Cambio de valor.
$array["usuarios"]["Cosmic"] = 15;

// -------------------------- //
// ------ Iterar array ------ //
// -------------------------- //

# Se iteran con un (foreach).

$edades = array(
    "Marcos" => 34, 
    "Pedro" => 85, 
    "Tania" => 23
);

foreach($edades as $key => $value){
    // Nombre.
    $key;
    // Valor.
    $value;
}

###### -------------------------------------------------------------------------------------- ######

$elements = [
    "administradores" => array(
        "Brandon", "Anthony"
    ), 
    "usuarios" => array(
        "Brandon", "Anthony", "Cosmic"
    )
];

foreach($elements as $personas){
    foreach($personas as $persona){
        // ...
    }
}

/* Da: 
    Nombre: Brandon
    Nombre: Anthony
    Nombre: Brandon
    Nombre: Anthony
    Nombre: Cosmic
*/