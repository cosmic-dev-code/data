: ##########===============================########## :
: ######===--- Navegar entre directorios ---===###### :
: ##########===============================########## :

: Muestra la ruta actual en la que nos encontramos.
cd

: Muestra el directorio actual
cd .

: Nos direcciona a la raiz de nuestro equipo.
cd /

: Entramos a un directorio.
cd Directorio/
cd Directorio

: Retrocede un directorio atras.
cd ..

: ##########=========================########## :
: ######===--- Obtener informacion ---===###### :
: ##########=========================########## :

: Muestra todos los archivos en dorma de lista.
dir

: Muestra todos los archivos (normales).
dir /C

: Muestra solo los archivos (ocultos).
dir /A:H

: Muestra todos los archivos (ocultos) y (normales).
dir /C /H

: muestra todos los (archivos), (directorios) y (ocultos).
dir /A

: ----------------------------------- :
: ------ Presentacion de Datos ------ :
: ----------------------------------- :

: Muestra el contenido del directorio de forma paginada.
dir /P

: Muestra el contenido del directorio en una sola línea.
dir /W

: ----------------------------------- :
: ------ Presentacion de Arbol ------ :
: ----------------------------------- :

: Muestra a modo de arbol todas las carpetas y archivos.
tree c:\Users\User

: Muestra a modo de arbol todas las carpetas y archivos con diferente formato.
tree c:\Users\User /a

: ------------------------- :
: ------ Verificacion ----- :
: ------------------------- :

: Verifica que los datos escritos en el disco se grabaron correctamente.
: Muestra si la verificacion esta (activada/desactivada).
verify

: Activa la verificacion.
verify on

: Desactiva la verificacion.
verify off