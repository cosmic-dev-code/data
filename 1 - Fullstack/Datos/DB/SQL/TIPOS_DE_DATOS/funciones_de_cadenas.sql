
SET @cadena = '';

/* ##########================================########## */
/* ######===--- Buscar dentro de un string ---===###### */
/* ##########================================########## */

-- Devuelve la longitud de una cadena de texto.
SET @cadena = CHAR_LENGTH('Hello world!');
SET @cadena = CHARACTER_LENGTH('Hello world!');
SET @cadena = LENGTH('Hello world!');

-- Devuelve la posicion del primer parametro en los demas parametros.
SET @cadena = FIELD('l', 'H', 'o', 'l', 'a', '.'); -- Da: 3.

-- La funcion (FIND_IN_SET) recibe por parametros: 
	-- El caracter a buscar.
	-- La lista de caracteres en una cadena para buscar.
SET @cadena = FIND_IN_SET('u', 'H,o,l,a,m,u,n,d,o');

-- Busca una cadena dentro de otra y devuelve la posicion.
SET @posicion = INSTR(@cadena, "mundo");

/* ##########============================================########## */
/* ######===--- Cortar una cadena y retornar una nueva ---===###### */
/* ##########============================================########## */

-- Extrae los caracteres especificados de la cadena comenzando desde la (izquierda).
SET @cadena = LEFT(@cadena, 3);

-- Extrae los caracteres especificados de la cadena comenzando desde la (derecha).
SET @cadena = RIGHT(@cadena, 3);

# Corta una cadena y la devuelve, recibe por parametros: 
	-- La cadena a cortar.
	-- Desde donde la cortara.
	-- Hasta donde la va a cortar empezando desde el segundo parametro.
SET @cadena = SUBSTR("SQL Tutorial", 5, 8);
SET @cadena = SUBSTRING("SQL Tutorial", 5, 8);
SET @cadena = MID("SQL Tutorial", 5, 8);

# Devuelve una cadena desde cierta coincidencia, recibe por parametros: 
	-- La cadena que se va a cortar.
	-- La cadena a buscar.
	-- Indica la cantidad de conicidencias que debe encontrar, la cual es el limite hasta donde cortara la cadena.
SET SUBSTRING_INDEX("www.w3schools.com", ".", 2);

/* ##########=======================================########## */
/* ######===--- Transformar textos de un 'string' ---===###### */
/* ##########=======================================########## */

-- Convierte una cadena a minusculas.
SET @cadena = LCASE("Hola mundo.");
SET @cadena = LOWER("Hola mundo.");

-- Convierte una cadena a mayusculas.
SET @cadena = UCASE("Hola mundo.");
SET @cadena = UPPER("Hola mundo.");

-- Devuelve una cadena invertida.
SET @cadena = REVERSE("SQL Tutorial");

/* ##########========================########## */
/* ######===--- Concatenar cadenas ---===###### */
/* ##########========================########## */

-- Devuelve mas de una cadena concatenada.
SET @cadena = CONCAT('Hola ', 'mundo', ' ', 'nuevo');

-- Devuelve una cadena concatenda por el primer parametro, en este caso guiones (-).
SET @cadena = CONCAT_WS("-", "SQL", "Tutorial", "is", "fun!");

-- Repite una cadena una determinada cantidad de veces.
SET @cadena =  REPEAT("SQL Tutorial", 3); -- Da: SQL TutorialSQL TutorialSQL Tutorial.

/* ##########============================########## */
/* ######===--- Comparacion de cadenas ---===###### */
/* ##########============================########## */

-- Compara dos cadenas, devuelve: 
	-- (-1) en caso de no ser iguales.
	-- (0) en caso de ser iguales.
SET @result = STRCMP("SQL Tutorial", "SQL Tutorial");

-- Compara dos cadenas, pero no distingue entre mayusculas y minusculas: 
	-- Devuelve (1) en caso de ser verdadero.
	-- Devuelve (0) en caso de ser falso.
SELECT "Hola" = "hola"; -- Da: 1.
SELECT "Hola" = "hol"; -- Da: 0.

/* ##########========================########## */
/* ######===--- Relleno de cadenas ---===###### */
/* ##########========================########## */

-- Quita todos los espacios de la derecha de la cadena.
SET @cadena = RTRIM('SQL Tutorial    ');

-- Quita todos los espacios de la izquierda de la cadena.
SET @cadena = LTRIM('    SQL Tutorial');

-- Quita todos los espacios a ambos lados de la cadena.
SET @cadena = TRIM('    SQL Tutorial    ');

-- Devuelve el numero de espacios en una cadena especificado en el parametro.
SET @cadena = SPACE(10); -- Da:          .

/* ##########=======================================########## */
/* ######===--- Extraer un caracter de una cadena ---===###### */
/* ##########=======================================########## */

-- Devuelve el primer caracter.
SELECT MID('Hola', 1, 1);

-- Devuelve el cuarto caracter.
SELECT MID('Hola', 4, 4);

/* ##########===========================########## */
/* ######===--- Reemplazar una cadena ---===###### */
/* ##########===========================########## */

-- La funcion (REPLACE) permite reemplazar un string dentro de una cadena por otra, recibe por parametros: 
	-- La cadena donde se buscara el string para reemplazar.
	-- La cadena que se va a reemplazar.
	-- La cadena que se va a insertar.
SET @cadena = REPLACE("Es es un tutoral de SQL completo", "SQL", "HTML");

# La funcion (INSERT) recibe por parametros: 
	-- La cadena que sera reemplazada.
	-- La primera posicion donde comenzara a reemplazar la cadena.
	-- La ultima posicion donde comenzara a reemplazar la cadena.
	-- La cadena que insertara reemplazando la otra segun la posicion.
SET @cadena = INSERT("W3Schools.com", 1, 9, "Ejemplo");

-- Da formato en decimales.
SET @cadena = FORMAT(250500.5634, 2); -- Da: 250,500.56.