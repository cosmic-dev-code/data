<?php

/* ##########=========================########## */
/* ######===--- Formas de impresion ---===###### */
/* ##########=========================########## */

// Imprime cualquier tipo de dato.
echo "Imprimimos un texto en pantalla con echo.";
echo("Imprimimos un texto en pantalla con echo.");

print "Funciona para imprimir un mensaje.";
print("Funciona para imprimir un mensaje a modo de funcion.");

// La funcion (printf) es la misma que la de C.
printf("
    Hace referencia a un formato especifico, por ejemplo: 
    Este numero %i es un entero.
", 555);

// ------------------------------- //
// ------ Impresion directa ------ //
// ------------------------------- //

// Imprime directamente el (HTML).
if(true){
    ?>
        <p>
            <!-- ... -->
        </p>
    <?php
}

// ---------------------------- //
// ------ Impresion HTML ------ //
// ---------------------------- //

// De esta manera tambien puede hacerse una impresion.

$my_result = funcion();

echo <<<HTML
    <div>
        <h1>{$my_variable}</h1>
    </div>
    <div>
        <p>{$my_result}</p>
    </div>
HTML;

/* ##########=============########## */
/* ######===--- Escapes ---===###### */
/* ##########=============########## */

echo "Estas son comillas dobles escapadas: \"comillas\"";

echo "Estos son backslash escapados \\backslash\\";

echo "Si usas comillas dobles, puedes usar 'comillas simples' sin ningun problema.";

echo 'Si usas comillas simples, puedes usar "comillas dobles" sin ningun problema.';