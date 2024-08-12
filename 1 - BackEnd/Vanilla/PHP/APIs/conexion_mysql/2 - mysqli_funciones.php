<?php

/* ##########=================================================########## */
/* ######===--- Conexion con el servidor y la base de datos ---===###### */
/* ##########=================================================########## */

$server = "localhost";
$user = "root";
$password = "my_password";
$data_base = "db_name";
$error = "Error al conectar con el servidor.";

$conexion = mysqli_connect($server, $user, $password, $data_base) or die($error);
/* La funcion (mysqli_connect) permite conectarnos al servidor y a la base de 
datos. */

# Con esta linea de codigo el servidor haceptara caracteres especiales.
mysqli_query($conexion, "SET NAMES \"utf8\"");

if(mysqli_connect_errno()){
	/* La funcion (mysqli_connect_errno) permite validar si hubo algun 
	error en la conexion con el servidor o la base de datos. */

	die("Error al conectar con el servidor: ".mysqli_connect_error());
	/* (mysqli_connect_error) proporciona el error. */
}

mysqli_select_db($conexion, $data_base_1);
/* Cambiamos de base de datos. */

/* ##########==================================########## */
/* ######===--- Consultas a la base de datos ---===###### */
/* ##########==================================########## */

$traer_datos = mysqli_query($conexion, "SELECT * FROM `tabla`;");
/* Funcion la cual permite hacer consultas a la base de datos. */

$traer_datos; # Ahora es un objeto.

if(!$traer_datos){
	die("Error al traer los datos: ".mysqli_error($conexion));
	# Funcion que nos permite retornar el error que hubo al ejecutar un 'query'.
}

/* ##########=======================########## */
/* ######===--- Escapar (strings) ---===###### */
/* ##########=======================########## */

/* Escapa las (comillas) para evitar algun ataque (sql), recibe por parametros: 
	--- La conexion.
	--- El dato que se desea escapar. */
$names = mysqli_real_escape_string($conexion, $_POST['names']);
$surnames = mysqli_real_escape_string($conexion, $_POST['surnames']);
$email = mysqli_real_escape_string($conexion, $_POST['email']);

# Realizamos la peticion y evitamos ataques con (comillas).
$insert = mysqli_query($conexion, "
	INSERT INTO `users`(`names`, `surnames`, `email`) 
	VALUES ('{$names}', '{$surnames}', '{$email}');
");

/* ##########========================########## */
/* ######===--- Descomprimir datos ---===###### */
/* ##########========================########## */

/* Dado que la variable (traer_datos) es un objeto, preguntamos por medio 
de su propiedad (num_rows) si el numero de filas es mayor a 0. */
if($traer_datos -> num_rows > 0){

	while($fila = mysqli_fetch_row($traer_datos)){
		/* La funcion (mysqli_fetch_row) regresa los datos de la consulta 
		en forma de un array 'indexado'. */
		
		echo $fila[0]; // Imprime la primera celda de la fila 0.
		echo $fila[1]; // Imprime la segunda celda de la fila 0.
		echo $fila[2]; // Imprime la tercera celda de la fila 0.

		/* En la siguiente iteracion imprimira la siguiente fila, (en caso 
		de que la haya). */
	}

	while($fila = mysqli_fetch_assoc($traer_datos)){
		/* La funcion (mysqli_fetch_assoc) regresa los datos de la consulta 
		en forma de un array 'asosiativo'. */
		
		echo $fila['nombre']; // Imprime el nombre de la fila 0.
		echo $fila['apellido']; // Imprime el apellido de la fila 0.
		echo $fila['edad']; // Imprime la edad de la fila 0.

		/* En la siguiente iteracion imprimira la siguiente fila, (en caso 
		de que la haya). */
	}

	while($fila = mysqli_fetch_array($traer_datos)){
		/* La funcion (mysqli_fetch_array) regresa los datos de la consulta 
		en forma de un array 'asosiativo' e 'indexado' al mismo tiempo. */
		
		echo $fila['nombre']; // Imprime el nombre de la fila 0.
		echo $fila[1]; // Imprime el apellido de la fila 0.
		echo $fila[2]; // Imprime la edad de la fila 0.

		/* En la siguiente iteracion imprimira la siguiente fila, (en caso 
		de que la haya). */
	}
	
}

mysqli_close($conexion);
/* Funcion para cerrar la conexion. */