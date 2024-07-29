/* ##########=================================########## */
/* ######===--- Traer registros con (UNION) ---===###### */
/* ##########=================================########## */

SELECT `city` FROM `clients` UNION SELECT `region` FROM `administradores`;
-- La instruccion (UNION) mezcla los datos de ambas tablas en una sola.
-- Une la columna (city) y (region) en una sola columna.

SELECT `names` FROM `registers` UNION SELECT `name` FROM `notes` AS `nueva`;
-- Bajo un 'alias'.

SELECT * FROM `registers` UNION SELECT * FROM `notes` ORDER BY `names` DESC;
-- Ordenado por el "names" de manera (descendente).

/* ##########=============================########## */
/* ######===--- (UNION) con condiciones ---===###### */
/* ##########=============================########## */

SELECT * FROM `registers` WHERE `names` LIKE '%Brandon%' 
UNION 
SELECT * FROM `notes` 
ORDER BY `id` DESC;
-- La primera (union) contiene una condicion (WHERE).

SELECT * FROM `registers` WHERE `names` LIKE '%Brandon%' 
UNION 
SELECT * FROM `notes` WHERE `name` LIKE '%Brandon%' AND `content` LIKE '%Brandon%' 
ORDER BY `id` DESC;
-- Ambas instrucciones (uniones) pueden contener condiciones.

/* ##########=================########## */
/* ######===--- (UNION ALL) ---===###### */
/* ##########=================########## */

SELECT `city` FROM `clients` UNION ALL SELECT `city` FROM `administradores`;
/* La instruccion (UNION ALL) mezcla los datos de ambas tablas "incluyendo 
los datos duplicados". */