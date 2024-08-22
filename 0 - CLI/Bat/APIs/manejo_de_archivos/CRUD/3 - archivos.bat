: ##########========================########## :
: ######===--- Manipular archivos ---===###### :
: ##########========================########## :

: Muestra el contenido de un texto plano en consola.
: (CTRL + C), para salir cuando la informacion es muy grande.
: (Q), para salir de la lectura.
more archivo.txt

: Muestra los atributos de los archivos.
attrib carpeta

: Trae un un archivo por lotes y lo ejecuta, dentro 
: del mismo archivo.
call archivo.bat

: ---------------------------- :
: ------ Crear archivos ------ :
: ---------------------------- :

: Crea un nuevo archivo y lo abre.
notepad archivo.txt

: Crea un nuevo archivo vacio.
type nul > archivo.txt
type nul > "archivo con espacio.txt"

: Crea un archivo con texto.
echo Texto para mi archivo > archivo.txt
echo Texto para mi archivo > "archivo con espacio.txt"
: Escribimos una nueva linea.
echo Nueva linea >> archivo.txt
echo Nueva linea 1 >> archivo.txt
echo Nueva linea 2 >> archivo.txt

: Crea un srchivo con texto del sistema.
echo > archivo.txt

: Crea un archivo de 1000 bytes de dimension, (coloca espacios dentro del archivo).
fsutil file createnew archivo.txt 1000

: ----------------------------- :
: ------ Copiar archivos ------ :
: ----------------------------- :

: --- Escribir manuealmente ---
: Este comando abrira un editor el cual permitira ingresar texto.
: Podremos movilizarnos hacia la siguiente linea con presionar 
: (ENTER). Pulse (CRL + Z) y despues (ENTER) para guardar 
: las lineas escritas en el archivo.
copy con archivo.txt

: Copia y verifica si el archivo se copio correctamente.
copy /v con archivo.txt

: ------------------------------- :
: ------ Eliminar archivos ------ :
: ------------------------------- :

: Borra un archivo.
del archivo.txt

: Borra un archivo sin pedir la autorizacion del usuario.
del /q archivo.txt

: Borra un archivo pidiendo la autorizacion del usuario.
del /p archivo.txt

: Fuerza la eliminacion de los archivos de solo lectura.
del /f archivo.txt