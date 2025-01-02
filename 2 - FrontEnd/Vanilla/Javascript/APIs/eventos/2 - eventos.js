/* ##########========================########## */
/* ######===--- Utilizar un evento ---===###### */
/* ##########========================########## */

document.write(`
	<button>Click me</button>
`);

let button = document.getElementsByTagName('button')[0];

button.addEventListener("click", event => {
	
	// Informacion del evento, (en este caso el evento 'click').
	event; // MouseEvent

	// Elemento al cual se le esta aplicando el evento.
	e.target; // HTMLButtonElement
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

/* ##########============================########## */
/* ######===--- Propagacion de eventos ---===###### */
/* ##########============================########## */

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

/**
 * Este no se ejecuta.
 */
primerDiv.addEventListener("click", event => {
	window.alert('Click al primer elemento div.');
});

/**
 * Primero se ejecuta este. (1).
 */
segundoDiv.addEventListener("click", event => {
	window.alert('Click al segundo elemento div.');
}, true);

/**
 * Luego se ejecuta este. (2).
 */
tercerDiv.addEventListener("click", event => {
	window.alert('Click al tercer elemento div.');

	// El metodo (stopPropagation) detiene los eventos declarados en sus elementos padre.
	event.stopPropagation();
	// El metodo (stopImmediatePropagation) detiene los eventos declarados en este mismo elemento.
	event.stopImmediatePropagation();
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