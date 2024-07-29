@echo off
	: Config window.
	title TituloDeConsola
	color 0F

	: ##########=======================########## :
	: ######===--- Crear una funcion ---===###### :
	: ##########=======================########## :

	: Mandamos a llamar la funcion.
	call miFuncion

	: Creamos una funcion.
	:miFuncion
		echo Esta es una funcion.
		pause > nul & exit

	: ##########================########## :
	: ######===--- Parametros ---===###### :
	: ##########================########## :

	: Mandamos a llamar la funcion y le pasamos por parametro 
	: el dato (128).
	call :mostrarNumero 128

	: La funcion recibe un argumento.
	:mostrarNumero <arg1>
		: Damos el valor de nuestro primer argumento.
		setlocal
		set numero=%~1

		echo El numero es: %numero%
		pause > nul & exit

pause > nul & exit

: ##########=============================########## :
: ######===--- Volver al origen, (eof) ---===###### :
: ##########=============================########## :

@echo off
	title TituloDeConsola
	color 0F

	: Ejecutamos las lineas que queramos.
	echo Primera linea.

	: Mandamos a llamar a la funcion.
	call :fun

	: Seguimos ejecutando las demas lineas.
	echo Segunda linea.

pause > nul & exit

: Creamos una funcion.
:fun
	: Ejecutamos todo el codigo aqui dentro ...
	echo Linea de funcion.
: La (goto :eof) devuelve la ejecucion al lugar donde fue invocada.
goto :eof

: ##########======================================########## :
: ######===--- Multiples veces al origen, (eof) ---===###### :
: ##########======================================########## :

@echo off
	: Config window.
	title TituloDeConsola
	color 0F

	: Mandamos a llamar a la funcion (numeros).
	call :numeros
	echo Primera linea.
	: Mandamos a llamar a la funcion (letras).
	call :letras
	echo Segunda linea.
	: Mandamos a llamar a la funcion (textos).
	call :textos
pause > nul & exit

: Todas las funciones regresan la ejecucion 
: hacia donde fueron invocadas, (eof).

:numeros
	echo Numeros ...
goto :eof

:letras
	echo Letras ...
goto :eof

:textos
	echo Textos ...
goto :eof

: ##########=======================================########## :
: ######===--- Multiples veces al origen, (goto) ---===###### :
: ##########=======================================########## :

@echo off
	: Config window.
	title TituloDeConsola
	color 0F

	: --- Saltar en bloques ---
	: Por medio de la palabra reservada (goto), podemos saltar a 
	: diferentes partes de nuestro codigo haciendo uso de las 
	: funciones, como si se trataran de bloques.

	: --- Desventajas ---
	: La desventaja aqui es que (goto) salta a una parte especifica, mas 
	: no tiene la posibilidad de regresar como con (eof); ademas la 
	: ejecucion debe ser en cascada, como haya lineas.

	: Vamos a la bloque de (numeros).
	goto :numeros

	:numeros
		echo Numeros ... & echo Primera linea.
	: Despues vamos a la bloque de (letras).
	goto :letras

	:letras
		echo Letras ... & echo Segunda linea.
	: Ahora saltamos a la parte de (textos).
	goto :textos

	:textos
		echo Textos ...
: Luego finalizamos.
pause > nul & exit