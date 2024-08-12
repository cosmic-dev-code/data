<?php

/* ##########============================########## */
/* ######===--- Operadores aritmeticos ---===###### */
/* ##########============================########## */

$operacion = (5 + 5);
$operacion = (5 - 5);
$operacion = (5 * 5);
$operacion = (5 / 5);
$operacion = (5 % 5);

// Operador (^/**): Representa la exposicion.
$operacion = (5 ** 5);
$operacion = (5 ^ 5);

// (.), representa la concatenacion.
$operacion = (5 . "5"); // "55"

/* ##########========================########## */
/* ######===--- Operadores logicos ---===###### */
/* ##########========================########## */

(5 == 5);
(5 < 5);
(5 > 5);
(5 <= 5);
(5 >= 5);

// Diferente a.
(5 != 5);
(5 <> 5);

// ----------------------------- //
// ------ Comparar tipado ------ //
// ----------------------------- //

// Comparamos no solo los datos, sino tambien su tipado.
(5 === 5);
(5 !== 5);
(5 <== 5);
(5 >== 5);

// ---------------------------------- //
// ------ Mas de una condicion ------ //
// ---------------------------------- //

(5 === 5 && 5 > 10);
// Operador (&&): Compara dos condiciones, las dos deben cumplirse.

(5 === 5 || 5 > 10);
// Operador (||): Compara dos condiciones, Solo una de ellas debe cumplirse.

(! (5 === 5))
// Operador (!): Convierte el resultado de la condicion a su contraparte.

(5 == "5") // true
(5 === "5") // false