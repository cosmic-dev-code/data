/* ##########=================########## */
/* ######===--- Propiedades ---===###### */
/* ##########=================########## */

// Muestra la posicion actual del scroll en el eje (horizontal).
let scroll = window.scrollX;

// Muestra la posicion actual del scroll en el eje (vertical).
let scroll1 = window.scrollY;

/* ##########=============########## */
/* ######===--- Metodos ---===###### */
/* ##########=============########## */

/* Mueve el scroll de la pagina, los parametros son: 
	--- (X) e (Y). */
window.scroll(0, 10);
window.scrollTo(0, 10);

// Establece la propiedad (scrollY) a (0) con una animacion de suavidad.
window.scroll({
	// Posicion del scroll.
	top: 0, 
	/* Recibe: 
		--- "auto": Automatico, (lo que ya esta).
		--- "instant": De manera instantanea, sin deslizamiento, (lo que hace auto).
		--- "smooth": Deslinamiento suave.
	*/
	behavior: "smooth"
});