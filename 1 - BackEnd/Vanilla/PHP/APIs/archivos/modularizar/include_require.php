<!DOCTYPE HTML>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta name="description" content="Esta es una descripcion que aparece en el buscador al momento de buscar la pagina en Google.">
		<meta name="robots" content="index,follow">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Titulo de la pagina</title>
	</head>
	<body>
		<!-- Code -->
		<form>
			<!-- Formulario -->
		</form>

		<?php
			# Mandamos a llamar un documento 'php'.
			# Si el documento falla y no se carga entonces no habra ningun problema.
			include("validarFormulario.php");
			include "validarFormulario.php";
			
			# Mandamos a llamar un documento 'php'.
			# Si el archivo falla, entonces todo falla dado que el archivo es necesariamente 
			# requerido (require).
			require("mostrarAnuncios");
			require "mostrarAnuncios";
		?>

		<?php
			# Incluye el archivo una sola vez, si se vuelve a incluir da error.
			include_once("connect.php");
			include_once "connect.php";

			# Requiere el archivo una sola vez, si se vuelve a incluir da error.s
			require_once("connect.php");
			require_once "connect.php";
		?>
	</body>
</html>