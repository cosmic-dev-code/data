/* ##########=======================================########## */
/* ######===--- Traer limite de registros (LIMIT) ---===###### */
/* ##########=======================================########## */

SELECT * FROM `registros` LIMIT 10;
# Solo trae 10 registros.

SELECT `nombres` FROM `registros` WHERE `edad` = 20 LIMIT 2;
# Trae solo dos registros que tengan la edad de 20.