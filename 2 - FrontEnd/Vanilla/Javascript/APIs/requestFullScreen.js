"use strict";

/* ##########===================================########## */
/* ######===--- El metodo (requestFullScreen) ---===###### */
/* ##########===================================########## */

/* El metodo (requestFullScreen) permite agrandar un elemento al tamaño completo de la pantalla, equivale lo mismo a 
presionar (F11) pero el metodo (requestFullScreen) permite agrandar un elemento en especifico. */

/* ##########========================================########## */
/* ######===--- (documento) en (pantalla completa) ---===###### */
/* ##########========================================########## */

/* Para esto necesitamos el (elemento document), ya que (document) es el DOM, 
(document object model), pero necesitamos el elemento (html). */

// Agranda todo el documento a pantalla completa.
document.documentElement.requestFullScreen();

// De igual manera agranda el elemento a pantalla completa.
document.documentElement.webkitRequestFullScreen();

// --------------------------------------------------------------------------- //

const html = document.getElementsByTagName('html')[0];

// El resultado es el mismo que extraer el (elemento document).
html.requestFullScreen();
html.webkitRequestFullScreen();

/* ##########========================================########## */
/* ######===--- (elementos) en (pantalla completa) ---===###### */
/* ##########========================================########## */

// Extraemos cualquier elemento, en este caso un elemento (div).
const div = document.getElementsByClassName('cube cube-red font-bold')[0];

// El elemento se agranda en pantalla completa.
div.requestFullScreen();
div.webkitRequestFullScreen();

/* ##########===============########## */
/* ######===--- Resultado ---===###### */
/* ##########===============########## */

div.requestFullScreen()
	.then(result => {
		console.info(result); // undefined.
	})
	.catch(error => {
		console.error(error);
	})
	.finally(() => {
		console.log("Finalizado");
	});