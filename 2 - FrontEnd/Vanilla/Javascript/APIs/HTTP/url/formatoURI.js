/* ##########======================########## */
/* ######===--- Codificacion URI ---===###### */
/* ##########======================########## */

// Permite decodificar una URL convertida para la transmision segura de datos.

/* ##########====================########## */
/* ######===--- Decodificacion ---===###### */
/* ##########====================########## */

/*
	1. Cadena inicial de texto.
		--- "Hello World! $@#"

	2. Se pasa por la barra de busquedas del navegador.
		--- "Hello%20World%21%20%24%40%23"
*/

// 3. Podemos decodificarla.

// Decodifica una cadena en formato URI, (se utiliza para datos de una URL).
// 		--- "Hello World! $@#"
decodeURIComponent("Hello%20World%21%20%24%40%23");

// Decodifica una cadena en formato URI, (se utiliza para una URL completa).
//		--- "https://example.com/page?query=value#section"
decodeURI('https%3A%2F%2Fexample.com%2Fpage%3Fquery%3Dvalue%23section');

/* ##########==================########## */
/* ######===--- Codificacion ---===###### */
/* ##########==================########## */

// Hace lo contrario a la decodificacion.

// (Codifica datos para una URL).
// 		--- "Hello%20World%21%20%24%40%23"
encodeURIComponent("Hello World! $@#");

// (Codifica una URL completa).
// 		--- "https://example.com/page?query=Hello%20World%21%20%24%40%23"
encodeURI("https://example.com/page?query=Hello World! $@#")