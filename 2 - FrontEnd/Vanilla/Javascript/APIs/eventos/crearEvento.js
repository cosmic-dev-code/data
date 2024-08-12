"use strict";

/* ##########=====================########## */
/* ######===--- Crear un evento ---===###### */
/* ##########=====================########## */

const section = document.getElementsByTagName('section')[0];

// ------------------------------------- //
// ------ El metodo (createEvent) ------ //
// ------------------------------------- //

// Creamos un evento.
const miEvent = document.createEvent('Event');

// Le damos el nombre.
miEvent.initEvent('hasclass', true, true);

// Le agregamos el (escucha) al elemento, que escuche nuestro evento.
section.addEventListener('hasclass', event => console.log(event));

// Disparamos el evento que sera escuchado.
section.dispatchEvent(miEvent);

// ------------------------------ //
// ------ La clase (Event) ------ //
// ------------------------------ //

// Creamos un evento.
const miEvent = new Event("hasclass");

// Le agregamos el (escucha) al elemento, que escuche nuestro evento.
section.addEventListener('hasclass', event => console.log(event));

// Disparamos el evento que sera escuchado.
section.dispatchEvent(miEvent);

// ------------------------------------ //
// ------ La clase (CustomEvent) ------ //
// ------------------------------------ //

/* El constructor (CustomEvent) recibe dos parametros: 
	--- El nombre del evento.
	--- Detalles adicionales del evento en la propiedad (detail). */
const miEvent = new CustomEvent('hasclass', {
	detail: "Detalles aqui"
});

section.addEventListener('hasclass', event => {
	console.log(event.detail);
});

section.dispatchEvent(event);

/* ##########============================########## */
/* ######===--- La propiedad (bubbles) ---===###### */
/* ##########============================########## */

/* NOTA: El (burbujeo) permite disparar eventos desde un 
elemento para que otro elemento lo escuche, en 
este caso, tenemos el siguiente ejemplo: 
	--- El (textarea) dispara un evento desde un escucha.
	--- El (formulario) recibe el evento que el (textarea) disparo. */

// Extraemos dos elementos.
const form = document.querySelector('form');
const textarea = document.querySelector('textarea');

// Creamos un evento (CustomEvent).
const miEvent = new CustomEvent('hasclass', {
	bubbles: true, // Permitimos el burbujeo.
	detail: {
		getValue: () => textarea.value, 
		target: textarea, 
		delete: () => textarea.delete()
	}
	/* A la propiedad: (details) le proporcionamos de un objeto con varios metodos y alguna propiedad. */
});

// El formulario escucha el evento...
form.addEventListener('hasclass', event => {
	event.detail.getValue();
	event.detail.textarea;
	event.detail.delete();
	// Utilizamos nuestros metodos.
});

// Cuando alguien escribe en el input...
textarea.addEventListener('input', event => {
	event.target.dispatchEvent(miEvent);
	// Se dispara el evento desde el textarea.
});

/* ##########============================================########## */
/* ######===--- Crear y disparar eventos dinamicamente ---===###### */
/* ##########============================================########## */

/* NOTA: Los elementos pueden escuchar eventos que aun no se han creado. */

// Extraemos dos elementos.
const form = document.querySelector('form');
const textarea = document.querySelector('textarea');

// El formulario escucha el evento...
form.addEventListener('hasclass', event => {
	// Utilizamos nuestros metodos.
	event.detail.getValue();
	event.detail.textarea;
	event.detail.delete();
});

textarea.addEventListener('input', function(){
	/* Desencadenamos un evento sobre la marcha, pero hacemos uso de 
	una (function) en lugar de una (arrow function) para que el 
	(this) haga referencia al elemento (textarea). */
	this.dispatchEvent(new CustomEvent('hasclass', {
		bubbles: true, 
		detail: {
			getValue: () => textarea.value, 
			target: textarea, 
			delete: () => textarea.delete()
		}
	}));
});

/* ##########================================########## */
/* ######===--- Si un evento fue cancelado ---===###### */
/* ##########================================########## */

function simulateClick() {
	// Creamos un evento (Click) del (mouse).
	const event = new MouseEvent('click', {
		view: window,
		bubbles: true,
		cancelable: true // Indicamos si el evento se puede cancelar.
	});

	// Disparamos el evento pero lo prevenimos negandolo.
	const cancelled = !document.getElementById('checkbox').dispatchEvent(event);

	// Podemos atrapar si el evento se previno o no...
	if(cancelled){
		alert("cancelled");
		// Un controlador llamado (preventDefault).
	} else {
		alert("not cancelled");
		// Ningun controlador llamado (preventDefault).
	}
}

/* ##########===========================########## */
/* ######===--- Simulacion de eventos ---===###### */
/* ##########===========================########## */

// Extraemos un elemento.
const button = document.getElementById("idBtn");

button.onclick = function(event){
	// Asignamos al evento 'click' una funcion.
};

button.addEventListener('click', event => {
	// Asignamos al evento 'click' una funcion.
});

// Simulamos el evento 'click'.
button.dispatchEvent(new Event("click"));