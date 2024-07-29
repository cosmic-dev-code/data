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

$array = array(10, "Brandon Anthony", false);

foreach($array as $valor){
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

(int) $i = 0;

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