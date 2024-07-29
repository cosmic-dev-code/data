/* ##########==============================########## */
/* ######===--- Traer registros (HAVING) ---===###### */
/* ##########==============================########## */

WHERE COUNT(`id`)
-- La instruccion (WHERE) no permite utilizar funciones.

SELECT COUNT(`id`), `pais` FROM `usuarios` GROUP BY `pais` HAVING COUNT(`id`) > 5 ORDER BY COUNT(`id`) DESC;
-- (HAVING) hace lo mismo que (WHERE), pero permite utilizar funciones.

SELECT * FROM `usuarios` WHERE `nombre` LIKE '%Brandon%' 
GROUP BY `nombres` HAVING COUNT(`id`) > 100;
-- HAVING es lo mismo que WHERE pero permite utilizar funciones.

SELECT CONCAT(`names`, ' => ', COUNT(`names`)) AS `NamesCount` 
FROM `registers`
INNER JOIN `notes` ON `registers`.`id` = `notes`.`user_id` 
GROUP BY `notes`.`name`
HAVING COUNT(`names`) > 10;
/* 
Selecciona `columna` bajo el alias `NamesCount` 
de la tabla `registers` 
uniendo la tabla `notes` solo si `registers`.`id` es igual a `notes`.`user_id` 
ordenado en un grupo basandose en la columna `notes`.`name` 
solo si el total de todos los `names` es mayor a 10.
*/

SELECT `names` AS `nombres` FROM `registers` 
INNER JOIN `notes` ON `registers`.`id` = `notes`.`user_id` 
WHERE `names` = 'Brandon' OR `age` = 22 -- WHERE.
HAVING COUNT(`registers`.`id`) < 10; -- HAVING.
# Podemos utilizar (WHERE) Y (HAVING) en la misma instruccion.