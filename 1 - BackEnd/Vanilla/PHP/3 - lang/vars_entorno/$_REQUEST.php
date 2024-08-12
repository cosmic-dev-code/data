<!-- ##########===============########## -->
<!-- ######===--- $_REQUEST ---===###### -->
<!-- ##########===============########## -->

<!-- Aqui los datos pueden recibirse por medio de (POST) y (GET), da igual el metodo que se utilize. -->

<?php

	/**
	 * ($_REQUEST), es el super arreglo que contiene todos los campos que se envian desde el formulario.
	 * 
	 * Los campos (name) de los elementos del formulario representan los (keys) del super arreglo.
	 * Los valores de los elementos del formulario representan los (values) del super arreglo.
	 * 
	 * NOTA: Solo si son enviados por medio del metodo (POST) o (GET), ambos metodos los capta el super array.
	 * NOTA: Solo cuando el formulario hace (submit) los datos en el super array se definen con sus valores.
	 */

	// Si el campo (nombre) existe entonces...
	if(isset($_REQUEST['nombre'])){

		// Obtenemos el valor.
		(string) $nombre = $_REQUEST['nombre'];
		(string) $apellidos = $_REQUEST["apellidos"];

		// Se recibe el arreglo.
		(array) $checkbox = $_REQUEST["lenguajes"];

	}
?>

<!-- Aqui el metodo puede ser (POST) o (GET). -->
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
	<fieldset>
		<legend>Datos de usuario</legend>

		<!-- Definimos los elementos con sus: (name === key) y (value === value). -->
		<input type="text" name="nombre">
		<input type="text" name="apellidos">

		<div>
			<!-- (name[]) indica que se trata de un arreglo que sera recibido en el servidor. -->
			<input type="lenguajes[]" value="C"> C
			<input type="lenguajes[]" value="CPP"> C++
		</div>


	</fieldset>
	<div>
		<input type="submit">
	</div>
</form>