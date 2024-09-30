### ========================= ###
###### ===--- Redes ---=== ######
### ========================= ###

Por defecto los contenedores se encuentran aislados dentro de (Docker).

Pero podemos crear una red para que puedan comunicarse entre ellos.

# ----------------- #
# ------ Red ------ #
# ----------------- #

```bat
	: Permite ver todas las redes que hay en Docker.
	docker network ls

	: Creamos una red, en este caso llamada (mired).
	docker network create mired

	: Creamos una red, en este caso llamada (mired).
	docker network rm mired
```

### ================================ ###
###### ===--- Contenedores ---=== ######
### ================================ ###

<!-- 
	Creamos dos contenedores que esten bajo la misma red: 
		--- 1. Base de datos.
		--- 2. Aplicacion.
 -->
```bat
	: (--network): Permite asignar el contenedor a una red.

	: EXPOSE (puerto 3001) de mi ORDENADOR.
	: Asignamos el contenedor de la (base de datos) a (mired).
	docker create --network mired --name base-datos -p3001:3000 -e MYSQL_ROOT_PASSWORD=mi-pass -e MYSQL_DATABASE=mi_db -d mysql

	: EXPOSE (puerto 3000) de mi ORDENADOR.
	: Asignamos el contenedor de la (App) a (mired).
	docker create --network mired --name mi-contenedor -p3000:3000 node
```

<!-- Ahora arrancamos los contenedores. -->

```bat
	docker start base-datos
	docker start mi-contenedor
```

# -------------------------- #
# ------ Comunicacion ------ #
# -------------------------- #

Desde el contenedor (mi-contenedor)

```js
	const conexion = {
		// Nombre del (contenedor) que contiene la (DB).
		host: 'base-datos', 

		// Puerto interno del contenedor, (NO el de tu maquina).
		port: 3000, 

		// Credenciales seteadas al crear el contenedor.
		password: 'mi-pass', 
		database: 'mi_db', 
		user: 'root'
	}

	const connection = mysql.createConnection(conexion);
```

# NOTA: Si no creaste la red y la asignaste a los contenedores, 
# (entonces) no se encontraran entre ellos.