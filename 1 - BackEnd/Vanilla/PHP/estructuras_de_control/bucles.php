<?php

/* ##########=================########## */
/* ######===--- Bucle (for) ---===###### */
/* ##########=================########## */

// Bucle for de toda la vida.

for($i = 0; $i < count($array); $i++){
    ?>
        <p><?php echo $i; ?></p>
    <?php
}

// ---------------------------------- //
// ------ (break) y (continue) ------ //
// ---------------------------------- //

for($i = 0; $i < 100; $i++){
    # Romper bucle.
    if($i === 50) break;
    # Salta a la siguiente iteracion.
    if($i % 2) continue;
}

/* ##########=====================########## */
/* ######===--- Bucle (foreach) ---===###### */
/* ##########=====================########## */

# ---------------------------- #
# ------ Uso de (range) ------ #
# ---------------------------- #

// Genera un array de números: 0, 1, 2, 3, 4
foreach (range(0, 4) as $i) {
    echo $i;
}

// Genera un array de números desde 2 hasta 4
foreach (range(2, 4) as $i) {
    echo $i;
}

// Genera un array de números desde 0 hasta 8, con un paso de 2
foreach (range(0, 8, 2) as $i) {
    echo $i;
}

# --------------------- #
# ------ foreach ------ #
# --------------------- #

$array = array(10, "Brandon Anthony", false);

foreach($array as $valor){
    // ...
}

foreach($array as $indice => $valor){
    // ...
}

// Iterando un array asosiativo.

$assoc = array(
   "Brandon" => 23, 
   "Anthony" => 20, 
   "Cosmic" => 19
);

foreach($assoc as $nombre => $edad){
    echo <<<HTML
        <p><b>{$nombre}</b>: {$edad}</p>
    HTML;
}

/* ##########===================########## */
/* ######===--- Bucle (while) ---===###### */
/* ##########===================########## */

// Buble (while) con incrementacion de toda la vida.
$i = 0;
while($i > 10){
    $i += 1;
}

// Mientras el numero random no sea 5.
while(rand(1,10) != 5) print "<p>Hola</p>";

/* ##########======================########## */
/* ######===--- Bucle (do while) ---===###### */
/* ##########======================########## */

$i = 0;

do{
    $i += 1;

    // Primero ejecuta, luego evalua la condicion.

}while($i <= 10);