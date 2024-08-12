
SET @numero = 0;

-- Redondea un numero, el segundo parametro indica cuantos decimales redondeara.
SET @numero = ROUND(135.375, 2);

-- Da un numero decimal aleatorio entre (0) y (1).
SET @numero = RAND();

-- Crea un numero aleatorio entre (1) y (100).
SET @numero = ROUND(
	RAND() * 100
);

-- Exponenciamos un numero, por ejemplo (5 ^ 2) = 25.
SET @numero = POW(5, 2);
SET @numero = POWER(4, 2);

-- Devuelve el (modulo/residuo), en este caso de (18/4).
SET @numero = MOD(18, 4);

-- Devuelve el valor absoluto de un numero.
SET @numero = ABS(-4.2); -- Da 4.2 (double/float).
SET @numero = ABS(5); -- Da 5 (integer).
SET @numero = ABS(5.5); -- Da 5 (integer).
SET @numero = ABS(-5);   -- Da 5 (integer).

-- Devuelve el coseno de un numero.
SET @numero = COS(5);

-- Devuelve el seno de un numero.
SET @numero = SIN(5);

-- Devuelve la tangente de un numero.
SET @numero = TAN(5);

-- Devuelve el valor de 'pi'.
SET @numero = PI();

-- Redondea hacia arriba, en este caso da 11.
SET @numero = CEIL(10.3);

-- Redondea hacia abajo, en este caso da 10.
SET @numero = FLOOR(10.9);

-- Logaritmo en base 2.
SET @numero = LOG2(10);

-- Logaritmo en base 10.
SET @numero = LOG10(10);

-- Logartimo natural.
SET @numero = LOG(10);

-- Raiz cuadrada.
SET @numero = SQRT(10);

-- Devuelve el signo de un numero.
SET @numero = TAN(1.75);

-- Devuelve el cotangente de un numero.
SET @numero = COT(6);

-- Convertir un valor de grado en (radianes).
SET @numero = RADIANS(180);

-- Convertir un valor de radianes en (grados).
SET @numero = DEGREES(1.5);

-- Encuentra el valor mas alto.
SET @numero = GREATEST(1,3,6,10,7,8);

-- Encuentra el valor mas chico.
SET @numero = LEAST(1,3,6,10,7,8);

-- Calcula la exponencial de un numero.
SET @numero = EXP(1);