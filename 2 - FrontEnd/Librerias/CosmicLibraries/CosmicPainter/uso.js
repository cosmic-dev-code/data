"use strict";

/* Creamos el lienzo, para esto el metodo (querySelector) 
recibe dos parametros: 
	--- El selector del elemento.
	--- habilitamos si el (canvas) tendra sombra o no. */
const cosmicPainter = new CosmicPainter('#idOne', true);

/* Primero hacemos los ajustes: 
	--- (title), establece un titulo la parte superior del lienzo, 
	si no desea titulo solo dejarlo en blanco.
	--- (controls), habilita si el usuario puede modificar el 
	grosor y color de la linea.
	--- (background), color de fonde del lienzo.
	--- (lineWidth), grosor por defecto de la linea.
	--- (lineColor), color por defecto de la linea.
	--- (zIndex), si hay mas elementos posicionados, (solo si 
	la opcion de flotar esta habilitada).
	--- (float), permite que el lienzo flote y se quede fijo al 
	dibujar en un dispositivo con touch. */
cosmicPainter.settings = {
	title: "Dibujable",
	controls: true,
	background: "#fff",
	lineWidth: 10,
	lineColor: "red",
	zIndex: 100,
	float: false
};

/* Establecemos las (Media Queries) con los siguientes valores: 
	--- (valores), tenemos un valor minimo y cuatro valores maximos, se 
	manejan en pixeles.
	--- (array), reciben un arreglo, cuando se ejecuta dicho 
	(media query), se establecen los valores del 
	array al lienzo.
	--- (width), el primer valor del arreglo es el ancho.
	--- (height), el segundo valor del arreglo es el alto. */
cosmicPainter.mediaQueries = {
	minMedia1210: [1000,700],
	maxMedia1200: [750,650],
	maxMedia800: [450,450],
	maxMedia500: [300,250],
	maxMedia350: [200, 150]
};

/* Establecemos los colores del tema: 
	--- (background), color de fondo en general.
	--- (buttonBg), color de fondo del boton.
	--- (buttonBgHover), color de fondo del boton en su estado (hover).
	--- (buttonValue), texto del boton. */
cosmicPainter.theme = {
	background: "#F5B7B1",
	buttonBg: "#E74C3C",
	buttonBgHover: "#B03A2E",
	buttonValue: "Limpiar canvas"
};

// Se crea (Painter).
painter.create();

/* El metodo (getDataURL) convierte el dibujo del canvas en una imagen 
contenida en una cadena de texto. Recibe por parametro: 
	--- Los ajustes de la imagen. */
const imageInfo = cosmicPainter.getDataURL([
	"image/png", // Tipo de imagen a convertir.
	0.5 // Dimensiones de la imagen.
]);

/* El metodo (getImage) devuelve un elemento (img) con la imagen del canvas; recibe por parametros: 
	--- El ancho de la imagen.
	--- El alto de la imagen. */
const img = cosmicPainter.getImage(300, 300);