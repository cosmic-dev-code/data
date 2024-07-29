CREATE TRIGGER usuarioActualizado
ON [usuarios]
-- FOR - primero se activa el trigger y luego el DML.
	-- Se ejecuta antes de insertar un nuevo registro a la tabla [usuarios].
-- AFTER - primer se activa el DML y luego el trigger.
	-- Se ejecuta despues de insertar un nuevo registro a la tabla [usuarios].

-- DML === instruccion
FOR INSERT
AS 
BEGIN
	DECLARE @cantidad smallint, @producto_id int, @categoria_id smallint

	SELECT @cantidad = cantidad, @producto_id = id FROM productos
	SELECT @categoria_id = categoria_id FROM alamcenes WHERE producto_id = @producto_id

	UPDATE productos SET cantidad = @cantidad + 1 WHERE id = @producto_id
END