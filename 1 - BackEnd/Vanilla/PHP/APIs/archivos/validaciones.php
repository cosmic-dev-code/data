<?php

/* ##########==================########## */
/* ######===--- Validaciones ---===###### */
/* ##########==================########## */

# Comprueba si el archivo (file.html) existe en la ubicacion.
file_exists("../files/file.html");

# Comprueba si existe un directorio.
is_dir("directorio");

# Nos devuelve el tipo de archivo o directorio.
filetype("../files/file.html"); // "file"
filetype("../files"); 			// "dir"