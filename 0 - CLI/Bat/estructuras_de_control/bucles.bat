
: ##########===============########## :
: ######===--- Bucle for ---===###### :
: ##########===============########## :

for %%i in (0 1 2) do (
	echo Hola %%i
)

: ##########==============########## :
: ######===--- Contador ---===###### :
: ##########==============########## :

@echo off
	title TituloDeConsola
	color 0F

	set numeros= 1 2 3
	set contador=0

	for %%i in (%numeros%) do (
		echo Iteracion: %%i
		echo.
		set /a contador += 2;
	)

	echo.
	echo La suma es: %contador%
pause > nul & exit

: ##########========================########## :
: ######===--- Contar al ingresar ---===###### :
: ##########========================########## :

@echo
	set /p numero= Ingresa un numero: 

	:bucle
	if %numero%==11 (goto end_program) else (goto bucle)
	echo El numero es: %numero%
	set /a numero= %numero% + 1

	:end_program
pause > nul & end