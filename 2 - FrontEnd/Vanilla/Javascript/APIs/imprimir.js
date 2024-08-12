/* ##########=================########## */
/* ######===--- Estilos CSS ---===###### */
/* ##########=================########## */

/**
 * Para saber dar estilos a la hora de imprimir es necesario ir a (CSS) y buscar el archivo de 
 * (impresoras.css) o (imprimir.css).
 */

/* ##########==============########## */
/* ######===--- Imprimir ---===###### */
/* ##########==============########## */

// Muestra una interfaz con una vista previa antes de mandar a imprimir.
window.print();

/* ##########=============########## */
/* ######===--- Eventos ---===###### */
/* ##########=============########## */

window.onbeforeprint = function() {
  // Acciones antes de la impresión.
};

window.onafterprint = function() {
  // Acciones después de la impresión.
};

/**
 * Podriamos preguntar al usuario si desea imprimir antes de que imprima.
 */

// Antes de imprimir.
window.onbeforeprint = function() {
	if(!confirm("¿Estás seguro de que deseas imprimir esta página?")){
		window.print();
	}
};
