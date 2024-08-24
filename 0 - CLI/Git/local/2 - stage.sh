# ##########===========########## #
# ######===--- Stage ---===###### #
# ##########===========########## #

# El primer comando para comenzar un repositorio vacio.

# Arranca una carpeta agregando un directorio (.git).
git init

# ------------------------------ #
# ------ Agregar archivos ------ #
# ------------------------------ #

# Agrega un nuevo archivo para enviarlo.
git add archivo.txt

# Agrega mas de un archivo.
git add archivo.txt archivo_1.txt

# Agrega todos los archivos con extension (txt).
git add .txt

# Agrega todos los archivos del directorio, pero no agrega carpetas, 
# unicamente las rutas.
git add .

# ------------------------------- #
# ------ Eliminar archivos ------ #
# ------------------------------- #

# Elimina un archivo especifico agregado en el (stage).
# Puedes volver a agregarlo con (git add).
git rm --cached archivo.txt

# Elimina los archivos del de la zona (Stage) y lo restaura al ultimo (commit).
# Pero no afecta al directorio de trabajo..
git restore --staged myArchivo.html

# Elimina todos los archivos del (Stage).
# NOTA: Revierte los cambios no confirmados en el (directorio).
git reset --hard

# Recupera el archivo del último commit confirmado y lo restaura al (directorio).
git restore myArchivo.html

# ----------------------- #
# ------ Shorthand ------ #
# ----------------------- #

# Acoramiento para: 
#	--- rm myArchivo.html
#	--- git add myArchivo.html
git rm myArchivo.html

# Acortamiento para: 
#	--- mv myArchivo.html nuevoNombre.html
#	--- git add nuevoNombre.html
git mv myArchivo.html nuevoNombre.html

# ##########==========================########## #
# ######===--- Informacion de datos ---===###### #
# ##########==========================########## #

# Muestra todos los archivos.
#	--- Agregados (stage).
#	--- No agregados (directorio).
git status

# Muestra todos los archivos agregados y no agregados.
# Pero con mas detalles sobre cada archivo.
	# M ===  Modificado y no agregado.
	# D ===  Eliminado.
	# ?? ===  Nuevo y no agregado.
	# R ===  Renombrado.
	# C ===  Copiado.
	# UU ===  Conflictos de fusion.
	# A === Agregado.
git status -s

# Cambios (No Agregados).
# Muestra los cambios en los archivos modificados y no agregados (git add).
# Muestra las lineas agregadas y borradas de cada archivo.
git diff

# Cambios (Agregados).
# Muestra los cambios realizados en el (stage).
git diff --staged

# PUEDES SALIR CON 'Q'