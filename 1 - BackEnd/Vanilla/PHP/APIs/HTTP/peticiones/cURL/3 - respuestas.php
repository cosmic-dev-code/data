<?php

/* ##########========================########## */
/* ######===--- Obtener respuestas ---===###### */
/* ##########========================########## */

// ------------------------------------------- //
// ------ Convertir respuesta a (texto) ------ //
// ------------------------------------------- //

$curl = curl_init();

curl_setopt_array($curl, array(
	CURLOPT_URL => "mi_archivo.txt", 
	// Indicar que la respuesta se recibira como una cadena de texto.
	CURLOPT_RETURNTRANSFER => true
));

// Recibir respuesta.
$response = curl_exec($curl); curl_close($curl);

// ------------------------------------------ //
// ------ Convertir respuesta a (json) ------ //
// ------------------------------------------ //

$curl = curl_init();

curl_setopt_array($curl, array(
	CURLOPT_URL => "archivos/info.json", 
	// Recibir respuesta como cadena de exto.
	CURLOPT_RETURNTRANSFER => true, 
	// Inidcar que se espera recibir una respuesta JSON.
	CURLOPT_HTTPHEADER => array('Accept: application/json')
));

// Recibir respuesta.
$response = curl_exec($curl); curl_close($curl);

// Convertir a JSON.
$data = json_decode($response);

// ------------------------------------------ //
// ------ Convertir respuesta a (blob) ------ //
// ------------------------------------------ //

$curl = curl_init();

curl_setopt_array($curl, array(
	CURLOPT_URL => "https://example.com/api/resource", 
	CURLOPT_RETURNTRANSFER => true, 
	// Indicar que la respuesta debe convertirse a datos binarios.
	CURLOPT_BINARYTRANSFER => true
));

// Recibir respuesta.
$response = curl_exec($curl); curl_close($curl);

// Guarda la respuesta en un archivo llamado (output.bin).
file_put_contents("output.bin", $response);