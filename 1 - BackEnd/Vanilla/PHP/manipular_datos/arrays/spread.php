<?php

/* ##########==========================########## */
/* ######===--- El operador (spread) ---===###### */
/* ##########==========================########## */

# El operador spread descompone arrays.

// Copia de un array a otro.
$primer_array = ...$segundo_array;

/**
 * Spread permite la concatenacion de arrays.
 */

$frontend = ["javascript"];
$backend = ["php", "laravel"];

// El operador (spread) sirve para concatenar los arrays.
$lenguajes = [...$frontend, ...$backend]; # ['javascript', 'php', 'laravel']