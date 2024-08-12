"use strict";

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

/* ##########====================########## */
/* ######===--- Dibujar lineas ---===###### */
/* ##########====================########## */

/*
	--- El metodo (moveTo) indica en que punto del canvas va iniciar la linea.
	--- El metodo (lineTo) indica en que punto del canvas va a terminar la linea.

Ambos metodos reciben los parametros: 
	--- (x)
	--- (y) */
context.moveTo(0, 0);
context.lineTo(100, 100);

// Pinta la linea de rojo.
context.strokeStyle = "red";

// Define el grosor de la linea.
context.lineWidth = 10;

// Dibuja la linea.
context.stroke();

// ---------------------------- //
// ------ Dibujar lineas ------ //
// ---------------------------- //
/* Hacemos dos lineas atravesadas: 
	--- top left.
	--- bottom right

	--- bottom left.
	--- top right. */
	
context.moveTo(0, 0);
context.lineTo(100, 100);
context.stroke();

context.moveTo(100, 0);
context.lineTo(0, 100);
context.stroke();