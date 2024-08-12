/* ##########===============================########## */
/* ######===--- Traer registros con (ANY) ---===###### */
/* ##########===============================########## */

SELECT `nombres` FROM `usuarios` 
WHERE `id` = ANY (SELECT `fk_usuario` FROM `ordenes` WHERE `cantidad` = 10)
/* La instruccion sql enumera los nombres del usuario solo si cualquier registro de la tabla 
(ordenes) tiene una cantidad de 10. */