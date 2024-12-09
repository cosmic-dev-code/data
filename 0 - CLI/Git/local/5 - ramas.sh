# ##########===============########## #
# ######===--- Las ramas ---===###### #
# ##########===============########## #

# En Git, las ramas son una forma de separar el historial de cambios de un proyecto en diferentes líneas de 
# desarrollo independientes. Es decir, las ramas son como diferentes versiones de un mismo proyecto 
# que se desarrollan de manera paralela.

# La rama principal, también conocida como rama "master", es la rama predeterminada en la que se encuentra el 
# código base de un proyecto. A partir de la rama "master", se pueden crear nuevas ramas para desarrollar 
# nuevas funcionalidades o correcciones de errores sin afectar directamente el código base.

# Cada rama en Git tiene su propio historial de cambios, y los cambios realizados en una rama no afectan a las 
# demás ramas hasta que se fusionan de nuevo con la rama principal o con otra rama. Esto permite trabajar 
# en diferentes características de un proyecto de manera independiente y colaborar en el mismo código 
# de forma más eficiente.

# ----------------------- #
# ------ Ver ramas ------ #
# ----------------------- #

# Muestra un listado de todas las ramas (locales) que tenemos.
# Y muestra la rama (Actual).
git branch

# USO REMOTO.

# Vemos un listado de las ramas (remotas) que tenemos descargadas.
git branch -r

# Lista las ramas (locales) y (remotas).
git branch -a

# Muestra un resumen mas detallado de las (ramas) y sus (commits).
git show-branch -r

# ------------------------- #
# ------ Crear ramas ------ #
# ------------------------- #

# Podemos crear varias ramas y cada una de ellas tendra su propio (Stage) y (Commit), 
# podemos utilizar los comandos en cada una de las ramas.

# Crea una nueva rama llamada (mi-rama).
git branch mi-rama
git branch miRama

# Muchos especifican los nombres de las ramas cuando trabajan en equipo.
git branch project/brandon
git branch project/anthony
git branch project/cosmic

# --------------------------------- #
# ------ Moverse entre ramas ------ #
# --------------------------------- #

# Nos movemos a la rama (master).
git checkout master

# Ahora nos movemos a la rama (mi/nueva).
git checkout mi/nueva

# Muestra la rama actual.
git branch

# (Crea) una nueva rama llamada (mi/nueva) y se (mueve) a ella.
#	--- git branch mi/nueva
#	--- git checkout mi/nueva
git checkout -b mi/nueva

# -------------------------------------------- #
# ------ Fusionar cambios de una (rama) ------ #
# -------------------------------------------- #

# Estamos en la rama (master).
git branch

# Fusionamos la rama actual (master) con los cambios de la rama (mi/nueva).
# NOTA: Si hay conflictos, git pide que los resuelvas manualmente.
git merge mi/nueva

# ---------------------------- #
# ------ Eliminar ramas ------ #
# ---------------------------- #

# Elimina la rama (features/nueva_rama) solo si: 
#	--- Los cambios han sido fusionados a la rama (maestra).
#	--- No tienes cambios pendientes.
git branch -d features/nueva_rama
git branch --delete features/nueva_rama

# Fuerza la eliminacion de la rama sin importar loa cambios pendientes.
git branch -D features/nueva_rama

# ##########====================########## #
# ######===--- Ejemplo de uso ---===###### #
# ##########====================########## #

# Para esto vamos a crear una rama y trabajar en ella.

# Primero nos aseguramos de estar en la rama (master), asi que nos movemos a ella.
git checkout master

# Creamos una rama llamada "mi-rama".
git branch mi-rama

# Cambiamos a la rama "mi-rama".
git checkout mi-rama

# Comprobamos estar posicionados en la rama "mi-rama"
git branch

# Agregamos los archivos al (stage) de la rama "mi-rama"
git add .

# Ahora hacemos un (commit) a la rama "mi-rama"
git commit -m "Realicé cambios en la rama mi-rama"

# Cambiamos de vuelta a la rama principal.
git checkout master

# Fusionamos "mi-rama" a la rama principal (master).
git merge mi-rama