<?php

/* ##########========================########## */
/* ######===--- Encriptacion (md5) ---===###### */
/* ##########========================########## */

# La funcion (md5) encripta una cadena.
md5("Cadena a encriptar");

# Encripta una cadena de texto.
$encriptado = base64_encode("Cadena a encriptar");

# Desencripta una cadena de texto.
base64_decode($encriptado);

# NOTA: No es hashing, por lo que no es seguro.

/* ##########==================================########## */
/* ######===--- Encriptacion (password_hash) ---===###### */
/* ##########==================================########## */

// Encriptar password.
/* Recibe: 
	--- Cadena a encriptar.
	--- Tipo de algoritmo.
		--- (PASSWORD_BCRYPT): Algoritmo Bcrypt.
		--- (PASSWORD_ARGON2I): Algoritmo Argon2.
	--- Opciones de encriptado. (Opcional) */
$encriptado = password_hash("Cadena a encriptar", PASSWORD_BCRYPT, [
	# (cost), define cuantas veces se aplica el algoritmo.
	"cost" => 12
]);

// Verificar password.
if(password_verify("Cadena a encriptar", $encriptado)){
	// El password es correcto.
}

# NOTA: Por seguridad no se puede volver a desencriptar.