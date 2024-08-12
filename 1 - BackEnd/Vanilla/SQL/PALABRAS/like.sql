/* ##########============================########## */
/* ######===--- Traer registros (LIKE) ---===###### */
/* ##########============================########## */

SELECT * FROM `registros` WHERE `nombres` LIKE 'Brandon%';
/* Muestra todos los nombres que inicien con la palabra (Brandon). */

SELECT * FROM `registros` WHERE `nombres` LIKE '%Brandon';
/* Muestra todos los nombres que terminen con la palabra (Brandon). */

SELECT * FROM `registros` WHERE `nombres` LIKE '%Brandon%';
/* Muestra todos los nombres que contengan en cualquier parte la palabra (Brandon). */

SELECT * FROM `registros` WHERE `nombres` LIKE '_Brandon%';
/* Muestra todos los nombres que contengan la palabra (Brandon) en la senda posicion. */

SELECT * FROM `registros` WHERE `nombres` LIKE '%Brandon_';
/* Muestra todos los nombres que comiencen con la palabra (Brandon) y que contengan 
al menos 2 caracteres de longitud. */

SELECT * FROM `registros` WHERE `nombres` LIKE '%Brandon__';
/* Muestra todos los nombres que comiencen con la palabra (Brandon) y que contengan 
al menos 3 caracteres de longitud. */

SELECT * FROM `registros` WHERE `nombres` LIKE 'Brandon%Olivares';
/* Muestra todos los nombres que comiencen con la palabra (Brandon) y terminen con 
la palabra (Olivares). */

SELECT * FROM `registros` WHERE `nombres` NOT LIKE '%Brandon__';
/* Muestra todos los nombres que no comiencen con la palabra (Brandon) y que no contengan 
al menos 3 caracteres de longitud. */

SELECT * FROM `registros` WHERE `nombres` NOT LIKE '%Brandon%';
/* Muestra aquellos registros que no contengan la palabra (Brandon). */

/* ##########======================================########## */
/* ######===--- Traer registros (LIKE), (CONCAT) ---===###### */
/* ##########======================================########## */

SELECT CONCAT(`nombres`, ' ', `edad`) FROM `registros`;
-- Trae en una sola tabla los nombres y la edad concatenados.

SELECT CONCAT(`nombres`, ' - ', `edad`) FROM `registros` WHERE `nombres` LIKE '%Brandon%';
-- Trae concatenado el nombre y la edad solo de los registros que tengan por nombre (Brandon).

SELECT * FROM `registros` WHERE CONCAT(`nombres`, '-', `edad`) LIKE '%Brandon-21%';
/* Selecciona de la tabla (registros) el registro que concatenado contenga la palabra (Brandon-21) */

SELECT CONCAT(`nombres`, 'y su correo es: ', `correo`) FROM `registros` 
WHERE CONCAT(`nombres`, '-', `correo`) LIKE '%Brandon-brandon@gmail.com%';
/* Seleccions concatenados los nombres y el correo solo si el registro concatenados los 
datos den (Brandon-brandon@gmail.com). */