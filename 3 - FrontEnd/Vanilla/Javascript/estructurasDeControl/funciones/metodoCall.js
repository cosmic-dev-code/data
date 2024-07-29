"use strict";

/* ##########======================########## */
/* ######===--- El metodo (call) ---===###### */
/* ##########======================########## */

// Recordemos que en javascript todo un objeto, incluyendo las variables, arrays, funciones, etc.

/* El metodo (call) es un metodo perteneciente al objeto (funcion), recibe los siguientes parametros: 
	--- Primero el objeto que tomara de referencia.
	--- Los demas parametros son los parametros propios de la funcion (prototipoFunction). */
prototipoFuncion.call();

/* ##########===========================########## */
/* ######===--- Objetos de referencia ---===###### */
/* ##########===========================########## */

// Toda variable global (var) es una propiedad perteneciente al objeto (window).
var saludo = "Hola";

var objectDeReferencia = {
	saludo: "Hello"
};

// (name) es el parametro propio de la funcion (saludar).
function saludar(name){
	// (this) es el objeto del cual tomaremos la propiedad (saludo).
	return (this.saludo + " " + name);
}

/* Dado que la variable global (saludo) es perteneciente 
al objeto (window), entonces la funcion (saludar) tomara el 
valor del atributo (saludo).

Los demas parametros son propios de la funcion (saludar). */
saludar.call(window, "Brandon window");

/* Ahora le pasamos el objeto de referencia del cual tomara el valor 
de su propiedad (saludo). */
saludar.call(objectDeReferencia, "Brandon object");

/* Dado que el objeto de referencia es tambien de tipo global, entonces 
es una propiedad del objeto (window), por lo que podemos poner 
el objeto de referencia de esta manera:  */
saludar.call(window.objectDeReferencia, "Brandon window object");

/* El (this) fuera de un objeto (function) hace referencia al objeto (window). */
saludar.call(this.objectDeReferencia, "Brandon window object");

/* ##########=========================########## */
/* ######===--- Préstamo de función ---===###### */
/* ##########=========================########## */

// Un objeto...
let auto = {
	name: "Auto rojo",
	inicialize: function(message = "Se inicializo el"){
		// (this) es el objeto de referencia.
		console.log(message, this.name);
	}
};

// Declaramos una propiedad dentro del objeto (window).
window.name = "windowName";

let avion = {
	name: "Avion rojo",
	// Devuelve el mismo objeto.
	returnNameModifield: function(){
		return avion;
	}
};

/* Recordemos que el metodo (call) primero recibe 
por parametro el objeto de referencia de la 
funcion, y los demas parametros 
de la funcion.  */

// Utiliza la propiedad (name) del objeto (window) como referencia.
auto.inicialize.call(window, "De window:");

// Utiliza la propiedad (name) del objeto (auto) como referencia (por defecto).
auto.inicialize("Por defecto:");

// Utiliza la propiedad (name) del objeto (auto) como referencia, (ya lo hace por defecto).
auto.inicialize.call(auto, "Del auto:");

/* El objeto (avion) no tiene el metodo Inicialize, pero se lo pasamos como referencia al 
objeto (auto) para que utilize su propiedad (name). */

// Utiliza la propiedad (name) del objeto (avion) como referencia
auto.inicialize.call(avion, "Del avion:");

/* ##########=============================########## */
/* ######===--- Encadenar constructores ---===###### */
/* ##########=============================########## */

function Box(width, height){
	this.height = height;
	this.width = width;
}

function Widget(width, height, color){
	Box.call(this, width, height, color);
	this.color = color;
}

let widget = new Widget("rojo", "100%", "30rem");

/*
	--- Primero, inicialice el objeto Boxcon dos propiedades: heighte width.
	--- En segundo lugar, invocar la (call) del objeto método Box dentro del objeto widget, 
	estableciendo el valor (this) para el objeto widget.
*/

/* ##########=============================================================########## */
/* ######===--- Préstamo de funciones de métodos internos de tipo Array ---===###### */
/* ##########=============================================================########## */

function getNumbers(){
	/* La siguiente declaración usa la función 
	(call) para definir el thisinterior del 
	método (slice) para el objeto 
	(arguments) y ejecutar 
	el método (slice). */
	const args = Array.prototype.slice.call(arguments);

	return args.filter(num => num % 2);
}

let numerosNoImpares = getNumbers(10, 9, 22, 5, 13, 2, 4, 6);

console.log(numerosNoImpares);