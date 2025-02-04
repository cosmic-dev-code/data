<?php
/* Creamos una variable que contenga datos XML en forma de (string). */
$string = <<<XML

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

/* ##########============================########## */
/* ######===--- Extraer de un (string) ---===###### */
/* ##########============================########## */

// Convierte el (string) a un array asosiativo.
$xml = simplexml_load_string($string);

print_r($xml);

/* ##########=============================########## */
/* ######===--- Extraer de un (archivo) ---===###### */
/* ##########=============================########## */

// Obtiene el (string) de un archivo y lo convierte en forma de arreglo asosiativo.
$objeto_XML = simplexml_load_file("archivo.xml");

print_r($objeto_XML);

/* ##########===============================########## */
/* ######===--- Manipular datos de un XML ---===###### */
/* ##########===============================########## */

$objeto_XML = simplexml_load_string($string);

print_r($objeto_XML);
/* --- Da: 

    SimpleXMLElement Object
    (
        [book] => Array
            (
                [0] => SimpleXMLElement Object
                    (
                        [titlebook] => Book 0
                        [textbook] => Text book 0
                    )

                [1] => SimpleXMLElement Object
                    (
                        [titlebook] => Book 1
                        [textbook] => Text book 1
                    )

                [2] => SimpleXMLElement Object
                    (
                        [titlebook] => Book 2
                        [textbook] => Text book 2
                    )

            )

    )
*/

print_r(
    $objeto_XML -> book[1]
);
/* --- Da: 

    SimpleXMLElement Object
    (
        [titlebook] => Book 1
        [textbook] => Text book 1
    )
*/