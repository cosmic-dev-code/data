@echo off

	:: Valor	Color
	:: 0	Negro
	:: 1	Azul
	:: 2	Verde
	:: 3	Aguamarina
	:: 4	Rojo
	:: 5	Púrpura
	:: 6	Amarillo
	:: 7	Blanco
	:: 8	Gris
	:: 9	Azul claro
	:: A	Verde claro
	:: B	Aguamarina claro
	:: C	Rojo claro
	:: D	Púrpura claro
	:: E	Amarillo claro
	:: F	Blanco brillante

	:: El primer valor representa el color del fondo.
	:: El segundo valor representa el color del texto.
	color 5D
	echo Texto de prueba.

	npm install --global yarn
	npx create-nuxt-app Smartphone_front

pause > nul & exit