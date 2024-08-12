<!-- ##########===============########## -->
<!-- ######===--- $_SESSION ---===###### -->
<!-- ##########===============########## -->

<!-- Sessiones hasta arriba del archivo. -->
<?php session_start(); ?>

<form action="<?php $_SERVER['PHP_SELF']; ?>" method="POST">
	<label>
		<span>Correo: </span>
		<input type="email" name="correo">
	</label>
	<label>
		<span>Password: </span>
		<input type="password" name="Password">
	</label>
	<label>
		<span>Repetir password: </span>
		<input type="password" name="password_1">
	</label>
	<div>
		<input type="submit" value="Iniciar sesion" name="session">
		<input type="submit" value="Modificar sesion" name="modify_session">
		<input type="submit" value="Cerrar session" name="close_session">
	</div>
</form>

<?php
	if(isset($_POST['session'])){
		$correo = $_POST['correo'];
		$password = $_POST['password'];
		$password_1 = $_POST['password_1'];

		$datos_usuario = array(
			"correo" => $correo,
			"password" => $password
		);

		# Guardamos los datos del usuario como un objeto (JSON).
		$_SESSION['usuario'] = json_encode($datos_usuario);

	}else if(isset($_POST['modfy_session'])){

		if(isset($_SESSION['usuario'])){
			# Sobrescribimos el campo dandole un objeto (JSON).
			$_SESSION['user'] = json_encode(array(
				"correo" => "nuevoCorreo@example.com",
				"password" => "g0333wn9h2"
			));
		}

	}else if(isset($_POST['close_session'])){
		# Destruye la sesion.
		session_destroy();
		session_unset();
	}
?>