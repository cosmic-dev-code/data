CREATE TABLE `usuarios`(
	`id_usuario` INT PRIMARY KEY AUTO_INCREMENT,
	`nombres` VARCHAR(50),
	`edad` INT(10),
	`correo` VARCHAR(50) DEFAULT 'mail@example.com'
);

/* ##########=======================########## */
/* ######===--- Insertar registro ---===###### */
/* ##########=======================########## */

/* Seleccionamos la tabla a la cual le queremos insertar los datos, 
en este caso la tabla (usuarios), luego colocamos los campos que 
vamos a insertar, en este caso (nombres, edad y correo). 

Despues con la palabra reservada (VALUES) colocamos entre 
parentesis () los valores que vamos a insertar en los 
campos.*/

INSERT INTO `usuarios`(`nombres`, `edad`, `correo`) VALUES ('Brandon', 21, 'brandon@gmail.com');

/* ##########==================================########## */
/* ######===--- Insertar multiples registros ---===###### */
/* ##########==================================########## */

/* Despues de la palabra reservada (VALUES) (datos), podemos insertar mas 
registros con solo coloar una , luego de cada parentesis (). */

INSERT INTO `usuarios`(`nombres`, `edad`, `correo`) 
VALUES 
	('Brandon', 21, 'brandon@gmail.com'), 
	('anthony', 20, 'anthony@gmail.com'), 
	('Cosmic', 19, 'cosmic@gmail.com');

/* ##########=======================================########## */
/* ######===--- Copiar datos (INSERT INTO SELECT) ---===###### */
/* ##########=======================================########## */

# (INSERT INTO SELECT), copia datos de una tabla y los inserta en otra tabla.

INSERT INTO `copy_registers` SELECT * FROM `registers`;
-- Opia todos los datos de la tabla (registers) a la tabla (copy_registers).

INSERT INTO `clientes`(`nombres`, `edad`, `pais`) SELECT `nombres`, `edad`, `pais` FROM `usuarios`;
/* Las datos especificos de la tabla (usuarios) se insertan en la tabla (clientes). */

INSERT INTO `clientes`(`nombres`, `edad`, `pais`) SELECT `nombres`, `edad`, `pais` FROM `usuarios` WHERE `id` = 20;
-- Se pueden utilizar con (WHERE).

INSERT INTO `registers`(`nombres`, `edad`, `pais`) SELECT `nombres`, `edad`, `pais` FROM `registers` LIMIT 1;
-- Colocamos un (limite) para copiar.