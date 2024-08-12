# ##########=====================########## #
# ######===--- Conexion remota ---===###### #
# ##########=====================########## #

# Para poder conectar con un repositorio remoto, primero debemos generar un (token) en: 
	# Profile > 
		# Settings > 
			# Developer settings > 
				# Personal access tokens > 
					# Generate new token > 
						# Ingresamos un nombre para nuestro token, (Note).
						# Marcamos la casilla, (repo); podemos marcar mas casillas si queremos.
						# Luego damos 'click' en (Generate token).

# Esto generara un token que vamos a utilizar para conectarnos a nuestro repositorio remoto.

# Le indicamos a nuestro proyecto la (url) a la cual vamos a subir nuestros archivos la cual es: 
# (https://github.com/BrandonAnthony/Web.git).
#
# Esto pedira el (token) que debimos haber generado, por lo cual debemos ingresarlo y continuar.
git remote add origin https://github.com/BrandonAnthony/Web.git

# Mandamos al repositorio remoto (https://github.com/BrandonAnthony/Web.git) los archivos de la rama (master).
git push -u origin master

# ##########============================########## #
# ######===--- Subir a un repositorio ---===###### #
# ##########============================########## #

# Primero creas un repositorio en GitHub.

# 1. Click en (Profile) > (Your repositories).
# 2. Click en el boton (New).

# Inicias git.
git init

# ----------------------------------- #
# ------ Subir varios archivos ------ #
# ----------------------------------- #

# Agregas tus archivos.
git add .

# Haces tus commits, tambien puedes crear tus ramas y demas.
git commit -m "Primer cambio"

# Subes al repositorio que acabas de crear.
git remote add origin https://github.com/{usuario}/{nombre del repositorio}.git

# Guardas la rama especifica que desees, (en este caso la master).
git push -u origin master

# NOTA: Ya debes haber creado tus claves (SSH) en tu ordenador y aberlas dado de alta en tu GitHub.
# NOTA: Recuerda que el .gitignore ignora todos los archivos y directorios especificados.

# ----------------------------------------- #
# ------ Actualizacion de un archivo ------ #
# ----------------------------------------- #

# Vuelves a agregar tu archivo.
git add myArchivo.txt

# Haces tu commit descriptivo.
git commit -m "Cambio de mi archivo"

# Vuelves a guardar tu archivo en la rama que desees, (en este caso la master).
git push -u origin master

# ##########=====================================########## #
# ######===--- Actualizar repositorio (remoto) ---===###### #
# ##########=====================================########## #

# Una vez hecho los dos pasos anteriores, solo basta poner este comando para que los archivos 
# de la rama especificada se guarden en el repositorio (remoto).
git push

# Creamos otra rama la cual se guarda en el repositorio (remoto).
git checkout -b otraRama
git push -u origin otraRama

# ##########==========================########## #
# ######===--- Eliminar rama remota ---===###### #
# ##########==========================########## #

# Borramos la rama remota (otraRama).
git push origin --delete otraRama

# ##########================================########## #
# ######===--- Sincronizar local y remoto ---===###### #
# ##########================================########## #

# Trae una actualizacion del repositorio (remoto) y lo copia al repositorio (local).
git fetch

# Todas las ramas se sincronizan, de manera que las ramas que se crean o se eliminan, 
# lo hacen tambien en el repositorio remoto.
git fetch -p

# Clona un repositorio (remoto) al repositorio (local) y al directorio de 
# trabajo y deja la zona (stage) lista para ser utilizada.
git clone https://github.com/BrandonAnthony/Web.git

# Despues del comando anterior actualizamos tambien nuestro directorio copiando los archivos del repositorio 
# (local) al directorio actual luego de haber traido una actualizacion del repositorio (remoto).
git merge

# Es la abreviacion o fucion de los comandos (git fetch) y (git merge).
git pull