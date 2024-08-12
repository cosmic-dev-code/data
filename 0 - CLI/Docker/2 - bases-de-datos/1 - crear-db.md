### ================================== ###
###### ===--- Bases de Datos ---=== ######
### ================================== ###

Podemos [](conectarnos) desde una aplicacion de nuestra computadora a una 
base de datos de docker contenida en un contenedor.

# ----------------------------------- #
# ------ Documentacion oficial ------ #
# ----------------------------------- #

Buscamos entre las imagenes de docker la imagen con la base de datos que queremos utilizar, 
por ejemplo [](mysql).

La documentacion nos ofrecera las variables de entorno necesarias para esa base de datos.

# --------------------------------------------- #
# ------ Establecer variables de entorno ------ #
# --------------------------------------------- #

Las variables de entorno son las que conectaran nuestra [](App) con la [](DB).

- Indicamos.
	- [](-e): Indica que se iniciara una variable de entorno dentro del contenedor.
	- [](MYSQL_ROOT_PASSWORD): Varible de entorno con el valor (mi-pass).
		- Variable que establece el password de nuestra DB.
	- [](MYSQL_DATABASE): Varible de entorno con el valor (mi_db).
		- Variable que establece el nombre de la base de datos.

```bat
	docker run --name mi-base-de-datos -p3001:3000 -e MYSQL_ROOT_PASSWORD=mi-pass -e MYSQL_DATABASE=mi_db -d mysql
```

El usuario por defecto es [](root).