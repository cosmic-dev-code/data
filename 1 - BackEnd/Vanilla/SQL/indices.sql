-- Crear un indice agrupado.
CREATE CLUSTERED INDEX apellido_indice ON db.Directorio(apellidos);

-- Crear un indice no agrupado.
CREATE NONCLUSTERED INDEX apellido_indice ON db.Directorio(apellidos);