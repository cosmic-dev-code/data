/* ##########==========================########## */
/* ######===--- Traer registros (IN) ---===###### */
/* ##########==========================########## */

/* La palabra reservada (IN): 
	--- Permite validar una condicion de acuerdo a diferentes resultados.
	--- Crear subconsultas. */

# Trae todos los registros que tengan una edad de entre 20 y 30.
SELECT * FROM `registros` WHERE `edad` IN (20, 30);
SELECT * FROM `registros` WHERE `edad` IN (60, 10, 20, 30, 80, 120);

-- Podemos hacer uso del (AND).
SELECT `nombres`, `edad`, `correo` FROM `registros` WHERE `nombres` = 'Brandon' AND `edad` IN (20, 30);

-- Solo si el campo (pais) tiene alguno de los siguientes tres valores.
SELECT * FROM `registros` WHERE `pais` IN ('Mexico', 'USA', 'Chile');

-- Solo si el campo (pais) tiene alguno de los valores retornados de la sentencia (SELECT).
SELECT * FROM `registros` WHERE `pais` IN (SELECT `pais` FROM `clients`);

-- Buscara cualquier cadena de caracteres contenida en campos de tipo: (CHAR), (NCHAR), (NVARCH)
SELECT DISTINCT `id`, `productos`.`nombres` FROM `detalles` 
-- Traer los productos donde su id coincida con el de detalles.
INNER JOIN `productos` ON `detalles`.`id` = `productos`.`id` 
WHERE `usa` IN (SELECT `pais` FROM `ventas` WHERE `productos`.`id` = `ventas`.`id` FROM `ventas`)
AND `productos`.`name` LIKE 'L%'