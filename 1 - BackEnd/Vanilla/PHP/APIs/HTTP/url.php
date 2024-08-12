<?php

# Devuelve el host.
$_SERVER['HTTP_HOST']; # www.ejemplo.com

# Devuelve el path.
$_SERVER['REQUEST_URI']; # /algun/ruta?parametro=valor

# Devuelve la URL completa de la página actual.
# NOTA: (No es confiable porque no todos los agentes de usuario la admiten).
$_SERVER['HTTP_REFERER'];

# Obtenemos la ruta completa.
($_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']); # www.ejemplo.com/algun/ruta?parametro=valor

/* ##########========================########## */
/* ######===--- Nombre del archivo ---===###### */
/* ##########========================########## */

# Devuelve la ruta de la script.
$_SERVER['SCRIPT_NAME'];

# Devuelve el nombre de la script que se esta ejecutando actualmente.
$_SERVER['PHP_SELF'];

// Devuelve el nombre del ultimo archivo al cual se esta accediendo.
basename($ruta); // "index.html"

// Se puede eliminar la extension del archivo.
basename($ruta,".html"); // "index"

/* ##########=============================########## */
/* ######===--- Obtener datos de (ruta) ---===###### */
/* ##########=============================########## */

$ruta = "basename/files/html/index.php";

// La funcion (pathinfo) devuelve un array.
$arrInfo = pathinfo($ruta);
	// Obtenemos la ruta pero no el archivo al cual se esta accediendo.
	$arrInfo['dirname'];
	// Obtenemos el nombre del archivo al cual estamos accediendo junto con su extension.
	$arrInfo['basename'];
	// Obtenemos la extension del archivo al cual accedemos.
	$arrInfo['extension'];

/* La funcion (pathinfo) puede recibir un segundo parametro con algunos de los siguientes valores:
	--- (PATHINFO_DIRNAME): Devuelve solo EL 'dirname'.
	--- (PATHINFO_BASENAME): Devuelve solo el nombre del archivo con la extension.
	--- (PATHINFO_EXTENSION): Solo devuelve la extensión del archivo.
	--- (PATHINFO_FILENAME): Devuelve solo el nombre de archivo sin la extension. */

pathinfo($ruta, PATHINFO_DIRNAME); # "basename/files/html"
pathinfo($ruta, PATHINFO_BASENAME); # "index.html"
pathinfo($ruta, PATHINFO_EXTENSION); # "html"
pathinfo($ruta, PATHINFO_FILENAME); # "index"

/* ##########================########## */
/* ######===--- Parametros ---===###### */
/* ##########================########## */

# Tenemos una (URL).
$url = 'https://www.geeksforgeeks.org?name=Tonny&surname=Ost';

# La funcion (parse_url) divide una (URL) en distintas partes, devuelve un 'array asosiativo'.
$parseURL = parse_url($url);
/*
	Array
	(
	    [scheme] => https
	    [host] => www.geeksforgeeks.org
	    [query] => name=Tonny&surname=Ost
	)
*/

$parametros = null;

/* La funcion (parse_str) separa los parametros de una (url), recibe dos parametros: 
	--- La 'url' convertida a (parse_url).
	--- La variable que gurdara el resultado. */
parse_str($parseURL['query'], $parametros);

print_r($parametros);
/*
	Array
	(
	    [name] => Tonny
	    [surname] => Ost
	)
*/

# -------------------------------------------- #
# ------ Utilizando (file_get_contents) ------ #
# -------------------------------------------- #

# (php://input), permite acceder al cuerpo de la solicitud directamente.
$stringJSON = file_get_contents("php://input");

# Convertimos el (string) a objeto (JSON) para ver la (clave -> valor).
$json = json_decode($stringJSON);

# Convertimos el (string) a arreglo (asosiativo) para ver la [clave => valor].
$json = json_decode($stringJSON, true);