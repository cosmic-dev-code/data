CREATE DATABASE `my_database`;
USE my_database;

/* En una relacion (N:N) especifica que varias entidades pertenecen a otras 
y otras pertenecen a varias. */

CREATE TABLE `categories`(
	`id_categoria` INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`nombre` VARCHAR(50);
	`descripcion` TEXT
);

CREATE TABLE `libros`(
	`id_libro` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`nombre` VARCHAR(30),
	`fecha` DATE,
	`descripcion` TEXT,
	`autor` VARCHAR(60)
);

/* Creamos una tabla que contenga las llaves foraneas de las tablas 
que queremos relacionar de (N:N). */

CREATE TABLE `libros_categorias`(
	-- Aqui podemos colocar cuantos librosquerramos.
	`fk_libro` INT UNSIGNED,
	-- Aqui podemos colocar cuantas categorias queramos.
	`fk_categoria` INTEGER UNSIGNED,
	FOREIGN KEY(`fk_libro`) REFERENCES `libros`(`id_libro`),
	FOREIGN KEY(`fk_categoria`) REFERENCES `categories`(`id_categoria`)
);