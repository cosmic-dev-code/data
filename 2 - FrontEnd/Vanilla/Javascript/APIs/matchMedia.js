"use strict";

/* ##########==================================########## */
/* ######===--- Crear un objeto (matchMedia) ---===###### */
/* ##########==================================########## */

// Tomamos el 'id' de un elemento.
const caja = document.getElementById('caja'),
/* Inicializamos el objeto 'matchMedia' como tal, el cual se encarga de controlar las 
(media querys). */
      media = window.matchMedia("");

// (matchMedia) inicializado.
const mediaInicializado = window.matchMedia("()");

// Le damos un valor al 'max-width' aunque tambien puede ser 'min-width'.
const mediaScreen500 = window.matchMedia("(max-width: 500px)");

/* ##########==================================########## */
/* ######===--- Utilizar objeto (matchMedia) ---===###### */
/* ##########==================================########## */

// Cuando el valor de la variable (mediaScreen500) sea verdadero entonces se ejecutan las condiciones.
mediaScreen500.addEventListener("change", () => {
	/* Si la variable (mediaScreen500) es falsa entonces la caja adquiere un 30% de ancho, 
	pero si la condicion se sigue manteniendo verdadera entonces remueve la clase y 
	la caja adquiere el 100% del ancho. */
	if(mediaScreen500.matches){
		// Removemos una clase.
		caja.classList.remove("wd-30p");
	}else{
		// Agregamos una clase.
		caja.classList.add("wd-30p");
	}
});

/* Con los eventos de escucha repetitivos, (scroll), (change), (etc). No es necesario agregar el 
constante escucha (mediaScreen500.onchange); pues ya tenemos uno. */

window.onscroll = event => {
	if(mediaScreen500.matches){
		// ...
	}else{
		// ...
	}
}