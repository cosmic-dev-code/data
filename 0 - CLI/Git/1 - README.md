### ======================= ###
###### ===--- GIT ---=== ######
### ======================= ###

Git es un _sistema de control de versiones_ que permite a los desarrolladores trabajar en proyectos colaborativos y hacer un seguimiento de los cambios en el código. En este curso aprenderás cómo utilizar Git para controlar tus proyectos y trabajar de manera colaborativa.

### ================================= ###
###### ===--- Etapas en GIT ---=== ######
### ================================= ###

# Los archivos que movemos a [](git) se mueven a traves de distintas etapas.

# Primero: [](Computadora).
	# Aqui tenemos los archivos en los cuales estamos trabajando.
	# NO requiere autenticacion SSH.

# Segundo: [](Stage).
	# Se utiliza para elegir los archivos que se guardaran con diferentes versiones.
	# El (stage) se sobreescribe, por lo que no guarda versiones de un mismo archivo, (aqui solo se preparan).
	# Podemos decidir que agregar y que eliminar, (aun lo eliminado del ordenador lo guardamos).
	# Por defecto trabajamos en el (stage) de la rama principal (master).
	# NO requiere autenticacion SSH.

# Tercero: [](Commit) / [](Repositorio_local).
	# Los archivos pueden subirse al servidor.
	# Aqui un archivo puede irse guardando con distintas versiones de si mismo.
	# Cada version tiene su comentario.
	# Los cambios se guardan por defecto en la rama principal, (master).
	# NO requiere autenticacion SSH.

# Cuarto: [](Remoto) / [](Repositorio_remoto).
	# Los archivos pueden subirse a la nube, (pero esto es opcional, aunque por lo general se hace).
	# Se requiere una autenticacion (SSH) o (HTTPS).

# Quinto: [](Ramas).
	# Cuando hacemos (commit), los cambios se guardan en el repositorio, por defecto en la rama (master).
	# Podemos crear cuantas ramas queramos.
	# Podemos movernos entre las ramas.
	# Las ramas pueden tener su propia zona de (Stage).
	# Puede hacerse un commit a una rama en especifico.
	# Pueden manipularse las ramas o fucionarse entre si.
	# Se pueden unificar a la rama principal (master).

### ================================== ###
###### ===--- Stage y Commit ---=== ######
### ================================== ###

Cuando tenemos un archivo al cual __NO__ se ha hecho _(git add)_, entonces el archivo es inrastreable [](untracked). 

Cuando hacemos _(git add)_ a un archivo para ser rastreable [](tracked). El archivo se copia del directorio a la memoria temporal llamada [](staging) o [](stage).

De ahi se va al repositorio unificandose con la rama [](master) haciendo uso del comando [](commit).

# NOTA: Por defecto Los [](commit) se hacen a la rama [](master), al menos que crees una y te muevas a esa para manipularla, (como con la rama [master]).