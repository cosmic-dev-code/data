<?php

/* ##########===========================########## */
/* ######===--- Habilitar (extension) ---===###### */
/* ##########===========================########## */

/* Si PHP no tiene (definidas) estas funciones aun teniendo la version correcta de PHP, es posible 
que las funciones esten desabilitadas, por lo que hay que habilitar la extension que 
las tiene (definidas).

En la configuracion de Apache -> (php.init); bucamos: 
	--- (;extension=gd).
Donde (;) establece un comentario, asi que descomentamos la linea dejando este resultado: 
	--- (extension=gd).

Y listo, ahora tenemos las funciones habilitadas. */

/* ##########===============================================########## */
/* ######===--- Modificar calidad y tamaño de la (imagen) ---===###### */
/* ##########===============================================########## */

// ------------------------------ //
// ------ Obtener (imagen) ------ //
// ------------------------------ //

$type = $_FILES['image']['type'];
$obtener_imagen = null;

/* De acuerdo al tipado de nuestra imagen es la funcion que utilizaremos para obtenerla, las funciones 
(imagecreatefromjpeg), (imagecreatefrompng) y (imagecreatefromgif), sirven para obtener la imagen 
que queremos modificar, todas reciben por parametro: 
	--- La ruta de la imagen que se desea obtener para modificar. */

if($type === "image/jpeg"){

	# En caso de que sea (jpeg).
	$obtener_imagen = imagecreatefromjpeg($_FILES['image']['tmp_name']);

}else if($type === "image/png"){

	# En caso de que sea (png).
	$obtener_imagen = imagecreatefrompng($_FILES['image']['tmp_name']);

}else if($type === "image/gif"){

	# En caso de que sea (gif).
	$obtener_imagen = imagecreatefromgif($_FILES['image']['tmp_name']);

}

// -------------------------- //
// ------ Crear imagen ------ //
// -------------------------- //

/* Dependiendo del tipado de la imagen es la funcion que utilizaremos, todas las funciones 
(imagejpeg), (imagepng) y (imagegif) permiten crear nuevamente la imagen modificando 
la calidad de la misma; asi podemos hacer mas pequeña la imagen. Las funciones 
reciben por parametros: 
	--- La imagen que obtuvimos de acuerdo al tipado.
	--- La nueva ruta con el nombre de la imagen a crear.
	--- La calidad en que guardaremos la imagen, (puede ir solamente en escala del): 
		--- (1 al 100). */
if($type === "image/jpeg") imagejpeg($obtener_imagen, "misImagenes/modificadas/modificada.jpeg", 20);
if($type === "image/png") imagepng($obtener_imagen, "misImagenes/modificadas/modificada.png", 20);
if($type === "image/gif") imagegif($obtener_imagen, "misImagenes/modificadas/modificada.gif", 20);

// ----------------------------------- //
// ------ Solo mostrar (imagen) ------ //
// ----------------------------------- //

// El contenido de la pagina lo colocas como (imagen).
header("Content-Type: image/jpeg");

/* Hacemos todo lo anterior, pero la nueva ruta con el nombre de la imagen la dejamos en (null), 
de esta forma la imagen se renderiza en la pagina web, (señalando su contenido 
como tipo [imagen]).*/
if($type === "image/jpeg") imagejpeg($obtener_imagen, null, 20);
if($type === "image/png") imagepng($obtener_imagen, null, 20);
if($type === "image/gif") imagegif($obtener_imagen, null, 20);