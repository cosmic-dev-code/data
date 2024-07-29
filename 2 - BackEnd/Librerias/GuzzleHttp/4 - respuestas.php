<?php

require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client();

/* ##########=================================########## */
/* ######===--- Propiedades de la respuesta ---===###### */
/* ##########=================================########## */

$response = $client->get('http://www.example.com');

$response->then(function ($result) {
    // Devuelve el estado de la petición.
    $status = $result->getStatusCode(); // 200

    // Devuelve el estado de la petición en forma de texto.
    $statusText = $result->getReasonPhrase(); // "OK"

    // Devuelve la URL de respuesta.
    $url = (string)$result->getUri();

    // Indica si la respuesta fue redirigida desde una URL diferente.
    $redirected = $result->getHeaderLine('X-Guzzle-Redirected') === '1';

    // Indica si la respuesta fue exitosa (código 2xx).
    $isSuccessful = $result->getStatusCode() >= 200 && $result->getStatusCode() < 300;

    // Convertir la respuesta a otro tipo de dato (texto), esto retorna otra promesa.
    return $result->getBody()->getContents();
})->then(function ($texto) {
    // ...
})->otherwise(function ($error) {
    // ...
});

/* ##########==========================########## */
/* ######===--- Tipos de (respuesta) ---===###### */
/* ##########==========================########## */

// ------------------------------------------- //
// ------ Convertir respuesta a (texto) ------ //
// ------------------------------------------- //

$client->get('documento.txt')
    // Convertir la respuesta a texto.
    ->then(function ($respuesta) {
        $texto = $respuesta->getBody()->getContents();
        // ...
    })
    ->otherwise(function ($error) {
        echo $error->getMessage();
    });

// ------------------------------------------ //
// ------ Convertir respuesta a (json) ------ //
// ------------------------------------------ //

$client->get('files/data/users.json')
    // Recibimos la respuesta encapsulada y la convertimos a formato JSON.
    ->then(function ($respuesta) {
        $contenido = $respuesta->getBody()->getContents();
        $data = json_decode($contenido);
        // ...
    })
    ->otherwise(function ($error) {
        echo $error->getMessage();
    });

// ------------------------------------------ //
// ------ Convertir respuesta a (blob) ------ //
// ------------------------------------------ //

// Leemos una imagen.
$client->get('imagen.png')
    // Transformar respuesta a (blob).
    ->then(function ($respuesta) {
        $contenido = $respuesta->getBody()->getContents();

        // Se crea un objeto de flujo utilizando la clase (Stream).
        $blob = new \GuzzleHttp\Psr7\Stream($contenido);
        
        // Podemos convertir la respuesta en una dirección URL.
        $data = stream_get_contents($blob);
        $url = 'data:application/octet-stream;base64,' . base64_encode($data);
        
        // ...
    })
    ->otherwise(function ($error) {
        echo $error->getMessage();
    });


// ----------------------------------------- //
// ------ Convertir respuesta a (DOM) ------ //
// ----------------------------------------- //

$client->get('archivo.xml')
    ->then(function ($respuesta) {
        $xmlString = $respuesta->getBody()->getContents();

        // Creamos un objeto DOM para tratar los datos como un DOM.
        $parser = new DOMDocument();

        // Pasamos la respuesta la cual se convierte en una estructura DOM manipulable.
        $parser->loadXML($xmlString);

        $parser->getElementsByTagName('mi-elemento')->item(0)->textContent; // string
    })
    ->otherwise(function ($error) {
        echo $error->getMessage();
    });