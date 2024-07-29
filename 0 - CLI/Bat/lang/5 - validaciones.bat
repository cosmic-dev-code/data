@echo off

: ##########==================########## :
: ######===--- Validaciones ---===###### :
: ##########==================########## :

REM Verificar si una variable esta definida
if not defined var1 (
    : Variable NO esta definida.
) else (
    : La variable tiene valor.
)

REM Verificar si una variable es numérica
set var2=123

setlocal EnableDelayedExpansion
if "!var2!" equ "" (
    : Variable vacia.
) else if not "!var2:~0,1!" geq "0" if not "!var2:~0,1!" leq "9" (
    : La variable no es un numero.
) else (
    : La variable es un numero.
)

REM Verificar si una variable es un arreglo
set var3[0]=a

if defined var3[0] (
    : Es un arreglo.
) else (
    : No es un arreglo.
)

: ##########================########## :
: ######===--- Ver tipado ---===###### :
: ##########================########## : 

: Se establecen los tipos de datos.
set var4=hello
set var5=123
set var6=1.23
set var7=true
set var8=

: Se muestran los tipos de datos.
echo El tipo es: %var4:~0,1%
echo El tipo es: %var5:~0,1%
echo El tipo es: %var6:~0,1%
echo El tipo es: %var7:~0,1%
echo El tipo es: %var8:~0,1%

: Ejemplo del tipo de dato que puede devolver.
: (e)
echo %var4:~0,1%