<?php

# La funcion (md5) encripta una cadena.
md5("Cadena a encriptar");

# Encripta una cadena de texto.
$encriptado = base64_encode("Cadena a encriptar");

# Desencripta una cadena de texto.
base64_decode($encriptado);