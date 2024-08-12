# La palabra reservada (where) permite ejecutar una instruccion solo si la condicion es verdadera.

/* ##########========================########## */
/* ######===--- La palabra (WHERE) ---===###### */
/* ##########========================########## */

/* Trae (todo) de los registros cuyo (id) sea igual a 1. */
SELECT * FROM `registros` WHERE `id` = 1;

/* Trae (todo) de los registros cuyo (id) sea igual a 1 y (nombres) sea igual a 'Brandon'. */
SELECT * FROM `registros` WHERE `id` = 1 AND `names` = 'Brandon';

/* Trae (todo) de solo un registro cuyo (id) sea igual a 1 y (nombres) sea igual a 'Brandon'. */
SELECT * FROM `registros` WHERE `id` = 1 AND `names` = 'Brandon' LIMIT 1;

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
FROM `registros` WHERE `edad` BETWEEN 10 AND 21;
-- Operador (BETWEEN): Marca entre un rango.

WHERE `nombres` LIKE 'Brandon Anthony%'; -- Que inicie con la palabra.
WHERE `nombres` LIKE '%Brandon Anthony'; -- Que finalice con la palabra.
WHERE `nombres` LIKE '%Brandon Anthony%'; -- Que contenga la palabra.
-- Operador (LIKE): Si contiene algun campo cierta expresion.

WHERE `edad` IN (20, 30);
WHERE `name` IN ('Brandon', 'Anthony', 'Cosmic');
-- Operador (IN): Que contenga uno delos posibles valores.

/* ---------------------------------- */
/* ------ Mas de una condicion ------ */
/* ---------------------------------- */

WHERE `nombres` = 'Brandon' AND `edad` = 22;
-- Operador (AND): Compara dos condiciones, las dos deben cumplirse.

WHERE `nombres` = 'Brandon' OR `edad` = 22;
-- Operador (OR): Compara dos condiciones, Solo una de ellas debe cumplirse.

WHERE NOT `nombres` = 'Brandon' AND NOT `edad` = 22;
WHERE `name` IN ('Brandon', 'Anthony', 'Cosmic') AND NOT `user_id` = 1;
-- Operador (NOT): Convierte el resultado de la condicion a su contraparte.