<?php

/* ##########=================########## */
/* ######===--- Directorios ---===###### */
/* ##########=================########## */

// Solo el nombre del directorio.
"mi-carpeta";
// Se permite utilizar URLs.
"ruta/archivos/mi-carpeta";

// --------------------------------- //
// ------ Crear un directorio ------ //
// --------------------------------- //

// Si el archivo no existe.
if(!is_dir("archivos")){

	// Crear un archivo.
	mkdir("archivos");

	/* Crea un archivo: 
			---	Nombre y ruta del directorio.
			--- Permisos del directorio.
			--- Si parte de la ruta no existe, (la crea). */
	mkdir("directorio", 0777, true);
}

// ---------------------- //
// ------ Eliminar ------ //
// ---------------------- //

// Comprobar si existe el directorio.
if(is_dir("archivos")){

	// Eliminar.
	rmdir("archivos");
}