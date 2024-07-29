/* ##########=================########## */
/* ######===--- Comentarios ---===###### */
/* ##########=================########## */

/* Comentarios 
en mas de un 
bloque. */

-- Comentario en linea.

# Otro comentario en linea.

/* ##########======================########## */
/* ######===--- Condiciones (IF) ---===###### */
/* ##########======================########## */

-- La funcion (IF) valida una condicion y realiza una accion, 
-- los parametros que recibe son: 
	-- La condicion.
	-- Lo que devuelve en caso de que la condicion sea (verdadera).
	-- Lo que devuelve en caso de que la condicion sea (falsa).
SELECT IF(600<1000, "Menor", "Mayor");

-- Compara si algo no existe.
CREATE TABLE IF NOT EXISTS `tabla`;

-- Compara si algo existe.
DROP TABLE IF EXISTS `tabla`;

/* ##########===================########## */
/* ######===--- Valores nulos ---===###### */
/* ##########===================########## */

SELECT * FROM `usuarios` WHERE `columna` IS NUll;
-- Verifivca si el campo es nulo.

SELECT * FROM `usuarios` WHERE `columna` NOT IS NUll;
-- Solo si el campo no es nulo.

/* ##########=========================########## */
/* ######===--- La palabra (EXISTS) ---===###### */
/* ##########=========================########## */

SELECT * FROM `usuarios` WHERE EXISTS (SELECT `nombre` FROM `usuarios`);
-- (EXISTS) verifica si algo existe, devuelve TRUE o FALSE.

SELECT * FROM `usuarios` WHERE EXISTS (SELECT * FROM `usuarios` WHERE `usuarios`.`id` = `notas`.`user_id`);
-- Podemos colocar dentro de la condicion (EXISTS) condiciones "anidadas".

SELECT * FROM `usuarios` WHERE EXISTS (SELECT `nombre` FROM `categories`);
-- (EXISTS) verifica que la sentencia sea (verdadera).

/* ##########===============================########## */
/* ######===--- La palabra (ANY) y (SOME) ---===###### */
/* ##########===============================########## */

SELECT * FROM `usuarios` WHERE 
ANY (SELECT * FROM `cuentas` WHERE `deuda` > 10);
/* (ANY) da "verdadero" si solo uno de los campos `deuda` de la tabla `cuentas` es mayor a 10.

NOTA: (ANY) devuelve TRUE si alguno de los valores de la subconsulta cumple la condición. */

SELECT * FROM `registers` 
WHERE `id` = ANY (SELECT `id` FROM `registers` WHERE `id` = 10);
-- Podemos utilizar el resultado que (ANY) devuelva para una validacion.

SELECT * FROM `registers`
WHERE `registers`.`id` = SOME (SELECT `registers`.`id` FROM `registers` WHERE `registers`.`id` = 10);
# (SOME) hace lo mismo que (ANY).

/* ##########======================########## */
/* ######===--- La palabra (ALL) ---===###### */
/* ##########======================########## */

SELECT * FROM `usuarios` WHERE 
ALL (SELECT * FROM `cuentas` WHERE `deuda` > 10);
/* (ALL) da "verdadero" si todos los campos `deuda` de la tabla `cuentas` son mayor a 10.

NOTA: (ALL) devuelve TRUE si todos de los valores de la subconsulta cumple la condición.
(SELECT) se usa con declaraciones (WHERE) y (HAVING) */

SELECT * FROM `registers` 
WHERE `id` = ALL (SELECT `id` FROM `registers` WHERE `id` = 10);
-- Podemos utilizar el resultado que (ALL) devuelva para una validacion.

/* ##########==============================########## */
/* ######===--- (Funciones) para validar ---===###### */
/* ##########==============================########## */

SELECT IFNULL(`precio`, 0) FROM `users`;
SELECT COALESCE(`precio`, 0) FROM `users`;
-- La funcion (IFNULL) y (COALESCE) permiten verificar si algo es null, de serlo devuelve 
-- un valor alternativo.