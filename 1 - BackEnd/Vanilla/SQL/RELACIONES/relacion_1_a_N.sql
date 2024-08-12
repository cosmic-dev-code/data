CREATE DATABASE `my_database`;
USE my_database;

/* En una relacion (1:N) solo se permite en que una entidad tenga 
varias entidades y varias entidades le pueden pertenecer 
a una entidad. */

-- Tenemos una tabla llamada (usuarios).
CREATE TABLE `users`(
	`id_usuario` INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`edad` INT,
	`nombres` VARCHAR(100),
	`apellidos` VARCHAR(100)
);

-- Tenemos otra tabla llamada (perfiles).
CREATE TABLE `comments`(
	`id_comentario` INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	/* En este caso tenemos un campo en la foraneo referente a la tabla (users), 
	este campo no es unico, por lo que un usuario puede tener varios 
	comentarios y varios comentarios le pueden pertenecer a 
	un usuario. */
	`fk_usuario` INT UNSIGNED REFERENCES `users`(`id_usuario`) COMMENT 'Llave foranea del usuario',
	`comentario` TEXT,
	`fecha` DATE
);