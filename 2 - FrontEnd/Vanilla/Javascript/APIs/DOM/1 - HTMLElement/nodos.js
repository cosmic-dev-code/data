/* ##########=========================########## */
/* ######===--- Propiedades propias ---===###### */
/* ##########=========================########## */

const element = document.createElement("div");

// Devuelve el nombre del nodo.
element.nodeName;

// Devuelve el nombre de la etiqueta.
element.tagName;

// Devuelve o establece el identificador del elemento.
element.id;

// Agrega un evento.
element.addEventListener("click", function(){});

// Elimina un evento.
element.removeEventListener("click");

// Remueve el elemento.
element.remove();

/* ##########====================########## */
/* ######===--- Elementos hijo ---===###### */
/* ##########====================########## */

//Es el primer hijo del elemento.
element.firstChild;

//El último hijo del elemento.
element.lastChild;

//El primer hijo elemento del elemento.
element.firstElementChild;

//El último hijo elemento del elemento.
element.lastElementChild;

// Devuelve el la cantidad de elementos 'hijo' que contiene.
element.childElementCount;

/* Devuelve una lista de nodos. */
element.childNodes;

// Devuelve el valor del nodo.
element.childNodes[0].nodeValue;

// Devuelve el nombre del nodo, (puede ser text, numeric, etc).
element.childNodes[0].nodeName;

/* Solo los elementos hijos, (etiquetas) del elemento. Se puede recorrer solo con un for in o for of.*/
element.children;

// Selectores para traer elementos hijos.
element.querySelector(".element");
element.querySelectorAll(".element > div");

//Reemplazamos el elemento hijo del elemento por el nuevo elemento.
element.replaceChild(pNuevo, pHijo);

//Remueve un elemento hijo del elemento.
element.removeChild(pNuevo);

//Comprueba si el elemento tiene nodos hijos y devuelve el valor 'true'.
element.hasChildNodes();

// Agrega un elemento antes del especificado.
element.insertBefore(newElement, beforeElement);

// Introduce un nuevo elemento al elemento.
element.appendChild(
	document.createTextNode("Hola mundo")
);

/* ##########================================########## */
/* ######===--- Elementos hermanos y padre ---===###### */
/* ##########================================########## */

//Devuelve el elemento padre.
element.parentNode;

//Devuelve el elemento padre que sea etiqueta HTML.
element.parentElement;

//Devuelve el nodo que hay después del elemento.
element.nextSibling;

//Devuelve el nodo que hay antes del elemento.
element.previusSibling;

//Devuelve el nodo de tipo HTML que hay después del elemento.
element.nextElementSibling

//Devuelve el nodo de tipo HTML que hay antes del elemento.
element.previusElementSibling;

//Devuelve el elemento padre más cercano que contenga la clase.
element.closest(".Clase");