/* ##########==================================########## */
/* ######===--- Dimensiones de la (pantalla) ---===###### */
/* ##########==================================########## */

// Tamaño total de la pantalla del navegador en el eje X, (menos el espacio ocupado por la barra de herramientas).
let windowScreen = window.screen.availWidth;

// Tamaño total de la pantalla del navegador en el eje Y, (menos el espacio ocupado por la barra de herramientas).
let windowScreen1 = window.screen.availdHeight;

// Tamaño total de la pantalla del dispositivo en el eje X.
let windowSubScreen = window.screen.width;

// Tamaño total de la pantalla del dispositivo en el eje Y.
let windowSubScreen1 = window.screen.height;

/* ##########===========================================########## */
/* ######===--- Capacidad de colores de la (pantalla) ---===###### */
/* ##########===========================================########## */

/* Devuelve la cantidad de bists que se utiliza para representar el color de cada pixel en la pantalla.
	--- NOTA: Cuanto mayor sea el valor de (colorDepth), mayor sera la cantidad de colores que puede mostrar la pantalla.
	--- Este valor es típicamente 24 bits para pantallas de color, lo que significa que se pueden representar hasta 2^24 
	(alrededor de 16,8 millones) de colores diferentes. */
let colorDeProfundidad = window.screen.colorDepth;

// Se utiliza como alternativa a (colorDepth) para obtener las capacidades de la pantalla de representar los colores.
let pantallaProfundidad = window.pixelDepth;
