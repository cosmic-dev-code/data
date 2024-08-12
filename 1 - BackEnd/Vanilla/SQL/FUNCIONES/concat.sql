SELECT CONCAT('Hola', ' ', 'Mundo');
-- Hola Mundo.

SELECT CONCAT(`nombres`, ' y ', `apellidos`) FROM `usuarios`;
/* Selecciona todos los registros concatenandolos: 
	--- Brandon Anthony y Olivares Amador. */

SELECT * FROM `usuarios` WHERE CONCAT('nombres', ' ', `apellidos`) LIKE '%Brandon Anthony Olivares Amador%';
/* Hacemos una concatenacion condicionando la respuesta. */