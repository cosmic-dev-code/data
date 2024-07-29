/* ##########=================================########## */
/* ######===--- Dimensiones del (navegador) ---===###### */
/* ##########=================================########## */

/* Devuelve el ancho interior de la ventana del navegador en píxeles incluyendo el 
(scroll y otros elementos de la interfaz del navegador). */
window.innerWidth; // px

/* Devuelve el alto interior de la ventana del navegador en píxeles incluyendo el 
(scroll y otros elementos de la interfaz del navegador). */
window.innerHeight; // px

/* ##########=================================########## */
/* ######===--- En relacion a la (pantalla) ---===###### */
/* ##########=================================########## */

// Devuelve las coordenadas desde el borde izquierdo de la pantalla hasta el borde izquierdo del navegador.
// Funcional para (Microsoft Edge).
window.screenLeft;
// Funcional para navegadores modernos basados en (Chromium).
window.screenX;

// Devuelve las coordenadas desde el borde derecho de la pantalla hasta el borde derecho del navegador.
// Funcional para (Microsoft Edge).
window.screenRight;
// Funcional para navegadores modernos basados en (Chromium).
window.screenX;

// Devuelve las coordenadas desde el borde superior de la pantalla hasta el borde superior del navegador.
// Funcional para (Microsoft Edge).
window.screenTop;
// Funcional para navegadores modernos basados en (Chromium).
window.screenY;

// NOTA: Para obtener el lado (derecho) e (inferior), se deben calcular manualmente.

/* ##########=====================================########## */
/* ######===--- Calcular (derecho) e (inferior) ---===###### */
/* ##########=====================================########## */

// Obtener el ancho total de la pantalla.
let width = window.screen.width;
// Obtener la altura total de la pantalla.
let height = window.screen.height;

// Obtener la posición izquierda de la ventana
let left = window.screenLeft || window.screenX;

// Calcular la posición derecha de la ventana
let right = width - left - window.innerWidth;

console.log('Distancia desde el borde derecho de la ventana hasta el borde derecho de la pantalla:', right);

// Obtener la posición superior de la ventana
let top = window.screenTop || window.screenY;

// Calcular la posición inferior de la ventana
let bottom = height - top - window.innerHeight;

console.log('Distancia desde el borde inferior de la ventana hasta el borde inferior de la pantalla:', bottom);