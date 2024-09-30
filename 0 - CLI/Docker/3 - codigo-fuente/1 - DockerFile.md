### ============================== ###
###### ===--- DockerFile ---=== ######
### ============================== ###

El archivo [](DockerFile) permite crear una imagen y guardar en ella nuestro codigo 
fuente de cualquier aplicacion.

De esa manera levantar los [](contenedores) con toda nuestra **App** corriendo.

### ============================== ###
###### ===--- DockerFile ---=== ######
### ============================== ###

En el directorio de nuestra aplicacion creamos el [](DockerFile) SIN extension.

# NOTA: Dentra raiz de nuestro proyecto.

###### --- --- --- --- --- --- {proyecto}/src/DockerFile --- --- --- --- --- --- ######

# 1. Proyecto con [](index) file.

```sh
	# Aunque sea nuestra propia imagen.
	# Se debe usar una imagen base, por ejemplo, Node.js
	FROM node:18

	# (RUN) sirve para correr un comando detro del contenedor.
	# En este caso (/home/app) se encuentra en el sistema de archivos del contenedor.
	# Ahi guardaremos todo el codigo de nuestra app.
	RUN mkdir -p /home/app

	# Copiar nuestro proyecto.
	#	--- Sistema de archivos de nuestra computadora.
	#		--- (.): Indica donde su ubica este archivo DockerFile.
	#	--- Sistema de archivos de nuestro contenedor.
	#		--- (/home/app): Hacia donde se copiaran los archivos.
	COPY . /home/app

	# Puerto por el cual podremos acceder a nuestro proyecto.
	EXPOSE 3000

	# Luego ejecutamos el comando dentro del contener para correr la aplicacion.
	CMD ["node", "/home/app/index.js"]
```

# 2. Buenas practicas CON [](WORKDIR).

```sh
	FROM node:14

	# Establece el (Directorio De Trabajo) donde se guardara nuestro proyecto.
	# Si el directorio no existe Docker creara uno.
	WORKDIR /app

	# Para aprovechar la cache de (Docker) 
	#	--- (package*.json): Copiamos (package.json) o (package-lock.json).
	# 	--- (./): Ya se posiciona en (/app) creado por WORKDIR.
	COPY package*.json ./

	# Instalamos las dependencias que vienen dentro del (package.json).
	RUN npm install

	# Copia el resto del código fuente.
	#	--- Desde este directorio.
	#	--- A la raiz de (/app) del contenedor.
	COPY . .

	# Exponemos el puerto por el cual accederemos a la aplicación
	EXPOSE 3000

	# Iniciamos el servidor, se posiciona automaticamente en (/app).
	CMD ["npm", "run", "dev"]
```

# 3. Proyecto SIN [](WORKDIR).

```sh
	FROM node:14

	# Manualmente un directorio, (/app).
	RUN mkdir -p /app

	# Copiamos al directorio las depenedencias.
	COPY package*.json ./app

	# Instalamos dependencias.
	RUN npm install

	# Desde el DockerFile al directorio el resto del codigo.
	COPY . ./app

	EXPOSE 3000

	# Especificamos al final la ruta para iniciar el servidor.
	CMD ["npm", "run", "dev", "./app"]
```

# 3. Proyecto SIN [](WORKDIR) forma MANUAL.

<!--
	--- (docker create): Creamos un contenedor.
	--- (-p): Publicaremos en puertos === [publish].
		--- Puerto [3000] de nuestra computadora.
		--- Puerto [3000] del contenedor.
	--- (name): Nombre del contenedor.
	--- (node): Nombre de la imagen a utilizar.
		--- En este caso una imagen con la dependencia de node instalada.
-->
```bat
	: (-it /bin/bash) Permite entrar al contenedor creado, (No iniciado).
	docker run -it --name mi-contenedor node:14 /bin/bash

	: DENTRO DEL CONTENEDOR.

	: Crear carpeta del proyecto.
	mkdir -p /app

	: Copiar dependencias (./package.json) hacia (mi-contenedor:/app/).
	docker cp ./package.json mi-contenedor:/app/

	: Iniciamos el contenedor.
	: Entramos al contenedor (Iniciado).
	docker start -i mi-contenedor

	: Instalamos las dependencias.
	cd /app
	npm install

	: Copiamos el resto del codigo.
	docker cp ./ mi-contenedor:/app/

	: Iniciamos el proyecto.
	npm run dev
```

### ==================================== ###
###### ===--- Crear DockerFile ---=== ######
### ==================================== ###

<!-- Con este comando creas la imagen de docker. -->

```bat
	: 	--- (-t), se utiliza para etiquetar la imagen con nombre.
	:		--- (mi-imagen), (mi-imagen:v1)
	: 	--- (.), indica la ruta del DockerFile a ejecutar.
	docker build -t mi-imagen .
	docker build -t mi-imagen:v1 .

	: Si tu proyecto con tu DockerFile estan en otro directorio.
	docker build -t mi-imagen /ruta/a/mi/directorio

	: Puedes agregar una etiqueta adicional para diferenciar entre versiones.
	:	--- (:v1.0), Indica la version.
	docker build -t mi-imagen:v1.0 .
```