: ##########=================================########## :
: ######===--- Entrada de datos en consola ---===###### :
: ##########=================================########## :

@echo off

	:: Con (set /p) podemos ingresar datos.
	set /p numero= Primer numero: & cls
	set /p numero_1= Segundo numero: & cls

	:: Con (set /a) podemos realizar operaciones matematicas.
	set /a suma= %numero% + %numero_1%

	REM Imprimimos los resultados.
	echo La suma de %numero% y %numero_1% es: %suma%.

	:: (pause > nul) permite dejar una pausa en blanco.
pause > nul & exit

: ##########================================########## :
: ######===--- Salida de datos en consola ---===###### :
: ##########================================########## :

@echo off

	:: El comando (echo) se utiliza para imprimir algo en consola.
	echo Este es un mensaje desde la consola de Windows. &
	echo Este es otro mensaje. & :: El & indica que se va a ejecutar otro comando.

	pause > nul

	: Imprimimos una variable.
	cls & set texto=Brandon
	echo El texto es %texto%

	:: Este es un salto de linea.
	echo.

pause > nul & exit