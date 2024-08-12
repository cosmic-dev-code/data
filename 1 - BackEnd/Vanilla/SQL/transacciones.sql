
-- Indica que va iniciar una transaccion.
BEGIN TRANSACTION 

-- Indica a la base de datos que puede considerar que la transaccion fue completada con exito.
COMMIT

-- Indica que se ha presentado un fallo y que debe reestablecer la base de datos.
ROLLBACK

-- Ejemplo: 
BEGIN TRANSACTION
	-- Se hace una transaccion.
	UPDATE usuarios SET id = 'Brandon-01' WHERE id = 'Brand-01'
	INSERT INTO usuarios(id, nombre) VALUES ('Brand-02', 'Brandon Anthony')

	-- Si no hay errores en la transaccion.
	IF(@@ERROR <> 0) BEGIN 
		-- Reestablecer la base de datos.
		ROLLBACK
		PRINT('Error')
	END ELSE BEGIN 
		-- Informar a la base de datos que todo salio bien.
		COMMIT
		PRINT('Ok')
	END