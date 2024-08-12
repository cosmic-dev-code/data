CREATE DATABASE `my_database`;
USE my_database;

/* En una relacion (N:N polimorfica) permite que una o mas entidades le 
pertenezcan una o mas entidades relacionadas polimorficamente entre 
si. */

CREATE TABLE `posts`(
	`id_post` INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(60),
	`title` VARCHAR(30),
	`body` TEXT,
	`date` DATE,
);

CREATE TABLE `videos`(
	`id_video` INT UNSIGNED AUTO_INCREMENT NOT NULL,
	`date` DATE,
	`comment` VARCHAR(60)
);

CREATE TABLE `tags`(
	`id_tag` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`title` VARCHAR(30),
	`body` TEXT
);

CREATE TABLE `taggables`(
	-- Aqui tenemos la llave foranea de la tabla (tags).
	`tag_id` INT UNSIGNED NOT NULL REFERENCES `tags`(`id_tag`),
	/* Aqui colocamos las llaves primarias para realizar la relacion (N:N). */
	`taggable_id` INTEGER PRIMARY KEY,
	`taggable_type` VARCHAR(30) PRIMARY KEY
);

/*
	--- (1) - (1) - (App\Models\Post).
	--- (1) - (2) - (App\Models\Post).
	--- (2) - (1) - (App\Models\Videos).
*/