CREATE TABLE `usuarios`(
	`id_usuario` INT PRIMARY KEY AUTO_INCREMENT,
	`nombres` VARCHAR(50),
	`edad` INT(10),
	`correo` VARCHAR(50) DEFAULT 'mail@example.com'
);

-- REGISTROS -----------------------------------------
	--- id_usuario --- nombres --- edad --- correo ---
	---------------------------------------------------
	--- 1               Brandon 	21		 brandon@gmail.com
	--- 2               Anthony		20		 anthony@gmail.com
	--- 3               Cosmic 		19	 	 cosmic@gmail.com

/* ##########==================================########## */
/* ######===--- Eliminar todos los registros ---===###### */
/* ##########==================================########## */

-- Elimina todos los registros de la tabla.
DELETE FROM `usuarios`;

-- Elimina todos los datos de la tabla.
TRUNCATE TABLE `usuarios`;

/* ##########============================================########## */
/* ######===--- Eliminar registros especificos (WHERE) ---===###### */
/* ##########============================================########## */

-- Elimina el registro que tenga el 'id' 2.
DELETE FROM `usuarios` WHERE `id_usuario` = 2;

-- Todos los registros con el nombre 'Brandon' se eliminaran.
DELETE FROM `usuarios` WHERE `nombres` = 'Brandon';

-- Elimina el registro con el 'id 3'.
DELETE FROM `usuarios` WHERE `id_invitado` = 3;

/* ##########========================================########## */
/* ######===--- Eliminar registros (WHERE) y (AND) ---===###### */
/* ##########========================================########## */

/* Elimina los registros que tengan el nombre (Anthony) y edad (20). */
DELETE FROM `usuarios` WHERE `nombres` = 'Anthony' AND `edad` = 20;