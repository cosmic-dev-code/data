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