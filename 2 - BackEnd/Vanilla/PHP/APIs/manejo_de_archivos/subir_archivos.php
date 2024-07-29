<?php

/* ##########===============================########## */
/* ######===--- (Copiar/subir) un archivo ---===###### */
/* ##########===============================########## */

// -------------------------- //
// ------ Validaciones ------ //
// -------------------------- //

if($_FILES['image']['size'] > 200000){
	# Comprobar dimensiones del archivo en (bytes).
	printf("El archivo no debe pesar mas de 200KB.");
}

if(!($_FILES['image']['type'] === 'image/png' || $_FILES['image']['type'] === 'image/jpg')){
	# Comprobar tipo de archivo.
	printf("Solo se admiten imagenes de tipo (png) y (jpg).");
}

print_r($_FILES);
/* Tenemos una imagen almacenada desde una peticion de un formulario.
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

// ---------------------------- //
// ------ (Copiar/Subir) ------ //
// ---------------------------- //

/* Necesitamos primero la 'url' a donde vamos a copiar nuestro archivo, en este caso fuera de la carpeta en donde se encuentra nuestra 'script'. */
$url = (
	# Extraemos solo el archivo y su extension (GatoLlorando.png).
	"../images/" . basename($_FILES['image']['name']) # Da: "../images/GatoLlorando.png".
);

/* La funcion (move_uploaded_file) copia un archivo a otro lugar, recibe los siguientes parametros: 
	--- (El archivo que se debe copiar), en este caso la ruta temporal creada 
		desde el formulario almacenada en el campo (tmp_name).
	--- La ruta a la cual se va a almacenar el archivo. */
$result = move_uploaded_file($_FILES['image']['tmp_name'], $url);

# En caso de que haya un error.
if(!$result) die("Error al copiar el archivo.");