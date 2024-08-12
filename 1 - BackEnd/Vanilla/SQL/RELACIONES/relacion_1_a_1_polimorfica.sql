CREATE DATABASE `my_database`;
USE my_database;

/* En una relacion (1:1 polimorfica) permite que una o mas entidades le 
pertenezcan a una o mas entidades, (unicamente 
relacionandose en uno). */

-- Tenemos una tabla para los post.
CREATE TABLE `posts`(
	`id_post` INT UNSIGNED AUTO_INCREMENT NOT NULL,
	`nombre` VARCHAR(30),
	`contenido` TEXT,
	PRIMARY KEY(`id_post`)
);

-- Tenemos una tabla para los comentarios.
CREATE TABLE `comentarios`(
	`id_comentario` INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`comentario` TEXT,
	`fecha` DATE
);

/* Las dos anteriores tablas tienen una imagen, y en lugar de crear 
una tabla (images) que tenga la llave foranea de la tabla (post) 
y otra de la tabla (comentarios), mejor creamos una para 
ambas tablas la cual va a definir su diferencia por 
medio del tipo de imagen (type). */
CREATE TABLE `images`(
	`url` VARCHAR(100) NOT NULL,
	/* Llave primaria compuesta con campos unicos, (indicando que 
	los campos no se van a poder repetir, por lo tanto es 
	una relacion de 1:1). */
	`imageable_id` INT UNSIGNED UNIQUE PRIMARY KEY NOT NULL,
	`imageable_type` VARCHAR(50) UNIQUE PRIMARY KEY NOT NULL
);

/*	--- ["url", "imageable_id", "imageable_type"]

	--- (disc/local/images/image_4363563.png) - (1) - (App\Models\Post)
	--- (disc/local/images/image_5745753.png) - (2) - (App\Models\Post)
	--- (disc/local/images/image_4365472.png) - (1) - (App\Models\Comment)
	--- (disc/local/images/image_3252354.png) - (2) - (App\Models\Comment)
*/