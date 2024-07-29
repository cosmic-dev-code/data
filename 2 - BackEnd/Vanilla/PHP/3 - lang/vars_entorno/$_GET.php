<!-- ##########===========########## -->
<!-- ######===--- $_GET ---===###### -->
<!-- ##########===========########## -->

<!-- El metodo (GET) permite que los datos puedan viajar a traves de la 'url' siendo (visibles).
Nuestro fichero PHP puede recibirlos. -->

<?php

	/**
	 * ($_GET), es el super arreglo que contiene todos los campos que se envian desde el formulario.
	 * 
	 * Los campos (name) de los elementos del formulario representan los (keys) del super arreglo.
	 * Los valores de los elementos del formulario representan los (values) del super arreglo.
	 * 
	 * NOTA: Solo si son enviados por medio del metodo (GET).
	 * NOTA: Solo cuando el formulario hace (submit) los datos en el super array se definen con sus valores.
	 */

	// Si el campo (nombre) existe entonces...
	if(isset($_GET['nombre'])){

		// Obtenemos el valor.
		(string) $nombre = $_GET['nombre'];
		(string) $apellidos = $_GET["apellidos"];

		// Se recibe el arreglo.
		(array) $checkbox = $_GET["lenguajes"];

	}
?>

<!-- (method="GET"), es importante. -->
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="GET">
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