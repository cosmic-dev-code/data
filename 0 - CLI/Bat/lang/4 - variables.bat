
Rem Las varaibles funcionan de la siguiente manera.

: Pueden almacenar cualquier tipo de valor y se setean utilizando la palabra reservada (set).
set variable=55
set otra=Hola mundo

: Se coloca (/a) para almacenar el resultado de una operacion.
set /a operacion= 5+5

: ##########===========########## :
: ######===--- Scope ---===###### :
: ##########===========########## :

: -------------------- :
: ------ Global ------ :
: -------------------- :

: Variable declarada globalmente en el archivo.
set contador=0

for /l %%i in (1,1,5) do (
	: Se utiliza la variable declarada previmanete.
	set contador=%%i
)

: --------------------- :
: ------ Locales ------ :
: --------------------- :

for /l %%i in (1,1,5) do (
	: La variable (contador) solo existe dentro del (for) de manera local.
	set contador=%%i
)

: ERROR: La variable no existe.
echo El valor de contador es: %contador%

: --------------------------- :
: ------ (set) y (end) ------ :
: --------------------------- :

: Variable inicial, comenzamos seteando el valor a 20
setlocal
set variable=20
echo La variable inicial es de: %variable%

rem Modificamos el valor a 30.
setlocal
set variable=30
echo La variable modificada es de: %variable%

rem Regresamos al valor inicial, 20.
endlocal
echo Volvemos al valor de: %variable%

: Podemos declarar dos variables de entrada con un valor final.
endlocal & set var=variable & set var2=variable number 2

: ##########=================########## :
: ######===--- Referencias ---===###### :
: ##########=================########## :

set variable=55

: Se hace referencia a una variable entre (%porcentajes%).
echo La variable es %variable%

set otra=%variable%