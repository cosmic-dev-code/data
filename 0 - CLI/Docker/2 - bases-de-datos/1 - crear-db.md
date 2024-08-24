### ================================== ###
###### ===--- Bases de Datos ---=== ######
### ================================== ###

Podemos [](conectarnos) desde una aplicacion de nuestra computadora a una 
base de datos de docker contenida en un contenedor.

# ----------------------------------- #
# ------ Documentacion oficial ------ #
# ----------------------------------- #

Buscamos entre las imagenes de docker la imagen con la base de datos que 
queremos utilizar, por ejemplo (mysql).

La documentacion nos ofrecera las variables de entorno necesarias para esa base de datos.

# --------------------------------------------- #
# ------ Establecer variables de entorno ------ #
# --------------------------------------------- #

<!-- Las variables de entorno son las que conectaran nuestra (App) con la (DB). -->

```bat
	
	: Lo adicional que indicamos es: 
	:	--- (-e): Indica que se iniciara una variable de entorno dentro del contenedor.
	:	--- (MYSQL_ROOT_PASSWORD): Varible de entorno con el valor (mi-pass).
	:	--- (MYSQL_DATABASE): Varible de entorno con el valor (mi_db).
	docker run --name base-datos -p3001:3000 -e MYSQL_ROOT_PASSWORD=mi-pass -e MYSQL_DATABASE=mi_db -d mysql
```

<!-- El usuario por defecto es (root). -->
<!-- Podemos entrar a la Base De Datos. -->

```bat
	: Entramos al CLI del contenedor.
	docker exec -it base-datos /bin/bash

	: Entramos al CLI de la base de datos.
	mongosh

	: Podemos ejecutar comandos dentro de la DB de mongo.
	show dbs

	: Salimo de la DB.
	exit
	: Salimos del contenedor.
	exit
```