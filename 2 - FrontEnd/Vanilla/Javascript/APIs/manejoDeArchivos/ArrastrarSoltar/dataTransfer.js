"use strict";

/* ##########=============================########## */
/* ######===--- ¿Qué es (DataTransfer)? ---===###### */
/* ##########=============================########## */

/* El objeto DataTransfer se utiliza para contener los datos que se arrastran durante una 
operación de arrastrar y soltar. Puede contener uno o más elementos de datos, 
cada uno de uno o más tipos de datos. */

/* ##########=================########## */
/* ######===--- Propiedades ---===###### */
/* ##########=================########## */

// ------------------------- //
// ------ Propiedades ------ //
// ------------------------- //

const dataTransfer = new DataTransfer();

/* Obtiene el tipo de operación de arrastrar y soltar actualmente seleccionada o establece la 
operación en un nuevo tipo. El valor debe ser:
	--- none, copy, link, move. */
dataTransfer.dropEffect;

/* Proporciona todos los tipos de operaciones posibles.
	--- none, copy, copyLink, copyMove, link, linkMove, move, all. */
dataTransfer.effectAllowed;

/**
 * NOTA: Cuando se refiere a (link) se refiere a (vincular).
 */

/* Contiene una lista de todos los archivos locales de la transferencia de datos. */
const files = dataTransfer.files;

/* Manipula la lista de archivos (files). */
const items = dataTransfer.items;

/**
 * NOTA: (Si la operación de arrastre no implica arrastrar archivos, las listas (files/items) estaran vacías).
 */

/* ##########===================########## */
/* ######===--- CRUD de datos ---===###### */
/* ##########===================########## */

// --------------------------- //
// ------ Agregar datos ------ //
// --------------------------- //

/**
 * Crea un nuevo elemento en la lista (files) e (items).
 */
// Texto (plano).
dataTransfer.setData('text/plain', 'Hola');
// Texto (html).
dataTransfer.setData('text/html', '<b>Texto</b>');
// Texto (xml).
dataTransfer.setData('text/xml', `<books>
	<book>
		<title>Titulo</title>
		<content>
			<line>Contenido</line>
		</content>
	</book>
	<book>
		<title>Titulo 1</title>
		<content>
			<line>Contenido 1</line>
		</content>
	</book>
	<book>
		<title>Titulo 2</title>
		<content>
			<line>Contenido 2</line>
		</content>
	</book>
</books>`);
// Cualquier clase de texto.
dataTransfer.setData('miTexto', 'Hola mundo');

// ----------------------------- //
// ------ Modificar datos ------ //
// ----------------------------- //

// Dato creado (nombre).
dataTransfer.setData('nombre', 'Brandon Anthony');

// Se sobreescribe el dato con la key (nombre).
dataTransfer.setData('nombre', 'Brandon Anthony Olivares Amador');

// ---------------------------- //
// ------ Eliminar datos ------ //
// ---------------------------- //


// Borra un elemento especificado.
dataTransfer.clearData("miTexto");

// Borra todos los elementos.
dataTransfer.clearData();

// --------------------------- //
// ------ Obtener datos ------ //
// --------------------------- //

// Retorna el 'string almacenado', si no existe la (key), entonces retorna una cadena vacia.
dataTransfer.getData("text/plain");

// Devuelve los tipos o (keys) de los (datos).
let arrTipos = dataTransfer.types;

// Obtenemos todos los datos.
let array = new Array();

for(let i in dataTransfer.types){
	array.push([
		dataTransfer.types[i],
		dataTransfer.getData(dataTransfer.types[i])
	]);
}

console.log(array);
/*
	[
		['text/plain', 'Hola'],
		['text/html', '<b>Texto</b>'],
		['text/xml', '<books>\n\t<book>\n\t\t<title>Titulo</title>\n\t\t<content…Contenido 2</line>\n\t\t</content>\n\t</book>\n</books>'],
		['mitexto', 'Hola mundo']
	]
*/

/* ##########=======================########## */
/* ######===--- El objeto (items) ---===###### */
/* ##########=======================########## */

const dataTransfer = new DataTransfer();

// Obtenemos todos los (items) que a su vez son los (files).
const items = dataTransfer.items;

// --------------------------- //
// ------ Agregar datos ------ //
// --------------------------- //

/**
 * Crea un nuevo elemento en la lista (files) e (items).
 */
// Texto (plano).
dataTransfer.items.add('Hola', 'text/plain');
// Texto (html).
dataTransfer.items.add('<b>Texto</b>', 'text/html');
// Texto (xml).
dataTransfer.items.add(`<books>
	<book>
		<title>Titulo</title>
		<content>
			<line>Contenido</line>
		</content>
	</book>
	<book>
		<title>Titulo 1</title>
		<content>
			<line>Contenido 1</line>
		</content>
	</book>
	<book>
		<title>Titulo 2</title>
		<content>
			<line>Contenido 2</line>
		</content>
	</book>
</books>`, 'text/xml');
// Cualquier clase de texto.
dataTransfer.items.add('Hola mundo', 'miTexto');

// ----------------------------- //
// ------ Modificar datos ------ //
// ----------------------------- //

/**
 * Se modifican con los mismos metodos.
 */
dataTransfer.setData('nombre', 'Brandon Anthony');

dataTransfer.setData('nombre', 'Brandon Anthony Olivares Amador');

// ---------------------------- //
// ------ Eliminar datos ------ //
// ---------------------------- //


// Borra un elemento especificado.
dataTransfer.items.remove("miTexto");

// Borra todos los elementos.
dataTransfer.items.clear();

// --------------------------- //
// ------ Obtener datos ------ //
// --------------------------- //

// Retorna el 'string almacenado' del index, si no existe la (key), entonces retorna (undefined).
dataTransfer.items[0];

// Devuelve el tipo de contenido en un 'string'.
dataTransfer.items[0].kind;

// Devuelve el tipo.
dataTransfer.items[0].type;

// Devuelve los tipos o (keys) de los (datos).
let arrTipos = dataTransfer.types;

// Obtenemos todos los datos.
let array = new Array();

for(let i = 0; i < dataTransfer.items.length; i++){
	array.push([
		dataTransfer.items[i].type,
		dataTransfer.getData(dataTransfer.items[i].type)
	]);
}

console.log(array);
/*
	[
		['text/plain', 'Hola'],
		['text/html', '<b>Texto</b>'],
		['text/xml', '<books>\n\t<book>\n\t\t<title>Titulo</title>\n\t\t<content…Contenido 2</line>\n\t\t</content>\n\t</book>\n</books>'],
		['mitexto', 'Hola mundo']
	]
*/