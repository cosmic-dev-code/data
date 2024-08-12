/* ##########===============================########## */
/* ######===--- Menejo de client y offset ---===###### */
/* ##########===============================########## */

const element = document.createElement("div");

// Devuelve la altura del elemento incluyendo borde y padding.
element.offsetHeight;

// Devuelve la anchura del elemento incluyendo borde y padding.
element.offsetWidth;

// Distancia desde la izquierda del elemento hasta el borde del padre.
element.offsetLeft;

// Distancia desde arriba del elemento hasta el borde del padre.
element.offsetTop;

// La altura visible del elemento sin borde y padding.
element.clientHeight;

// La anchura visible del elemento sin borde y padding.
element.clientWidth;

// La altura total del contenido del elemento, (considera el contenido oculto por scroll).
element.scrollHeight;

// La anchura total del contenido del elemento, (considera el contenido oculto por scroll).
element.scrollWidth;