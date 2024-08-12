/* Crea una tabla que no tiene referencia con ninguna otra. Por lo que es ideal para trabajar con ella sin 
dañar a otras tablas existentes.

NOTA: No puede ejecutarse dos veces seguidas, porque el sistema dara un error, ya que la tabla se habra creado 
y no puede volver a crearse. */

-- Los datos que se van a copiar.
SELECT `id`, `nombres`, `email` 
-- Nombre de la tabla a crear.
INTO `usuarios_copia` 
-- De donde toma los datos.
FROM `usuarios`;

-- Podemos mezclar con INNER JOIN.
SELECT `usuarios`.`id`, `perfil`.`id`, `nombres` 
INTO `usuarios_perfil` 
INNER JOIN `perfiles` 
ON 1;

-- Comprobar si una tabla INTO existe.

-- Si el resultado no es nulo, significa que la tabla existe, entonces la borramos.
IF OBJECT_ID(`usuarios_copia`) IS NOT NULL BEGIN
	DROP TABLE `usuarios_copia`
END