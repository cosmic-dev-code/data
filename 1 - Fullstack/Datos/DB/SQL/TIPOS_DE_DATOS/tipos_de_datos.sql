-- Dentro de una tabla se crean estos tipos de datos: 
CREATE TABLE `my_table`(

	/* ##########============########## */
	/* ######===--- Llaves ---===###### */
	/* ##########============########## */

	-- Llave primaria autoincrementada de dato numerico entero.
	`id_tabla` INT PRIMARY KEY AUTO_INCREMENT,
	-- Llave foranea perteneciente a otra tabla de dato numerico entero.
	`fk_otra_tabla` INTEGER,
	FOREIGN KEY(`fk_otra_tabla`) REFERENCES `otra_tabla`(`id_otra_tabla`),

	/* ##########=====================########## */
	/* ######===--- Datos numericos ---===###### */
	/* ##########=====================########## */

	-- Puede contener un valor (de 1 a 64) bits.
	`numero_bit` BIT(1), 
	`numero_bit` BIT(64), 
	-- Un entero muy chico.
	-- El rango (con signo es de -128 a 127). El rango (sin signo es de 0 a 255).
	`numero_muy_chico` TINTYINT(-128), 
	`numero_muy_chico` TINTYINT(255), 
	-- Un numero chico.
	-- El rango (con signo es de -32768 a 32767). El rango (sin signo es de 0 a 65535).
	`numero_chico` SMALLINT(255), 
	-- Un numero mediano.
	-- El rango (con signo es de -8388608 a 8388607). El rango (sin signo es de 0 a 16777215).
	`numero_mediano` MEDIUMINT(255), 
	-- Numero.
	-- El rango (con signo es de -2147483648 a 2147483647). El rango (sin signo es de 0 a 4294967295).
	`numero` INT(255), 
	`numero`INTEGER, 
	-- Numero grande.
	-- El rango (con signo es de -9223372036854775808 a 9223372036854775807). El rango (sin signo es de 0 a 18446744073709551615).
	`numero_grande` BIGINT, 
	# Numero flotante.
	-- El primer parametro identifica el numero total de digitos.
	-- El segundo parametro indica el numero tatal de digitos decimales.
	-- ADVERTENCIA: Esto ya se encontra obsoleto en MySQL 8.0.17 y se eliminará en futuras versiones de MySQL.
	`numero_flotante` FLOAT(10,16), 
	# Numero flotante o de doble precision.
	-- Si el parametro (es de 0 a 24), el tipo de datos se convierte en FLOAT().
	-- Si el parametro (es de 25 a 53), el tipo de datos se convierte en DOUBLE().
	`numero_float_double` FLOAT(10), 
	# Numero flotante normal.
	-- El primer parametro identifica el numero total de digitos.
	-- El segundo parametro indica el numero tatal de digitos decimales.
	`numero_flotante_normal` DOUBLE(10, 16), 
	`numero_flotante_normal` DOUBLE PRECISION(10, 16), 
	# Numero decimal de punto fijo.
	-- El número máximo para el tamaño es 65. El número máximo para el decimal es 30.
	-- El valor predeterminado para el tamaño es 10. El valor predeterminado para el decimal es 0.
	`numero_de_punto_fijo` DECIMAL(10, 16), 
	`numero_de_punto_fijo` DEC(10, 16), 

	/* ##########=====================########## */
	/* ######===--- Datos booleanos ---===###### */
	/* ##########=====================########## */

	-- El (0) se considera (falso), los valores distintos de (0) se consideran (verdaderos).
	`booleano` BOOL, 
	`booleano` BOOLEAN, 
	
	/* ##########====================########## */
	/* ######===--- Datos de texto ---===###### */
	/* ##########====================########## */

	# Un objeto de cadena que puede tener 0 o más valores, elegidos de una lista de valores posibles.
	# Puede enumerar (hasta 64 valores) en una lista SET.
	`enumeracion_de_textos_elegidos` SET('Brandon', 'Anthony', 'Cosmic'), 
	-- Las enumeraciones solo admiten una insercion que se encuentre entre lo enumerado, 
	-- si lo que se inserta no esta en la enumeracion, entonces se insertara un 
	-- espacio en blancol.
	# Puede listar (hasta 65535 valores) en una lista ENUM.
	`enumeracion_de_textos` ENUM('Brandon', 'Anthony', 'Cosmic'), 
	-- Dato de cadena chico.
	`caracter` CHAR(1), 
	`caracter` CHAR(255), 
	-- Dato de cadena.
	`cadena` VARCHAR(0), 
	`cadena` VARCHAR(65535), 
	-- Una cadena de texto donde su valor maximo es de (255).
	`texto` TINYITEXT, 
	-- Una cadena con una longitud máxima de (65.535 bytes).
	`texto` TEXT, 
	-- Una cadena con una longitud máxima de (16 777 215 caracteres).
	`texto_medio` MEDIUMTEXT, 
	-- Una cadena con una longitud máxima de (4.294.967.295 caracteres).
	`texto_grande` LONGTEXT, 
	-- Al igual que CHAR solo admite valores binarios de acuerdo a sus cantidades.
	`binario` BINARY(1), 
	`binario` BINARY(255), 
	-- Al igual que VARCHAR solo admite valores binarios de acuerdo a sus cantidades.
	`binarios` VARBINARY(1), 
	`binarios` VARBINARY(65535), 

	/* ##########=====================########## */
	/* ######===--- Datos de tiempo ---===###### */
	/* ##########=====================########## */

	# Admite el valor por año de cuatro digitos.
	-- (format YYYY or YY).
	-- Valores permitidos en formato de cuatro dígitos: 1901 a 2155 y 0000.
	-- MySQL 8.0 no admite el año en formato de dos dígitos.
	`año` YEAR, 
	# Valor de solo hora.
	-- (format HH:MI:SS).
	-- El rango admitido es de '-838:59:59' a '838:59:59'.
	`hora` TIME, 
	# Guarda un valor de fecha.
	-- (format YYYY-MM-DD).
	-- El rango admitido es de '1000-01-01' a '9999-12-31'.
	`fecha` DATE, 
	# Guarda cualquier dato aun siendo anterior a 1070.
	-- (format: YYYY-MM-DD HH:MI:SS).
	-- El rango admitido es de '1000-01-01 00:00:00' a '9999-12-31 23:59:59'.
	`fecha_y_hora` DATETIME, 
	# Cuenta una marca de tiempo.
	-- (format: YYYY-MM-DD HH:MI:SS).
	-- El rango admitido es de '1970-01-01 00:00:01' UTC a '2038-01-09 03:14:07' UTC.
	`cuenta_creada` TIMESTAMP, 

	-- Inicia automaticamente el llenado del campo.
	-- Toma la fecha de la computadora.
	`cuenta_creada` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
	`cuenta_creada` DATETIME NOT NULL DEFAULT NOW(), 
	-- Cualquier modificacion a un registro de la tabla, la fecha se actualiza.
	`cuenta_actualizar` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
	`cuenta_actualizar` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW(), 

	/* ##########=====================########## */
	/* ######===--- Datos complejos ---===###### */
	/* ##########=====================########## */

	-- Objecto JSON.
	`json` JSON, 
	-- Un BLOB donde su valor maximo es de (255).
	`binario_blob` TINYBLOB, 
	-- Para BLOBs, almacena hasta (65.535 bytes) de datos.
	`blob` BLOB, 
	-- Para BLOBs, almacena hasta (16,777,215 bytes) de datos.
	`blob_medio` MEDIUMBLOB, 
	-- Para BLOBs, almacena hasta (4,294,967,295 bytes) de datos.
	`blob_grande` LONGBLOB, 
);