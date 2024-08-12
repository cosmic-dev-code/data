<?php

// Esta funcion es la mas importante y va al principio del archivo.
// Indica que trabajaremos con sesiones, de lo sontrario ($_SESSION) estara indefinido.
session_start();

/* ##########=================================########## */
/* ######===--- Estado de la session actual ---===###### */
/* ##########=================================########## */
/*
	Valores que devuelve: 
		--- (PHP_SESSION_DISABLED) si las sesiones están deshabilitadas.
		--- (PHP_SESSION_NONE) si las sesiones están habilitadas, pero no existe ninguna.
		--- (PHP_SESSION_ACTIVE) si las sesiones están habilitadas, y existe una.
*/
$session = session_status();

/* ##########===============================########## */
/* ######===--- iniciar y destruir sesion ---===###### */
/* ##########===============================########## */

# Destruye las sesiones abiertas.
session_destroy();

# Libera todas las variables de sesión.
session_unset();

/* ##########====================########## */
/* ######===--- Crear sesiones ---===###### */
/* ##########====================########## */

/* El super array ($_SESSION) solo acepta por valores "strings". */

// Se utiliza para la cookie de sesion: [llave => valor].
$_SESSION['usuario'] = "newUsuario";

// Podemos optar por guardar un JSON.
$_SESSION['usuario_1'] = json_encode(array(
	"nombre" => "Brandon",
    "edad" => 21,
    "correo" => "brandon@gmail.com"
));

// Guardar un varios datos codificados: [arrays -> strings].
$_SESSION['usuario_2'] = implode(", ", [
	implode("-", ["nombre", "Brandon"]),
    implode("-", ["edad", 21]),
    implode("-", ["correo", "brandon@gmail.com"])
]);

// ----------------------------------- //
// ------ Codificar super array ------ //
// ----------------------------------- //

/* Devuelve todos los campos del super array ($_SESSION) codificados. */
$session_encode = session_encode();
/* Da: 
	--- usuario|s:10:"newUsuario";
	--- usuario_1|s:59:"{"nombre":"Brandon","edad":21,"correo":"brandon@gmail.com"}";
	--- usuario_2|s:49:"nombre-Brandon, edad-21, correo-brandon@gmail.com";
*/

/* ##########===========================########## */
/* ######===--- Nombre para la sesion ---===###### */
/* ##########===========================########## */

// Devuelve el nombre de la sesion, (PHPSESSID) es cuando no hay sesiones actuales.
session_name(); // PHPSESSID

/* Establecemos un nuevo nombre para la (sesion). Nota: El nombre de la sesion no 
puede contener solo digitos, debe haber al menos una letra. */
session_name("sesion_del_usuario");

// Obtenemos el nombre de la sesion.
session_name(); // "sesion_del_usuario"

/**
 * Nombres invalidos para las sesiones. 
 */
session_name("123");
session_name("");