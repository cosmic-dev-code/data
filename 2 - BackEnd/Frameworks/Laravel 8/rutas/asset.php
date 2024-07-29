<?php

/* ##########=========================================########## */
/* ######===--- Mandar a llamar diferentes archivos ---===###### */
/* ##########=========================================########## */

/* La funcion (asset) permite encontrar y vincular enlaces de algunos recursos.

NOTA: La funcion (asset) se posiciona dentro de la carpeta (public). */

######### --- --- --- Archivo (resources/views/components/base.blade.php) --- --- --- ######### ?>

@props([
	'title' => 'Titulo de pagina'
])

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>{{ $title }}</title>

	<!-- Mandamos a llamar de nuestra carpeta (css) a nuestro archivo (app.css). -->
	<link rel="stylesheet" type="text/css" href="<?= asset('css/app.css') ?>">
	<link rel="stylesheet" type="text/css" href="<?= asset('css/mis-estilos.css') ?>">

	<!-- Mandamos a llamar de nuestra carpeta (js) a nuestro archivo (min.js). -->
	<script src="<?= asset('js/min.js') ?>" type="text/javascript"></script>
	<script src="<?= asset('js/mi-script.js') ?>" type="text/javascript"></script>

</head>
<body>
	<header>
		<picture>
			<!--Mandamos a llamar de nuestra carpeta (images) a nuestra imagen (logo.png). -->
			<img src="<?= asset('images/logo.png') ?>"/>
		</picture>
	</header>
</body>
</html>