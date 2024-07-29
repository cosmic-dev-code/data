/* ##########=============########## */
/* ######===--- Ventana ---===###### */
/* ##########=============########## */

// Abre una nueva página en blanco.
window.open();

// Abre una nueva página con la url.
window.open("https://www.example.com");

// Cierra la página.
window.close();

// NOTA: (Ya no tiene soporte), por lo que no funciona.
window.minimize();

/* ##########========================########## */
/* ######===--- El objeto (window) ---===###### */
/* ##########========================########## */

// Podemos controlar la nueva página guardada en la variable 'page'.
let nuevaVentana = window.open("https://www.example.com");

// Representa el objeto (window) de la nueva pagina abierta.
// NOTA: Tiene algunas limitaciones por seguridad, pero en su mayoria es igual.
nuevaVentana;

// Por otro lado tenemos el objeto (document) de la nueva pagina.
nuevaVentana.document;

// ------------------------------ //
// ------ Uso del (window) ------ //
// ------------------------------ //

/**
 * Podemos utilizar el objeto (window) que representa la nueva ventana abierta.
 */

let nuevaVentana = window.open("https://www.example.com");

// cambia el tamaño de la ventana.
nuevaVentana.resizeTo(500, 500);

// cambia la posición de la ventana.
nuevaVentana.moveTo(100, 100);

// Podemos cerrar la nueva pagina abierta.
nuevaVentana.close();

// -------------------------------- //
// ------ Uso del (document) ------ //
// -------------------------------- //

/**
 * Podemos utilizar el objeto (document) que representa la nueva ventana abierta.
 */

let doc = window.open("https://www.example.com").document;

// Escribir codigo HTML.
doc.write(`
	<div>Hola</div>
`);

// Extraer elementos.
doc.getElementsByTagName("div");

// Extraer el titulo de la pagina.
doc.querySelector("title").textContent;

// Extraer los metadatos de la pagina.
doc.querySelectorAll("head > meta");

/* ##########================================########## */
/* ######===--- Intercambio de informacion ---===###### */
/* ##########================================########## */

// Por otra parte, las ventanas son capaces de compartir informacion.

///////// --- --- --- --- --- --- proyecto/js/index.js --- --- --- --- --- --- /////////

var URL_WINDOW = "https://www.example.com";

// Abrimos la nueva ventana bajo una (URL).
let nuevaVentana = window.open(URL_WINDOW);

// Enviamos el mensaje a esa URL.
nuevaVentana.postMessage("¡Hola ventana recién abierta!", URL_WINDOW);

///////// --- --- --- --- --- --- https://www.example.com --- --- --- --- --- --- /////////

// código en la ventana recién abierta.

// Tiene el evento que recibe el mensaje.
window.addEventListener("message", function (event){
	// Si el mensaje proviene de la misma (url)...
    if (event.origin === "https://www.example.com"){
    	event.data; // El mensaje enviado.
    }

});

// -------------------------------- //
// ------ Mas de una ventana ------ //
// -------------------------------- //

// Abrimos la ventana A
let ventanaA = window.open("https://www.example.com/fileUno.html");

// Abrimos la ventana B
let ventanaB = window.open("https://www.example.com/fileDos.html");

// Event listener para la ventana A
window.addEventListener("message", function (event) {
    // Verificamos que el mensaje proviene de la ventana B
    if (event.source === ventanaB) {
        // Procesamos el mensaje
        console.log("Ventana A recibió mensaje:", event.data);
    }
});

// Event listener para la ventana B
window.addEventListener("message", function (event) {
    // Verificamos que el mensaje proviene de la ventana A
    if (event.source === ventanaA) {
        // Procesamos el mensaje
        console.log("Ventana B recibió mensaje:", event.data);
    }
});

// Enviamos un mensaje de la ventana A a la ventana B
ventanaB.postMessage("Hola ventana B, soy la ventana A!", "https://www.example.com");