
/* ##########=====================########## */
/* ######===--- Crear una tabla ---===###### */
/* ##########=====================########## */

/*
	--- Creamos una tabla llamada (usuarios) con los siguientes campos: 
		--- `id_usuario`, llave primaria de solo valor positivo auto incrementable.
		--- Llave foranea de solo valor positivo con un comentario.
		--- Nombres del usuario, una cadena con valor maximo de 50 caracteres.
		--- Apellidos del usuario, una cadena con valor maximo de 50 caracteres.
		--- La edad, numero entero de 10 caracteres como maximo, positivo.
		--- Campo booleano con un caracter, por defecto es 1.
		--- El correo, campo de cadena de 50 caracteres como maximo, tiene un valor por defecto.
		--- Damos de alta la llave primaria propia de la tabla.
		--- Damos de alta la llave foranea la cual hace referencia al 'id' de la tabla (grupos).
*/
CREATE TABLE `usuarios`(
	`id_usuario` INTEGER UNSIGNED AUTO_INCREMENT NOT NULL,
	/* La llave foranea debe tener las mismas propiedades que la llave primaria de donde se esta 
	mandando a llamar. */
    `fk_grupo` INT UNSIGNED NOT NULL,
	`nombres` VARCHAR(50),
	`apellidos` VARCHAR(50),
	`edad` INT(10) UNSIGNED,
	`activo` TINYINT(1) DEFAULT 1,
	`correo` VARCHAR(50) DEFAULT 'usuario@example.com',
	PRIMARY KEY(`id_usuario`),
    FOREIGN KEY(`fk_grupo`) REFERENCES `grupos`(`id_grupo`)
);

/* Se verifica si la tabla existe, si existe, entonces no la crea, pero si no existe 
entonces la crea. */
CREATE TABLE IF NOT EXISTS `grupos`(
	`id_grupo` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
	`nombre` VARCHAR(30)	
);

/* ##########===================########## */
/* ######===--- Restricciones ---===###### */
/* ##########===================########## */

CREATE TABLE `usuarios`(
	-- (PRIMARY KEY): Indica que esta columna sera una llave primaria.
	-- (AUTO_INCREMENT): Indica que la columna se incrementara en 1.
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
	`id` INT CONSTRAINT PRIMARY KEY AUTO_INCREMENT, 
	-- (FOREIGN KEY): Indica que esta columna sera una llave foranea.
	`producto_id` INT FOREIGN KEY, 
	-- (NOT NULL): indica que lq columna no admite campos "nulos".
	`nombres` VARCHAR(100) NOT NULL, 
	-- (UNSIGNED): Indica que la columna no admite valores negativos.
	`total` INTEGER UNSIGNED, 
	-- (UNIQUE): Indica que la columna tendra un valor unico aotro registro de la misma.
	`correo` VARCHAR(255) UNIQUE, 
	-- (DEFAULT): Da un valor por defecto a una columna.
	`descripcion` TEXT DEFAULT 'Sin descripcion', 
	`activo` TINYINT(1) DEFAULT 1, 
	-- (CHECK): Indica que la columna debe recibir el registro solo si se cumple la condicion.
	`edad` INT(2), CHECK(`edad` > 18), 
	-- (COMMENT): Agrega un comentario a la columna en la estructura de la tabla.
	`fecha_registro` DATETIME COMMENT 'Fecha de registro del usuario', 
	-- Podemos mezclar.
	`numero` INT(3) UNSIGNED PRIMARY KEY CHECK(`numero` < 100) NOT NULL COMMENT 'Numero de incrementos no menor a 100'
);

/* ##########==================########## */
/* ######===--- Copiar tabla ---===###### */
/* ##########==================########## */

CREATE TABLE `copy_registers` LIKE `registers`;
-- Crea una tabla identica a otra.

CREATE TABLE `copy_notes` AS SELECT * FROM `notes`;
-- Crea una copia de la "estructura" y "datos" de la tabla (notes) a la tabla (copy_notes).

CREATE TABLE `copy_notes` 
AS 
SELECT `notes`.`id`, `notes`.`name`, `notes`.`content` FROM `notes`;
-- Creamos una copia de la estructura y datos especificados de una tabla a otra.

CREATE TABLE `copy_notes` 
AS 
SELECT `notes`.`id`, `notes`.`name`, `notes`.`content` FROM `notes` 
HAVING COUNT(`notes`.`id`) < 10;
-- Podemos utilizar (condiciones) al crear "copias" de "tablas" y de sus "datos".

/* ##########==================================########## */
/* ######===--- Eliminar todos los registros ---===###### */
/* ##########==================================########## */

-- Elimina todos los registros de la tabla.
DELETE FROM `usuarios`;

-- Elimina todos los datos de la tabla.
TRUNCATE TABLE `usuarios`;

/* ##########==================########## */
/* ######===--- Borrar tabla ---===###### */
/* ##########==================########## */

DROP TABLE `usuarios`;
-- (DROP) borra una tabla de la base de datos.