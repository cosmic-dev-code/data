/* ##########=========================########## */
/* ######===--- Crear procedimiento ---===###### */
/* ##########=========================########## */

-- Creamos un procedimiento llamado (my_procedure).
CREATE PROCEDURE my_procedure 
AS -- Aqui comienza nuestro procedimiento.

	/* Cuerpo de nuestro procedimiento. */
	SELECT * FROM administradores

GO; -- Aqui termina nuestro procedimiento.

EXEC my_procedure;
-- Ejecutamos nuestro procedimiento.

/* ##########======================================########## */
/* ######===--- Parametros en los procedimientos ---===###### */
/* ##########======================================########## */

-- Creamos nuestro procedimientos, los parametros se definen con un (@) y su tipo de dato.
CREATE PROCEDURE my_procedure @ciudad NVARCHAR(30), @estado NVARCHAR(255)
AS
	SELECT * FROM usuarios WHERE ciudad = @ciudad AND estado = @estado
	-- Ahora los parametros actuan como variables.
GO;

EXEC my_procedure @ciudad = 'Tijuana', @estado = 'Baja california';
-- Al ejecutar el procedimiento, le damos los los valores a cada parametro.

/* ------------------------------ */
/* ------ Retornar valores ------ */
/* ------------------------------ */

CREATE PROCEDURE intertar_o_actualizar @id NCHAR(5), @nombre NVARCHAR(40) AS 
BEGIN
	INSERT INTO usuarios(id, nombre) VALUES (@id, @nombre)
	IF(@@ERROR <> 0) BEGIN 
		UPDATE usuarios SET @id = id, nombre = @nombre WHERE id = @id
		PRINT('Actualizado')
	END
	ELSE BEGIN
		PRINT('Insertado')
	END

	SELECT * FROM usuarios WHERE id = @id;
END

DECLARE @id_cambiado NCHAR(5)

EXECUTE intertar_o_actualizar 'B-5', @id_cambiado OUTPUT

SELECT @id_cambiado