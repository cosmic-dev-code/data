: ##########=======================########## :
: ######===--- Comando (timeout) ---===###### :
: ##########=======================########## :

: Primero se imprime el primer mensaje en consola.
echo Primer mensaje

: Tras tres segundos, (nul) especifica (sin mensaje).
timeout /t 3 > nul

: Tras tres segundos (con un mensaje por defecto de esperar).
timeout /t 3

: Ahora se imprime esta linea en consola.
echo Primer mensaje