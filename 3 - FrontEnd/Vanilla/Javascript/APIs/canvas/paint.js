"use strict";

const canvas = document.getElementsByTagName('canvas')[0],
ventana = canvas.getBoundingClientRect(),
context = canvas.getContext('2d');

/* Declaramos las variables que vamos a utilizar. */
let pintar, color, grosorLinea, ventanaX, ventanaY;

canvas.addEventListener("mousedown", event => {
	ventanaX = event.clientX - ventana.left;
	ventanaY = event.clientY - ventana.top;
	pintar = true;

	color = document.getElementById('idColor').value;
	grosorLinea = document.getElementById('idRange').value;

	context.beginPath();
});

canvas.addEventListener("mousemove", event => {
	if(pintar){

		dibujar(ventanaX, ventanaY, event.clientX - ventana.left, event.clientY - ventana.top);
		ventanaX = event.clientX - ventanaX.left;
		ventanaY = event.clientY - ventanaY.top;
	}
});

canvas.addEventListener("mouseup", event => {
	context.closePath();
	pintar = false;
});

let dibujar = (ventanaX, ventanaY, venActualX, venActualY) => {
	context.strokeStyle = color;
	context.lineWidth = grosorLinea;
	context.moveTo(ventanaX, ventanaY);
	context.lineTo(venActualX, venActualY)
	context.stroke();
}