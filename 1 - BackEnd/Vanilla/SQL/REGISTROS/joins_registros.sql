CREATE TABLE `registros`(
	`id_persona` INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
	`fk_grupo` INT UNSIGNED NOT NULL,
	`nombres` VARCHAR(30),
	`apellidos` VARCHAR(50),
	`genero` VARCHAR(10),
	`edad` INT(10) DEFAULT 0,
	`correo` VARCHAR(50) COMMENT 'Opcional'
);

CREATE TABLE `comentarios`(
	`id_comentario` INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	`fk_persona` INT UNSIGNED COMMENT 'Esta es la llave foranea de la tabla registros.',
	`comentario` TEXT,
	`fecha_del_comentario` DATE,
	FOREIGN KEY(`fk_persona`) REFERENCES `registros`(`id_persona`)
);

/* Para poder hacer sentencias (inner join) se necesita tener al menos una relacion 
entre las tablas, de modo que se puedan utilizar facilmente ambas tablas. */

# INNER JOIN: Devuelve registros que tienen valores coincidentes en ambas tablas.
# LEFT JOIN: Devuelve todos los registros de la tabla de la izquierda y los registros coincidentes de la tabla de la derecha.
# RIGHT JOIN: Devuelve todos los registros de la tabla de la derecha y los registros coincidentes de la tabla de la izquierda.
# FULL OUTER JOIN: Devuelve todos los registros cuando hay una coincidencia en la tabla izquierda o derecha,

/* ##########====================########## */
/* ######===--- Comparar datos ---===###### */
/* ##########====================########## */

/* -------------------------- */
/* ------ (inner join) ------ */
/* -------------------------- */

-- Bajo un 'alias'.
SELECT * FROM `registros` AS `alias` 
INNER JOIN -- No une ninguna otra tabla.
ON 1; -- La condicion directamete es TRUE.

-- Trae ambas tablas mezcladas en una sola.
SELECT * FROM `registros` 
INNER JOIN `comentarios` 
ON 1; -- Condicion establecida en TRUE.

/* Trae todos los datos en una sola tabla, pero solo los que cumplan con la condicion. */
SELECT * FROM `registros` 
INNER JOIN `comentarios` 
ON `registros`.`id_persona` = `comentarios`.`fk_persona`;

-- Podemos pedir que solo nos traiga los nombres de ambas tablas en una sola.
SELECT `nombres`, `fecha_del_comentario` FROM `registros` 
INNER JOIN `comentarios` 
ON TRUE;

/* Podemos mezclar los datos de ambas tablas en el orden que queramos, como por ejemplo (nombres, edad y comentario). */
SELECT CONCAT(`nombres`, ' ', `edad`, ' - ', `comentario`) AS `names_and_age` FROM `registros` 
INNER JOIN `comentarios` 
ON `registros`.`id_persona` = `comentarios`.`fk_persona`;

-- Pueden traerse los datos de mas de una tabla.
SELECT * FROM `registros` 
INNER JOIN `comentarios` 
INNER JOIN `administradores`
INNER JOIN `publicaciones` 
-- Solo si la condicion se cumple.
ON `registros`.`id_persona` = = `comentarios`.`fk_persona`;

SELECT * FROM `registros` -- Selecciona todo de ambas tablas.
INNER JOIN `comentarios` -- Concatena la otra tabla solo si...
ON `registros`.`id_persona` = `comentarios`.`fk_persona` -- Condicion.
-- Ordena los nombres de la tabla registros en un grupo.
GROUP BY `registros`.`nombres`;

/* ##########=================########## */
/* ######===--- Condiciones ---===###### */
/* ##########=================########## */

SELECT * FROM `registros` 
INNER JOIN `comentarios` 
ON `registros`.`id_persona` = `comentarios`.`fk_persona` 
-- Podemos colocar mas condiciones.
WHERE `nombres` = 'Bradon';

SELECT * FROM `registros` 
INNER JOIN `comentarios` 
ON `registros`.`id_persona` = `comentarios`.`fk_persona` 
-- Condiciones (WHERE). 
WHERE `nombres` LIKE '%Bradon%' AND `edad` = 22 
-- Condiciones (HAVING). 
HAVING SUM(`nombres`) > 50 
-- Ordenamiento y limite
ORDER BY `nombres` DESC LIMIT 10;

# Aqui seleccionamos los datos de ambas tablas bajo una condicion (ON)
SELECT `names` AS `NamesCount` FROM `registers` 
INNER JOIN `notes` 
ON `registers`.`id` = `notes`.`user_id` 
# Aqui aplicamos condiciones.
WHERE `registers`.`names` LIKE '%Brandon%' AND `age` = 22 
HAVING SUM(`names`) < 10 AND COUNT(`registers`.`id`) < 10 
# Traemos hasta un limite de 10 registros.
LIMIT 10;

/* ------------------------- */
/* ------ (left join) ------ */
/* ------------------------- */

/* (LEFT JOIN) selecciona "todos los elementos de la tabla izquierda" y los elementos 
coincidentes de la tabla derecha. */
SELECT * FROM `registros` 
LEFT JOIN `comentarios` 
ON `registros`.`id_persona` = `comentarios`.`fk_persona`;

/* -------------------------- */
/* ------ (right join) ------ */
/* -------------------------- */

/* (RIGHT JOIN) "selecciona todos los elementos de la tabla derecha" y los elementos 
coincidentes de la tabla izquierda. */
SELECT * FROM `registros` 
RIGHT JOIN `comentarios` 
ON `registros`.`id_persona` = `comentarios`.`fk_persona`;

/* ------------------------------- */
/* ------ (full outer join) ------ */
/* ------------------------------- */

/* (FULL JOIN) selecciona todos los elementos cuando hay una coincidencia en una de las tablas. */
SELECT * FROM `registros` 
FULL OUTER JOIN `comentarios` 
ON `registros`.`id_persona` = `comentarios`.`fk_persona`;