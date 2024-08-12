/* (QuerySelector), solo permite seleccionar un elemento y debe especificarse 
el tipo de selector que es: Una clase (.), un id (#), un elemento (div). */
let $p:HTMLElement = document.querySelector(".parrafo");

// Podemos recibir elementos especificos.
let input:HTMLInputElement = document.createElement("input") as HTMLInputElement;
let select:HTMLSelectElement = document.createElement("select") as HTMLSelectElement;
let option:HTMLOptionElement = document.createElement("option") as HTMLOptionElement;
		
/* (QuerySelectorAll), funciona de la misma manera que el anterior, la diferencia 
es que este seleccionara todas las coincidencias que encuentre en la pagina y 
devolvera una 'lista de elementos'. */
let $a:NodeListOf<Element> = document.querySelectorAll("#enlace");

// Devuelve la primera etiqueta con el id coincidente.
let a:HTMLElement = document.getElementById("enlace");

// Devuelve una coleccion HTML coincidentes.
let a:HTMLCollectionOf<Element> = document.getElementsByTagName("a");

// Devuelve una coleccion HTML coincidentes con la clase.
let a:HTMLCollectionOf<Element> = document.getElementsByClassName("parrafo");

// Devuelve una lista de elementos coincidentes con el nombre.
let a:NodeListOf<Element> = document.getElementsByName("nombreDeLaEtiqueta");


/**
 * Tanto la lista de elementos (nodeList) como la coleccion HTML (HTMLcollection) 
 * (no son arrays), por lo que no se les pueden aplicar metodos de arrays como 
 * (valueOf, push, pop o join), pero permiten saber su longitud por medio de la 
 * propiedad (length) y se puede acceder a cada uno de los elementos por medio 
 * de su indice, como si fueran un array, mas no son un array. 
 */