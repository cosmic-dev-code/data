"use strict";

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

/* ##########====================########## */
/* ######===--- Dibujar textos ---===###### */
/* ##########====================########## */

// Define la dimension y tipografia del texto.
context.font = "10px Sans-serif";

// Define el color del texto.
context.fillStyle = "darkred";

// Define el alineado del texto.
context.textAlign = "center";

/* El metodo (fillText) recibe los siguientes parametros: 
	--- El texto que se va a imprimir.
	--- Ubica a la figura en la coordenada (x) del canvas.
	--- Ubica a la figura en la coordenada (y) del canvas. */
context.fillText(
	"Hola mundo",
	50, 50
);

// ----------------------------------------------- //
// ------ Dibujar texto solo de color negro ------ //
// ----------------------------------------------- //

// Define la dimension y tipografia del texto.
context.font = "13px Arial";

/* El metodo (fillText) recibe los siguientes parametros: 
	--- El texto que se va a imprimir.
	--- Ubica a la figura en la coordenada (x) del canvas.
	--- Ubica a la figura en la coordenada (y) del canvas.

La diferencia del primero es que este solo pinta el texto de negro. */
context.strokeText(
	"Hola mundo",
	50, 10
);