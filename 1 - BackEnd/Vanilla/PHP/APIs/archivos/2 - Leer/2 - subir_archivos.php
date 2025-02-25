<?php

/* ##########===============================########## */
/* ######===--- (Copiar/subir) un archivo ---===###### */
/* ##########===============================########## */

// -------------------------- //
// ------ Validaciones ------ //
// -------------------------- //

# Devuelve la simension del archivo en (bytes).
$_FILES['image']['size']; // number

# Devuelve el tipo de archivo.
$_FILES['image']['type']; // "image/png"

print_r($_FILES);
/* 
	Array(
		[image] => Array(
			[name] => GatoLlorando.png
			[type] => image/png
			[tmp_name] => C:\xampp\tmp\php7042.tmp
			[error] => 0
			[size] => 876418
		)
	)
*/

// ------------------------------ //
// ------ Subir un archivo ------ //
// ------------------------------ //

file_put_contents(
	'../paginas/imagenes/document.txt', 
	// Podriamos escribir el contenido del archivo temporal.
	file_get_contents($_FILES['file']['tmp_name'])
);

// ---------------------------- //
// ------ (Copiar/Subir) ------ //
// ---------------------------- //

# Necesitamos primero la (url) a donde vamos a copiar nuestro archivo.
$url = (
	# Extraemos el nombre.
	#	--- "../images/GatoLlorando.png"
	"../images/" . basename($_FILES['image']['name'])
);

/* La funcion (move_uploaded_file) copia un archivo a otro lugar: 
	--- (Ruta del archivo), en este caso la ruta temporal del archivo.
	--- (Nueva ruta y nombre), del archivo dentro del servidor.
*/
$result = move_uploaded_file($_FILES['image']['tmp_name'], $url);

# Validacion del archivo.
if(!$result)
	die("Error al copiar el archivo.");