<?php

require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client();

/* ##########=================================########## */
/* ######===--- Propiedades de la respuesta ---===###### */
/* ##########=================================########## */

// Realizar una solicitud HTTP GET
$response = $client->request('GET', 'http://www.example.com');

// Obtener el código de estado
$status = $response->getStatusCode(); // 200

// Obtener el texto del estado
$statusText = $response->getReasonPhrase(); // "OK"

// Obtener la URL de respuesta
$url = (string)$response->getUri();

// Indicar si la respuesta fue redirigida desde una URL diferente
$redirected = $response->getHeaderLine('X-Guzzle-Redirected') === '1';

// Indicar si la respuesta fue exitosa (código 2xx)
$isSuccessful = $status >= 200 && $status < 300;

// Convertir la respuesta a otro tipo de dato (texto)
$texto = $response->getBody()->getContents();

// Luego puedes realizar acciones adicionales con el contenido, por ejemplo:
// ...

/* ##########==========================########## */
/* ######===--- Tipos de (respuesta) ---===###### */
/* ##########==========================########## */

// ------------------------------------------- //
// ------ Convertir respuesta a (texto) ------ //
// ------------------------------------------- //

// Se hace una peticion al servidor.
$response = $client->request('GET', 'documento.txt');

// La respuesta que se recibe esta en formato (string).
$response->getBody()->getContents(); // string

// ------------------------------------------ //
// ------ Convertir respuesta a (json) ------ //
// ------------------------------------------ //

$response = $client->request('GET', 'files/data/users.json');

$contenido = $response->getBody()->getContents(); // string

// La respuesta en formato (string) se convierte a JSON.
$data = json_decode($contenido);

// ------------------------------------------ //
// ------ Convertir respuesta a (blob) ------ //
// ------------------------------------------ //

$response = $client->request('GET', 'imagen.png');

$contenido = $response->getBody()->getContents();

// Se crea un objeto de flujo utilizando la clase (Stream).
$blob = new \GuzzleHttp\Psr7\Stream($contenido);

// Podemos convertir la respuesta en una dirección URL.
$data = stream_get_contents($blob);
$url = 'data:application/octet-stream;base64,' . base64_encode($data);

// ----------------------------------------- //
// ------ Convertir respuesta a (DOM) ------ //
// ----------------------------------------- //

$response = $client->request('GET', 'archivo.xml');

$xmlString = $response->getBody()->getContents();

// Creamos un objeto DOM para tratar los datos como un DOM.
$parser = new DOMDocument();

// Pasamos la respuesta la cual se convierte en una estructura DOM manipulable.
$parser->loadXML($xmlString);

$parser->getElementsByTagName('mi-elemento')->item(0)->textContent; // string