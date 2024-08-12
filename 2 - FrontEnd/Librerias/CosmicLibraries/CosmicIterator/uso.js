"use strict";

const iterator = new CosmicIterator([0, 3, 5]);
// Creamos el objeto iterador para iterar nuestros elementos.

iterator.first(); // Da: 0.
// Devuelve el primer elemento.

iterator.last(); // Da: 5.
// Devuelve el ultimo elemento.

iterator.has();
// Devuelve un valor booleano que verifica si el iterador tiene elementos.

iterator.toArray();
// Devuelve los elementos en un arreglo, como fueron ingresados.

iterator.forEach(element => {
	element.value; // Valor del elemento.
	element.done; // Indica si el elemento ya culmino.
});
// Itera los elementos del objeto iterador.

let obj0 = iterator.next();
iterator.next();
iterator.next();
let obj1 = iterator.next();

obj0.value; // Da: 0
obj0.done; // Da: false

obj1.value; // Da: undefined
obj1.done; // Da: true

// Devuelve un objeto con el valor del elemento actual.