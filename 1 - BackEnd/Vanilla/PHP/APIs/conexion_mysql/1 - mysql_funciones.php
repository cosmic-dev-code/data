<?php

/* ##########=================================================########## */
/* ######===--- Conexion con el servidor y la base de datos ---===###### */
/* ##########=================================================########## */

$server = "localhost";
$user = "root";
$password = "my_password";
$data_base = "db_name";

/* La funcion (mysql_connect) permite conectarnos al servidor y a la base de datos. */
$conexion = mysql_connect($server, $user, $password);

if(mysql_connect_error()){
	/* La funcion (mysql_connect_error) verifica si hubo algun error en el servidor. */
	die("La conexion con el servidor fallo."); exit();
}

/* Permite un nombre válido de un conjunto de caracteres. */
$result_charset = mysql_set_charset($conexion, "utf8");

if($result_charset !== true){
	die("Hubo un error al establecer los caracteres especiales.");
}

mysql_select_db($data_base) or die("No se encuentra la DB.");
/* Cambiamos seleccionamos la base de datos. */

/* ##########==================================########## */
/* ######===--- Consultas a la base de datos ---===###### */
/* ##########==================================########## */

$traer_datos = mysql_query("SELECT * FROM `tabla`;", $conexion);
/* Funcion la cual permite hacer consultas a la base de datos. */

if(!$traer_datos){
	die("Error al traer los datos: ".mysql_error($conexion));
	# Funcion que nos permite retornar el error que hubo al ejecutar un 'query'.
}

/* ##########=======================########## */
/* ######===--- Escapar (strings) ---===###### */
/* ##########=======================########## */

# Escapa las (comillas) para evitar algun ataque (sql).
$names = mysql_real_escape_string($_POST['names']);
$surnames = mysql_real_escape_string($_POST['surnames']);
$email = mysql_real_escape_string($_POST['email']);

# Realizamos la peticion y evitamos ataques con (comillas).
$insert = mysql_query("
	INSERT INTO `users`(`names`, `surnames`, `email`) 
	VALUES ('{$names}', '{$surnames}', '{$email}');
", $conexion);

/* ##########========================########## */
/* ######===--- Descomprimir datos ---===###### */
/* ##########========================########## */

if(mysql_num_rows($traer_datos) > 0){
	/* La funcion (mysql_num_rows) tra el numero de filas perteneciente al resultado. */
	while($fila = mysql_fetch_row($traer_datos)){
		/* La funcion (mysql_fetch_row) regresa los datos de la consulta 
		en forma de un array 'indexado'. */

		echo $fila[0]; // Imprime la primera celda de la fila 0.
		echo $fila[1]; // Imprime la segunda celda de la fila 0.
		echo $fila[2]; // Imprime la tercera celda de la fila 0.

		/* En la siguiente iteracion imprimira la siguiente fila, (en caso 
		de que la haya). */
	}

	while($fila = mysql_fetch_assoc($traer_datos)){
		/* La funcion (mysql_fetch_assoc) regresa los datos de la consulta 
		en forma de un array 'asosiativo'. */

		echo $fila['nombre']; // Imprime el nombre de la fila 0.
		echo $fila['apellido']; // Imprime el apellido de la fila 0.
		echo $fila['edad']; // Imprime la edad de la fila 0.

		/* En la siguiente iteracion imprimira la siguiente fila, (en caso 
		de que la haya). */
	}

	while($fila = mysql_fetch_array($traer_datos)){
		/* La funcion (mysql_fetch_array) regresa los datos de la consulta 
		en forma de un array 'asosiativo' e 'indexado' al mismo tiempo. */

		echo $fila['nombre']; // Imprime el nombre de la fila 0.
		echo $fila[1]; // Imprime el apellido de la fila 0.
		echo $fila[2]; // Imprime la edad de la fila 0.

		/* En la siguiente iteracion imprimira la siguiente fila, (en caso 
		de que la haya). */
	}
}

mysql_close($conexion);
/* Funcion para cerrar la conexion. */ 