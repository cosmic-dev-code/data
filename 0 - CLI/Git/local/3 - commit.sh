# ##########============########## #
# ######===--- Commit ---===###### #
# ##########============########## #

# En git pueden existir ramas, (parecidas a lineas temporales). Por defecto solo existe una y nos encontramos en ella, 
# la rama (master).

# Se realiza el primer commit, que es el primer guardado.
# NOTA: Todos los archivos que estaban guardados en el (stage) pasan a la zona del (commit).
git commit -m "Cambio 1"

# En caso de mandar un archivo sin comentario, git automaticamente nos mandara a una ventana en donde debemos introducir 
# un mensaje, para salir de esa ventana debemos utilizar la siguiente conbinacion de teclas 
# NOTA: (ESC + SHIFT + presionar dos veces Z).
git commit

# ----------------------------- #
# ------ Agregar cambios ------ #
# ----------------------------- #

# Hacemos una modificacion.
git add .
git commit -m "Cambio 1"

# Otros cambios.
git add .
git commit -m "Cambio 2"

# Otro cambio, quiza una correccion de errores.
git add .
git commit -m "Cambio 3 - Correccion de errores"

# Podemos eliminar un archivo.
rm myArchivo.html
# Guardamos el archivo eliminado, (suena raro pero solo estamos guardando el cambio de ese archivo).
git add myArchivo.html
git commit -m "Eliminando archivo CSS"

# Al renombrar un archivo aparecera en el stage como (renombrado).
mv myArchivo.html nuevo.html
# Agregamos el cambio.
git add myArchivo.html nuevo.html
git commit -m "Renombrando archivo"

# --------------------------- #
# ------ Acortamientos ------ #
# --------------------------- #

# Ejecuta automaticamente los comandos (git add .) y (git commit).
# (NOTA: Esto solo funciona con archivos los cuales ya habian sido agregados automaticamente [git add archivo.txt]).
git commit -an

# Igual a lo anterior pero ahora agregamos un comentario (git commit -m).
git commit -an -m "Nuevo repositorio"

# ##########==============================================########## #
# ######===--- Visualizar las versiones de un (archivo) ---===###### #
# ##########==============================================########## #

# Muestra los ultimos cambios que se realizaron al archivo.
# Muestra el contenido de la primera version y de la segunda.
git show archivo.txt

# Muestra todos los (commit/cambios) realizados de nuestro archivo en la rama (master).
# (HEAD -> master) nos muestra el cambio mas reciente.
git log archivo.txt

# Muestra todos los (commit) realizados en la rama actual.
git log

# Muestra lo mismo que (git log archivo.txt) pero aqui solo muestra los cambios especificos que se hicieron en 
# cada uno de los (commit).
#
# Presione 'Q' para salir.
git log --stat

# Muestra cada uno de los commit con un (id) asignado para cada uno, muestra los comentarios de cada commit, 
# desde el ultimo que se hizo hasta el primero.
git log --oneline

# Compara dos versiones colocando la primera version, espacio, la segunda version. (Estas versiones se consiguen 
# con el comando (git log texto.txt)). En rojo muestra los cambios de la ultima version y en verde la 
# version vieja.
git diff 61ba462ee1badd9a7cd67811a6172f61c49f5dd3 fe903e82dd70edaa39392f1a6f02129825e88895

# ##########===================########## #
# ######===--- Traer cambios ---===###### #
# ##########===================########## #

# Tenemos tres cambios realizados en la rama (master).

git add .
git commit -m "Primero"

git add .
git commit -m "Segundo"

git add .
git commit -m "Tercero"

# Esto nos muestra los (id) de cada commit y todos los commit que hemos hecho dentro de la rama actual, (master).
git log
# Rama (master) contiene: 
# 	--- #dgh135 commit gj922e82dd70gtjk39392f1a7375675668e20584 "Tercero" (master)
# 	--- #dfg268 commit dg917e82dd70fsdgfgh92f1a6f02129825e59760 "Segundo"
# 	--- #fhe573 commit fe903e82dd70edaa39392f1a6f02129825e88895 "Primero"

# Nos movemos a la primera version, (Primero), por lo que ya no estamos en (master) sino en (#fhe573).
git checkout fe903e82dd70edaa39392f1a6f02129825e88895
# Aqui (los cambios que realices no se guardaran a menos que crees una nueva rama para guardar los cambios).
# Si haces (git add) y algun (commit), estos cambios se perderan cuando te muevas a un cambio diferente.

# Ahora solo muestra los (commit) realizados hasta este punto, por lo que no muestra (Segundo) y (Tercero).
git log

# Regresas al commit actual, (la rama master).
git branch master

# ##########================================########## #
# ######===--- Traer versiones anteriores ---===###### #
# ##########================================########## #

# Resetea todo a una version anterior.
git reset fe903e82dd70edaa39392f1a6f02129825e88895 --hard

# Resete solo el directorio a una version anterior.
git reset fe903e82dd70edaa39392f1a6f02129825e88895 --soft

# Trae un solo archivo colocando el (commit) y el nombre del archivo.
git checkout fe903e82dd70edaa39392f1a6f02129825e88895 texto.txt

# Trae el archivo actual de (master), (esto sirve cuando se trae un archivo de un commit 
# anterior y se desea restaurar el que se tenia actualmente).
git checkout master texto.txt

# Traemos un archivo anterior y lo agregamos a la rama master.
git checkout fe903e82dd70edaa39392f1a6f02129825e88895 texto.txt
git add .
git commit -m "Agregar archivo que me traje a la rama master"

# Quitamos los archivos de la zona (staging).
git reset HEAD