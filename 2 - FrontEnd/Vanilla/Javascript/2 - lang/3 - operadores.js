"use strict";

/* ##########============================########## */
/* ######===--- Operadores aritmeticos ---===###### */
/* ##########============================########## */

operacion = (5 + 5);
operacion = (5 - 5);
operacion = (5 * 5);
operacion = (5 / 5);
operacion = (5 % 5);

// Operador (^): Representa la exposicion.
operacion = (5 ^ 5);

// Concatenacion.
operacion = (5 + "5"); // "55"

/* ##########========================########## */
/* ######===--- Operadores logicos ---===###### */
/* ##########========================########## */

bool = (5 == 5);
bool = (5 < 5);
bool = (5 <= 5);
bool = (5 > 5);
bool = (5 >= 5);

// Diferente a.
bool = (5 != 5);
bool = (5 <> 5);

// ----------------------------- //
// ------ Comparar tipado ------ //
// ----------------------------- //

// Comparamos no solo los datos, sino tambien su tipado.
bool = (5 === 5);
bool = (5 !== 5);
bool = (5 <== 5);
bool = (5 >== 5);

bool = (5 === "5") // false
bool = (5 === 5) // true

// ---------------------------------- //
// ------ Mas de una condicion ------ //
// ---------------------------------- //

// (And) == (&&).
bool = (5 === 5 && 5 > 10);

// (Or) == (||).
bool = (5 === 5 || 5 > 10);

// (Not) == (!).
bool = (! (5 === 5));