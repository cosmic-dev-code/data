
SELECT MIN(`edad`) FROM `usuarios`;
-- Trae el registro con la edad mas chica.

SELECT MAX(`edad`) FROM `usuarios`;
-- Trae el registro con la edad mas alta.

SELECT CONCAT(MIN(`id`), ' y ', MAX(`id`)) FROM `cursos`;
-- Trae el 'id' mas chico y mas grande.