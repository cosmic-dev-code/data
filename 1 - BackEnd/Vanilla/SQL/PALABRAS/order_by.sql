/* ##########================================########## */
/* ######===--- Traer registros (ORDER BY) ---===###### */
/* ##########================================########## */

SELECT * FROM `registros` ORDER BY `id_persona` ASC;
/* Trae todos los datos ordenados de manera 'ascendente', (de mayor a menor). */

SELECT * FROM `registros` ORDER BY `id_persona` DESC;
/* Trae todos los datos ordenados de manera 'descendente', (de menor a mayor). */

SELECT * FROM `registros` ORDER BY `names` DESC, `id` ASC;
-- Trae los nombres de manera descendente y el id de manera ascendente.

SELECT CONCAT(`id_persona`, ' => ', `nombres`) AS `id_nombre` FROM `registros` ORDER BY `id_persona` DESC;
/* Muestra algunos datos del registro concatenados de la tabla registro, pero 
solo muestra aquellos registros que se encuentren entre un rango de (10) y (20) en 
el campo (edad). */