
/* ##########======================########## */
/* ######===--- Tipos de eventos ---===###### */
/* ##########======================##########

	// --------------------------------- //
	// ------ Eventos del (mouse) ------ //
	// --------------------------------- //
	
	Click.
	--- (click): Un click.
	--- (dblclick): Doble click.
	--- (contentmenu): Desplegar la lista del click derecho del mouse.
	Hover.
	--- (mouseover): Sobre un elemento o sobre sus hijos.
	--- (mouseout): Fuera del elemento o de sus elementos.
	--- (mouseenter): Se mueve sobre del elemento pero especialmente hecho para internet explorer.
	--- (mouseleave): Se mueve fuera del elemento pero espacialmente hecho para internet explorer.
	Presionar.
	--- (mousemove): Mientras el mouse se mueva dentro del elemento.
	--- (mousedown): Presionar sobre un elemento.
	--- (mouseup): Despresionar un elemento.

	// ------------------------------------- //
	// ------ Eventos de (formulatio) ------ //
	// ------------------------------------- //

	Inputs.
	--- (focus): Cuando se hace foco del input, (cuando se selecciona, se mantiene activo).
	---	(blur): Cuando el elemento pierde el foco.

	// --------------------------------- //
	// ------ Eventos del (touch) ------ //
	// --------------------------------- //

	--- (touchstart): Ocurre cuando el usuario hace contacto con la pantalla tactil.
	--- (touchmove): Ocurre cuando el usuario desliza su dedo a lo largo de la pantalla tactil.
	--- (touchend): Ocurre cuando el usuario quita su dedo de la pantalla tactil.
	--- (touchcancel): Se activa cuando un punto de contacto se ha interrumpido 
		de una manera específica de la implementación (por ejemplo, se crean 
		demasiados puntos de contacto).
	
	// ----------------------------------- //
	// ------ Eventos del (teclado) ------ //
	// ----------------------------------- //
	
	--- (keydown): Cuando se presiona una tecla.
	--- (keypress): Cuando un tecla se presiona y se suelta.
	--- (keyup): Cuando una tecla se suelta.
	--- (input): Cuando un usuario escriba algo en un campo.

	// ---------------------------------------- //
	// ------ Eventos del (portapapeles) ------ //
	// ---------------------------------------- //

	--- (copy): Ocurre cuando el usuario copia un texto de un elemento, (CTRL + C).
	--- (paste): Ocurre cuando el usuario pega un texto a un elemento, (CTRL + V).
	--- (cut): Ocurre cuando el usuario corta un texto de un elemento, (CTRL + X).
	--- (select): Cuando el usuario selecciona un texto.

	// ------------------------------------ //
	// ------ Eventos del (interfaz) ------ //
	// ------------------------------------ //
	
	--- (error): Ocurre cuando un archivo multimedia no se ha cargado.
	--- (load): Ocurre cuando un objeto se ha cargado.
	--- (beforeunload): Ocurre cuando el usuario se va a ir del sitio.
	--- (unload): Ocurre cuando el usuario se fue del sitio.
	--- (resize): Ocurre cuando la pantalla de la página web cambia su tamaño.
	--- (scroll): Ocurre cuando el usuario hace scroll.
*/

/* ##########========================########## */
/* ######===--- Utilizar un evento ---===###### */
/* ##########========================########## */

document.write(`
	<button>Click me</button>
`);

let button = document.getElementsByTagName('button')[0];

button.addEventListener("click", event => {
	
	// Informacion del evento, (en este caso el evento 'click').
	console.log(event);

	// Elemento al cual se le esta aplicando el evento.
	console.log(e.target);
});

/* ##########========================########## */
/* ######===--- Eventos en cascada ---===###### */
/* ##########========================########## */

document.write(`
	<div>
		<div>Texto</div>
	</div>
`);

/* El (primer) div contiene al (segundo) div. */
let primerDiv = document.getElementsByTagName('div')[0];
let segundoDiv = document.getElementsByTagName('div')[1];

// Primero se ejecuta este. (1).
primerDiv.addEventListener("click", event => {
	window.alert('Click al primer elemento div.');
});

// Luego se ejecuta este. (2).
segundoDiv.addEventListener("click", event => {
	window.alert('Click al segundo elemento div.');
});

// --------------------------------- //
// ------ Prioridad a eventos ------ //
// --------------------------------- //

let primerDiv = document.getElementsByTagName('div')[0];
let segundoDiv = document.getElementsByTagName('div')[1];

// Este se ejecuta despues. (2).
primerDiv.addEventListener("click", event => {
	window.alert('Click al primer elemento div.');
});

// Ahora este se ejecuta primero. (1).
segundoDiv.addEventListener("click", event => {
	
	window.alert('Click al segundo elemento div.');

	/* Con 'true' indicamos que este evento se ejecutará primero, en caso de que haya otro 
	'true' este pasará a ejecurse después. */
}, true);

/* ##########======================================########## */
/* ######===--- Manipular propagacion de eventos ---===###### */
/* ##########======================================########## */

// ------------------------------------ //
// ------ Propagacion de eventos ------ //
// ------------------------------------ //

document.write(`
	<div>
		<div>
			<div>Texto</div>
		</div>
	</div>
`);

let primerDiv = document.getElementsByTagName('div')[0];
let segundoDiv = document.getElementsByTagName('div')[1];
let tercerDiv = document.getElementsByTagName('div')[2];

// Al final se ejecuta este. (3).
primerDiv.addEventListener("click", event => {
	window.alert('Click al primer elemento div.');
});

// Primero se ejecuta este. (1).
segundoDiv.addEventListener("click", event => {
	window.alert('Click al segundo elemento div.');
}, true);

// Luego se ejecuta este. (2).
tercerDiv.addEventListener("click", event => {
	window.alert('Click al tercer elemento div.');
});

// ------------------------------------ //
// ------ Detener la propagacion ------ //
// ------------------------------------ //

let primerDiv = document.getElementsByTagName('div')[0];
let segundoDiv = document.getElementsByTagName('div')[1];
let tercerDiv = document.getElementsByTagName('div')[2];

// Este no se ejecuta.
primerDiv.addEventListener("click", event => {
	window.alert('Click al primer elemento div.');
});

// Primero se ejecuta este. (1).
segundoDiv.addEventListener("click", event => {
	window.alert('Click al segundo elemento div.');
}, true);

// Luego se ejecuta este. (2).
tercerDiv.addEventListener("click", event => {
	window.alert('Click al tercer elemento div.');

	/* El metodo (stopPropagation) detiene todos los demas eventos del mismo tipo de evento 
	pertenevientes a los elementos padre que lo contienen. */
	event.stopPropagation();
});

/* ##########=======================########## */
/* ######===--- Remover un evento ---===###### */
/* ##########=======================########## */

let btn = document.getElementById('idBtn');

/* Le asignamos al evento una funcion, (es necesario hacerlo de esta manera 
para que el evento se pueda eliminar despues). */
btn.addEventListener('click', functionBtn);

function functionBtn(event){
	console.log("El evento del elemento: ", event.target);

	/* El metodo (removeEventListener) remueve un evento de un elemento, 
	recibe por parametros: 
		--- El evento que se eliminara del elemento.
		--- La funcion que se ejecuta cuando ocurre ese evento. */
	btn.removeEventListener('click', functionBtn);
}