"use strict";

/* ##########===================================########## */
/* ######===--- Eventos del (mouse) y (touch) ---===###### */
/* ##########===================================########## */

document.querySelector("#idBtn").onclick = function(event){
	// Devuelve si esta habilitado el burbujeo.
	event.bubbles;
	// Devuelve si el burbujeo fle cancelado.
	event.cancelBubble;
	// Devuelve si el burbujeo puede ser cancelado.
	event.cancelable;

	// Devuelve el elemento donde se genero el evento.
	event.target;

	// Devuelve el tipo de evento, (sin el [on]).
	event.type;

	// Devuelve los detalles adicionales agregados por el programador al evento.
	event.detail;

	// Devuelve si el evento fue prevenido.
	event.defaultPrevent;

	// Previene el coportamiento por defecto del evento, (en caso de tenerlo).
	event.preventDefault();

	// Devuelve las coordenadas globales de la pantalla, (px).
	event.screenX;
	event.screenY;

	// Muestra las coordenadas del puntero del mouse mientras el puntero del mouse se mueve sobre un elemento.
	event.clientX;
	event.clientY;
	event.x;
	event.y;

	/* (LayerX) y (LayerY) Recupera la coordenada x, la coordenada y, respectivamente, del puntero del mouse en relación 
	con la esquina superior izquierda del elemento ancestro más cercano posicionado del elemento que 
	activa el evento. */
	event.layerX;
	event.layerY;

	// Son relativos al contenedor principal
	event.offsetX;
	event.offsetY;

	/* Son relativos al documento, el documento es la página web. No todos los navegadores la 
	implementan pero si los navegadores principales. */
	event.pageX;
	event.pageY;

	// Movimiento del mouse.
	event.movementX;
	event.movementY;
};

/* ##########===========================########## */
/* ######===--- Eventos del (teclado) ---===###### */
/* ##########===========================########## */

document.querySelector("input").onkeypress = event => {
	// Devuelve si esta habilitado el burbujeo.
	event.bubbles;
	// Devuelve si el burbujeo fle cancelado.
	event.cancelBubble;
	// Devuelve si el burbujeo puede ser cancelado.
	event.cancelable;

	// Devuelve el elemento donde se genero el evento.
	event.target;

	// Devuelve el tipo de evento, (sin el [on]).
	event.type;

	// Devuelve los detalles adicionales agregados por el programador al evento.
	event.detail;

	// Devuelve si el evento fue prevenido.
	event.defaultPrevent;

	// Previene el coportamiento por defecto del evento, (en caso de tenerlo).
	event.preventDefault();

	// Devuelve el numero de la tecla que se presiono.
	event.keyCode;

	// Devuelve si la tecla (CTRL) se presiono.
	event.ctrlKey;

	// Devuelve un string con el texto de la tecla que se presiono.
	event.key;

	// Devuelve la tecla que genero el evento, ejemplo: "KeyD".
	event.code;
};