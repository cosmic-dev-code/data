"use strict";

/* ##########=================================########## */
/* ######===--- La palabra reservada (void) ---===###### */
/* ##########=================================########## */

/* La palabra reservada (void) se utiliza para ejecutar codigo Javascript 
sin que este retorne nada; */

void window.alert("Hola"); // Da: undefined.

void 5 + 5; // Da: undefined.

void(window.alert("Hola")); // Da: undefined.

void(5 + 5); // Da: undefined.

/* ##########========================########## */
/* ######===--- (void), en enlaces ---===###### */
/* ##########========================########## */

document.write(`

	<a href="javascript:void(0)" onclick="window.alert('Hola')">Click</a>

`);
/* Al utilizar la palabra reservada (void) en enlaces, este no redireccionara a nada, tampoco modificara la 'url'. */