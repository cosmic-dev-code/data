<?php

/* ##########============================########## */
/* ######===--- Extraer un archivo Zip ---===###### */
/* ##########============================########## */

$zip = new ZipArchive();

// Abrir archivo (zip).
$response = $zip -> open("ejemplo.zip");

if($response === true){
	// Extraer el archivo hacia cierta ruta.
	$zip -> extractTo("/archivos/");

	// Cierra el archivo.
	$zip -> close();
}

/* ##########==========================########## */
/* ######===--- Crear un archivo Zip ---===###### */
/* ##########==========================########## */

$zip = new ZipArchive;

// Crear un archivo zip.
$nombre = "mi_archivo.zip";
$nombre = "carpeta/mi_archivo.zip";

// Abre el archivo para su escritura.
if($zip -> open($nombre, ZipArchive::CREATE) === true){

	/* Agregar archivos al zip: 
		--- Archivo a agregar.
		--- Su hubicacion. */
	$zip -> addFile("texto.txt", "archivos/texto.txt");
	$zip -> addFile("documento.html", "archivos/documento.html");

	// Cierra el archivo.
	$zip -> close();
}