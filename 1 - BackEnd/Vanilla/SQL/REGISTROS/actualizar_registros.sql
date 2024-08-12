CREATE TABLE `invitados`(
	`id_invitado` INT PRIMARY KEY AUTO_INCREMENT,
	`nombres` VARCHAR(50),
	`edad` INT(10),
	`correo` VARCHAR(50) DEFAULT 'mail@example.com'
);

-- REGISTROS -----------------------------------------
	--- id_invitado --- nombres --- edad --- correo ---
	---------------------------------------------------
	--- 1               Brandon 	  21		  brandon@gmail.com
	--- 2               Anthony 	  20		  anthony@gmail.com
	--- 3               Cosmic 	  19	 	  cosmic@gmail.com

/* ##########====================================########## */
/* ######===--- Actualizar todos los registros ---===###### */
/* ##########====================================########## */

/* El campo 'nombres' de todos los registron cambiaran al valor 'Nulo'. */
UPDATE `invitados` SET `nombres` = 'Nulo';

/* El campo 'nombre' y 'edad' de todos los registros tendran los valores ('Ningun nombre', '0'). */
UPDATE `invitados` SET `nombres` = 'Ningun nombre', `edad` = 0;

/* ##########==============================================########## */
/* ######===--- Actualizar registros especificos (WHERE) ---===###### */
/* ##########==============================================########## */

-- Todos los registros con el nombre 'Brandon' cambiaran a tener el nombre 'Ernesto'.
UPDATE `invitados` SET `nombres` = 'Ernesto' WHERE `nombres` = 'Brandon';

-- Solo el registro con el 'id 3' sera afectado en cuanto a sus campos.
UPDATE `invitados` SET `nombres` = 'Ernesto', `edad` = 19 WHERE `id_invitado` = 3;

/* ##########==========================================########## */
/* ######===--- Actualizar registros (WHERE) y (AND) ---===###### */
/* ##########==========================================########## */

/* Actualizamos el campo (correo) del registro solo si su nombre es (Anthony) y 
su edad es de 20. */
UPDATE `invitados` SET `correo` = 'anthony@gmail.com' 
WHERE `nombres` = 'Anthony' AND `edad` = 20;

/* Actualizamos los campos (nombres y edad) solo si el registro 
tiene una edad de (20) y el nombre es (Anthony). */
UPDATE `invitados` 
SET `nombres` = 'Segundo nombre', `edad` = 19 
WHERE `edad` = 20 AND `nombres` = 'Anthony';