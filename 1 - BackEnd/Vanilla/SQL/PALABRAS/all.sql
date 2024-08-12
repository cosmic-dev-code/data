/* ##########===============================########## */
/* ######===--- Traer registros con (ALL) ---===###### */
/* ##########===============================########## */

SELECT ALL `nombres` FROM `usuarios` WHERE TRUE;
-- Enumera TODOS los nombres de productos.

SELECT `nombres` FROM `usuarios` 
WHERE `id` = ALL (SELECT `fk_usuario` FROM `ordenes` WHERE `cantidad` = 10)
/* La instruccion sql enumera los nombres del usuario solo si todos los registros de la tabla 
(ordenes) tienen una cantidad de 10. */