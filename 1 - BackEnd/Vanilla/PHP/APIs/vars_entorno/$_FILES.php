<!-- ##########=============########## -->
<!-- ######===--- $_FILES ---===###### -->
<!-- ##########=============########## -->

<!--- El atributo (enctype) permite la entrada de archivos al super global array (FILES). --->
<form method="POST" action="<?php $_SERVER['PHP_SELF'];?>" enctype="multipart/form-data">
	<!-- File se guardara en el array (FILES) con el campo (new_file). -->
	<input type="file" name="new_file" accept="image/*">
	<input type="submit" value="Ver" name="submit">
</form>

<?php

/* El super array (files) contiene aquellos archivos mandados por el input de tipo 'files' dentro de un formulario.  */
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

echo $_FILES['new_file']['name']; // Devuelve el nombre del archivo.
echo $_FILES['new_file']['type']; // Devuelve el tipo de archivo.
echo $_FILES['new_file']['tmp_name']; // Devuelve un nombre con ruta temporal.
echo $_FILES['new_file']['error']; // Devuelve los errores al cargar la imagen.
echo $_FILES['new_file']['size']; // Devuelve el peso de la imagen.