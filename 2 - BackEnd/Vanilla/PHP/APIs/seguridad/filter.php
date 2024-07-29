<?php

/* ##########===================########## */
/* ######===--- Limpiar datos ---===###### */
/* ##########===================########## */

// ------------------------------------ //
// ------ Limpiar etiquetas HTML ------ //
// ------------------------------------ //

# Elimina las etiquetas HTML de una cadena de texto
filter_var("<h1>Hello World!</h1>", FILTER_SANITIZE_STRING); // "Hello World!"

// ------------------------------------------ //
// ------ Limpiar valores (ASCII> 127) ------ //
// ------------------------------------------ //

filter_var(
	"<h1>Hello WorldÆØÅ!</h1>", 
	FILTER_SANITIZE_STRING, 
	# Limpiar valores (ASCII> 127).
	FILTER_FLAG_STRIP_HIGH
); // "Hello World!"

// ---------------------------------------- //
// ------ Limpiar correo electronico ------ //
// ---------------------------------------- //

filter_var("<br/>john.doe@example.com", FILTER_SANITIZE_EMAIL); // "brjohn.doe@example.com"
filter_var("john.doeexample.com", FILTER_SANITIZE_EMAIL); // false

// ------------------------- //
// ------ Limpiar URL ------ //
// ------------------------- //

filter_var("<b>https://www.w3schools.com</b>", FILTER_SANITIZE_URL); // "bhttps://www.w3schools.comb";

/* ##########==================########## */
/* ######===--- Validaciones ---===###### */
/* ##########==================########## */

// ------------------------------- //
// ------ Validar un correo ------ //
// ------------------------------- //

// Valida que el dato sea un correo.
filter_var("john.doe@example.com", FILTER_VALIDATE_EMAIL)

// ------------------------- //
// ------ Validar URL ------ //
// ------------------------- //

// Valida que la cadena sea una (url).
filter_var("https://www.w3schools.com", FILTER_VALIDATE_URL); // "https://www.w3schools.com"
filter_var("https://wwww3schools.com", FILTER_VALIDATE_URL); // false

// Validar que una (url) contenga parametros.
filter_var(
	"https://www.w3schools.com?num=50", 
	FILTER_VALIDATE_URL, 
	# Validar que contenga parametros.
	FILTER_FLAG_QUERY_REQUIRED
); // "https://www.w3schools.com?num=50"

// ------------------------ //
// ------ Validar IP ------ //
// ------------------------ //

// Valida que el dato sea una direccion (IP).
filter_var("127.0.0.1", FILTER_VALIDATE_IP); // "127.0.0.1"
filter_var("127.0.01", FILTER_VALIDATE_IP); // false

// Validar direccion (IPv6).
filter_var(
	"2001:0db8:85a3:08d3:1319:8a2e:0370:7334", 
	FILTER_VALIDATE_IP, 
	# Validar que sea una IPv6.
	FILTER_FLAG_IPV6
); // "2001:0db8:85a3:08d3:1319:8a2e:0370:7334"

// ----------------------------------- //
// ------ Validar numero entero ------ //
// ----------------------------------- //

// Valida un numero entero.
filter_var(0, FILTER_VALIDATE_INT); // 0
filter_var(100, FILTER_VALIDATE_INT); // 100
filter_var("100", FILTER_VALIDATE_INT); // 100
filter_var("100d", FILTER_VALIDATE_INT); // false

// Como el (0) es un numero, pero booleanamente se toma como (false), para solucionarlo.
(filter_var($numero) === 0 || filter_var($numero) !== false); // ...

/* Por tercer parametro recibe el objeto (options): 
	--- (max_range), indica el rango maximo al que debe llegar el numero.
	--- (min_range), indica el rango minimo al que debe llegar el numero.

Si el numero sobrepasa el rango da (false). */
filter_var(100, FILTER_VALIDATE_INT, [
	"options" => array(
		"min_range" => 1, 
		"max_range" => 50
	)
]);