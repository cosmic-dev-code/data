<?php

/* ##########=====================########## */
/* ######===--- Ajustes de cURL ---===###### */
/* ##########=====================########## */

// Inicializamos (curl) para hacer peticiones.
$curl = curl_init();

// -------------------------------- //
// ------ Ajustes en arreglo ------ //
// -------------------------------- //

// Devuelve la version de (cURL).
print_r( curl_version() );

curl_setopt_array($curl, array(
	// 'url' de la peticion.
	CURLOPT_URL => "https://www.example.com",
	// Indica que la respuesta se recibe como una cadena de texto en lugar de imprimirla en pantalla.
	CURLOPT_RETURNTRANSFER => true,
	// Verifica si debe tener el certificado SSL del servidor.
	CURLOPT_SSL_VERIFYPEER => false,
	// Indica que el metodo es (POST).
	CURLOPT_POST => true,
	// Datos a enviar.
	CURLOPT_POSTFIELDS => "name=value",
	// Cabeceras de la peticion.
	CURLOPT_HTTPHEADER => array(
		"Content-Type: application/x-www-form-urlencoded",
		"Authorization: Bearer access_token"
	),
	// Tipo de codificacion.
	CURLOPT_ENCODING => "", 
	// Establece el limite de redirecciones.
	CURLOPT_MAXREDIRS => 10,
	// Tiempo maximo de transferencia (en segundos).
	CURLOPT_TIMEOUT => 0,
	/* Establece si seguira el redireccionamiento: 
		--- (1), establece que seguira el redireccionamiento.
		--- (0), establece que solo devolverta el estado de la peticion HTTP de la respuesta. */
	CURLOPT_FOLLOWLOCATION => true,
	/* Indica la version de (cURL): 
		--- (CURL_HTTP_VERSION_NONE), utilizar la ultima version disponible.
		--- (CURL_HTTP_VERSION_1_1), por defecto. 
		--- (CURL_HTTP_VERSION_1_0).
		--- (CURL_HTTP_VERSION_2_0)*/
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	// Indica el metodo de la peticion: (GET) o (POST).
	CURLOPT_CUSTOMREQUEST => "GET"
));

// ---------------------------------- //
// ------ Ajustes individuales ------ //
// ---------------------------------- //

# Los ajustes tambien se pueden configurar de manera individual.

curl_setopt($curl, CURLOPT_URL, "https://www.example.com");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, 	CURLOPT_HTTPHEADER, array(
	"Content-Type: application/x-www-form-urlencoded",
	"Authorization: Bearer access_token"
));
curl_setopt($curl, CURLOPT_POSTFIELDS, "name=value");
curl_setopt($curl, CURLOPT_POST, true);

// -------------------------------------------- //
// ------ Obtener (respuesta) y (estado) ------ //
// -------------------------------------------- //

// Ejecuta la peticion.
$response = curl_exec($curl);

// Se obtiene el estado de la peticion.
$status = curl_getinfo($curl, CURLINFO_HTTP_CODE);

// ------------------------------- //
// ------ Verificar errores ------ //
// ------------------------------- //

// Forma 0.
if(curl_errno($curl)){
	echo "Ha ocurrido un error con la peticion: " . curl_errno($curl);
}

// Forma 1.
$error = curl_error($curl);
if($error){
	echo "Ha ocurrido un error con la peticion: " . $error;
}

// Finalizar.
curl_close($curl);