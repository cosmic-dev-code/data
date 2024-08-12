/* ##########===========================########## */
/* ######===--- Propiedades y métodos ---===###### */
/* ##########===========================########## */

const input = document.createElement("input");

/* Establece el tipo de campo, puede ser: 
    --- "text", "password", "checkbox", etc. */
input.type = "text";

// Contiene el valor actual del campo.
input.value = "Valor";
// El valor inicial del campo.
input.defaultValue = "Valor inicial";

// Especifica el nombre del campo al enviar los datos del formulario.
input.name = "nombre";

// Especifica si el campo está desabilitado.
input.disabled = false;

// Indica si el campo es de solo lectura.
input.readOnly = false;

// Establece si el vampo está marcado.
// NOTA: Solo para (type) => "checkbox" o "radio".
input.checked = true;
// Valor inicial.
input.defaultChecked = true;

// Representa el texto de fondo de la caja.
// NOTA: Solo para cajas de texto como: "text", "password", "search", etc.
input.placeholder = "Ingrese su nombre";

// Indica cuánto aumentará cada que se aumente el elemento.
// NOTA: Solo para cajas de texto como: "number"
input.step = 1;

// Devuelve el formulario al cual pertenece.
textarea.form; // HTMLFormElement

// Indica la cantidad de carácteres visibles.
// NOTA: (Solo para cajas de texto).
input.size = 10;

// Devuelve el formulario al cual pertenece.
input.form; // HTMLFormElement

// Establece el tipo de archivo que acepta.
// NOTA: (Solo para inputs de tipo file).
input.accept = "image/png";

// Da el foco al elemento de entrada.
input.focus();

// Selecciona el texto del campo.
// NOTA: (Solo para cajas de texto).
input.select();

// Selección desde cierto rango.
// NOTA: (Solo para cajas de texto).
input.setSelectionRange(0, 5);

// Reemplaza un texto desde cierto rango.
// NOTA: (Solo para cajas de texto).
input.setRangeText("Hello", 0, 5);

// Error personalizado.
input.setCustomValidity("Este campo es requerido");

// Remueve el elemento.
input.remove();

input.onchange = event => {
    // Cuando el valor del (input) cambia.
};

/* -------------------------- */
/* ------ Validaciones ------ */
/* -------------------------- */

// Indica que es necesario llenar o marcar el campo.
// Si no se cumple muestra un (error).
input.required = true;

// Vamor de longitud mínimo para el elemento.
// Para campos de tipo texto.
input.minLength = 10;

// Número mínimo para campos numéricos.
input.min = 10;

// Vamor de longitud máximo para el elemento.
// Para campos de tipo texto.
input.maxLength = 20;

// Número máximo para campos numéricos.
input.max = 20;

// Permite validar el valor con un patrón específico.
input.pattern = "^[a-zA-Z]+$";

/* Valida el valor del campo. Valida de acuerdo a los siguientes factores: 
    --- (Campo vacío), (type), (required), (min), (max) */
input.checkValidity(); // bool