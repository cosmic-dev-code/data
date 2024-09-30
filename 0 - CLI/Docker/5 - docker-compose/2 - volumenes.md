### ============================= ###
###### ===--- Volumenes ---=== ######
### ============================= ###

En Docker cuando eliminas los contenedores, todo sus datos tambien se borran.

Si levantas un [](docker-compose), Que hay si quieres hacer cambios???

1. Para preservar los datos.
	<!-- Sea de una DB o archivos de la aplicacion. -->
2. (Binding) entre tus archivos y los del contenedor que se baso en ellos.
	<!-- Para no tumbar el contenedor y levantar para ver cambios. -->
3. Para dar mantenimiento.
	<!-- Tumbando los contenedores. -->
	<!-- Pero preservando los datos. -->

Eso solucionan los volumenes.

### ================================== ###
###### ===--- Docker Compose ---=== ######
### ================================== ###

<!-- Tenemos nuestro archivo (docker-compose). -->

```yml
	version: "3.9"

	services:
		mi-contenedor:
			build: .
			ports:
				- "3000:3000"
			links:
				- mi-db

		mi-db:
			image: mongo
			ports:
				- "27017:27017"
			environment:
				- MONGO_INITDB_ROOT_USERNAME=mi-usuario
				- MONGO_INITDB_ROOT_PASSWORD=mi-pass
			# Indicamos que va a utilizar un volumen ya declarado.
			volumes:
				# Le asignamos un valor al volumen ya declarado.
				#	--- (/data/db): Normalmente donde Mongo guarda sus datos.
				- mongo-data:/data/db


	# Define los volumenes que van a utilizar los (contenedores).
	volumes:
		# Declarar nombres para los volumenes.
		mongo-data:
```

<!-- Otras rutas de DB donde guardan sus datos. -->

Normalmente: 
	--- MongoDB: [](/data/db)
	--- MySQL: [](/var/lib/mysql)
	--- PostGres: [](/var/lib/postgresql/data)