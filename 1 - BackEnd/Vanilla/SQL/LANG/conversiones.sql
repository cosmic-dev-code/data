/* ##########==================########## */
/* ######===--- Conversiones ---===###### */
/* ##########==================########## */

-- Convierte a una (fecha).
SELECT CONVERT("2017-08-29", DATE);

-- Convierte a (fecha y hora).
SELECT CONVERT("2017-08-29", DATETIME);

-- Converte a (hora, minutos y segundos).
SELECT CONVERT("2017-08-29", TIME);

-- Convierte a un valor de (caracteres).
SELECT CONVERT("2017-08-29", CHAR(3));
SELECT CONVERT("2017-08-29", NCHAR(3));

-- Convierte a un numero (con signo), pero borra los decimales.s
SELECT CONVERT(-128, UNSIGNED);

-- Convierte un valor a (binario).
SELECT CONVERT(128300.50, BINARY);

-- Convierte de un sistema numerico a otro, (en este caso del sistema de 10 al binario 2); recibe por parametros: 
	-- El numero a convertir.
	-- El sistema numerico al que pertenece.
	-- El sistema numerico al cual se convertira.
SELECT CONV(15, 10, 2); -- Da: 1111.
SELECT CONV(1111, 2, 10); -- Da: 15.