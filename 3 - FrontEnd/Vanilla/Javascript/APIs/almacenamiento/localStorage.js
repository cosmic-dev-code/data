
/* ##########================================########## */
/* ######===--- verificar (localStorage) ---===###### */
/* ##########================================########## */

/* El objeto (localStorage) permite guardar datos de manera 
indefinida hasta que se decidan borrar los datos. */
window.localStorage

/* Una forma de validar si el navegador tiene 
disponible el objeto (localStorage). */
if(typeof window.localStorage !== undefined){
    // Tenemos local Storage.
}

/* ##########================================########## */
/* ######===--- Manipular (localStorage) ---===###### */
/* ##########================================########## */

// Forma de agregar items en el (localStorage).
window.localStorage.setItem("Item", "Valor");
window.localStorage.item = "Valor";

/* Forma de obtener los valores de los items 
en el (localStorage) */
window.localStorage.getItem("Item");
window.localStorage.Item;

// Devuelve un booleano comprobando la existencia de un item.
window.localStorage.hasOwnProperty('Item');

// Elimina el item perteneciente al (localStorage).
window.localStorage.removeItem("Item");

// Elimina todos los items del (localStorage).
window.localStorage.clear();