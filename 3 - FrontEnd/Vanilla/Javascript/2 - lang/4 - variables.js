/* ##########================########## */
/* ######===--- Sin tipado ---===###### */
/* ##########================########## */

/**
 * Variables sin tipado.
 * 
 * A diferencia de otros lenguajes, aqui las variables pueden obtener cualquier tipo 
 * de dato y cambiar dinamicamente su valor.
 */

let variable = 5; // int

variable = "Cadena de texto"; // string

variable = true; // bool

variable = new Usuario(); // Usuario

// ---------------------------------- //
// ------ Declaracion multiple ------ //
// ---------------------------------- //

/**
 * Esta es una declaracion normal.
 */

let variable = 90;
let variable1 = true;
let variable2 = new Array();

/**
 * Esta es una declaracion multiple.
 */

let variable = 50, variable1 = true, variable2 = new Array();

/**
 * Forma peculiar de JavaScript.
 */

// Cuando multiples variables declaradas reciben el mismo dato.
let variable = 50, 
    variable1 = 50, 
    variable2 = 50;

// Puede simplificarse.
let [variable, variable1, variable2] = 50;

/* ##########===========########## */
/* ######===--- Scope ---===###### */
/* ##########===========########## */

/**
 * Las variables globales pueden ser declaradas: 
 * 	--- Como propiedad del objeto (window).
 * 	--- Por la palabra reservada (var).
 * 
 * Son accesibles en todo el documento y los demas documentos mandados a llamar.
 */

// -------------------- //
// ------ Global ------ //
// -------------------- //

// Las variables declaradas fuera en el documento, indican que seran (globales).
var miVariable = 66;

(function funcion(){
	// Como propiedad del objeto (window) declaramos una variable.
	window.miVar = 80;
}());

// Aqui se utiliza.
console.log(miVar); // 80

// --------------------- //
// ------ Locales ------ //
// --------------------- //

/**
 * Las variables de ambito (local) se declaran con (let).
 */
function funcion(){
	// Solo accesible dentro de esta funcion.
	let variableLocal = "Valor";
}

// Tiene ambito local, (en todo el documento), como si fuera una global.
let varLocal = "Valor";

// --------------------- //
// ------ Closure ------ //
// --------------------- //

function outerFunction() {
  var outerVar = 10;

  // La funcion accede a una variable, (outerVar) que no esta dentro de su ambito.
  function innerFunction() {
  	// innerFunction tiene acceso a outerVar.
    console.log(outerVar);
  }

  return innerFunction;
}

var closure = outerFunction();
// Imprimirá 10, a pesar de que outerFunction ya terminó, a esto se le conoce como (Closure).
closure();


/* ##########================########## */
/* ######===--- Constantes ---===###### */
/* ##########================########## */

// (const) indica que sera una constante.
const constante = "Valor";

/* ##########=================########## */
/* ######===--- Referencias ---===###### */
/* ##########=================########## */

/* El metodo (getElementsByTagName) extrae la referencia de un elemento del DOM, 
esta referencia funciona para manipular en tiempo real el objeto extraido 
del DOM. */

// Ejemplo: 

// Extraemos la referencia del (div) que se encuentra dentro del (DOM).
const htmlDivElement = document.getElementsByTagName("div")[0]; // HTMLDivElement

// Todos los cambios a la propiedades se veran reflejados en tiempo real.
htmlDivElement.textContent = "Hello";
htmlDivElement.id = "idDiv";
htmlDivElement.remove();