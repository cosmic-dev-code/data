@echo off

REM ##########=======================##########
REM ######===--- Convertir a Array ---===######
REM ##########=======================##########

set "string=Banana, Manzana, Pera"

REM Elimina los separadores (, ) y guarda los elementos en forma de array.
for /f "tokens=1,* delims=," %%a in ("%string%") do (
    set "newArray[%%a]=%%b"
)

REM Imprime el primer elemento del array.
echo %newArray[1]%

REM Devuelve una cadena en la que todos los elementos del array se unen en una sola cadena.
set "newString=%newArray[1]%,%newArray[2]%,%newArray[3]%"

REM Devuelve un array con todos los caracteres de la cadena como elementos individuales.
setlocal EnableDelayedExpansion
set "newArray="
for /l %%a in (0,1,100) do (
    if "!string:~%%a,1!"=="" goto :done
    set "newArray[%%a]=!string:~%%a,1!"
)
:done
echo !newArray!

REM ##########========================##########
REM ######===--- Convertir a string ---===######
REM ##########========================##########

set "array=Manzana Pera Mango"

REM Convierte un array completo a una cadena pero además puede especificarse el separador.
set "string=%array: =,%"
echo %string%

REM Convierte a una cadena.
set "string=%array%"
echo %string%

REM El método "echo" también se puede utilizar para convertir elementos individuales de una matriz a una cadena.
set "array[0]=Manzana"
set "array[1]=Pera"
set "array[2]=Mango"
for /l %%a in (0,1,2) do echo %array[%%a]%

REM ##########========================##########
REM ######===--- De string a numero ---===######
REM ##########========================##########

: ---------------------- :
: ------ (set /a) ------ :
: ---------------------- :

REM Utiliza el comando (SET /A) para convertir una cadena en un número entero.
set /a "numero=10"
echo %numero%

set /a "numero=10+20"
echo %numero%

set /a "numero=0xA"
echo %numero%

set /a "numero=0x1F"
echo %numero%

REM Si el número no se puede convertir, se asigna un valor 0 (cero).
set /a "numero=xyz"
echo %numero%

: ---------------------------- :
: ------ Funcion (call) ------ :
: ---------------------------- :

REM La función (CALL) se puede utilizar para convertir una cadena en un número entero.

: La cadena...
set "cadena=10"
set "cadena=10+20"
set "cadena=0xA"
set "cadena=0x1F"

call set /a "numero=%cadena%"
echo %numero%

: ---------------------- :
: ------ (FOR /F) ------ :
: ---------------------- :

REM La función (FOR /F) se puede utilizar para convertir una cadena en un número entero.

: La cadena es la siguiente.
set "cadena=10"
set "cadena=10+20"

for /f "delims=" %%a in ("%cadena%") do set /a "numero=%%a"
echo %numero%