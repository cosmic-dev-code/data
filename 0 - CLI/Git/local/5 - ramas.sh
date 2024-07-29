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

# ------------------------- #
# ------ Crear ramas ------ #
# ------------------------- #

# Podemos crear varias ramas y cada una de ellas tendra su propio (Stage) y (Commit), 
# podemos utilizar los comandos en cada una de las ramas.

# Muestra la rama en la que nos encontramos, por defecto es la rama (master).
git branch

# Crea una nueva rama llamada (mi-rama).
git branch mi-rama

# --------------------------------- #
# ------ Moverse entre ramas ------ #
# --------------------------------- #

# Nos movemos a la rama (master).
git checkout master

# Ahora nos movemos a la rama (features/nueva_rama).
git checkout features/nueva_rama

# Muestra la rama actual.
git branch

# (Crea) una nueva rama llamada (features/nueva_rama) y se (mueve) a ella.
git checkout -b features/nueva_rama

# ---------------------------- #
# ------ Fusionar ramas ------ #
# ---------------------------- #

# Estamos en la rama (master).
git branch

# Sobreescribimos la rama actual por los datos de la rama (features/nueva_rama).
git merge features/nueva_rama

# ---------------------------- #
# ------ Eliminar ramas ------ #
# ---------------------------- #

# Eliminamos la rama (features/nueva_rama).
git branch -d features/nueva_rama

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