: ##########========================########## :
: ######===--- Comando (compress) ---===###### :
: ##########========================########## :

: NOTA: (Solo a partir de la version de Windows 7 hacia atras).

: Comprime un archivo o directorio.
compress archivo.txt
compress directorio

: Descomprime un archivo o directorio.
expand archivo.txt
expand directorio

: Comprime archivos de solo lectura.
compress /a archivo.txt

: Comprime los archivos especificados y todos los archivos que encuentre en subdirectorios
compress /s directorio/

: Ignora los errores de acceso al archivo y continúa con la operación
compress /i archivo.txt

: Descomprime los archivos especificados y elimina los archivos comprimidos
expand archivo.txt.ex_ -f:archivo.txt

: Comprime los archivos especificados en modo "sin comprimir"
compress /c archivo.txt

: Forza la compresión de todos los archivos, aunque no estén listos para ser comprimidos
compress /f archivo.txt

: ##########=======================########## :
: ######===--- Comando (compact) ---===###### :
: ##########=======================########## :

: NOTA: (Solo a partir de la version de Windows 8 hacia delante).

: Comprime un archivo o directorio.
compact /c archivo.txt
compact /c directorio

: Descomprime un archivo o directorio.
compact /u archivo.txt
compact /u directorio

: Comprime archivos de solo lectura.
compact /a archivo.txt

: Comprime los archivos especificados y todos los archivos que encuentre en subdirectorios
compact /s directorio/

: Ignora los errores de acceso al archivo y continúa con la operación
compact /i archivo.txt

: Descomprime los archivos especificados y elimina los archivos comprimidos
compact /u archivo.txt

: Comprime los archivos especificados en modo "sin comprimir"
compact /c archivo.txt

: Forza la compresión de todos los archivos, aunque no estén listos para ser comprimidos
compact /f archivo.txt