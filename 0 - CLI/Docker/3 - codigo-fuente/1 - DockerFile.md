### ============================== ###
###### ===--- DockerFile ---=== ######
### ============================== ###

El archivo [](DockerFile) permite crear una imagen y guardar en ella nuestro codigo 
fuente de cualquier aplicacion.

### ============================== ###
###### ===--- DockerFile ---=== ######
### ============================== ###

En el directorio de nuestra aplicacion creamos el [](DockerFile) SIN extension.

###### --- --- --- --- --- --- {proyecto}/src/DockerFile --- --- --- --- --- --- ######

# Indicar DIRECTORIO, (WORKDIR).

```sh
	# Aunque sea nuestra propia imagen.
	# Se debe usar una imagen base, por ejemplo, Node.js
	FROM node:14

	# Establece el (Directorio De Trabajo) donde se guardara nuestro proyecto.
	# Si el directorio no existe Docker creara uno.
	WORKDIR /app

	# Copia el archivo: 
	#	--- Desde el directorio donde se encuentra el DockerFile, (package.json) y (package-lock.json).
	#	--- Al (Directorio De Trabajo) (./)
	COPY package*.json ./

	# Instala las dependencias
	# (RUN), permite ejecutar comandos Linux dentro del sistema operativo de la imagen.
	RUN npm install

	# Copia el resto del código fuente.
	# 	--- Primer (.) Establece que copiara desde la ruta donde se encuentra el [DockerFile] en adelante.
	#	--- Segundo (.) Establece que copiara hacia el (Directorio De Trabajo) [/app] en adelante
	COPY . .

	# Expone el puerto (interno) en el que la aplicación escuchará.
	EXPOSE 3000

	# Define el comando para ejecutar la aplicación.
	# Por defecto los ejecuta en el (Directorio De Trabajo).
	CMD ["npm", "run", "dev"]
```

# Sin DIRECTORIO.

```sh
	FROM node:14

	# Creamos manualmente la ruta sin indicar el (Directorio De Trabajo).
	RUN mkdir -p /app

	# Copia desde el directorio donde se encuentra el (DockerFile).
	# Al directorio que creamos (./app)
	COPY package*.json ./app

	RUN npm install

	# Copia desde el directorio donde se encuentra el (DockerFile).
	# Al directorio que creamos (./app)
	COPY . ./app

	EXPOSE 3000

	# Especificamos al final la ruta.
	CMD ["npm", "run", "dev", "./app"]
```