
: ##########===========================########## :
: ######===--- Condicional (else if) ---===###### :
: ##########===========================########## :

@echo off

	set /p numero= Ingresa un numero: 

	:: En caso de ser verdadero se ejecuta la primera instruccion contenida 
	:: en un parentesis, de lo contrario se ejecuta la segunda contenida en 
	:: un parentesis.
	if %numero%==4 (echo Has acertado) else (echo Fallaste)

	:: (gtr) es '>' y lss es '<'.
	if %numero% gtr 17 (
		echo El numero es mayor a 17
	) else (
		echo El numero es menor a 17
	)

pause > nul & exit

: ##########=======================########## :
: ######===--- Bloques de codigo ---===###### :
: ##########=======================########## :

@echo off
	REM Aqui el codigo se divide por partes.

	: Aqui hemos definido el nombre de un bloque de codigo llamado (inicio).
	:inicio
	echo.
	set /p numero= Ingresa un numero: 

	: La palabra reservada (goto) significa que nuestro programa 
	: saltara de un lugar del codigo a otro, (en este caso 
	: desde un bloque de codigo a otro).

	if %numero% gtr 17 (goto verdadero) else (goto falso)

	: Bloque de codigo llamado (verdadero).
	:verdadero
	echo.
	echo Eres mayor de edad.
	:: Si este bloque se ejecuta entonces se acaba el programa.
	echo. & pause > nul & exit

	: Bloque de codigo llamado (falso).
	:falso
	echo.
	echo No eres mayor de edad.
	echo.
	pause > nul & cls
	goto inicio

pause > nul & exit