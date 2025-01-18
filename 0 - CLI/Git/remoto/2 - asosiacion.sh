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

# ----------------------------------------- #
# ------ Ver o eliminar (asociacion) ------ #
# ----------------------------------------- #

# (-v), permite ver el repositorio al cual se asocia nuestro repositorio local, 
# (donde se hacen los push).
git remote -v
# 	--- origin  git@github.com:cosmic-dev-code/xoxpets-app.git (fetch)
# 	--- origin  git@github.com:cosmic-dev-code/xoxpets-app.git (push)

# Elimina la asociacion del repositorio (local) con el (remoto).
git remote remove origin