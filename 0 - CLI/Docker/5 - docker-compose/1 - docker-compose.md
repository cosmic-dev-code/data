### ================================== ###
###### ===--- Docker Compose ---=== ######
### ================================== ###

El archivo (docker-compose) permite: 
	--- Crear imagenes.
	--- Crear contenedores.
	--- Configurarlos.
	--- Exponerlos.
	--- Nombrarlos.
	--- Etc.

Todo automatizado, de manera que, al ejecutar el (docker-compose), 
levantemos todo al instante.

### ================================= ###
###### ===--- Archivo (yml) ---=== ######
### ================================= ###

###### --- --- --- --- --- --- {proyecto}/docker-compose.yml --- --- --- --- --- --- ######

```yml
	version: "3.9"

	services:
		# Nombres para los contenedores.

		mi-contenedor:
			# Ruta del (DockerFile) a construir para este contenedor.
			# (DockerFile) === (Imagen)
			build: .
			# Indica los puertos.
			#	--- (3000): El de tu ordenador.
			#	--- (3000): El de este contenedor.
			ports:
				- "3000:3000"
			# Contenedores con el que se comunica este contenedor.
			links:
				- mi-db

		mi-db:
			# Este contruye directamente desde una imagen para este contenedor.
			image: mongo
			ports:
				- "27017:27017"
			# Indicamos las variables de entorno.
			environment:
				- MONGO_INITDB_ROOT_USERNAME=mi-usuario
				- MONGO_INITDB_ROOT_PASSWORD=mi-pass
```

# NOTA: Recordemos que (DockerFile) es una imagen que se contruye, 
# y se basa en otra imagen.

# ---------------------- #
# ------ Ejecutar ------ #
# ---------------------- #

<!-- Ahora ejecutamos el archivo de (docker-compose). -->

```bat
	: (Crea) las imagenes.
	: (Crea), (ejecuta) y hace (logs) de los contenedores.
	: (Crea) una red y relaciona todos los contenedores dentro de la misma.
	docker-compose up

	: Elimina los (contenedores) y la (red).
	docker-compose down
```

# NOTA: Debes encontrarte en la raiz donde esta el [](docker-compose)