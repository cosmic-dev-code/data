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

// Se realiza una peticion y se devuleve una promesa.
$result = $client->get('http://localhost/documento.txt');

// La promesa se resuelve.
$result->then(function ($result) {

    // Resultado devuelto en "string".
    $response = $result->getBody()->getContents(); // string
})
->otherwise(function ($error) {
    // Se ejecuta cuando hay un error.
})
->finally(function () {
    // Bloque que se ejecuta cuando termina todo, (haya o no errores).
    // ...
});

/* ##########=====================########## */
/* ######===--- catch y finally ---===###### */
/* ##########=====================########## */

$client->get('http://localhost/documento.txt')
    ->then(function ($result) {
        $response = $result->getBody()->getContents(); // string
    })
    ->otherwise(function ($error) {
        // ...
    })
    ->finally(function () {
        // Bloque que se ejecuta cuando termina todo, (haya o no errores).
        // ...
    });

/* ##########==================########## */
/* ######===--- Método (GET) ---===###### */
/* ##########==================########## */

// No se envía nada al servidor, el método es GET.
$client->get('servidor.php')
    ->then(function ($result) {
        // ...
    })

/* Se hace la petición enviando los parámetros: 
   --- nombres = Brandon Anthony.
   --- age = 23. */
$client->get('servidor.php?nombres=Brandon%20Anthony&age=23')
    ->then(function ($result) {
        // ...
    });

/**
 * Otra manera de hacerlo.
 */

$client->get('servidor.php', [
    // Casi siempre para las peticiones (GET) se suele utilizar (query).
    'query' => [
        "nombres" => "Brandon Anthony", 
        "age" => 23
    ]
    // Forma valida de hacerlo.
    'query' => "nombres=Brandon%20Anthony&age=23"
])->then(function ($result) {
    // ...
});

/* ##########===================########## */
/* ######===--- Método (POST) ---===###### */
/* ##########===================########## */

/**
 * Realizar un formulario.
 */

$client->post('servidor.php', [
    // Indicamos el método.
    'body' => 'el_post=post',
    // Esta forma tambien es valida.
    'body' => ["el_post" => "post"],

    // Simulamos el envío de un formulario por seguridad.
    'headers' => ['Content-type' => 'application/x-www-form-urlencoded']
])
    ->then(function ($result) {
        // ...
    });

/**
 * Otra manera de hacerlo seria utilizando (form_params).
 */

$client->post('servidor.php', [
    // Con (form_params) te ahorras el especificar que se trara de un formulario.
    "form_params" => [
        "type" => "post", 
        "title" => "Mi titulo", 
        "id" => 3
    ], 
])
    ->then(function ($result) {
        // ...
    });

// --------------------------- //
// ------ Envio de JSON ------ //
// --------------------------- //

/**
 * Enviar un JSON al servidor.
 */

$client->post('https://http://pagina.in/y/f/users', [
    # Este es el objeto JSON a enviar.
    'body' => json_encode([
        'nombres' => 'Brandon Anthony',
        'apellidos' => 'Olivares, amador',
        'edad' => 21
    ]),
    // Le indicamos al servidor que estamos enviando un JSON.
    'headers' => ['Content-type' => 'application/json']
])
    ->then(function ($result) {
        // ...
    });

/**
 * Otra manera de hacerlo seria utilizando (json).
 */

$client->post('https://api.example.com/resource', [
    // Con esto ya no hace falta especificar que se trata de un JSON.
    'json' => [
        'key1' => 'value1',
        'key2' => 'value2',
    ]
])
    ->then(function ($result) {
        // ...
    });

/* ##########==================########## */
/* ######===--- Método (PUT) ---===###### */
/* ##########==================########## */

// Utilizamos el metodo (put) para realizar la peticion y cambiar el recurso (1) de la (URL).
$client->put('https://api.example.com/users/1', [
    'body' => json_encode([
        'name' => 'John Doe'
    ]),
    'headers' => ['Content-Type' => 'application/json']
])
    ->then(function ($result) {
        // ...
    })
    ->otherwise(function ($error) {
        echo 'Error: ' . $error->getMessage();
    });

