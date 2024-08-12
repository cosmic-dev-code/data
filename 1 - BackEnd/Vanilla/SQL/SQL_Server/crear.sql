-- Escalar.
CREATE FUNCTION CalcularIVA(@price money) RETURNS money
AS 
BEGIN 
	DECLARE @IVA money
	SET @IVA = @price * 116

	RETURN @IVA
END

-- En linea.
CREATE FUNCTION clientesMismaNacionalidad(@pais nvarchar(15)) RETURNS table
AS RETURN (
	SELECT id, nombre, pais FROM clientes WHERE pais = @pais
	-- No se puede utilizar sentencias como ORDER BY.
)

-- Multiple sentencia.
CREATE FUNCTION clientesMismaNacionalidad(@pais nvarchar(15)) 
RETURNS @tablaPais table(
	id int, 
	nombre nvarchar(40), 
	pais nvarchar(30)
)
BEGIN
	-- Insertar datos para la tabla declarada, se extraen de la tabla (clientes).
	INSERT INTO @tablaPais SELECT id, nombre, pais FROM clientes
	WHERE pais = @pais
	RETURN
END

-- Para usar.

SELECT id, name, price, dbo.CalcularIVA(price) AS IVA F

SELECT * FROM dbo.clientesMismaNacionalidad('Mexico')