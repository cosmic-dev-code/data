/* ##########===========================########## */
/* ######===--- Propiedades y métodos ---===###### */
/* ##########===========================########## */

const select = document.querySelector("select");

// (options), devuelve una colección de objetos HTMLOptionElement.
for(let i = 0; i < select.options.length; i++){
  var option = select.options[i];
}

// Índice de la opcion seleccionada.
select.selectedIndex; // 0

// El valor de la opción seleccionada.
select.value;

// Devuelve el número de opciones.
select.length;

// Indica si el (select) devuelve múltiples opciones.
select.multiple = false;

// Especifica el nombre del campo al enviar los datos del formulario.
input.name = "nombre";

// Especifica si el campo está desabilitado.
input.disabled = false;

// Devuelve el formulario al cual pertenece.
textarea.form; // HTMLFormElement

// Agrega una nueva opción al final de la lista.
select.add(new Option("Caption", "Valor"));
select.add(option);
// Agrega una nueva opción antes del elemento especificado.
select.add(option, select.options[3]);

// Elimina una opción de la lista.
select.remove(3);

// Devuelve la opción con el (índice) especificando.
select.item(3); // HTMLOptionElement

// Devuelve la opción com el (nombre) especificado.
select.namedItem("Hombre"); // HTMLOptionElement

// Coloca el foco en el elemento.
select.focus();

// Quita el foco del elemento.
select.blur();

select.onchange = function(){
  // Cuando el usuario cambia el valor del elemento.
}

select.oninput = function(){
  // Cuando cambia el valor del elemento.
}

/* -------------------------- */
/* ------ Validaciones ------ */
/* -------------------------- */

// Indica que es necesario llenar o marcar el campo.
// Si no se cumple muestra un (error).
input.required = true;

// Vamor de longitud mínimo para el elemento.
input.minLength = 10;

// Vamor de longitud máximo para el elemento.
input.maxLength = 20;

// Permite validar el valor con un patrón específico.
input.pattern = "^[a-zA-Z]+$";

/* Valida el valor del campo. Valida de acuerdo a los siguientes factores: 
  --- (Campo vacío), (type), (required). */
input.checkValidity(); // bool
