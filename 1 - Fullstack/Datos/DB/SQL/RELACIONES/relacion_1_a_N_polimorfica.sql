CREATE DATABASE `my_database`;
USE my_database;

/* En una relacion (1:N polimorfica) permite que una o mas entidades le 
pertenezcan una entidad. */

CREATE TABLE `posts`(
	`id_post` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`title` VARCHAR(30),
	`body` TEXT
);

CREATE TABLE `videos`(
	`id_video` INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`title` VARCHAR(30),
	`url` VARCHAR(50)
);

CREATE TABLE `comments`(
	`id_comment` INT UNSIGNED AUTO_INCREMENT NOT NULL,
	`body` TEXT,
	/* No declaramos como llaves primarias o foraneas estos campos, dado que 
	este comentario tiene ya su llave primaria (id_comment). Tampoco 
	colocamos la palabra reservada (unique) porque es una relacion 
	(1:N). */
	`commentable_id` INTEGER,
	`commentable_type` VARCHAR,
	PRIMARY KEY(`id_comment`)
);

/*
	--- (1) - (Comentario numero 0) - (1) - (App\Models\Post).
	--- (2) - (Comentario numero 1) - (1) - (App\Models\Video).
	--- (3) - (Comentario numero 2) - (1) - (App\Models\Post).
	--- (4) - (Comentario numero 3) - (1) - (App\Models\Post).
	--- (5) - (Comentario numero 4) - (3) - (App\Models\Post).
	--- (6) - (Comentario numero 5) - (1) - (App\Models\Video).
*/