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

# ##########============================########## #
# ######===--- Subir a un repositorio ---===###### #
# ##########============================########## #

# Primero creas un repositorio con GitHub.

# 1. Click en (Profile) > (Your repositories).
# 2. Click en el boton (New).

# ------------------------------ #
# ------ Guardar en local ------ #
# ------------------------------ #

# Inicias git.
git init

# Agregas tus archivos al (stage).
git add .

# Haces tus commits, tambien puedes crear tus ramas y demas.
git commit -m "Primer cambio"

# ----------------------------------------------- #
# ------ Conectar con repositorio (remoto) ------ #
# ----------------------------------------------- #

# Exsiten dos formas de hacerlo.

# 1. ASOCIAR EL DIRECTORIO LOCAL A UN REPOSITORIO REMOTO.

# Le indicamos a git la (url) a la cual subir los archivos
# Pedira el (token) que debimos haber generado, debemos ingresarlo y continuar.
git remote add origin https://github.com/{usuario}/{nombre del repositorio}.git
git remote add origin https://github.com/BrandonAnthony/Web.git

# 1. CLONAR EL REPOSITORIO REMOTO.

# Clona un repositorio (remoto) al repositorio (local) y al directorio de trabajo.
# Deja la zona (stage) lista para ser utilizada.
git clone https://github.com/BrandonAnthony/Web.git
# Clonar en un (directio) especifico o en (mas) de uno.
git clone https://github.com/BrandonAnthony/Web.git /ruta/a/directorio1
git clone https://github.com/BrandonAnthony/Web.git /ruta/a/directorio2

# --------------------------------------- #
# ------ Guardar cambios (remotos) ------ #
# --------------------------------------- #

# Guardas la rama especifica que desees, (en este caso la master).
# Al repositorio (https://github.com/BrandonAnthony/Web.git) a la rama (master).
git push -u origin master

# NOTA: Ya debes haber creado tus claves (SSH) en tu ordenador y aberlas dado de alta en tu GitHub.
# NOTA: Recuerda que el .gitignore ignora todos los archivos y directorios especificados.

# --------------------------------------- #
# ------ Actualizacion de una rama ------ #
# --------------------------------------- #

# Vuelves a agregar tus archivos.
git add myArchivo.txt

# Haces tu commit descriptivo.
git commit -m "Cambio de mi archivo"

# Mandar los cambios al repositorio.
# NOTA: En este caso, los manda a la rama en donde estes (master).
git push

# ##########===================########## #
# ######===--- Rama (remota) ---===###### #
# ##########===================########## #

# Creamos nueva rama y nos cambiamos a ella.
git checkout -b otraRama

# Guardamos archivos en esta rama, (staging) y (commit).
git add .
git commit -m "Nuevos cambios en esta rama llamasa (otraRama)"

# Guardamos esta nueva rama con sus cambios en el repositorio remoto.
git push -u origin otraRama

# ------------------------------------- #
# ------ Cambios a la nueva rama ------ #
# ------------------------------------- #

# Todos los (push) que realices ahoran seran para (otraRama), a menos que cmabies de rama.
git push

# ---------------------------------- #
# ------ Eliminar rama remota ------ #
# ---------------------------------- #

# Borramos la rama remota (otraRama).
git push origin --delete otraRama

# ##########===================########## #
# ######===--- Traer cambios ---===###### #
# ##########===================########## #

# ------------------------------------- #
# ------ Descargar ramas remotas ------ #
# ------------------------------------- #

# Solo (descarga) una actualizacion de las ramas del repositorio.
# (Sin realizar cambios en tu directorio de trabajo).
git fetch

# Descarga los cambios de una rama especifica, (no altera el estado de trabajo actual).
git fetch origin main

# Igual que el anterior, pero (elimina) las ramas (locales) que hacen referencia a las 
# ramas [remotas que ya no existen].
git fetch -p
git fetch --prune

# ----------------------------------- #
# ------ Ver ramas descargadas ------ #
# ----------------------------------- #

# Tambien muestra la rama (Actual).

# Muestra un listado de todas las ramas (locales) que tenemos.
# 	--- rama-1
# 	--- rama-2
git branch

# Vemos un listado de las ramas (remotas) que tenemos.
# (origin/) es el nombre que hace referencia a una rama (remota descargada).
# 	--- origin/mi-rama-1
# 	--- origin/mi-rama-2
# 	--- origin/mi-rama/casi-final
git branch -r

# Lista las ramas (locales) y (remotas).
# 	--- rama-1
# 	--- rama-2
# 	--- origin/mi-rama-1
# 	--- origin/mi-rama-2
# 	--- origin/mi-rama/casi-final
git branch -a

# Muestra un resumen mas detallado de las (ramas) y sus (commits).
git show-branch -r

# ------------------------------ #
# ------ Fusionar cambios ------ #
# ------------------------------ #

# Fusionamos la rama actual con los cambios de la rama remota (mi-rama-2).
# NOTA: Si hay conflictos, git pide que los resuelvas manualmente.
git merge origin/mi-rama-2

# Descarga los cambios actuales de la rama main : (git fetch main)
# Y los fusiona a tu rama local actual (git merge origin/mi-rama-2)
git pull origin main

# Una forma acortada.
# 	--- git fetch {rama-actual}
# 	--- pull origin {rama-actual}
git pull

# Crea una rama local y se mueve a ella.
#	--- git checkout -b mi-nueva-dos
# Especifica la rama local (mi-nueva-dos) se basara en la remota (mi-rama-2).
#	--- git origin/mi-rama-2
git checkout -b mi-nueva-dos origin/mi-rama-2

# --------------------------- #
# ------ Eliminar rama ------ #
# --------------------------- #

# Elimina la rama remota (mi-rama-2).
git push origin --delete mi-rama-2

# Forza la eliminacion de una rama.
git branch -D mi/rama-remota

# OPCIONALMENTE LOCAL.

# (Opcionalmente) puedes borrar tambien la (local).
git branch --delete features/nueva_rama