<?php

##########============##########
######===--- Cookie ---===######
##########============##########

/*
	Almacenamiento Front-End.
		--- El navegador carga las cookies asociadas con el dominio.
	Persistencia.
		--- Persisten incluso después de cerrar el navegador, o pueden configurarse.
	Almacenamiento.
		--- Tamaño limitado (alrededor de 4 KB).
	Uso.
		--- Preferencias de usuario.
		--- Seguimiento.
		--- Identificadores de sesión (pero no se recomienda para datos sensibles).
*/

##########==================##########
######===--- Crear cookie ---===######
##########==================##########

/* Creamos una cookie:
	--- Nombre de la cookie.
	--- Valor de la cookie, (debe ser un string).
	--- El tiempo de vida de la cookie.
	En este caso [time() + (3600*30)] significa: 
		--- 36400ms = Un dia multiplicado * 30 = 30 dias.
	--- (/) es la 'url' donde la cookie estara disponible, en este caso (todo el sitio web).
*/
setcookie("usuario", "brandon@gmail.com", time() + (3600*30), "/");

// Podemos guardar un JSON.
setcookie("usuario", json_encode($assoc), time() + (3600*30), "/");

##########===========================##########
######===--- Sobreescribir cookies ---===######
##########===========================##########

# Para modificar una cookie solo debemos reingresar los campos.
setcookie("Nombre", "Anthony", time() + (36400 * 30), "/");

##########======================##########
######===--- Eliminar cookies ---===######
##########======================##########

# Ponemos el tiempo a menos 3600 milisegundos, de esta manera establecemos la 
# fecha de vencimiento en una hora.
setcookie("Nombre", "", time() - 3600, "/");

##########=======================##########
######===--- Comprobar cookies ---===######
##########=======================##########

# Si la cantidad de campos del array global (COOKIE) tieme mas de 0.
# Eso significa que hay cookies, por lo que estan habilitadas.
if(count($_COOKIE) > 0){
	echo "Las cookies estan habilitadas.";
}else{
	echo "Las cookies estan desabilitadas.";
}