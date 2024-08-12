/* ##########============================########## */
/* ######===--- Operadores aritmeticos ---===###### */
/* ##########============================########## */

SELECT (5 + 5);
-- Operador (+): Representa la suma.

SELECT CONCAT(5, '', "5");
-- Solo con la funcion (CONCAT) podemos concatenar strings.

SELECT (5 - 5);
-- Operador (-): Representa la resta.

SELECT (5 * 5);
-- Operador (*): Representa la multiplicacion.

SELECT (5 / 5);
SELECT (5 DIV 5);
-- Operador (/): Representa la division.

SELECT (5 % 5);
SELECT MOD(5,5);
-- Operador (%): Representa el modulo/residuo.

/* ##########========================########## */
/* ######===--- Operadores logicos ---===###### */
/* ##########========================########## */

WHERE `email` = 'brandon@gmail.com';
-- Operador (=): Igual que.

WHERE `email` != 'brandon@gmail.com';
WHERE `email` <> 'brandon@gmail.com';
-- Operador (<>/!=): No es igual que.

WHERE `saldo` < 100;
-- Operador (<): Menor que.

WHERE `saldo` > 100;
-- Operador (>): Mayor que.

WHERE `saldo` <= 100;
-- Operador (<=): Menor o igual que.

WHERE `saldo` >= 100;
-- Operador (>=): Mayor o igual que.

WHERE `edad` BETWEEN 18 AND 20;
-- Operador (BETWEEN): Marca entre un rango.

WHERE `nombres` LIKE 'Brandon Anthony%'; -- Que inicie con la palabra.
WHERE `nombres` LIKE '%Brandon Anthony'; -- Que finalice con la palabra.
WHERE `nombres` LIKE '%Brandon Anthony%'; -- Que contenga la palabra.
-- Operador (LIKE): Si contiene algun campo cierta expresion.

WHERE `edad` IN (20, 30);
-- Operador (IN): Que contenga uno delos posibles valores.

/* ---------------------------------- */
/* ------ Mas de una condicion ------ */
/* ---------------------------------- */

WHERE `nombres` = 'Brandon' AND `edad` = 22;
-- Operador (AND): Compara dos condiciones, las dos deben cumplirse.

WHERE `nombres` = 'Brandon' OR `edad` = 22;
-- Operador (OR): Compara dos condiciones, Solo una de ellas debe cumplirse.

WHERE NOT `nombres` = 'Brandon' AND NOT `edad` = 22;
-- Operador (NOT): Convierte el resultado de la condicion a su contraparte.