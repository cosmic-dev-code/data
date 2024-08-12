/* ##########================================########## */
/* ######===--- Traer registros (GROUP BY) ---===###### */
/* ##########================================########## */

/* La GROUP BY declaración se usa a menudo con funciones agregadas (
	COUNT(), MAX(), MIN(), SUM(), AVG()
) 
Para agrupar el conjunto de resultados por una o más columnas. */

-- Cuenta todos los (id) y muestra un solo pais.
SELECT COUNT(`id`), `pais` FROM `usuarios`;

-- Trae todos los paises con la cantidad de usuarios de cada uno de ellos.
SELECT COUNT(`id`), `pais` FROM `usuarios` GROUP BY `pais`;

/* Podemos traer todos los paises con la cantidad de usuarios de cada uno, 
ordenados por la cantidad de usuarios de forma descendente. */
SELECT COUNT(`id`), `pais` FROM `usuarios` GROUP BY `pais` ORDER BY	COUNT(`id`) DESC;

-- Podemos utilizar (grupos) en conjunto con inner joins.
SELECT `usuarios`.`nombre`, COUNT(`ordenes`.`id`) AS `cantidad_ordenes` 
FROM `ordenes` LEFT JOIN `usuarios` ON `ordenes`.`fk_usuario` = `usuarios`.`fk_orden` 
GROUP BY `nombre_usuario`;

/* El resultado dara el total de productos vendidos por categoria en las diferentes regiones. */
SELECT `region_description`, `category_name`, SUM(`orden_detalles`.`price` * `orden_detalles`.`cantidad`) AS `total` 
-- Tablas de las cuales se van a extraer los datos.
FROM `regiones`, `territorios`, `ordenes`, `orden_detalles`, `productos`, `categorias` 
-- Todas las llaves primarias y foraneas deben conicidir.
WHERE 
	-- Sentencias de union de tablas: 
		-- Consiste en igualar la llave primaria con la llave foranea de otra.
	`regiones`.`region_id` = `territorios`.`id` AND 
	`territorios`.`orden_id` = `ordenes`.`id` AND 
	`ordenes`.`detalles_id` = `orden_detalles`.`id` AND 
	`orden_detalles`.`producto_id` = `productos`.`id` AND 
	`productos`.`categoria_id` = `categorias`.`id` 
-- Agrupado.
GROUP BY `region_description`, `category_name` 
-- Ordenamos para tener datos mas comprensibles.
ORDER BY `region_description`