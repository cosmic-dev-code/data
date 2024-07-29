<?php

// Carga el autoloader de Composer.
require 'vendor/autoload.php';

// Utilizamos la calse (Client).
use GuzzleHttp\Client;

// Instanciamos el objeto que nos permitira realizar las peticiones.
$client = new Client();

/* ##########================########## */
/* ######===--- Estructura ---===###### */
/* ##########================########## */

// Se hace la peticion.
$response = $client->request('GET', 'https://api.example.com');

// Se recibe la respuesta.
$response = $response->getBody()->getContents(); // string

/* ##########=====================########## */
/* ######===--- catch y finally ---===###### */
/* ##########=====================########## */

try {
    $response = $client->request('GET', 'http://localhost/documento.txt');

    $response = $response->getBody()->getContents(); // string

    // ...
} catch (Exception $error) {
    // Maneja el error
    // ...
} finally {
    // Bloque que se ejecuta cuando termina todo, (haya o no errores).
    // ...
}

/* ##########==================########## */
/* ######===--- Método (GET) ---===###### */
/* ##########==================########## */

// Enviar una peticion y recibir una respuesta.
$response = $client->request('GET', 'servidor.php');
$response = $response->getBody()->getContents();

// Enviar parametros.
$response = $client->request('GET', 'servidor.php?nombres=Brandon%20Anthony&age=23');
$response = $response->getBody()->getContents();

/**
 * Otra forma de enviar los parametros.
 */

$response = $client->request('GET', 'servidor.php', [
    # El cuerpo de la peticion puede mandarse como alternativa en (query), que es lo que se suele utilizar.
    "query" => [
        "nombres" => "Brandon Anthony", 
        "age" => 23
    ]
]);
$response = $response->getBody()->getContents();

/* ##########===================########## */
/* ######===--- Método (POST) ---===###### */
/* ##########===================########## */

// --------------------------------- //
// ------ Envio de formulario ------ //
// --------------------------------- //

$response = $client->request('POST', 'servidor.php', [
    # Cuerpo a enviar.
    'body' => 'el_post=post',
    # Puediera tambien ser asi.
    'body' => ["el_post" => "post"],

    # Indicamos que se trata de un formulario.
    'headers' => ['Content-type' => 'application/x-www-form-urlencoded']
]);
$response = $response->getBody()->getContents();

/**
 * Otra manera de hacerlo seria utilizando (form_params).
 */

$response = $client->request('POST', 'https://api.example.com/resource', [
    // Con (form_params) te ahorras el especificar que se trara de un formulario.
    'form_params' => [
        'param1' => 'value1',
        'param2' => 'value2'
    ],
]);
$response = $response->getBody()->getContents();

// --------------------------- //
// ------ Envio de JSON ------ //
// --------------------------- //

$response = $client->request('POST', 'https://http://pagina.in/y/f/users', [
    // Cuerpo convertido en un objeto JSON.
    'body' => json_encode([
        'nombres' => 'Brandon Anthony',
        'apellidos' => 'Olivares, amador',
        'edad' => 21
    ]), 
    // Especificamos que estamos enviando un JSON.
    'headers' => ['Content-type' => 'application/json']
]);
$response = $response->getBody()->getContents();

/**
 * Otra manera de hacerlo seria utilizando (json).
 */

$response = $client->request('POST', 'https://api.example.com/resource', [
    // Con esto ya no hace falta especificar que se trata de un JSON.
    'json' => [
        'key1' => 'value1',
        'key2' => 'value2',
    ]
]);
$response = $response->getBody()->getContents();


/* ##########==================########## */
/* ######===--- Método (PUT) ---===###### */
/* ##########==================########## */

// Indicamos el tipo de metodo.
$response = $client->request('PUT', 'https://api.example.com/users/1', [
    'body' => json_encode(['name' => 'John Doe']),
    'headers' => ['Content-Type' => 'application/json']
]);

$response = $response->getBody()->getContents();

/* ##########=====================########## */
/* ######===--- Método (DELETE) ---===###### */
/* ##########=====================########## */

// Indicamos el tipo de metodo.
$response = $client->request('DELETE', 'https://api.example.com/users/1');

$response = $response->getBody()->getContents();