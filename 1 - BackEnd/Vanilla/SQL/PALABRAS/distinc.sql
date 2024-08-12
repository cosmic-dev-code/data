/* ##########===========================================########## */
/* ######===--- Traer registros distintos sin repetir ---===###### */
/* ##########===========================================########## */

/* Con la instruccion (DISTIC), los datos no se repiten, sino que vienen diferentes. */

-- Trae todos los registros que tengan nombres diferentes.
SELECT DISTINCT `nombres` FROM `registros`;

-- Trae la cantidad de registros (distintos) de (paises).
SELECT COUNT(DISTINCT `pais`) FROM `usuarios`;

-- Selecciona todos los nombres y apellidos distintos ordenados por la edad de manera descendente.
SELECT DISTINCT `nombres`, `edad` FROM `registros` ORDER BY `edad` DESC;

/* NOTA: Cualquier registro que tenga el nombre y apellido iguales a los de otro registro no se mostrara. 
Deben tener los dos campos iguales para que el registro no se muestre. */