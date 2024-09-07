const div = document.getElementById('idDiv');

/* Recibimos un objeto con las coordenadas del elemento. */
const coordenadas = div.getBoundingClientRect();

/* ##########===========================================########## */
/* ######===--- Relacion a la (ventana del navegador) ---===###### */
/* ##########===========================================########## */

// Devuelve el valor de arriba del elemento (hacia arriba de la ventana).
coordenadas.top; // -202.3249969482422

// Devuelve el valor de la derecha del elemento (hacia la derecha de la ventana).
coordenadas.right; // 600

// Devuelve el valor de abajo del elemento hacia (abajo de la ventana).
coordenadas.bottom; // 757.6750030517578

// Devuelve el valor de la izquierda del elemento (hacia la izquierda de la ventana).
coordenadas.left; // 0

// NOTA: Esto es en (relacion a la ventana del navegador).
// NOTA: Si el elemento es (fixed), siempre tendra las mismas medidas, (porque esta fijo a la pantalla).

/* ##########=========================================########## */
/* ######===--- Anchura y altura total en (pixeles) ---===###### */
/* ##########=========================================########## */

/* NOTA: Cuando nos referimos (dentro del elemento), nos referimos a su contenido total: 
	--- (content, margin, padding).
	--- Medido en (pixeles). */

// Devuelve el ancho total del elemento en (pixeles).
coordenadas.width; // 600

// Devuelve el alto total del elemento en (pixeles).
coordenadas.height; // 600

/* ##########===========================================########## */
/* ######===--- Coordenadas en relacion al (viewport) ---===###### */
/* ##########===========================================########## */

// Devuelve las coordenadas del elemento en el eje 'X'.
coordenadas.x; // -202.3249969482422

// Devuelve las coordenadas del elemento en el eje 'Y'.
coordenadas.y; // 0

/* ##########========================########## */
/* ######===--- La clase (DOMRect) ---===###### */
/* ##########========================########## */

/* Los parametros que recibe el constructor son: 
	--- El primero es el valor de 'x'.
	--- El segundo es el valor de 'y'.
	--- El tercero es el valor del 'ancho'.
	--- El cuarto es el valor del 'alto'. */
const coordenadas = new DOMRect(0, 0, 100, 100);

/* Los valores de 'top', 'right', 'bottom' y 'left' se colocan automaticamente al dar los valores de 'x' e 'y'. */