"use strict";

/* ##########==============########## */
/* ######===--- Imagenes ---===###### */
/* ##########==============########## */

const diagram = new go.Diagram('idDiv', {
	"undoManager.isEnabled": true
});

/* Ahora creamos un objeto (Picture) para cada elemento de nuestro 
diagrama, recibe por parametro los ajustes de la imagen. */
const picture = new go.Picture({
	margin: 6, 
	width: 50, 
	height: 50, 
	background: "red"
}).bind("source");

// Ajustes de cada (nodo/elemento).
const ajustes = {
	background: "#888"
};

/* Dentro de la propiedad (nodeTemplate) instanciamos un objeto de tipo (Node), 
este objeto recibe por parametro: 
	--- La orientacion de los elementos.
	--- Los ajustes de cada elemento.
Con el metodo (add) agregamos los estilos de la imagen contenidos en el objeto (picture). */
diagram.nodeTemplate = new go.Node("Vertical", ajustes).add(picture);

/* instanciando un objeto (Model) en la propiedad (model), 
colocamos los elementos de nuestro diagrama en un objeto: 
	--- La ruta de la imgen del elemento en su propiedad (source). */
diagram.model = new go.Model([
	{source: "Horario.jpeg"},
	{source: "Horario.jpeg"},
	{source: "Horario.jpeg"}
]);

/* ##########=======================########## */
/* ######===--- Textos e imagenes ---===###### */
/* ##########=======================########## */

/* Instanciamos un objeto diagrama de la clase (Diagram), 
recibe por parametros: 
	--- El elemento que contenera al diagrama.
	--- Los ajustes del diagrama. */
const diagram = new go.Diagram('idDiv', {
	"undoManager.isEnabled": true // Habilitando (Ctrl Z) y el (Ctrl Y).
});

// Creamos los estilos de las imagenes.
const picture = new go.Picture({
	margin: 10, 
	width: 50, 
	height: 50, 
	background: "red"
}).bind("source"); // Activamos el (source) para colocar una imagen.

/* Ahora creamos un objeto (TextBlock) para cada elemento, esto para nuestros textos, 
que puedan tener estilos, recibe por parametro los ajustes de cada elemento (texto). */
const textBlock = new go.TextBlock("Default Text", { 
	margin: 12, 
	stroke: "white", 
	font: "bold 16px sans-serif" 
}).bind("text", "name"); // Cada texto tiene su propiedad (name).

// Ajustes de cada (nodo/elemento).
const ajustes = {
	background: "#888"
};

/* Cada (nodo/elemento) tendra los estilos del (TextBlock) para textos y las imagenes (Picture), tambien 
tenemos los ajustes de la horientacion: 
	--- (Vertical), las imagenes se colocan arriba y los textos abajo.
	--- (Horizontal), las imagenes se colocan al lado del texto. */
diagram.nodeTemplate = new go.Node("Horizontal", ajustes).add(picture).add(textBlock);

/* Ahora en los objetos, haciendo uso de la propiedad (name), colocamos el texto del (nodo/elemento), 
y el la propiedad (source) colocamos el enlace de la imagen del (nodo/elemento). */
diagram.model = new go.Model([
	{name: "Item #0", source: "Horario.jpeg"},
	{name: "Item #1", source: "Horario.jpeg"},
	{name: "Item #2", source: "Horario.jpeg"}
]);