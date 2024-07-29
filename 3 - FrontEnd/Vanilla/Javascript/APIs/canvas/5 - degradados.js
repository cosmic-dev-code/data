"use strict";

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

/* ##########================########## */
/* ######===--- Degradados ---===###### */
/* ##########================########## */

/* Creamos un color de degradado (lineal), recibe los siguientes parametros: 
	--- (x, y, x1, y1). */
const linearGradient = context.createLinearGradient(0,0,150,0);

/* Creamos un color de degradado (lineal), recibe los siguientes parametros: 
	--- (x, y, r, x1, y1, r1). */
const radialGradient = context.createRadialGradient(75, 50, 5, 90, 60, 100);

/* Ambos degradados tienen dos colores, (0) y (1), 
definimos los colores para cada uno de ellos. */

linearGradient.addColorStop(0, "red");
linearGradient.addColorStop(1, "blue");

radialGradient.addColorStop(0, "red");
radialGradient.addColorStop(1, "blue");

// Lo podemos colocar como un color de texto.
context.strokeStyle = linearGradient0;
context.moveTo(0,0);
context.lineTo(100, 100);
context.stroke();