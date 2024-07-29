CREATE TABLE `registros`(
	`id_persona` INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
	`fk_grupo` INT UNSIGNED NOT NULL,
	`nombres` VARCHAR(30),
	`apellidos` VARCHAR(50),
	`genero` VARCHAR(10),
	`edad` INT(10) DEFAULT 0,
	`correo` VARCHAR(50) COMMENT 'Opcional'
);

INSERT INTO `registros`(`fk_grupo`, `nombres`, `apellidos`, `genero`, `edad`, `correo`) 
VALUES (1, 'Brandon', 'Olivares', 'masculino', 21, 'brandon@gmail.com'), 
(3, 'Anthony', 'Amador', 'masculino', 20, 'anthony@gmail.com'), 
(2, 'Cosmic', 'Cosmico', 'masculino', 19, 'cosmic@gmail.com');
# Insertamos los datos.

/* ##########==========================########## */
/* ######===--- Imprimir en pantalla ---===###### */
/* ##########==========================########## */

# Imprime una columna llamada (Esto es un texto de prueba) con una celda que contiene (Esto es un texto de prueba).
SELECT 'Esto es un texto de prueba';

# Imprime tres columnas, cada una con el contenido impreso.
SELECT 'Hola mundo', ', ', 'como estan?';

/* ##########===============================########## */
/* ######===--- Traer todos los registros ---===###### */
/* ##########===============================########## */

-- Trae todo (*) de la tabla (registros).
SELECT * FROM `registros`;

# Tambien trae todos los registros.
SELECT ALL FROM `registros`;

/* Trae todos los nombres de la tabla (registros). */
SELECT `nombres` FROM `registros`;
SELECT ALL `nombres` FROM `registros`;

/* Trae todos los nombres y las edades de la tabla. */
SELECT `nombres`, `edad` FROM `registros`;

-- Trae los datos de mas de una tabla.
SELECT * FROM `registros`, `notas`, `comentarios`;

/* ##########=====================================########## */
/* ######===--- Traer registros de otras tablas ---===###### */
/* ##########=====================================########## */

-- Podemos traer los datos especificos de las tablas que seleccionemos, (mezclando sus datos).
SELECT `nombres`, `id_nota`, `comentarios`.`user_id` FROM `registros`, `notas`, `comentarios`;

-- Trayendo datos de tres tablas distintas en una sola.
SELECT `usuarios`.`nombre`, `administradores`.`nombre`, `clientes`.`nombre` FROM `usuarios`, `administradores`, `comentarios`;

/* ##########=========================================########## */
/* ######===--- Traer registros especificos (WHERE) ---===###### */
/* ##########=========================================########## */

-- Trae todos los datos solo de (Cosmic).
SELECT * FROM `registros` WHERE `nombres` = "Cosmic";

-- Traera todos los datos de (Anthony), ya que su 'id' es el 2.
SELECT * FROM `registros` WHERE `id_persona` = 2;

/* Traera todos los nombres y edades de los registros que tengan por nombre (Brandon). */
SELECT `nombres`, `edad`, `correo` FROM `registros` WHERE `nombres` = "Brandon";

/* ##########=====================================########## */
/* ######===--- Traer registros (WHERE) y (AND) ---===###### */
/* ##########=====================================########## */

/* Trae los datos del registro que tenga el genero masculino y la edad de 20 
en este caso (Anthony) cumple con estas caracteristicas. */
SELECT * FROM `registros` WHERE `genero` = "masculino" AND `edad` = 20;

/* Trae el nombre y la edad solo del registro que tenga el genero masculino y la edad de 20. */
SELECT `nombres`, `edad` FROM `registros` 
WHERE `genero` = "masculino" AND `edad` = 21;