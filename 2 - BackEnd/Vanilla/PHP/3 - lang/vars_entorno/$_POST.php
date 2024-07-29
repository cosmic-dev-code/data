<!-- ##########============########## -->
<!-- ######===--- $_POST ---===###### -->
<!-- ##########============########## -->

<!-- El metodo (POST) permite mandar datos por la 'url' sin que estos sean visibles, por lo que se mandan 
de una manera mas (segura). -->

<?php

	/**
	 * ($_POST), es el super arreglo que contiene todos los campos que se envian desde el formulario.
	 * 
	 * Los campos (name) de los elementos del formulario representan los (keys) del super arreglo.
	 * Los valores de los elementos del formulario representan los (values) del super arreglo.
	 * 
	 * NOTA: Solo si son enviados por medio del metodo (POST).
	 * NOTA: Solo cuando el formulario hace (submit) los datos en el super array se definen con sus valores.
	 */

	// Si el campo (nombre) existe entonces...
	if(isset($_POST['nombre'])){

		// Obtenemos el valor.
		(string) $nombre = $_POST['nombre'];
		(string) $apellidos = $_POST["apellidos"];

		// Se recibe el arreglo.
		(array) $checkbox = $_POST["lenguajes"];

	}
?>

<!-- (method="POST"), es importante. -->
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