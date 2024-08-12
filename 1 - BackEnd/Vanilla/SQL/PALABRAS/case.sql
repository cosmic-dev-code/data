/* ##########================================########## */
/* ######===--- Traer registros con (CASE) ---===###### */
/* ##########================================########## */

SELECT `registers`.`id`, `registers`.`names`, 
CASE 
	WHEN `id` > 10 THEN 'Menor a 10' 
    WHEN `id` > 20 THEN 'Mayor a 20' 
    ELSE 'Ninguna de las dos'
END AS `TextoID` FROM `registers`;

/* Aqui selecciona: (id) y (names).
De acuerdo a la condicion que se cumpla puede devolver algo parecido a: 

	--- Tres columnas: [id, names, TextoID] con sus valores.

Todos los valores de la columna (TextoID) puede contener uno de estos tres valores de 
acuerdo a la condicion que se cumpla: 
	--- (Mayor a 10).
	--- (Mayor a 20).
	--- (Ninguna de las dos). */

SELECT * FROM `usuarios`
ORDER BY (CASE
	WHEN `usuarios`.`ciudad` IS NULL THEN `usuarios`.`pais`
	ELSE `usuarios`.`ciudad`
END);
/* Aqui se extraeran todos los datos de la tabla (usuarios) ordenados por: 
	--- Si la (ciudad) es (NULL) entonces ordenara a los usuarios por (pais). */