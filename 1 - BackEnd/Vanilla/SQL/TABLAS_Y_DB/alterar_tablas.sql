CREATE TABLE `usuarios`(
	`id_usuario` INT PRIMARY KEY AUTO_INCREMENT,
	`nombres` VARCHAR(50),
	`edad` INT(10),
	`correo` VARCHAR(50) DEFAULT 'mail@example.com'
);

-- REGISTROS -----------------------------------------
	--- id_usuario --- nombres --- edad --- correo ---
	---------------------------------------------------
	--- 1               Brandon 	21		brandon@gmail.com
	--- 2               Anthony 	20		anthony@gmail.com
	--- 3               Cosmic 	  	19	 	cosmic@gmail.com

/* ##########======================================########## */
/* ######===--- Agregar columna nueva a la tabla ---===###### */
/* ##########======================================########## */

/* A la tabla 'usuarios' le agregamos un nuevo campo llamado: 
	--- `genero` VARCHAR(30) NOT NULL DEFAULT 'Sin elegir'. */
ALTER TABLE `usuarios` ADD `genero` VARCHAR(30) NOT NULL DEFAULT 'Sin elegir';

/* ---------------------------------------------- */
/* ------ Agregar llave foranea a la tabla ------ */
/* ---------------------------------------------- */

-- Agregamos una nueva columna (fk_producto).
ALTER TABLE `invitados` ADD `fk_producto` INTEGER UNSIGNED;

-- Convertimos la columna (fk_producto) en una llave foranea.
ALTER TABLE `invitados` ADD FOREIGN KEY(`fk_producto`) REFERENCES `productos`(`id_producto`);

/* ---------------------------------------- */
/* ------ Agregar en posicionamiento ------ */
/* ---------------------------------------- */

-- Agrega la columna (fk_producto) despues de la columna (edad).
ALTER TABLE `invitados` ADD `fk_producto` INTEGER UNSIGNED AFTER `edad`;

-- Agrega la columna (fk_producto) en el primer lugar de la tabla.
ALTER TABLE `invitados` ADD `fk_producto` INTEGER UNSIGNED FIRST;

-- Agrega la columna (fk_producto) despues de la columna (edad).
ALTER TABLE `invitados` ADD `fk_producto` INTEGER UNSIGNED AFTER `edad`;

/* ##########====================########## */
/* ######===--- Cambiar campos ---===###### */
/* ##########====================########## */

/* ------------------------------------ */
/* ------ Asignar llave primaria ------ */
/* ------------------------------------ */

-- Convierte la columna (id_usuario) en una llave primaria.
ALTER TABLE `invitados` ADD PRIMARY KEY(`id_usuario`);

-- El valor autoincrementado comienza en (1500).
ALTER TABLE `invitados` AUTO_INCREMENT = 1500;

/* ------------------------------------------ */
/* ------ Cambiar nombre y propiedades ------ */
/* ------------------------------------------ */

-- Renombra la columna (nombres) a (names).
ALTER TABLE `invitados` CHANGE `nombres` `names`;

-- Renombra la columna (nombres) a (names) y cambia su tipo de dato.
ALTER TABLE `invitados` CHANGE `nombres` `names` VARCHAR(20);

-- Cambia solo el tipo de dato de la columna (nombres).
ALTER TABLE `invitados` MODIFY `nombres` INT NOT NULL;

-- Modifica el valor por defecto de la columna (nombres).
ALTER TABLE `invitados` ALTER `nombres` SET DEFAULT 'Ninguno';

-- Elimina el valor por defecto de la columna (nombres).
ALTER TABLE `invitados` ALTER `nombres` DROP DEFAULT 'Ninguno';

/* ##########=====================########## */
/* ######===--- Borrar columnas ---===###### */
/* ##########=====================########## */

/* Borramos la columna (genero) de la tabla (usuarios). */
ALTER TABLE `usuarios` DROP COLUMN `genero`;

-- Elimina mas de una columna.
ALTER TABLE `usuarios` DROP COLUMN `nombres`, DROP COLUMN `edad`;

-- Elimina la columna que es llave primaria.
ALTER TABLE `usuarios` DROP PRIMARY KEY;

-- Elimina una columna que sea llave foranea.
ALTER TABLE `usuarios` DROP FOREIGN KEY `fk_producto`;