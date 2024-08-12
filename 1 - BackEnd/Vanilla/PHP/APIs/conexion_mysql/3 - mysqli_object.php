<?php

/* ##########=================================================########## */
/* ######===--- Conexion con el servidor y la base de datos ---===###### */
/* ##########=================================================########## */

$server = "localhost";
$user = "root";
$password = "my_password";
$data_base = "db_name";

$conexion = new mysqli($server, $user, $password, $data_base);
/* La clase (mysqli) permite conectarnos al servidor y a la base de datos. */

if($conexion -> connect_errno){
	/* La propiedad (connect_errno) permite validar si hubo algun 
	error en la conexion con el servidor o la base de datos. */

	die("Error al conectar con el servidor: ".$conexion -> connect_error);
	/* (connect_error) proporciona el error. */
}

/* ##########==================================########## */
/* ######===--- Consultas a la base de datos ---===###### */
/* ##########==================================########## */

$traer_datos = $conexion -> query("SELECT * FROM `tabla`;");
/* Metodo (query) el cual permite hacer consultas a la base de datos. */

if($traer_datos !== true){
	die("Error al traer los datos: ".$conexion -> error);
	# Propiedad que nos permite retornar el error que hubo al ejecutar un 'query'.
}

/* ##########===================================########## */
/* ######===--- Preparar y ejecutar 'queries' ---===###### */
/* ##########===================================########## */

// Al preprar las sentencias SQL, evitamos ataques como (inyecciones SQL).

// Colocamos el subfijo (?) para indicar que inyectaremos un dato.
$query_preparado = $conn -> prepare("
	UPDATE `usuarios` 
	SET `nombres` = ?, `apellidos` = ?, `edad` = ? 
	WHERE `correo` = ? LIMIT 1;
");

if($res_pre === false) die("Error al preparar el query: ", $conn -> error);

$res_pre = $query_preparado -> bind_param(
	// Esto indica el tipo de dato que se va a insertar, [(string) s, (int) i].
	"ssis", 
	// Los datos a insertar en su respectivo orden.
	$_POST['names'], $_POST['surnames'], $_POST['age'], $_POST['email']
);

$res = $query_preparado -> execute();

if($res === false) die("Error al ejecutar el query: ", $query_preparado -> error);

/* Estos son los posibles tipos de datos que podemos insertar luego de haber preparado un "query".
	s: string (cadena de texto)
	i: integer (entero)
	d: double (número de punto flotante)
	b: blob (datos binarios)
*/

/* ##########=======================########## */
/* ######===--- Escapar (strings) ---===###### */
/* ##########=======================########## */

# El metodo (real_escape_string), permite escapar los 'strings'. 
$names = $conexion -> real_escape_string($_POST['names']);
$surnames = $conexion -> real_escape_string($_POST['surnames']);
$email = $conexion -> real_escape_string($_POST['email']);

# Ahora podemos hacer una insercion y evitamos ataques con (comillas).
$query = $conexion -> query("
	INSERT INTO `users`(`names`, `surnames`, `email`) 
	VALUES ('{$names}', '{$surnames}', '{$email}')
");

/* ##########========================########## */
/* ######===--- Descomprimir datos ---===###### */
/* ##########========================########## */

if($traer_datos -> num_rows > 0){
	# La propiedad (num_rows) devuelve la cantidad de filas que se extrajeron.

	while($fila = $traer_datos -> fetch_row()){
		/* El metodo (fetch_row) regresa los datos de la consulta 
		en forma de un array 'indexado'. */
		
		echo $fila[0]; // Imprime la primera celda de la fila 0.
		echo $fila[1]; // Imprime la segunda celda de la fila 0.
		echo $fila[2]; // Imprime la tercera celda de la fila 0.

		/* En la siguiente iteracion imprimira la siguiente fila, (en caso 
		de que la haya). */
	}

	while($fila = $traer_datos -> fetch_assoc()){
		/* El metodo (fetch_assoc) regresa los datos de la consulta 
		en forma de un array 'asosiativo'. */
		
		echo $fila['nombre']; // Imprime el nombre de la fila 0.
		echo $fila['apellido']; // Imprime el apellido de la fila 0.
		echo $fila['edad']; // Imprime la edad de la fila 0.

		/* En la siguiente iteracion imprimira la siguiente fila, (en caso 
		de que la haya). */
	}

	while($fila = $traer_datos -> fetch_array(MYSQLI_BOTH)){
		/* El metodo (fetch_array) regresa los datos de la consulta 
		en forma: 
		--- MYSQLI_BOTH: En ambas formas.
		--- MYSQLI_NUM: En forma de array indexado.
		--- MYSQLI_ASSOC: En forma de array asociativo. */
		
		echo $fila['nombre']; // Imprime el nombre de la fila 0.
		echo $fila[1]; // Imprime el apellido de la fila 0.
		echo $fila['edad']; // Imprime la edad de la fila 0.

		/* En la siguiente iteracion imprimira la siguiente fila, (en caso 
		de que la haya). */
	}
}

$conexion -> close();
/* Metodo para cerrar la conexion. */