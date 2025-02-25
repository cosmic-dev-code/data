<!-- ##########================########## -->
<!-- ######===--- Formulario ---===###### -->
<!-- ##########================########## -->

<!--- El atributo (enctype) permite la entrada de archivos desde el formulario. --->
<form method="POST" action="<?php $_SERVER['PHP_SELF'];?>" enctype="multipart/form-data">
	
	<!-- File se guardara en el array (FILES) con el campo (new_file). -->
	<input type="file" name="new_file" accept="image/*">

	<input type="submit" value="Ver" name="submit">
</form>

<?php

/* ##########=============########## */
/* ######===--- $_FILES ---===###### */
/* ##########=============########## */

/* El super array (files) contiene aquellos archivos mandados por el 
input de tipo "file" dentro de un formulario.  */
print_r($_FILES);
/* Da:
		Array
		(
		    [new_file] => Array
		        (
		            [name] => GatoLlorando.png
		            [type] => image/png
		            [tmp_name] => C:\xampp\tmp\php7042.tmp
		            [error] => 0
		            [size] => 876418
		        )
		)
 */

// -------------------- //
// ------ Campos ------ //
// -------------------- //

# Devuelve el nombre del archivo.
$_FILES['new_file']['name'];

# Devuelve el tipo de archivo.
$_FILES['new_file']['type'];

# Ruta temporal, (normalmente utilizada para mover el archivo a una carpeta del servidor), (guardar).
$_FILES['new_file']['tmp_name'];

# evuelve los errores al cargar la imagen.
$_FILES['new_file']['error'];

# Devuelve el peso de la imagen en bytes.
$_FILES['new_file']['size'];

// ------------------------------ //
// ------ Subir un archivo ------ //
// ------------------------------ //

file_put_contents(
	'../paginas/imagenes/document.txt', 
	// Podriamos escribir el contenido del archivo temporal.
	file_get_contents($_FILES['file']['tmp_name'])
);