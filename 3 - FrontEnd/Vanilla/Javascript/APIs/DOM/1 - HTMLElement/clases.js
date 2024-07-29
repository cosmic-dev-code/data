/* ##########============########## */
/* ######===--- Clases ---===###### */
/* ##########============########## */

const element = document.createElement("div");

// Devuelve un (string) con todas las clases del elemento.
element.className; // string

// Agrega una clase.
element.classList.add("NuevaClase");

// Remueve una clase.
element.classList.remove("NuevaClase");

// Accede al índice de cada clase, como si fuera un array de clases.
element.classList.item(1);

// Verifica si la clase existe.
element.classList.contains("NuevaClase");

// Agrega o elimina la clase.
element.classList.toggle("ClaseAVerificar");

// Agrega siempre la clase.
element.classList.toggle("ClaseAVerificar", true);

// Elimina siempre la clase.
element.classList.toggle("ClaseAVerificar", false);

// Reemplaza una clase por otra.
element.classList.replace("ClaseAntigua", "NuevaClase");