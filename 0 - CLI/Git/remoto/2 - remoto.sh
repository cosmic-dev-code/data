# ##########===============================########## #
# ######===--- Guardar cambios (remotos) ---===###### #
# ##########===============================########## #

# Guardas la rama especifica que desees, (en este caso la master).
git push -u origin master

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

# Descarga los cambios actuales de la rama (main) y los fusiona a tu rama (local actual): 
#	--- git fetch main
#	--- git merge origin/mi-rama-2
git pull origin main

# Una forma acortada.
# 	--- git fetch {rama-actual}
# 	--- pull origin {rama-actual}
git pull

# Crea una rama local llamada (mi-nueva-dos) basada en (mi-rama-2) y se mueve a ella.
#	--- git checkout -b mi-nueva-dos
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

# ##########====================########## #
# ######===--- Hacer (rebase) ---===###### #
# ##########====================########## #

# ------------------------------ #
# ------ Cambiar de ramas ------ #
# ------------------------------ #

# Vemos ramas remotas, digamos que estamos en (mi-rama-2).
git branch

# Digamos que (release_review) es la rama remota principal, (cambiamos a esa rama).
git checkout release_review

# Actualizamos la rama trayendo todos los cambios remotos.
# 	--- git pull
git pull origin release_review

# Regresamos a nuestra rama.
git checkout mi-rama-2

# (mi-rama-2) rebasara a (release_review).
# Si hay cambios git pedira resolverlos manualmente.
git rebase release_review

# --------------------------------- #
# ------ Utilizar (--rebase) ------ #
# --------------------------------- #

# Tu rama local digamos que es (mi-rama-2).
git branch

# Traer los cambios de la rama remota y hacer rebase sobre ella.
git pull --rebase origin release_review

# Aborta el (rebase).
git rebase --abort

# ---------------------------------- #
# ------ Rebase (interactivo) ------ #
# ---------------------------------- #

# (mi-rama-2) rebasara a (release_review).

# Este comando abrirá un editor donde podrás seleccionar qué hacer con cada commit, puedes elegir: 
#	--- "pick" (mantener).
#	--- "squash" (combinarlos).
#	--- "edit" (editar).
#	--- "drop" (eliminar).
git rebase -i release_review