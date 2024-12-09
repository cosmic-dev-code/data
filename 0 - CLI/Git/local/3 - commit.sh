# ##########============########## #
# ######===--- Commit ---===###### #
# ##########============########## #

# En git pueden existir ramas, (parecidas a lineas temporales). Por defecto solo existe una y nos encontramos en ella, 
# la rama (master).

# Se realiza el primer commit, que es el primer guardado.
# NOTA: Todos los archivos que estaban en el (stage) pasan a la zona (commit).
git commit -m "Cambio 1"

# En caso de mandar un archivo sin comentario, git automaticamente nos mandara a una ventana en donde debemos introducir 
# un mensaje, para salir de esa ventana debemos utilizar la siguiente conbinacion de teclas 
# NOTA: (ESC + SHIFT + presionar dos veces Z).
git commit

# ----------------------------- #
# ------ Agregar cambios ------ #
# ----------------------------- #

# Guardamos cada cambio.

git add .
git commit -m "Cambio 1"

git add .
git commit -m "Cambio 2"

git add .
git commit -m "Cambio 3 - Correccion de errores"

# Podemos (eliminar) un archivo.

rm myArchivo.html
# Guardamos el archivo eliminado, (solo estamos guardando el cambio de ese archivo).
git add myArchivo.html
git commit -m "Eliminando archivo CSS"

# Al (renombrar) un archivo aparecera en el stage como (renombrado).

mv myArchivo.html nuevo.html
# Agregamos el cambio.
git add myArchivo.html nuevo.html
git commit -m "Renombrando archivo"

# --------------------------- #
# ------ Acortamientos ------ #
# --------------------------- #

# Ejecuta automaticamente los comandos (git add .) y (git commit).
# (NOTA: Solo funciona con archivos que ya habian sido agregados [git add archivo.txt]).
git commit -an

# Igual a lo anterior pero ahora agregamos un comentario (git commit -m).
git commit -an -m "Nuevo repositorio"

# -------------------- #
# ------ Editar ------ #
# -------------------- #

# Modifica el (ultimo) commit enviado.
git commit --amend -m "Nueva descripcion"

# ##########===============================########## #
# ######===--- Versiones de un (archivo) ---===###### #
# ##########===============================########## #

# Muestra los ultimos cambios que se realizaron al archivo.
# Muestra el contenido de la primera version y de la segunda.
git show archivo.txt

# Muestra todos los (commit/cambios) realizados de nuestro archivo en la rama (master).
# 	--- (HEAD -> master) nos muestra el cambio mas reciente.
git log archivo.txt

# Muestra todos los (commit) realizados en la rama actual.
git log

# Lo mismo que (git log archivo.txt) pero solo muestra cambios especificos en cada (commit).
# 	--- Presione 'Q' para salir.
git log --stat

# Muestra cada commit con un 'id' asignado para cada uno, los 'comentarios' de cada uno.
# 	--- Desde el (primero) al (ultimo).
git log --oneline

# Compara dos versiones.
#	--- git log texto.txt
#	--- git diff {id-commit-1} {id-commit-2}
# En [rojo] muestra los cambios de la ultima version.
# En [verde] la version vieja.
git diff 61ba462ee1badd9a7cd67811a6172f61c49f5dd3 fe903e82dd70edaa39392f1a6f02129825e88895

# ##########=========================########## #
# ######===--- Moverse a un cambio ---===###### #
# ##########=========================########## #

# Tenemos tres cambios realizados en la rama (master).

git add .
git commit -m "Primero"

git add .
git commit -m "Segundo"

git add .
git commit -m "Tercero"

# Vemos los (commit) realizados
git log
# Rama (master) contiene: 
# 	--- #dgh135 commit gj922e82dd70gtjk39392f1a7375675668e20584 "Tercero" (master)
# 	--- #dfg268 commit dg917e82dd70fsdgfgh92f1a6f02129825e59760 "Segundo"
# 	--- #fhe573 commit fe903e82dd70edaa39392f1a6f02129825e88895 "Primero"

# Nos movemos al (commit "Primero").
# NOTA: Los cambios que realices no se guardaran.
git checkout fe903e82dd70edaa39392f1a6f02129825e88895

# Muestra los (commit) realizados hasta este punto.
# No muestra (Segundo) y (Tercero).
git log

# Regresas al commit actual, (la rama master).
git branch master

# ##########=======================########## #
# ######===--- Traer un (commit) ---===###### #
# ##########=======================########## #

# Para traer un commit y poder gurdar cambios en su propio Stage y zona Commit.

# Creamos una nueva (rama) en base a un (commit).
# Automaticamente se mueve a ella.
git checkout -b mi-nueva-rama gj922e82dd70gtjk39392f1a7375675668e20584

# Podemos realizar cambios en esta nueva version y conservalos.
git add .
git commit -m "Nuevos cambios a partir de aqui"

# ##########================================########## #
# ######===--- Traer versiones anteriores ---===###### #
# ##########================================########## #

# Reinicia el (directorio) y (stage) a una version anterior.
git reset fe903e82dd70edaa39392f1a6f02129825e88895 --hard

# Reinicia solo el (directorio) a una version anterior.
git reset fe903e82dd70edaa39392f1a6f02129825e88895 --soft

# Solo trae un archivo especifico.
git checkout fe903e82dd70edaa39392f1a6f02129825e88895 texto.txt

# Trae el archivo desde la rama (master) al directorio actual.
git checkout master texto.txt

# Traer un archivo de un (commir) anterior y lo agregamos a la rama actual.
git checkout fe903e82dd70edaa39392f1a6f02129825e88895 texto.txt
git add .
git commit -m "Agregar archivo que me traje a la rama master"

# Elimina los archivos de la zona (staging).
git reset HEAD