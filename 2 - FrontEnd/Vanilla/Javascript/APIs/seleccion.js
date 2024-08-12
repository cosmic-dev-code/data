"use strict";

/* ##########=========================########## */
/* ######===--- Obtener (seleccion) ---===###### */
/* ##########=========================########## */

// Devuelve una cadena de texto con lo seleccionado por el usuario.
window.getSelection().toString(); // string

/* ##########==============########## */
/* ######===--- Detalles ---===###### */
/* ##########==============########## */

// Devuelve el nodo donde comienza la seleccion.
window.getSelection().anchorNode;

// Devuelve el nodo donde termina la seleccion.
window.getSelection().extentNode;

// Indica desde que parte del nodo comenzo la seleccion, ([0], indica desde el inicio).
window.getSelection().anchorOffset; // number

// Devuelve cuanto se selecciono desde el inicio hasta el final.
window.getSelection().extentOffset; // number

/* Indica el tipo de seleccion: 
	--- (None), no se selecciono ningun texto.
	--- (Caret), la seleccion de texto ocurrio en el mismo nodo, (una seleccion recta), por lo que: 
		--- (anchorOffset), (focusNode), (focusOffset), representarán el mismo nodo y desplazamiento.
	--- (Range), la seleccion de texto ocurrio en mas de un nodo. */
window.getSelection().type; // string