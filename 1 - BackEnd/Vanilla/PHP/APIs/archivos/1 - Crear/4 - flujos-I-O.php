<?php

/* ##########=====================########## */
/* ######===--- Crear descargas ---===###### */
/* ##########=====================########## */

/**
 * Los flujos se refiere a la forma en que el (navegador) sirve los datos.
 * 
 * En este caso para su posterior (descarga).
 */

// ---------------------------------------- //
// ------ Descarga utilizando flujos ------ //
// ---------------------------------------- //

function descarga(array $settings)
{
	$contenido = $settings["contenido"]
	$type_content = $settings["tipo"]
	$file_name = $settings["archivo"]
	$type_open = $settings["flujo"]

	// (Para enviar datos al navegador y permitir la Descarga).
	$salida = isset($settings["salida"]) ? $settings["salida"] : "php://output"

	/* Abrimos el flujo de salida: 
		--- URL del archivo binario.
		--- "php://output". */
	$FILE = fopen($salida, $type_open);

	// Establecemos los encabezados para la descarga, (Content-Disposition: attachment).
	header("Content-Type: {$type_content}");
	header("Content-Disposition: attachment; filename=\"{$file_name}\"");

	if($salida !== "php://output")
	{
	    // Leemos y escribimos la (Imagen/PDF) en el flujo de salida.
	    while ($buffer = fread($archivo, 1024)) {
	        fwrite($archivo, $buffer);
	    }
	}
	else
	{
		// Escribimos el contenido en el archivo.
		fwrite($FILE, $contenido);
	}

	// Cerramos el archivo (en este caso no es necesario, pero es buena práctica).
	fclose($FILE);

	// Terminamos el script para evitar que se ejecute código adicional.
	exit;
}

// ------------------------------------------ //
// ------ Descarga utilizando readfile ------ //
// ------------------------------------------ //

/**
 * (readfile), permite enviar datos al navegador de forma mas sencilla.
 */

function descarga(array $settings)
{
    // Obtener las configuraciones del array ($settings) ...

    // Establecemos los encabezados para la descarga.
    header("Content-Type: {$type_content}");
    header("Content-Disposition: attachment; filename=\"{$file_name}\"");

    // Si el contenido es texto.
    if ($salida === "php://output") {
        // Simplemente lo enviamos al flujo de salida.
        echo $contenido;
    } else {
        // Ideal para (imágenes), (PDFs), (binarios), etc.
        readfile($salida);
    }

    
    exit;
}

/* ##########=======================########## */
/* ######===--- Ejemplos de casos ---===###### */
/* ##########=======================########## */

// ------------------------- //
// ------ Texto plano ------ //
// ------------------------- //

descarga([
	"contenido" => "Este es el contenido de mi archivo de texto plano", 
	"tipo" => "text/plain", 
	"archivo" => "plano.txt", 
	"flujo" => "w", 
	"salida" => "php://output"
]);

// ------------------------ //
// ------ Texto HTML ------ //
// ------------------------ //

descarga([
	"contenido" => "
		<section>
			<article>
				<h3>Titulo</h3>
			</article>
		</section>
	", 
	"tipo" => "text/html", 
	"archivo" => "document.txt", 
	"flujo" => "w", 
	"salida" => "php://output"
]);

// ----------------------- //
// ------ Texto XML ------ //
// ----------------------- //

descarga([
	"contenido" => '
		<?xml version="1.0" encoding="UTF-8"?>
		<books>
		    <book>
		        <title>El buen programador</title>
		        <autor>Brandon Anthony</autor>
		        <price>$30.00</price>
		    </book>
		    <book id="idMiLibro">
		        <title>Css</title>
		        <autor>Anthony</autor>
		        <price>$29.99</price>
		    </book>
		    <book>
		        <title>Manual PHP</title>
		        <autor>Olivares Amador</autor>
		        <price>$49.99</price>
		    </book>
		</books>
	', 
	"tipo" => "text/xml", 
	"archivo" => "document.xml", 
	"flujo" => "w", 
	"salida" => "php://output"
]);

// -------------------- //
// ------ Imagen ------ //
// -------------------- //

descarga([
	"tipo" => "image/png", 
	"archivo" => "imagen.png", 
	"flujo" => "rb", 
	"salida" => "ruta/a/tu/imagen.png"
]);

/**
 * NOTA: Dado que una Imagen son datos binarios, no puedes crearla a mano.
 */

// ----------------- //
// ------ PDF ------ //
// ----------------- //

descarga([
	"tipo" => "application/pdf", 
	"archivo" => "documento.pdf", 
	"flujo" => "rb", 
	"salida" => "ruta/a/tu/archivo.pdf"
]);

/**
 * NOTA: Dado que un PDF son datos binarios, no puedes crearlo a mano.
 */