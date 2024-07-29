<?php

/* ##########====================########## */
/* ######===--- Peticion (GET) ---===###### */
/* ##########====================########## */

$response = file_get_contents("https://ejemplo.com/recurso");

# Mostrar el resultado.
echo $response;

/* ##########=====================########## */
/* ######===--- Peticion (POST) ---===###### */
/* ##########=====================########## */

// Datos a enviar.
$data = array('name' => 'Harrison Ford', 'email' => 'harrisonford@example.com');

// Ajustes de la peticion.
$options = array(
	'http' => array(
		'method' => 'PUT',
		'header' => "Content-type: application/x-www-form-urlencoded\r\n",
		'content' => http_build_query($data)
	)
);

/**
 * Primero se crea un (contexto) para utilizarlo en la peticion.
 */

$context = stream_context_create($options);

$response = file_get_contents('https://example.com/api/resource', false, $context);