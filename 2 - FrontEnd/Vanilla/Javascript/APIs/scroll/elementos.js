/* ##########=================########## */
/* ######===--- Propiedades ---===###### */
/* ##########=================########## */

const element = document.createElement("div");

// Muestra la posicion actual del scroll en el eje (horizontal).
let scroll = element.scrollTop;

// Muestra la posicion actual del scroll en el eje (vertical).
let scroll1 = element.scrollLeft;

/* ##########=============########## */
/* ######===--- Metodos ---===###### */
/* ##########=============########## */

// Desplazar a una posición específica de manera suave
element.scrollTo({
	top: 200,
	left: 100,
	behavior: 'smooth'
});