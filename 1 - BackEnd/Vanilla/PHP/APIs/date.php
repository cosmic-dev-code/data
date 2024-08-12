<?php

	/* ##########==================########## */
	/* ######===--- Zona horaria ---===###### */
	/* ##########==================########## */

	# Devuelve la zona horaria.
	date_default_timezone_get();

	/* Recibe por parametro la zona horaria, (necesaria para utilizar 
	la funcion (date)). */
	date_default_timezone_set("America/Tijuana");

	/* ##########====================########## */
	/* ######===--- Dia, mes y año ---===###### */
	/* ##########====================########## */
	/*
		"l", representa el dia de la semana.
		"d", representa el dia del mes.
		"m", representa el mes.
		"Y", representa el year.
	*/

	// Creamos un array que contenga todos los meses del year.
	$arr_meses = array(
		"Enero","Febrero","Marzo","Abril","Mayo","Junio",
		"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
	);

	echo "Dia: ".date("l")."/".date("d")." del mes: ";
	echo $arr_meses[date("m")-1]." del year: ".date("Y")."<br>";

	/* ##########==============================########## */
	/* ######===--- Horas, minutos, segundos ---===###### */
	/* ##########==============================########## */
	/*
		"h", representa las horas de 1 a 12.
		"H", representa las horas de 1 a 24.
		"i", representa los minutos.
		"s", representa los segundos.
		"a", representa el 'am' y el 'pm'.
		"A", representa el 'AM' y el 'PM'.
	*/
	echo "Son las: ".date("h:i:s:a");
?>