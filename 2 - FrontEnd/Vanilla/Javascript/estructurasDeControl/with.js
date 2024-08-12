"use strict";

/* El objeto (console) tiene varios metodos. */

console.log("Log");
console.error("Error");
console.warn("Warn");
console.table(["Uno", "Dos", "Tres"]);

/* La estructura de control (with) se utiliza para hacer referencia a un objetos. */
with(console){
	/* Podemos hacer uso de los metodos, como si se trataran de funciones, ya que hacen 
	referencia al objeto (console). */

	log("Log");
	error("Error");
	warn("Warn");
	table(["Uno", "Dos", "Tres"]);
}