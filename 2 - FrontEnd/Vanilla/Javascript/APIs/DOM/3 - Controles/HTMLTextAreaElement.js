/* ##########===========================########## */
/* ######===--- Propiedades y métodos ---===###### */
/* ##########===========================########## */

const textarea = document.createElement("textarea");

// El valor del elemento.
textarea.value = "Valor";

// Valor inicial del textarea.
textarea.defaultValue = "Valor inicial";

// Especifica el nombre del campo al enviar los datos del formulario.
input.name = "nombre";

// Especifica si el campo está desabilitado.
input.disabled = false;

// Número de columnas visibles en el (textarea).
textarea.cols = 8;

// Número de filas visibles en el (textarea).
textarea.rows = 8;

// Si (textarea) es de solo lectura.
textarea.readOnly = false;

// Si el navegador debe autocompletar el campo.
textarea.autocomplete = false;

// Devuelve el formulario al cual pertenece.
textarea.form; // HTMLFormElement

/* Cómo se ajustarán las lineas en el textarea, recibe: 
  --- (off), las líneas no se ajustan y pueden sobrepasar el textarea.
  --- (hard), las líneas se acortan al llegar a los límites.
  --- (soft), las líneas pueden ajustarse y sobrepasar los límites si es necesario. */
textarea.wrap = "off";

// Selecciona el texto del campo.
input.select();

// Selección desde cierto rango.
input.setSelectionRange(0, 5);

// Coloca el foco en el elemento.
select.focus();

// Quita el foco del elemento.
select.blur();

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
