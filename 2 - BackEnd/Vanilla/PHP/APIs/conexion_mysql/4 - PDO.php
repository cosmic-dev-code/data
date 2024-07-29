<?php

/* ##########========================================########## */
/* ######===--- Conexion con el servidor y la (DB) ---===###### */
/* ##########========================================########## */

# Informacion la cual va por primer parametro de la clase (PDO).
$conexion_info = "mysql:host=localhost;dbname=usuarios;charset=utf8mb4";

/* (Try - Catch) para verificar que la conexion haya sido exitosa. */
try{
	/* Para hacer la conexion pasamos por parametros los siguientes datos: 
		--- Primero la informacion de la conexion.
		--- Segundo el usuario.
		--- Tercero la contraseña. */
	$conexion = new PDO($conexion_info, "root", "my_password", [
		// Establecemos las configuraciones, (clave) => (valor).
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_EMULATE_PREPARES => false
	]);

	# Si la hay un error durante la conexion, entonces lanzamos una exepcion.
}catch(PDOException $error){
	print_r("Error al conectar: ".$error -> getMessage());
}

/* ##########=====================########## */
/* ######===--- Configuraciones ---===###### */
/* ##########=====================########## */

$conexion = new PDO($conexion_info, "root", "my_password", [

	// Aqui van las configuraciones.
	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_EMULATE_PREPARES => false

]);

// O podemos establecerlos aparte.

$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
$conn->setAttribute(PDO::ATTR_PERSISTENT, true);

/*	Tipos de configuraciones: 

	Establece el modo de reporte de errores.
		PDO::ATTR_ERRMODE.
			PDO::ERRMODE_SILENT (predeterminado): Solo establece códigos de error.
			PDO::ERRMODE_WARNING: Lanza advertencias de PHP.
			PDO::ERRMODE_EXCEPTION: Lanza excepciones de PDO.

	Establece el modo de obtención predeterminado para las filas de resultados.
		PDO::ATTR_DEFAULT_FETCH_MODE
			PDO::FETCH_ASSOC: Devuelve las filas como un array asociativo.
			PDO::FETCH_NUM: Devuelve las filas como un array numérico.
			PDO::FETCH_BOTH (predeterminado): Devuelve las filas como un array asociativo y numérico.
			PDO::FETCH_OBJ: Devuelve las filas como un objeto anónimo.
			PDO::FETCH_CLASS: Devuelve las filas como una instancia de la clase especificada.

	Fuerza los nombres de columna a un caso específico.
		PDO::ATTR_CASE
			PDO::CASE_NATURAL (predeterminado): Deja los nombres de columna tal como los devuelve la base de datos.
			PDO::CASE_LOWER: Convierte los nombres de columna a minúsculas.
			PDO::CASE_UPPER: Convierte los nombres de columna a mayúsculas.

	Convierte los valores NULL y las cadenas vacías.
		PDO::ATTR_ORACLE_NULLS
			PDO::NULL_NATURAL (predeterminado): No convierte los valores NULL.
			PDO::NULL_EMPTY_STRING: Convierte las cadenas vacías en NULL.
			PDO::NULL_TO_STRING: Convierte NULL en cadenas vacías.

	Establece el modo de autocommit.
		PDO::ATTR_AUTOCOMMIT
			true: Activa el autocommit (predeterminado).
			false: Desactiva el autocommit.

	Habilita o deshabilita las conexiones persistentes.
		PDO::ATTR_PERSISTENT
			true: Habilita las conexiones persistentes.
			false: Deshabilita las conexiones persistentes (predeterminado).

	Establece el tiempo de espera en segundos.
		PDO::ATTR_TIMEOUT
			Un valor (int) que representa el número de segundos de espera.
*/

/* ##########============================########## */
/* ######===---Solo ejecutar 'queries' ---===###### */
/* ##########============================########## */

