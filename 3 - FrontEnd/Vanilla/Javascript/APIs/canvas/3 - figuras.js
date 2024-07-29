"use strict";

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

/* ##########===========================########## */
/* ######===--- Dibujar un rectangulo ---===###### */
/* ##########===========================########## */

// Determinamos el color del relleno de la figura.
context.fillStyle = "red";

// Determina el color de los bordes de una figura.
context.strokeStyle = "blue";

/* Con el metodo (fillRect) dibujamos un rectangulo, recibe los 
siguientes parametros: 
	--- Ubica a la figura en la coordenada (x) del canvas.
	--- Ubica a la figura en la coordenada (y) del canvas.
	--- El ancho de la figura.
	--- El alto de la figura. */
context.fillRect(5, 10, 90, 50);

// -------------------------------- //
// ------ Centrar una figura ------ //
// -------------------------------- //

context.fillStyle = "blue";
context.fillRect(
	(canvas.width / 2), // El ancho dividido entre (2), por lo que da el (50%).
	(canvas.height / 2), // El alto dividido entre (2), por lo que da el (50%).
	90, 50
);

// --------------------------------------------- //
// ------ Crear un rectangulo sin relleno ------ //
// --------------------------------------------- //

/* Recibe los mismos parametros que el metodo (fillRect), solo que en esta 
ocasion lo hace sin relleno, (fill). */
context.rect(
	50, 50,
	90, 50
);

// Dibujamos la figura.
context.stroke();

// ------------------------------------------------------------ //

/* De esta manera tambien podemos dibujar un rectangulo sin relleno, (fill) 
ahorrandonos el metodo (stroke). */

context.strokeRect(
	(canvas.width / 2),
	(canvas.height / 2),
	90, 50
);

// ---------------------------- //
// ------ Borrar pixeles ------ //
// ---------------------------- //

/* Borra varios pixeles del (canvas) en forma de rectangulo y recibe los 
mismos parametros que el metodo (fillRect) y (strokeRect). */
context.clearRect(
	0, 0,
	100, 90
);

/* ##########========================########## */
/* ######===--- Dibujar un circulo ---===###### */
/* ##########========================########## */

// Inicia una ruta.
context.beginPath();

// Color de fondo.
context.fillStyle = "red";

/* El metodo (arc) dibuja un circulo, recibe los siguientes parametros: 
	--- La hubicacion de la figura en el eje (x) del canvas.
	--- La hubicacion de la figura en el eje (y) del canvas.
	--- Las dimensiones de la figura.
	--- Cuanto se cortara la imagen.
	--- El radio del circulo. */
context.arc(
	(canvas.width / 2),
	(canvas.height / 2),
	20, 0, 10
);

// Pintamos el fondo.
context.fill();

// Pintamos el circulo.
context.stroke();

/* Inyectamos directamente en el prototipo un metodo que nos permite 
hacer figuras redondeadas. */
CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius) {
	if (width < 2 * radius) radius = width / 2;
	if (height < 2 * radius) radius = height / 2;
	this.beginPath();
	this.moveTo(x + radius, y);
	this.arcTo(x + width, y, x + width, y + height, radius);
	this.arcTo(x + width, y + height, x, y + height, radius);
	this.arcTo(x, y + height, x, y, radius);
	this.arcTo(x, y, x + width, y, radius);
	this.closePath();
	return this;
}

/* ##########====================================########## */
/* ######===--- Colores de borde de una figura ---===###### */
/* ##########====================================########## */

// Determina el color de fondo.
context.fillStyle = "blue";

// Determina el color de los bordes.
context.strokeStyle = "red";

// Medidas y la posicion del rectangulo en el (canvas).
context.rect(10, 10, 100, 30);

// Dibujamos el rectangulo (con solo sus bordes).
context.stroke();

// Dibujamos el fondo.
context.fill();

/* ##########===========================########## */
/* ######===--- Sombras de una figura ---===###### */
/* ##########===========================########## */

context.beginPath();
context.fillStyle = "red";
context.strokeStyle = "blue";

// Determina el difuminado de la sombra.
context.shadowBlur = 10;

// Determina el color de la sombra.
context.shadowColor = "#000";

context.arc(
	150, 150, 
	10, 0, 10
);
context.fill();
context.stroke();