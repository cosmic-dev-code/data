<?php

/* ##########==============########## */
/* ######===--- $_SERVER ---===###### */
/* ##########==============########## */

/* '$ _SERVER' es una variable súper global de PHP que contiene información 
sobre encabezados, rutas y ubicaciones de scripts. */

# Devuelve el nombre y la ruta del script que se esta ejecutando actualmente.
$_SERVER['PHP_SELF'];

# Devuelve el nombre del servidor.
$_SERVER['SERVER_NAME'];

# Devuelve el encabezado del host de la solicitud actual
$_SERVER['HTTP_HOST'];

# Devuelve la URL completa de la página actual (no es confiable porque no todos los agentes de usuario la admiten)
$_SERVER['HTTP_REFERER'];

# Devuelve la informacion del navegador, el sistema operativo, etc.
$_SERVER['HTTP_USER_AGENT'];

# Devuelve la ruta de la script.
$_SERVER['SCRIPT_NAME'];

# Devuelve el metodo por el que se envian los datos, (POST) o (GET).
$_SERVER['REQUEST_METHOD'];

# Devuelve la (url) sin el (host). 
$_SERVER['REQUEST_URI'];

# Devuelve la direccion IP.
$_SERVER['REMOTE_ADDR'];