<?php

/* ##########====================########## */
/* ######===--- Peticion (GET) ---===###### */
/* ##########====================########## */

$curl = curl_init();

curl_setopt_array($curl, array(
	CURLOPT_URL => "https://www.example.com",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => "", 
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 0,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
));

$response = curl_exec($curl);

curl_close($curl);

# ------------------------------------------------------------------------------------------ #

$curl = curl_init();

// Coloca la URL.
curl_setopt($curl, CURLOPT_URL, "https://www.example.com");
// Parametros que esta recibe.
curl_setopt($curl, CURLOPT_POSTFIELDS, "id=20");
// Cabeceras de la peticion.
curl_setopt($curl, CURLOPT_HTTPHEADER, array(
	"Content-Type: application/x-www-form-urlencoded",
	"Authorization: Bearer access_token"
));
// La respuesta se recibe como (string).
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Obtenemos la respuesta y la informacion de la misma.
$response = curl_exec($curl);
$response_content = curl_getinfo($curl, CURLINFO_HTTP_CODE);

curl_close($curl);

/* ##########=====================########## */
/* ######===--- Peticion (POST) ---===###### */
/* ##########=====================########## */

function peticionPOST(){
	$curl = curl_init();

	curl_setopt($curl, CURLOPT_URL, "https://example.com/api/resource");
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	// Metodo POST.
	curl_setopt($curl, CURLOPT_POST, true);
	curl_setopt($curl, CURLOPT_POSTFIELDS, "param1=value1&param2=value2");

	$response = curl_exec($curl); curl_close($curl);
}

function enviarJSON(){
	// Ojeto a enviar.
	$json_data = json_encode(array(
		"param1" => "value1", 
		"param2" => "value2"
	));

	// Se establecen las cabeceras con la informacio.
	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		'Content-Type: application/json', 
		'Content-Length: ' . strlen($json_data)
	));
	// Enviar parametros.
	curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);

	$response = curl_exec($curl); curl_close($curl);
}

/* ##########====================########## */
/* ######===--- Peticion (PUT) ---===###### */
/* ##########====================########## */

$data = array(
	'name' => 'Harrison Ford', 
	'email' => 'harrisonford@example.com'
);

$curl = curl_init('https://example.com/api/resource');

curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
// Especificar el metodo.
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
// Enviar datos.
curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));

$response = curl_exec($curl); curl_close($curl);

/* ##########=======================########## */
/* ######===--- Peticion (DELETE) ---===###### */
/* ##########=======================########## */

$curl = curl_init();

curl_setopt_array($curl, array(
	CURLOPT_URL => "https://ejemplo.com/recurso/1",
	CURLOPT_RETURNTRANSFER => true, 
	// Metodo (DELETE).
	CURLOPT_CUSTOMREQUEST => "DELETE"
));

// Obtener respuesta.
$response = curl_exec($curl);

// Obtener error.
$error = curl_error($curl);

curl_close($curl);

if ($error) {
	echo "Error: " . $error;
} else {
	echo $response;
}

/* ##########===============########## */
/* ######===--- Asincrono ---===###### */
/* ##########===============########## */

/* Se pueden manejar varias peticiones cURL. */

// Para guardar todas las peticiones a ejecutar.
$multi_curl = curl_multi_init();

# Primera peticion.
$curl_0 = curl_init();
curl_setopt($curl_0, CURLOPT_URL, "https://www.example.com/1");
curl_setopt($curl_0, CURLOPT_RETURNTRANSFER, true);

# Segunda peticion.
$curl_1 = curl_init();
curl_setopt($curl_1, CURLOPT_URL, "https://www.example.com/2");
curl_setopt($curl_1, CURLOPT_RETURNTRANSFER, true);

// Agregar las peticiones a la pila.
curl_multi_add_handle($multi_curl, $curl_0);
curl_multi_add_handle($multi_curl, $curl_1);

// ---------------------------------------------------- //
// ------ Ejecutar las peticiones con (do while) ------ //
// ---------------------------------------------------- //

$active = null;
do{
	
	// Ejecutar la peticion de forma asincrona.
	$multi = curl_multi_exec($multi_curl, $active);

}while($multi == CURLM_CALL_MULTI_PERFORM);

// ------------------------------------------------- //
// ------ Ejecutar las peticiones con (while) ------ //
// ------------------------------------------------- //

while($active && $multi == CURLM_OK){
	// Espera la solicitud.
    if (curl_multi_select($multi_curl) != -1) {
        do {

        	// Ejecutar la peticion de forma asincrona.
            $multi = curl_multi_exec($multi_curl, $active);

        } while ($multi == CURLM_CALL_MULTI_PERFORM);
    }
}

// -------------------------------- //
// ------ Recibir respuestas ------ //
// -------------------------------- //

// Recibir las respuestas de cada peticion.
$response_0 = curl_multi_getcontent($curl_0);
$response_1 = curl_multi_getcontent($curl_1);

// Liberar la 'pila'.
curl_multi_remove_handle($multi_curl, $curl_0);
curl_multi_remove_handle($multi_curl, $curl_1);

curl_multi_close($multi_curl);