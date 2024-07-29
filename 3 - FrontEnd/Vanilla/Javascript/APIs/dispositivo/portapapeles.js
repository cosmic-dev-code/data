/* ##########===============########## */
/* ######===--- clipboard ---===###### */
/* ##########===============########## */

// Manipula el portapapeles del usuario.

/* ##########=============########## */
/* ######===--- Eventos ---===###### */
/* ##########=============########## */

// Los eventos se disparan cuando el usuario utiliza, (el teclado CTRL + Tecla), (Mouse) o (Interfaz GUI).

document.addEventListener("copy", event => {

    // Copiamos texto seleccionado por el usuario.

    // Detiene el comportamiento por defecto, por lo que no copia.
    event.preventDefault();
});


document.addEventListener("paste", event => {

    // Obtenemos texto seleccionado por el usuario.

    // Detiene el comportamiento por defecto, por lo que no pega.
    event.preventDefault();
});

document.addEventListener("cut", event => {

    // Eliminar y Copiar.

    // Detiene el comportamiento por defecto, por lo que no corta.
    event.preventDefault();
});

/* ##########==============########## */
/* ######===--- Acciones ---===###### */
/* ##########==============########## */

// ---------------------- //
// ------ Sincrona ------ //
// ---------------------- //

document.addEventListener("copy", event => {
    // Obtenemos (clipboardData).
    var clipboardData = event.clipboardData || window.clipboardData;

    /**
     * (Copiar) datos al portapapeles.
     */
    clipboardData.setData('text/plain', 'Hola mundo');
    clipboardData.setData('text/html', '<p>Hola mundo</p>');

    /**
     * (Obtener) datos del portapapeles.
     */
    let text = clipboardData.getData("text/plain"); // "Hola mundo"
    let text = clipboardData.getData("text/html"); // "<html><body><p>Hola mundo</p></body></html>"

    /**
     * (Limpiar) datos del portapapeles.
     */
    clipboardData.clearData('text/plain');
    clipboardData.clearData('text/html');
});

// NOTA: Esto solo funciona dentro de los eventos disparados (copy), (paste) y (cut).

// ----------------------- //
// ------ Asincrona ------ //
// ----------------------- //

/* NOTA: Solucionando el problema anterior, el (navigator.clipboard) permite utilizar la manipulacion 
del portapapeles dentro de otros eventos y no solo dentro de (copy), (paste) y (cut).

Aun asi se requiere un (gesto) / (accion directa) del usuario, esto solo funciona dentro de un manejador de eventos. */

document.getElementById("idBtn").onclick = event => {
    /**
     * Copiar al portapapeles.
     */
    navigator.clipboard.writeText("Texto que quieres copiar")
        .then(() => {
            // Texto copiado exitosamente.
        })
        .catch(err => {
            // Error al copiar al portapapeles.
        });

    /**
     * Obtener del portapapeles.
     */
    navigator.clipboard.readText()
        .then(textString => {
            // Contenido del portapapeles.
        })
        .catch(err => {
            // Error al leer del portapapeles.
        });
};