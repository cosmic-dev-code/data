<?php

// Imagina que tienes un (string) con contenido XML.

$content = <<<XML
    <?xml version='1.0'?>
    <document>
        <title>¿Cuarenta qué?</title>
        <from>Joe</from>
        <to>Jane</to>
        <bookstore>
            <book>
                <titlebook>Book 0</titlebook>
                <textbook>Text book 0</textbook>
            </book>
            <book>
                <titlebook>Book 1</titlebook>
                <textbook>Text book 1</textbook>
            </book>
            <book>
                <titlebook>Book 2</titlebook>
                <textbook>Text book 2</textbook>
            </book>
        </bookstore>
        <body>
        	Sé que esa es la respuesta pero, ¿cuál es la pregunta?
        </body>
    </document>
XML;

// ------------------------------------ //
// ------ Extraer de un (string) ------ //
// ------------------------------------ //

# Obtenerlo directamente de un (string).
$xml = simplexml_load_string($string);

# Se retorna un objeto.
$xml -> title; 	// "¿Cuarenta qué?"
$xml -> from; 	// "Joe"
$xml -> to; 	// "Jane"

$xml -> bookstore; // [<book>, <book>, <book>]

// ------------------------------------- //
// ------ Extraer de un (archivo) ------ //
// ------------------------------------- //

// Obtenerlo directamente de un (archivo).
$xml = simplexml_load_file("archivo.xml");

$xml -> body;	// "Sé que ..."

/* ##########===============================########## */
/* ######===--- Manipular datos de un XML ---===###### */
/* ##########===============================########## */

$xml = simplexml_load_string($string);

# Podemos convertirlo de (objeto) a (array).
$array_xml = json_decode(json_encode($xml), true);

print_r($xml);
/* SimpleXMLElement Object
    (
    	[bookstore] => 
    	(
	        [book] => Array
            (
                [titlebook] => "Book 0"
                [textbook] => "Text book 0"
            )
            ...
    	)
    	...
    )
*/

# Accedemos a los (keys) del array.
$array_xml['bookstore']['book'];