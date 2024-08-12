/* ##########=====================########## */
/* ######===--- Crear una vista ---===###### */
/* ##########=====================########## */

# Crea una vista que se basa en la tabla (usuarios).
CREATE VIEW `vista usuarios` AS SELECT * FROM `usuarios`;

# Podemos crear una vista basada solo en algunos datos de una tabla.
CREATE VIEW `vista usuarios` AS SELECT `nombres`, `edad`, FROM `usuarios`;

/* --------------------------------- */
/* ------ Condiciones (WHERE) ------ */
/* --------------------------------- */

/* Crea una vista llamada (vista productos mayores) con los productos cuyo precio supera al precio medio. */
CREATE VIEW `vista productos mayores` 
AS SELECT `nombre`, `precio` FROM `productos` 
WHERE `precio` > (SELECT AVG(`precio`) FROM `productos`);

/* ##########==========================########## */
/* ######===--- Actualizar una vista ---===###### */
/* ##########==========================########## */

/* Con (CREATE OR REPLACE VIEW) actualizamos una vista, agregandole columnas.
Si la vista solo tenia los campos (nombre) y (edad), ahora la vista tendra la columna (apellido). */
CREATE OR REPLACE VIEW `vista usuarios` 
AS SELECT `nombre`, `apellido`, `edad` FROM `usuarios`;

-- Podemos utilizar condiciones.
CREATE OR REPLACE VIEW `vista usuarios` 
AS SELECT `nombre`, `apellido`, `edad` FROM `usuarios` 
WHERE `id` = 5;

/* ##########===========================########## */
/* ######===--- Consultas a una vista ---===###### */
/* ##########===========================########## */

-- Podemos realizar consultas a una vista como si se tratara de una tabla.
SELECT * FROM `vista productos mayores`;

/* ##########==================########## */
/* ######===--- Borrar vista ---===###### */
/* ##########==================########## */

-- Elimina una vista.
DROP VIEW `vista productos mayores`;