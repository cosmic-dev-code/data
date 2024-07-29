# ##########==========================########## #
# ######===--- Configuracion de git ---===###### #
# ##########==========================########## #

# Muestra la version de git.
git --version

# Muestra todas las opciones de git.
git config

# Muestra todas las configuraciones que podemos hacer.
git config -h

# Muestra el archivo de configuracion de git en la terminal.
git config --list

# Muestra la lista de los origenes de cada configuracion.
git config --list --show-origin

# -------------------------------- #
# ------ Configurar sistema ------ #
# -------------------------------- #

# En los archivos suele haber saltos de linea, por lo cual, cada sistema operativo 
# deja caracteres especiales para cada salto de linea: 
	# Windows: (cr y lf).
	# Linux || Mac: (lf).
# Para esto configuramos a git para que en el caso de windows elimine los caracteres 
# especiales (cr) al subir el repositorio o los agregue al 
# descargar el repositorio.

	# Muestra todas las configuraciones incluyendo el usuario a nivel global, (si las hay).
	git config --global --list

	# Configurar (cr y lf) en cado de estar en Windows.
	git config --global core.autocrlf true

	# Configurar (cr y lf) en cado de estar en Linux.
	git config --global core.autocrlf input

# -------------------------------- #
# ------ Configurar usuario ------ #
# -------------------------------- #

# Configuramos el nombre del usuario de git.
git config --global user.name "Brandon Anthony"

# Configuramos el correo del usuario de git.
git config --global user.email "brandonolivares.developer@gmail.com"

# ------------------------------- #
# ------ Configurar editor ------ #
# ------------------------------- #

# Señalamos el editor con el que vamos a trabajar git. (Sublime)
git config --global core.editor "'C:/Program Files/Sublime Text/subl.exe' --wait"

# Señalamos el editor con el que vamos a trabajar git.
git config --global core.editor "code --wait"

# Abrimos el archivo de configuracion de git en el editor señalado.
git config --global -e