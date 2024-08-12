
-- Trae la (fecha) y (hora).
SELECT LOCALTIMESTAMP();
SELECT LOCALTIME();
SELECT NOW();

-- Retorna solo la (fecha).
SELECT DATE("2017-06-20 09:34:00");

-- Retorna solo la (hora, minutos y segundos).
SELECT TIME("2017-06-20 09:34:00");

-- Retorna solo el (año).
SELECT YEAR("2017-06-20 09:34:00");

-- Retorna solo el (mes).
SELECT MONTH("2017-06-15");

-- Retorna solo el numero de (semana).
SELECT WEEK("2017-06-15");

-- Retorna solo el numero de (dia de la semana).
SELECT WEEKDAY("2017-06-15");

-- Retorna solo el (nombre del dia de la semana en ingles).
SELECT DAYNAME("2017-06-15");

-- Retorna solo el (dia del mes).
SELECT DAY("2017-06-15");

-- Retorna solo la (hora).
SELECT HOUR("2017-06-20 09:34:00");

-- Retorna solo los (minutos).
SELECT MINUTE("2017-06-20 09:34:00");

-- Retorna solo los (segundos).
SELECT SECOND("2017-06-20 09:34:00");

-- Retorna solo los (microsegundos).
SELECT MICROSECOND("2017-06-20 09:34:00.000023");

-- (EXTRACT), es una funcion que permite traer cierta parte de una cadena de fecha y hora.
SELECT EXTRACT(YEAR FROM "2017-06-20 09:34:00.000023"); -- Da: 2017.
SELECT EXTRACT(DATE FROM "2017-06-20 09:34:00.000023"); -- Da: 2017-06-20.
SELECT EXTRACT(MICROSECOND FROM "2017-06-20 09:34:00.000023"); -- Da: 23.

-- Crea una fecha, recibe por parametros: 
	-- El año donde se creara la fecha.
	-- El numero de dias que han pasado en ese año.
SELECT MAKEDATE(2017, 80); -- Da: 2017-03-21.

-- Crea un tiempo, recibe por parametros: 
	-- La hora.
	-- Los minutos.
	-- Los segundos.
SELECT MAKETIME(11, 35, 4); -- Da: 11:35:04.