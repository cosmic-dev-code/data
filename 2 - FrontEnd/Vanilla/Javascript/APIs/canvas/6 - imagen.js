"use strict";

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

/* ##########========================########## */
/* ######===--- Dibujar una imagen ---===###### */
/* ##########========================########## */

"use strict";

// ------------------------------ //
// ------ Imagen a dibujar ------ //
// ------------------------------ //

let image = document.createElement('img');

// Podemos darle los atributos a la imagen.
image.width = 100;
image.height = 260;
image.alt = "Una imagen que sera copiada al canvas.";
image.src = "image.png";

// ------------------------------- //
// ------ Canvas y contexto ------ //
// ------------------------------- //

const canvas = document.getElementsByTagName('canvas')[0];

canvas.width = 300;
canvas.height = 300;

const context = canvas.getContext('2d');

window.onload = () => {
	/* El metodo (drawImage) recibe los siguientes parametros: 
		--- Recibe un objeto (HTMLImageElement).
		--- La hubicacion de la figura en el eje (x) del canvas.
		--- La hubicacion de la figura en el eje (y) del canvas.
		--- El ancho de la imagen.
		--- El alto de la imagen. */
	context.drawImage(image, 0, 0, 30, 30);
};