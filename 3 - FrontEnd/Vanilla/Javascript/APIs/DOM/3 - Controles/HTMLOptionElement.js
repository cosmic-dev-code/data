/* ##########===========================########## */
/* ######===--- Propiedades y métodos ---===###### */
/* ##########===========================########## */

const option = document.createElement("option");

/* Esta es otra manera de crear un elemento (option), 
recibe por parámetros: 
  --- Texto visible de la opción al desplegar el elemento padre (select).
  --- El valor de la opción.
  --- Valor para la propiedad (defaultSelected).
  --- Valor para la propiedad (selected). */
const option = new Option("Texto", "valor", false, false);

// El texto visible de la opción al desplegar el (select).
option.text = "Hola mundo";

// Representa el valor del elemento para el (select).
option.value = "Valor";

// Si el elemento está seleccionado.
option.selected = false;
// Valor inicial del elemento.
option.defaultSelected = false;

// Su posición dentro de su etiqueta padre (select).
option.index; // 3

// Se elimina el elemento.
option.remove();
