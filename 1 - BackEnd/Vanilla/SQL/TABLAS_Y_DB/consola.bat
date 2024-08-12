beco$ mysql -u -root -h localhost -p

	: --- Password: *******

beco$ mysql -u -root -h localhost -******
	: --- Esta es la forma insegura.
	: --- CRL + L borra la consola.

$mysql -u root -p < all_schema.sql
	: --- Password: *******

$mysql -u root -p -D my_data_base < all_data.sql
	: --- Password: *******
	: --- Cargamos archivos a la base de datos.