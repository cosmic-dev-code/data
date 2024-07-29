/* ##########==============########## */
/* ######===--- Imprimir ---===###### */
/* ##########==============########## */

SELECT 'Esto es un texto de prueba' AS `Impresion`;
SELECT 'Esto es un texto de prueba' AS 'Impresion';
-- Imprime una coumna llamada (Impresion) con una celda con el contenido 'Esto es un texto de prueba'.
-- (Ambas maneras hacen exactamente lo mismo).

/* ##########=========================================########## */
/* ######===--- Traer registros con un 'alias' (AS) ---===###### */
/* ##########=========================================########## */

# Los alias de SQL se utilizan para dar a una tabla, oa una columna de una tabla, un nombre temporal.
# Los alias se utilizan a menudo para hacer que los nombres de las columnas sean más legibles.

SELECT * FROM `registers` AS `registros`;
-- Trae la tabla (registers) bajo el nombre (registros).

SELECT `names` AS `nombres` FROM `registers`;
-- Trae la columna (names) bajo el nombre (nombres).

SELECT `names` AS `nombres` FROM `registers` AS `registros`;
-- Trae la tabla y la columna bajo los alias (registros) y (nombres).

SELECT `nombres`, `edad` AS `nombre_y_edad` FROM `registros` LIMIT 3;
-- Trae solo tres registros con los (nombres y la edad) bajo una tabla llamada (nombre_y_edad).

SELECT CONCAT(`nombres`, ' edad de ', `edad`, ' y su correo ', `correo`) 
AS `informacion_usuario` FROM `registros` 
WHERE CONCAT(`nombres`, ' con ', `edad`) LIKE '%Brandon con 21%';
/* Trae los datos concatenados (nombre, edad y correo) bajo una tabla nueva llamada 
(informacion del usuario), esto solo pasa si los (nombres y la edad) concatenados dan 
(Brandon con 21). */

/* ##########==========================########## */
/* ######===--- Utilizar los (alias) ---===###### */
/* ##########==========================########## */

SELECT `registros`.`names`, `notas`.`name` FROM `registers` AS `registros`, `notes` AS `notas`;
-- Podemos dar (alias) a mas de una tablas y bajo ese 'alias' utilizar sus columnas.

SELECT `as_u`.`nombres`, `as_a`.`nombres` FROM `usuarios` AS `as_u`, `administradores` AS `as_a`;
/* Podemos darle mas de un (alias) y utilizarlo. */

SELECT `as_u`.`nombres`, `as_a`.`nombres` 
FROM `usuarios` AS `as_u`, `administradores` AS `as_a` 
WHERE `as_u`.`nombres` = 'Brandon' AND `as_a`.`nombres` = 'Anthony';
-- Podemos preguntar (WHERE) haciendo uso de los (alias).