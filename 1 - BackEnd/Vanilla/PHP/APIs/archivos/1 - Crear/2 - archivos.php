<?php

/* ##########==============########## */
/* ######===--- Archivos ---===###### */
/* ##########==============########## */

// Solo el nombre del archivo.
"mi_archivo.txt";
// Se permite utilizar URLs.
"ruta/archivos/mi_archivo.txt";

// ------------------------------ //
// ------ Crear un archivo ------ //
// ------------------------------ //

// Abre o crea un archivo si no existe.
$file = fopen("mi_archivo.txt", "a");

// Escribe el contenido.
fwrite($file, "Contenido de mi archivo");

fclose($file);

// ----------------------------- //
// ------ Leer un archivo ------ //
// ----------------------------- //

/* Extraer informacion del archivo: 
	--- Archivo que se desea abrir.
	--- Opcion en la que se desea abrir.
*/
// Si el archivo no se abre entonces mandamos un mensaje de error.
$file = fopen("archivo.txt", "r") or die("No se pudo abrir el archivo.");

/**
 * En la funcion (fread): 
 * 		--- Archivo que se va a abrir.
 * 		--- Cantidad de bytes que se va a leer.
 */
$contenido = fread(
	$file, 
	// Leer todo el Size del archivo.
	filesize("archivo.txt")
);

/**
 * Podemos recorrer todo, (caracter) por (caracter).
 */
while(!feof($myfile)) {
	# Imprimimos cada uno de los caracteres.
	echo fgetc($myfile);
}

// Buena practica cerrar el archivo para liberar recursos.
fclose($file);

// ---------------------------------- //
// ------ Modificar un archivo ------ //
// ---------------------------------- //

$titulo = "===--- Este es un titulo ---===";

# Abrimos el archivo, (si no existe entonces lo crea).
$file = fopen("documento.txt", "w");

# Escribimos dentro del archivo.
fwrite($file, "Mi primera linea 1");
fwrite($file, "Mi primera linea 2");
fwrite($file, "Mi primera linea 3");

# Cerrar el archivo y liberar memoria.
fclose($file);

// ---------------------- //
// ------ Eliminar ------ //
// ---------------------- //

// Comprobar si existe el archivo.
if(file_exists("mi-archivo.txt")){

	// Eliminar.
	unlink("mi-archivo.txt");
}

/* ##########=======================########## */
/* ######===--- file_put_contents ---===###### */
/* ##########=======================########## */

/**
 * (file_put_contents) es una forma de crear archivos de forma rapida y sencilla.
 * 		--- Nombre del archivo.
 * 		--- Contenido.
 * 		--- Opciones de escritura: 
 * 			--- (FILE_APPEND): Agrega al final del archivo.
 * 			--- (LOCK_EX): Bloquea el archivo durante la escritura, (por si hay otros lo modifican).
 */

/**
 * Ademas: 
 * 		--- (Crea un archivo si no existe).
 * 		--- (Lo escribe).
 * 		--- (Sobreescribe).
 */

// ------------------------------ //
// ------ Crear un archivo ------ //
// ------------------------------ //

// Crea un archivo HTML.
file_put_contents("archivo.html", "
	<main>
		<section>
			<h3>Mi archivo HTML</h3>
		</section>
	</main>
");

file_put_contents(
	"mi-listado.txt", 
	implode("\n", ["Manzana", "Pera", "Uva"]), 
	LOCK_EX
);

// ----------------------------- //
// ------ Leer un archivo ------ //
// ----------------------------- //

/**
 * (file_get_contents) es una forma de leer archivos de forma rapida y sencilla.
 * 		--- Nombre del archivo.
 * 		--- Flags, (Opcional): 
 * 			--- (FILE_USE_INCLUDE_PATH): Busca el archivo en las rutas de inclusión de PHP (útil si el archivo está en una carpeta incluida).
 * 			--- (FILE_APPEND): Para operaciones de lectura con cierto comportamiento adicional.
 * 			--- (FILE_IGNORE_NEW_LINES): Omite los saltos de línea al leer el archivo.
 * 		--- Contexto adicional, (Opcional).
 * 			--- Para hacer peticiones HTTP y obtener los datos.
 * 		--- Indice de inicio a leer.
 * 		--- Longitud del archivo a leer.
 */

// Lee todo el archivo.
file_get_contents("archivo.txt");

// Lee solo los primeros (100 bytes).
file_get_contents("archivo.txt", false, null, 0, 100);

// Lee desde el (byte 50) hasta el (final).
file_get_contents("archivo.txt", false, null, 50);

// ------------------------------- //
// ------ Leer con contexto ------ //
// ------------------------------- //

$options = [
    'http' => [
        'method' => 'GET',
        'header' => 'User-Agent: PHP'
    ]
];

// Opciones de encabezados HTTP.
$context = stream_context_create($options);

// Extraer el contenido desde un origen.
$contenido = file_get_contents("http://example.com", false, $context);

// ------------------------------ //
// ------ Subir un archivo ------ //
// ------------------------------ //

file_put_contents(
	'../paginas/imagenes/document.txt', 
	// Podriamos escribir el contenido del archivo temporal.
	file_get_contents($_FILES['file']['tmp_name'])
);

/* ##########==========########## */
/* ######===--- file ---===###### */
/* ##########==========########## */

/**
 * (file) es una forma de leer archivos en formato Array.
 * 		--- Nombre del archivo.
 * 		--- Flags, (Opcional): 
 * 			--- (FILE_USE_INCLUDE_PATH): Busca el archivo en las rutas de inclusión de PHP (útil si el archivo está en una carpeta incluida).
 * 			--- (FILE_APPEND): Para operaciones de lectura con cierto comportamiento adicional.
 * 			--- (FILE_IGNORE_NEW_LINES): Omite los saltos de línea al leer el archivo.
 * 		--- Contexto adicional, (Opcional).
 * 			--- Para hacer peticiones HTTP y obtener los datos.
 */

// ----------------------------- //
// ------ Leer un archivo ------ //
// ----------------------------- //

$contenido = file("js/indice.js");


// Leer el arreglo, (cada salto de linea es un elemento del arreglo).
print_r($contenido);
/*
	Array
	(
	    [0] => línea 1
	    [1] => línea 2
	    [2] => línea 3
	)
*/