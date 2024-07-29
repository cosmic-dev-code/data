: (@echo off) Muestra los mensajes en una linea limpia y oculta la 
: palabra reservada (echo).
@echo off
	: Aqui definimos el titulo del programa.
	title TituloDeConsola
	: Definimos el color del fondo y del texto.
	color 0F

	: Pausa y salir.
pause > nul & exit