# Se ejecuta el 'query' directamente sin prefijos.
$query = $conexion -> query("
	UPDATE `usuarios` 
	SET `nombres` = '{$_POST['nombres']}', `apellidos` = '{$_REQUEST['apellidos']}' 
	WHERE `correo` = '{$_POST['correo']}' LIMIT 1;
");

$traer_datos = $conexion -> query("SELECT * FROM `usuarios`;");

/* ##########=====================================########## */
/* ######===--- Preparar queries con (subfijos) ---===###### */
/* ##########=====================================########## */

// Antes de ejecutar un 'query' primero lo preparamos, esto para evitar hackeos como las inyecciones sql.

/* En los lugares donde van los datos colocamos 'prefijos' a los cuales posteriormente 
les daremos un valor, (el valor real). */
$query = $conexion -> prepare("
	UPDATE `usuarios` 
	SET `nombres` = :prefijo_nombres, `apellidos` = :prefijo_apellidos 
	WHERE `correo` = :prefijo_correo LIMIT 1;
");

# Le asignamos los valores a cada uno de los 'subfijos'.
$query -> bindParam(':prefijo_nombres', $_POST['nombre']);
$query -> bindParam(':prefijo_apellidos', $_POST['apellidos']);
$query -> bindParam(':prefijo_correo', $_POST['correo']);

# Despues ejecutar.
$query -> execute();

// ---------------------------- //
// ------ Forma acortada ------ //
// ---------------------------- //

$query = $conexion -> prepare("
	UPDATE `usuarios` 
	SET `nombres` = :prefijo_nombres, `apellidos` = :prefijo_apellidos 
	WHERE `correo` = :prefijo_correo LIMIT 1;
");

# Al metodo (execute) tambien le podemos pasar directamente un arreglo con los valores de los prefijos.
$query -> execute([
	"prefijo_nombres" => $_POST['nombres'],
	"prefijo_apellidos" => $_REQUEST['apellidos'],
	"prefijo_correo" => $_POST['correo']
]);

// ----------------------------- //
// ------ Un solo prefijo ------ //
// ----------------------------- //

$traer_datos = $conexion -> prepare("
	SELECT * FROM `usuarios` WHERE `correo` = :prefijo_correo LIMIT 1;
");

# Igual debe ser un arreglo.
$traer_datos -> execute(["prefijo_correo" => $_POST['correo']]);

/* ##########=======================########## */
/* ######===--- Escapar (strings) ---===###### */
/* ##########=======================########## */

# El metodo (quote), permite escapar los 'strings'. 
$names = $conexion -> quote($_POST['names']);
$surnames = $conexion -> quote($_POST['surnames']);
$email = $conexion -> quote($_POST['email']);

# Ahora podemos hacer una insercion y evitamos ataques con (comillas).
$query = $conexion -> query("
	INSERT INTO `users`(`names`, `surnames`, `email`) 
	VALUES ('{$names}', '{$surnames}', '{$email}')
");

/* ##########===================########## */
/* ######===---Iterar valores ---===###### */
/* ##########===================########## */

# Comprobamos que los datos tengan filas.
if(!$traer_datos -> rowCount()){
	echo "No hay filas en los datos.";
	exit();
}

/* Recorremos los datos en forma de objeto. */
while($row = $traer_datos -> fetch(PDO::FETCH_OBJ)){
	printf("
		Nombres: ".$row -> nombres."
		Apellidos: ".$row -> apellidos."
		Correo: ".$row -> correo."
	");
}

/* Recorremos los datos en forma de array asosiativo. */
while($row = $traer_datos -> fetch(PDO::FETCH_ASSOC)){
	printf("
		Nombres: ".$row['nombres']."
		Apellidos: ".$row['apellidos']."
		Correo: ".$row['correo']."
	");
}

/* Recorremos los datos en forma de array indexado. */
while($row = $traer_datos -> fetch(PDO::FETCH_NUM)){
	printf("
		Id de usuario: ".$row[0]."
		Nombres: ".$row[1]."
		Apellidos: ".$row[2]."
		Correo: ".$row[3]."
	");
}

/* Recorremos los datos en forma de array asosiativo e indexado. */
while($row = $traer_datos -> fetch(PDO::FETCH_BOTH)){
	printf("
		Id de usuario: ".$row[0]."
		Nombres: ".$row['nombres']."
		Apellidos: ".$row[2]."
		Correo: ".$row['correo']."
	");
}

/* Recorremos los datos en forma de array asosiativo. */
foreach($traer_datos as $row){
	printf("
		Nombres: ".$row['nombres']."
		Apellidos: ".$row['apellidos']."
		Correo: ".$row['correo']."
	");
}