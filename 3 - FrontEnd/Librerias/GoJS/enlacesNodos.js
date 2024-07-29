"use strict";

/* ##########==============================########## */
/* ######===--- Enlazar nodos de (texto) ---===###### */
/* ##########==============================########## */

// Creamos el diagrama.
const diagram = new go.Diagram('idDiv', {
	"undoManager.isEnabled": true
});

// Creamos los estilos del texto de cada elemento de nuestro diagrama.
const textBlock = new go.TextBlock("Default Text", { 
	margin: 10, 
	stroke: "white", 
	font: "bold 16px sans-serif" 
}).bind("text", "name");

// Ajustes de cada elemento de nuestro diagrama.
const ajustes = {
	background: "#888"
};

/* Ahora introducimos en la propiedad (nodeTemplate) los estilos de cada uno de los elementos, 
con una horientacion horizontal. */
diagram.nodeTemplate = new go.Node("Horizontal", ajustes).add(textBlock);

/* Creamos el modelo del diagrama, hacemos uso del (modelo de arbol), para lo cual utilizamos 
la clase (TreeModel).

El (modelo de arbol) recibe un array de objetos, cada objeto tiene las siguientes propiedades: 
	--- (key), representa el 'id' o 'identificador' de cada nodo.
	--- (parent), recibe el 'id/key' del nodo al cual esta enlazado.
	--- (name), recibe el texto del nodo. */
diagram.model = new go.TreeModel([
	{key: "0", name: "web"},
	{key: "1", parent: "0", name: "JS"},
	{key: "2", parent: "0", name: "PHP"},
	{key: "3", parent: "0", name: "CSS"},

	{key: "4", parent: "1", name: "VueJS"},
	{key: "5", parent: "1", name: "React"},
	{key: "6", parent: "1", name: "Alphine"}
]);

/* Aqui: 
	(web) con el (is/key -> 0), se enlaza con flechas hacia: 
		--- JS.
		--- PHP.
		--- CSS.
	(JS) con el (is/key -> 1), se enlaza con flechas hacia: 
		--- VueJS.
		--- React.
		--- Alphine.

Asi es como funciona el (diagrama de arbol). */

/* ##########===========================================########## */
/* ######===--- Enlazar nodos de (texto) e (imagenes) ---===###### */
/* ##########===========================================########## */

// Creamos el diagrama.
const diagram = new go.Diagram('idDiv', {
	"undoManager.isEnabled": true
});

// Creamos la imagen para cada (nodo/elemento) del diagrama.
const picture = new go.Picture({
	margin: 6, 
	width: 50, 
	height: 50, 
	background: "red"
}).bind("source");

// Creamos el texto para cada (nodo/elemento) del diagrama.
const textBlock = new go.TextBlock("Default Text", { 
	margin: 10, 
	stroke: "white", 
	font: "bold 16px sans-serif" 
}).bind("text", "name");

// Creamos los sjustes para cada (nodo/elemento).
const ajustes = {
	background: "#888"
};

/* Proporcionamos los ajustes de los nodos en la propiedad (nodeTemplate) por medio de un objeto (Node). 
Cabe recalcar que aqui hemos cambiado la horientacion:  
	--- (Vertical), las imagenes se colocan arriba y los textos abajo.
	--- (Horizontal), las imagenes se colocan al lado del texto. */
diagram.nodeTemplate = new go.Node("Vertical", ajustes).add(picture).add(textBlock);

/* El principio es el mismo, hacemos uso del (modelo de arbol), recibe un array de objetos, cada objeto 
tiene las siguientes propiedades: 
	--- (key), representa el 'id' o 'identificador' de cada nodo.
	--- (parent), recibe el 'id/key' del nodo al cual esta enlazado.
	--- (name), recibe el texto del nodo.
	--- (source), recibe la ruta de la imagen que bolocara. */
diagram.model = new go.TreeModel([
	{key: "0", name: 'item 0#', source: "Horario.jpeg"},
	{key: "1", parent: "0", name: 'item 1#', source: "Horario.jpeg"},
	{key: "2", parent: "0", name: 'item 2#', source: "Horario.jpeg"},
	{key: "3", parent: "0", name: 'item 3#', source: "Horario.jpeg"},

	{key: "4", parent: "1", name: 'item 4#', source: "Horario.jpeg"},
	{key: "5", parent: "1", name: 'item 5#', source: "Horario.jpeg"},
	{key: "6", parent: "1", name: 'item 6#', source: "Horario.jpeg"}
]);