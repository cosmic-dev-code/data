: ##########===========================########## :
: ######===--- Manipular directorios ---===###### :
: ##########===========================########## :

: ------------------- :
: ------ Crear ------ :
: ------------------- :

: Crea un nuevo directorio en el directorio actual.
: MKDIR [unidad:]ruta
: MD [unidad:]ruta
mkdir nueva_carpeta
md nueva_carpeta

: De esta manera creamos 3 carpetas con un solo comando.
mkdir carpeta_1 carpeta_2 carpeta_3

: Creamos una carpeta con espacios.
mkdir "carpeta de prueba"

: ---------------------- :
: ------ Eliminar ------ :
: ---------------------- :

: Elimina una carpeta
: RMDIR [unidad:]ruta
rmdir nueva_carpeta

: Elimina varias carpetas con un solo comando.
rmdir carpeta_1 carpeta_2 carpeta_3

: De esta manera borramos una carpeta con espacios.
rmdir "nueva carpeta"

: Borra una carpeta con archivos.
rmdir /s "nueva carpeta"

: Borra un directorio sin pedir autorizacion del usuario.
rmdir /s /q "nueva carpeta"

: Borra un directorio pidiendo autorizacion del usuario.
rmdir /s /i "nueva carpeta"

: Borra mas de una carpeta con archivos.
rmdir "Mi carpeta" "Mi otra carpeta" /s /q