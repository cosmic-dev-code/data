<!-- ##########==============########## -->
<!-- ######===--- $_COOKIE ---===###### -->
<!-- ##########==============########## -->

<!-- Formulario para crear una cookie. -->
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="GET" autocomplete="on">
	<label>
		<span>Correo: </span>
		<input type="email" name="correo">
	</label>
	<label>
		<span>Password: </span>
		<input type="password" name="password">
	</label>
	<label>
		<span>Repetir password: </span>
		<input type="email" name="password_1">
	</label>
	<div>
		<input type="submit" value="Crear cookie" name="crear_cookie">
		<input type="submit" value="Destruir cookie" name="destruir_cookie">
	</div>
</form>

<?php
	if(isset($_GET['crear_cookie'])){
		$correo = $_GET['correo'];
		$password = $_GET['password'];
		$password_1 = $_GET['password_1'];

		$datos_usuario = array(
			"correo" => $correo,
			"password" => $password
		);

		// Si la cookie existe, entonces se sobreescribe.
		if(isset($_COOKIE['usuario'])){
			setcookie("usuario", json_encode($datos_usuario), time() + (3600*30), "/");
		}else if(isset($_GET['destruir_cookie'])){
			/* Damos un valor 'nulo' y reducimos el tiempo de caducacion, para que sea eliminada. */
			setcookie("usuario", null, time() - 3600, "/");
		}else{
			// Guardamos la informacion del usuario en un JSON dentro de la cookie.
			setcookie("usuario", json_encode($datos_usuario), time() + (3600*30), "/");
		}
	}
?>