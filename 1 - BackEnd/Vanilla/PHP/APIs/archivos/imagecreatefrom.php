<?php

/* ##########===========================########## */
/* ######===--- Habilitar (extension) ---===###### */
/* ##########===========================########## */

/* Si PHP no tiene (definidas) estas funciones aun teniendo la version correcta de PHP, es posible 
que las funciones esten desabilitadas, por lo que hay que habilitar la extension que las tiene (definidas).

En la configuracion de Apache -> (php.init); bucamos: 
	--- (;extension=gd).
Donde (;) establece un comentario, asi que descomentamos la linea dejando este resultado: 
	--- (extension=gd).

Y listo, ahora tenemos las funciones habilitadas. */

/* ##########==================########## */
/* ######===--- Crear imagen ---===###### */
/* ##########==================########## */

/**
 * (imagecreatefrom), permite crear una imagen que podemos manipular.
 */

# Crear una imagen que podemos manipular (JPEG).
imagecreatefromjpeg($_FILES['image']['tmp_name']);
imagecreatefromjpeg("ruta/imagen.jpeg");

# Crear una imagen que podemos manipular (PNG).
imagecreatefrompng($_FILES['image']['tmp_name']);
imagecreatefrompng("ruta/imagen.png");

# Crear una imagen que podemos manipular (GIF).
imagecreatefromgif($_FILES['image']['tmp_name']);
imagecreatefromgif("ruta/imagen.gif");

/* ##########===================================########## */
/* ######===--- Modificar (calidad) de imagen ---===###### */
/* ##########===================================########## */

// Dependiendo del tipo.

$imagen = imagecreatefromjpeg("ruta/modificada.jpeg");

/**
 *  Permite crear nuevamente la imagen modificando la calidad: 
 * 		--- Imagen que obtuvimos, (segun el tipado).
 * 		--- Ruta para la nueva imagen.
 * 		--- Nueva calidad, (1 - 100).
 */
imagejpeg($obtener_imagen, "misImagenes/modificadas/modificada.jpeg", 20);

// PNG
imagepng($obtener_imagen, "misImagenes/modificadas/modificada.png", 20);

// GIF
imagegif($obtener_imagen, "misImagenes/modificadas/modificada.gif", 20);

// ---------------------------- //
// ------ Mostrar Imagen ------ //
// ---------------------------- //

// Ajustar tipo de contenido a mostrar.
header("Content-Type: image/jpeg");

// La ruta en (null), la imagen se muestra en la pagina.
imagejpeg($obtener_imagen, null, 20);