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

# Elimina los archivos del (add).
git rm --cached archivo.txt

# Remueve el archivo de la etapa del (Stage).
git restore --staged myArchivo.html

# Elimina todos los archivos del (Stage).
git reset --hard

# Restaura un archivo eliminado del (Stage) hacia la (Computadora).
git restore myArchivo.html

# ----------------------- #
# ------ Shorthand ------ #
# ----------------------- #

# Este comando acorta los comandos (rm myArchivo.html) y (git add myArchivo.html).
git rm myArchivo.html

# Este comando acorta los comandos (mv myArchivo.html nuevoNombre.html) y (git add nuevoNombre.html).
git mv myArchivo.html nuevoNombre.html

# ##########==========================########## #
# ######===--- Informacion de datos ---===###### #
# ##########==========================########## #

# Muestra todos los archivos agregados.
git status

# Muestra los archivos con menos informacion: 
	# M, en rojo: Un archivo modificado y no agregado.
	# M, en verde: Un archivo modificado y agregado.
	# ??, en rojo: Un archivo nuevo y no agregado.
	# A, en vere: Un archivo nuevo agregado.
git status -s

# Muestra los cambios realizados en un archivo modificado y no agregado, muestra las nuevas 
# lineas agregadas y borradas.
git diff

# Muestra los cambios realizados en el (stage).
git diff --staged