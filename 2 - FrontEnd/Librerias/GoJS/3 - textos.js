"use strict";

/* ##########==============================########## */
/* ######===--- Ajustes de los elementos ---===###### */
/* ##########==============================########## */

// Creamos nuestro diagrama en el elemento con el id (idDiv).
const diagram = new go.Diagram('idDiv', {
	"undoManager.isEnabled": true
});

/* Ahora creamos un objeto (TextBlock) este objeto permitira que cada elemento 
tenga ciertos estilos. */
const textBlock = new go.TextBlock("Default Text", {
	// Dentro de este objeto, van todos los ajustes. 
	margin: 10, 
	stroke: "white", 
	font: "bold 16px sans-serif" 
}).bind("text", "name"); // Ya no utilizaremos la propiedad (key), ahora (name).

// Ajuste de cada elemento de nuestro diagrama.
const ajustes = {
	background: "#888"
};

/* Dentro de la propiedad (nodeTemplate) colocamos un objeto (Node), este objeto 
recibe por parametros: 
	--- La orientacion de los elementos.
	--- Los ajustes de los elementos.
Al final con el metodo (add), agregamos los estilos de los (nodos/elementos). */
diagram.nodeTemplate = new go.Node("Horizontal", ajustes).add(textBlock);

/* Colocamos en un array de objetos los elementos que 
queremos en nuestro diagrama. */
diagram.model = new go.Model([
	{name: "web"},
	{name: "JS"},
	{name: "PHP"},
	{name: "CSS"},
	{name: "VueJS"},
	{name: "React"},
	{name: "Alphine"}
]);