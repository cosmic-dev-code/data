CREATE DATABASE `my_database`;
USE my_database;

/* En una relacion (1:1) solo se permite en que una entidad 
le puede pertenecer a otra entidad, (sin terceros). */

-- Tenemos una tabla llamada (usuarios).
CREATE TABLE `users`(
	`id_usuario` INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`edad` INT,
	`nombres` VARCHAR(100),
	`apellidos` VARCHAR(100)
);

-- Tenemos otra tabla llamada (perfiles).
CREATE TABLE `perfiles`(
	`id_perfil` INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	/* Llave foranea, campo foraneo el cual es unico referente a la tabla (usuarios). 
	De manera en que solo un perfil le puede pertenecer a un usuario. */
	`fk_usuario` INT UNSIGNED UNIQUE REFERENCES `users`(`id_usuario`) COMMENT 'Llave foranea del usuario',
	`num_perfil` INTEGER UNSIGNED,
	`descripcion` TEXT,
	`fotografia` VARCHAR(100),
	`password` VARCHAR(30),
	`correo` VARCHAR(60)
);