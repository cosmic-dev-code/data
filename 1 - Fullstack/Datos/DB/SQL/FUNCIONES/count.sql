SELECT COUNT(*) FROM `usuarios`;
-- Cuenta todos los registros y regresa ese numero.

SELECT COUNT(*) FROM `usuarios` WHERE `apellidos` LIKE '%perez%' AND `edad` >= 18 LIMIT 10;
-- Cuenta los registros que cumplan con la condicion.

/* Cuenta todos los campos (id_persona) y trae el resultado. */
SELECT COUNT(`id_persona`) AS `conteo_del_id` FROM `registros`;

-- Cuenta los campos y los trae bajo el alias (numero_nombres_apellidos).
SELECT 
	CONCAT(
		'La cantidad de nombres son: ', 
		COUNT(`nombres`), 
		' y de apellidos son: ', 
		COUNT(`apellidos`)
	) 
AS `numero_nombres_apellidos` FROM `registros`;