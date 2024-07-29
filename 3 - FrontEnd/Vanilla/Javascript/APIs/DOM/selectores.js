/* ##########=====================########## */
/* ######===--- Crear elementos ---===###### */
/* ##########=====================########## */

// Creamos un elemento div.
let div = document.createElement("div");

// Creamos un nodo de texto.
let texto = document.createTextNode("Este es un texto");

/* para evitar que el dom se sobrescriba podemos crear una pieza de fragmento en dónde podemos meter el 
código para poder meterlo después al elemento que creemos. */
const fragmento = document.createDocumentFragment();

/* ##########=======================########## */
/* ######===--- Extraer elementos ---===###### */
/* ##########=======================########## */

/**
 * NOTA: Cabe resaltar que las (NodeList) y (HTMLCollection) no son (Arrays); 
 * por lo que carecen de los metodos de manipulacion: 
 *  --- (valueOf, push, pop o join, etc).
 */

/**
 * Extrae la referencia de un elemento por medio de la sintaxis CSS.
 */
let $p = document.querySelector(".mi-div"); // HTMLDivElement

/**
 * Extrae la referencia de todos los elementos seleccionados por la sintaxis CSS.
 */
let $a = document.querySelectorAll("#enlace"); // NodeList

/**
 * Extrae la referencia de todos los elementos cincidentes.
 */
let a = document.getElementsByTagName("a"), // HTMLCollection
	// Dos clases en un mismo elemento.
	b = document.getElementsByTagName("mi-clase otra-calse"); // HTMLCollection

/**
 * Devuelve la referencia de un elemento por medio de su (id).
 */
let a = document.getElementById("idDiv"); // HTMLDivElement

/**
 * Devuelve las referencias de los elementos coincidentes con la clase especificada.
 */
let a = document.getElementsByClassName("parrafo"); // HTMLCollection

/**
 * Devuelve las referencias de los elementos conicidentes con el (name) especificado.
 */
let a = document.getElementsByName("nombreDeLaEtiqueta"); // NodeList