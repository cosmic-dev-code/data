/* ##########======================================########## */
/* ######===--- Crear procedimientos almacenados ---===###### */
/* ##########======================================########## */

/* -------------------------------------------- */
/* ------ Crear para (exportar/importar) ------ */
/* -------------------------------------------- */

#
# Para exportar: Generamos un procedimiento indicando desde donde empieza y desde donde termina 
# haciendo udo de la palabra reservada (DELIMITER) y de ($$).
#
DELIMITER $$
CREATE PROCEDURE `mostrar_datos`()
BEGIN
	-- Dentro podemos colocar las instrucciones (SQL) que queremos que se ejecuten.
	SELECT * FROM `registers`;
END $$
DELIMITER;

/* ------------------------------------------- */
/* ------ Crear dentro del editor (SQL) ------ */
/* ------------------------------------------- */

#
# En el editor: La forma de declarar en el editor es un poco distinta,
# ya que no es necesario que lleve los delimitadores.0
#
CREATE PROCEDURE `mostrar_datos`() SELECT * FROM `registers`;

# Esta es otra manera de crear un procedimiento.
CREATE DEFINER=`root`@`localhost` PROCEDURE `getall`() 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER -- Indicamos que crearemos sin el (DELIMITER).
SELECT * FROM `registers`; -- Aqui el (query).

/* ---------------------- */
/* ------ Ejecutar ------ */
/* ---------------------- */

# Mandamos a llamar el procedimiento con la palabra reservada (CALL).
CALL `mostrar_datos`();
CALL getall();

/* ##########================########## */
/* ######===--- Parametros ---===###### */
/* ##########================########## */

/* ----------------------------- */
/* ------ Recibir valores ------ */
/* ----------------------------- */

DELIMITER $$
	CREATE DEFINER=`root`@`localhost` 
	/* Aqui recibimos dos parametros de entrada (IN): 
		--- Uno de tipo "INT".
		--- Otro de tipo "VARCHAR". */
	PROCEDURE `by`(IN `id_pam` INT, IN `names_pam` VARCHAR(30))
		-- Podemos utilizar los parametros dentro de nuestra peticion (SQL).
		SELECT * FROM `registers` WHERE `id` = `id_pam` AND `names` = `names_pam` 
		GROUP BY `id` ORDER BY `id` DESC
$$ DELIMITER ;

# Esta es otra manera de crear un procedimiento almacenado, (especificando).
CREATE DEFINER=`root`@`localhost`  -- Donde se define.
PROCEDURE `whereby`(IN `id_param` INT, IN `names_param` VARCHAR(20)) -- Nombre del procedimiento y sus parametros.
	NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER -- Indicamos que no vamos a utilizar delimitadores.
	/* Aqui va el resto del (query). */
	SELECT * FROM `registers` WHERE `registers`.`id` = `id_param` AND `registers`.`names` = `names_param` 
	GROUP BY `registers`.`id` ORDER BY `registers`.`names`;

# Esta es otra manera de crear un procedimiento almacenado.
CREATE PROCEDURE `whereby`(IN `id_param` INT, IN `names_param` VARCHAR(20)) 
	SELECT * FROM `registers` WHERE `registers`.`id` = `id_param` AND `registers`.`names` = `names_param` 
	GROUP BY `registers`.`id` ORDER BY `registers`.`names`;

# Mandamos a llamar el procedimiento y le pasamos sus parametros.
CALL whereby(1, 'Brandon');
CALL `whereby`(1, 'Brandon');

/* ------------------------------ */
/* ------ Retornar valores ------ */
/* ------------------------------ */

# Con procedimiento a (exportar/importar).
DELIMITER $$
CREATE PROCEDURE `get_contains_brandon`(OUT `number` INTEGER, IN `names_param` VARCHAR(20))
BEGIN
	/* Con (INTO) indicamos que se van a introducir los datos a `number` de lo que devuelva la consulta (FROM). */
	SELECT COUNT(`registers`.`id`) INTO `number` FROM `registers` 
	WHERE `registers`.`names` LIKE `names_param`;
END 
$$ DELIMITER;

# Forma sencilla.
CREATE PROCEDURE `get_contains_brandon`(OUT `number` INTEGER, IN `names_param` VARCHAR(20)) 
	SELECT COUNT(`registers`.`id`) INTO `number` FROM `registers` WHERE `registers`.`names` LIKE `names_param`;

-- Declaramos una variable con "@" extrayendo lo retornado en la variable (numero_retornado).
CALL get_contains_brandon(@numero_retornado, 'Brandon');
CALL `get_contains_brandon`(@numero_retornado, 'Brandon');

-- Imprimimos lo retornado bajo un "alias", es el nombre de la columna que contendra en su unica celda y fila el 
-- valor retornado, (para entenderlo mejor).
SELECT @cantidad AS `Todos los que contienen Brandon`;

/* ------------------------------------------------- */
/* ------ (Entrada) y (salida) por parametros ------ */
/* ------------------------------------------------- */

# (INOUT) permite recibir la "referencia" una variable externa para modificar su valor.
CREATE PROCEDURE `increments`(INOUT increment INT(255))
	SELECT @all_count = `registers`.`id` FROM `registers`;
    SET @increment = @increment + @all_count;

-- Declaramos una variable llamada (increment) que recibe un valor entero.
SET @increment = 0;

-- Modificamos su valor por medio de los procedimientos.
CALL `increments`(@increment);
CALL `increments`(@increment);
CALL `increments`(@increment);

-- Imprimimos el valor de la variable (increment) despues de haber sido modificada por medio de los "procedimientos".
SELECT @increment AS `Cantidad sumatoria de incrementos`;

/* ##########=======================================########## */
/* ######===--- (Borrar) procedimiento almacenado ---===###### */
/* ##########=======================================########## */

# Borra el procedimiento por completo.
DROP PROCEDURE `nombre_del_procedimiento`;