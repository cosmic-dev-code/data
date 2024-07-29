<?php

/* ##########==========########## */
/* ######===--- Info ---===###### */
/* ##########==========########## */

/* Muestra la información sobre: 
    --- las opciones de compilación y extensiones de PHP.
    --- Versión de PHP.
    --- Información del servidor y entorno (si se compiló como módulo).
    --- Entorno PHP.
    --- Versión del OS. 
    --- Rutas.
    --- Valor de las opciones de configuración locales y generales.
    --- Cabeceras HTTP y licencia de PHP. */
phpinfo();

/* Esta función imprime los créditos enumerando los desarrolladores, módulos, etc. de PHP. 
Genera los códigos HTML apropiados para insertar la información en una página. */
phpcredits();

# Devuelve una cadena que contiene la versión del analizador de PHP en ejecución o extensión.
phpversion();