/* ##########=====================########## */
/* ######===--- Método (DELETE) ---===###### */
/* ##########=====================########## */

// Utilizamos el metodo (delete) para realizar la peticion eliminar el recurso (1) de la (URL).
$client->delete('https://api.example.com/users/1')
    ->then(function ($result) {
        // ...
    })
    ->otherwise(function ($error) {
        echo 'Error: ' . $error->getMessage();
    });

/* ##########================================########## */
/* ######===--- Encadenamiento de promesas ---===###### */
/* ##########================================########## */

// ----------------------------------- //
// ------ Retornar la respuesta ------ //
// ----------------------------------- //

$client->get('http://localhost/documento.txt')
    ->then(function ($result) {
        // Se retorna el resultado, (string).
        return $result->getBody()->getContents();
    })
    // El resultado retornado se recibe.
    ->then(function ($response) {
        // ...
    })
    ->otherwise(function ($error) {
        // ...
    })
    ->finally(function () {
        // Bloque que se ejecuta cuando termina todo, (haya o no errores).
        // ...
    });

// ------------------------------------ //
// ------ Retornar otra peticion ------ //
// ------------------------------------ //

// Por defecto hace una petición GET y retorna una promesa.
$response = $client->get('https://api.example.com');

$response->then(function ($result) use ($client) {
    // Hace una segunda peticion devolviendo la respuesta resulta.
    return $client->get('https://api.example.com')->then(function ($response) {
        return $response->getBody()->getContents();
    });
})
    // Se recibe la respuesta.
    ->then(function ($response) {
        echo $response;
    })
    // Se ejecuta si ocurre un error en cualquier solicitud.
    ->otherwise(function ($error) {
        echo 'Error: ' . $error->getMessage();
    });

// ---------------------------------------------------- //
// ------ Retornar otra peticion, (simplificada) ------ //
// ---------------------------------------------------- //

// Se hace la primera peticion.
$client->get('https://api.example.com')

// Se hace la segunda peticion devolviendola.
->then(function ($result) use ($client) {
    return $client->get('https://api.example.com');
})

// Se recibe la respuesta final.
->then(function ($response) {
    echo $response->getBody()->getContents();
})

// Se ejecuta si ocurre un error en cualquiera de las peticiones.
->otherwise(function ($error) {
    echo 'Error: ' . $error->getMessage();
});

// ------------------------------------- //
// ------ Encadenamiento multiple ------ //
// ------------------------------------- //

// Realiza una solicitud GET
$client->get('https://api.example.com')
    ->then(
        function ($response) use ($client) {
            // Verifica el estado de la respuesta
            if ($response->getStatusCode() !== 200) {
                throw new Exception('HTTP error, status = ' . $response->getStatusCode());
            }

            // Recibe el texto de la respuesta
            return $response->getBody()->getContents();
        }
    )
    ->then(
        function ($response) use ($client) {
            // Recibe la respuesta resuelta aquí

            // Utiliza la respuesta para realizar otra solicitud POST
            return $client->post('https://api.example.com', [
                'body' => $response,
                'headers' => ['Content-type' => 'application/x-www-form-urlencoded'],
            ]);
        }
    )
    ->then(
        function ($response) {
            // Verifica nuevamente y si es correcto, devuelve el texto de la respuesta
            if ($response->getStatusCode() !== 200) {
                throw new Exception('HTTP error, status = ' . $response->getStatusCode());
            }

            return $response->getBody()->getContents();
        }
    )
    ->then(
        function ($response) {
            // La promesa devuelta se resuelve aquí, y se recibe el resultado final
            var_dump($response);
        }
    )
    ->otherwise(
        function (RequestException $e) {
            // Este bloque 'otherwise' maneja cualquier error de cualquier promesa, incluyendo los lanzados
            echo 'Error: ' . $e->getMessage();
        }
    )
    ->wait();

/* ##########============================########## */
/* ######===--- (GuzzleHttp) asincrono ---===###### */
/* ##########============================########## */

/**
 * No se encontró código asíncrono.
 */

// -------------------------------------- //
// ------ Utilizar (try) y (catch) ------ //
// -------------------------------------- //

/**
 * No se encontró código asíncrono.
 */