SELECT SUM(`id`) FROM `usuarios`;
-- Suma todos los 'id' y devuelve el numero.

SELECT `email` FROM `usuarios` WHERE SUM(`calificacion`) > 600 LIMIT 6;
-- Traemos seis usuarios solo si las calificaciones de todos suman 600.

SELECT COUNT(`id`), SUM(1) FROM `usuarios`;
-- (SUM), suma de 1 en uno cada vez que se itera la tabla tupla por tupla.

SELECT AVG(`edad`) FROM `cursos`;
-- (AVG), devuelve el valor promedio de una columna numerica.