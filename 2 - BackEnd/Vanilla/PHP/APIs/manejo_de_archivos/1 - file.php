<?php

/* ====================================--- Opciones de (fopen) ---========================================

	'r' Abra un archivo de solo lectura. El puntero de archivo comienza al principio del archivo.

	'w' Abra un archivo solo para escritura. Borra el contenido del archivo o crea un nuevo archivo si no existe. El puntero de archivo comienza al principio del archivo.

	'a' Abra un archivo solo para escritura. Se conservan los datos existentes en el archivo. El puntero de archivo comienza al final del archivo. Crea un nuevo archivo si el archivo no existe.

	'x' Crea un nuevo archivo solo para escritura. Devuelve FALSE y un error si el archivo ya existe.

	'r+' Abre un archivo para lectura / escritura. El puntero de archivo comienza al principio del archivo.

	'w+' Abre un archivo para lectura / escritura. Borra el contenido del archivo o crea un nuevo archivo si no existe. El puntero de archivo comienza al principio del archivo.

	'a+' Abre un archivo para lectura / escritura. Se conservan los datos existentes en el archivo. El puntero de archivo comienza al final del archivo. Crea un nuevo archivo si el archivo no existe.

	'x+' Crea un nuevo archivo para lectura / escritura. Devuelve FALSE y un error si el archivo ya existe.
========================================================================================================== */

/* ##########==================########## */
/* ######===--- Validaciones ---===###### */
/* ##########==================########## */

# Comprueba si el archivo (file.html) existe en la ubicacion.
file_exists("../files/file.html");

# Comprueba si existe un directorio.
file_exists("directorio");

# Nos devuelve el tipo de archivo o directorio.
filetype("../files/file.html"); // Da: "file".
filetype("../files"); // Da: "dir".

/* ##########===========########## */
/* ######===--- Crear ---===###### */
/* ##########===========########## */

// ------------------------------ //
// ------ Crear directorio ------ //
// ------------------------------ //

// Si una carpeta no existe, entonces la crea.
if(!file_exists("directorio")){
	# Crear directorio.
	mkdir("directorio");
	# Crear directorio especificando el modo.
	mkdir("directorio", 0777, true);
}

// ------------------------------ //
// ------ Crear un archivo ------ //
// ------------------------------ //

/**
 * Crear el archivo con las funciones (f).
 */

// Abre o crea un archivo si no existe.
$file = fopen("mi_archivo.txt", "a");

fwrite($file, "Contenido de mi archivo");
fclose($file);

/**
 * Tambien puede ser creado por (file_put_contents).
 */

// Sobreescribe el archivo o crea uno nuevo.
file_put_contents("mi_archivo.txt", "Contenido de mi archivo", FILE_APPEND);

/* ##########===================########## */
/* ######===--- Subir archivo ---===###### */
/* ##########===================########## */

/* Crea un archivo, si existe, lo sobreescribe, 
recibe los siguientes parametros: 
	--- La ruta en donde se va a crear la imagen.
	--- Recibe el contenido de la imagen por medio de la funcion (file_get_contents). */
file_put_contents(
	'../paginas/imagenes/document.txt', 
	file_get_contents($_FILES['file']['tmp_name'])
);

/* ##########=================================########## */
/* ######===--- Abrir un archivo y cerrarlo ---===###### */
/* ##########=================================########## */

// Abrimos el archivo en modo lectura, (r).
$myfile = fopen("webdictionary.txt", "r");

// Cerramos el archivo que abrimos.
fclose($myfile);

/* ##########==================########## */
/* ######===--- Leer archivo ---===###### */
/* ##########==================########## */

// --------------------------- //
// ------ Texto (plano) ------ //
// --------------------------- //

/* Abre un archivo y lo imprime como texto plano. */
$string_content = readfile("archivo.txt");

printf("%s", $string_content);

// ------------------------------ //
// ------ Array asosiativo ------ //
// ------------------------------ //

/* Esto devuelve un 'array' indexado, en donde cada indice representa una 
linea del archivo. */
$arrFile = file("js/indice.js");

print_r($arrFile);

// ------------------------------ //
// ------ Leer con (fread) ------ //
// ------------------------------ //

/* En una variable guardamos la informacion del archivo que se desea abrir.

	--- El primer parametro especifica el archivo que se desea abrir.
	--- El segundo parametro especifica la opcion en la que se desea abrir.

Si el archivo no se abre entonces mandamos un mensaje de error. */
$mi_archivo = fopen("archivo.txt", "r") or die("No se pudo abrir el archivo.");

/* En la funcion (fread):

	--- El primer parametro recibe el archivo que se va a abrir.
	--- El segundo parametro recibe la cantidad de bytes que se va a leer. */
echo fread($mi_archivo, filesize("archivo.txt"));

/* Cerramos el archivo abierto.

Es una buena práctica de programación cerrar todos los archivos una 
vez que haya terminado con ellos. ¡No desea que un archivo abierto 
se ejecute en su servidor ocupando recursos! */
fclose($mi_archivo);

// ---------------------------------------- //
// ------ Leer caracter por caracter ------ //
// ---------------------------------------- //

# Abrimos el archivo en modo lectura.
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");

# Recorre cada uno de los caracteres perteneciente al archivo.
while(!feof($myfile)) {
	# Imprimimos cada uno de los caracteres.
	echo fgetc($myfile);
}

# Cerramos el archivo.
fclose($myfile);

/* ##########=======================########## */
/* ######===--- Modificar archivo ---===###### */
/* ##########=======================########## */

// Creamos el contenido y el titulo del archivo.
$contenido = "Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum.";
$titulo = "===--- Este es un titulo ---===";

# Abrimos el archivo, si no existe entonces lo crea.
$mi_archivo = fopen("documento.txt", "w");

# Escribimos dentro del archivo el titulo.
fwrite($mi_archivo, $titulo);

# Escribimos dentro del archivo el contenido.
fwrite($mi_archivo, $contenido);

# Cerramos el aerchivo.
fclose($mi_archivo);

/* ##########=========================########## */
/* ######===--- Eliminar un archivo ---===###### */
/* ##########=========================########## */

/* La funcion (unlink) elimina un archivo, recibe la ruta del archivo por parametro. */
unlink("misArchivos/index.html");