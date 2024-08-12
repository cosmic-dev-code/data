/* ##########=======================================########## */
/* ######===--- Traer registros con (SELECT INTO) ---===###### */
/* ##########=======================================########## */

-- La instruccion (INTO) crea una nueva copia de la tabla (usuarios).
SELECT * INTO `nueva_copia_2022` FROM `usuarios`;

-- (IN) se usa para copiar la tabla en una nueva tabla en otra base de datos.
SELECT * INTO `nueva_copia_2022` IN 'copia.mdb' FROM `usuarios`;

-- Copia solo unas pocas columnas en una nueva tabla.
SELECT `nombre`, `edad` INTO `nueva_copia_2022` FROM `usuarios`;

-- Copia solo los clientes alemanes en una nueva tabla.
SELECT * INTO `clientes_mexicanos` FROM `clientes` WHERE `pais` = 'Mexico';

/* (SELECT INTO) también se puede usar para crear una nueva tabla vacía usando el esquema de otra. 
Simplemente agregue una (WHERE) que haga que la consulta no devuelva datos. */
SELECT * INTO `nueva_tabla` FROM `antigua_tabla` WHERE 1 = 0;