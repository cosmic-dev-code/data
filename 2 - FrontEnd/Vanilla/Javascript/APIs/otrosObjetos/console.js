"use strict";

/* ##########==============########## */
/* ######===--- Mensajes ---===###### */
/* ##########==============########## */

//mensaje para depurar y verificar errores.
console.log("¡Hola mundo!");

//permite modificar el mensaje con código Css.
console.log("%cBrandon", "color: red;");

//mensaje de error.
console.error("Este es un mensaje de error.");

//mensaje únicamente para información, (no sirve para depurar).
console.info("Este es un mensaje de solo información.");

//mensaje de precaución.
console.warn("Este es un mensaje de precaución.");

/* Verifica una condicion, si es falsa imprime 
un mensaje de error con el segundo parametro. */
console.assert(5 > 3, {correct: false}); // Da: Undefined.
console.assert(5 < 3, {correct: false}); // Da: error de asercion: {correct: false}.

/* ##########============================########## */
/* ######===--- Mensajes para (arrays) ---===###### */
/* ##########============================########## */

let array = ["caramelo", 39, false, true, undefined, null];
//mensaje para mostrar de una manera diferente un array u objeto.
console.dir(array);

let persona = {
	nombres: "Brandon Anthony",
	apellidos: "Olivares Amador",
	edad: 21
};
//muestra los elementos de un array u objeto en forma de tabla.
console.table(persona);
console.table(array);

/* ##########========================########## */
/* ######===--- Conteo por consola ---===###### */
/* ##########========================########## */

//llevo un conteo de veces en qué se manda a llamar este método.
console.count();
console.count();
console.count();

//reiniciar conteo de veces.
console.countReset();
console.count();

/* ##########======================########## */
/* ######===--- Agrupar mensajes ---===###### */
/* ##########======================########## */

//permite agrupar los comandos en un grupo específico.
console.group();

//permite agrupar los comandos colapsados.
console.groupCollapsed();

//permite agrupar los comandos en un grupo específico con nombre.
console.group("Nombre");

//Finaliza las entradas de un grupo.
console.groupEnd()
