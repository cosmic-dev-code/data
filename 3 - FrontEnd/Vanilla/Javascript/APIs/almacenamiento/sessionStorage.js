
/* ##########================================########## */
/* ######===--- verificar (sessionStorage) ---===###### */
/* ##########================================########## */

/* El objeto (sessionStorage) permite guardar datos de manera temporal, los datos solo se borran 
hasta que el usuario cierra el sitio web. */
window.sessionStorage

/* Una forma de validar si el navegador tiene 
disponible el objeto (sessionStorage). */
if(typeof window.sessionStorage !== undefined){
    // Tenemos local Storage.
}

/* ##########================================########## */
/* ######===--- Manipular (sessionStorage) ---===###### */
/* ##########================================########## */

// Forma de agregar items en el (sessionStorage).
window.sessionStorage.setItem("Item", "Valor");
window.sessionStorage.item = "Valor";

/* Forma de obtener los valores de los items 
en el (sessionStorage) */
window.sessionStorage.getItem("Item");
window.sessionStorage.Item;

// Devuelve un booleano comprobando la existencia de un item.
window.sessionStorage.hasOwnProperty('user');

// Elimina el item perteneciente al (sessionStorage).
window.sessionStorage.removeItem("Item");

// Elimina todos los items del (sessionStorage).
window.sessionStorage.clear();