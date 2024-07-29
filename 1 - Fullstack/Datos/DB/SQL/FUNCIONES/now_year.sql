/* ##########==================########## */
/* ######===--- Poder en uso ---===###### */
/* ##########==================########## */

CREATE TABLE `usuarios`(
	`id_usuario` INTEGER UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'Llave primaria del usuario', 
	`nombre` VARCHAR(255) DEFAULT '' NULL, 
	`edad` INT(3) UNSIGNED DEFAULT 0 NULL, 
	`fecha_de_nacimiento` DATE DEFAULT NOW(),
	-- Podemos usar la funcion (NOW) para asignaciones.
	PRIMARY KEY(`id_usuario`)
);

-- Podemos insertar este tipo de dato.
INSERT INTO `usuarios`(`fecha_de_nacimiento`) VALUES (NOW());

/* Podemos hacer cosas como estas, traer los nombres de los usuarios 
calculando sus edades. */
SELECT `nombre`, YEAR(NOW()) - YEAR(`fecha_de_nacimiento`) FROM `usuarios`;