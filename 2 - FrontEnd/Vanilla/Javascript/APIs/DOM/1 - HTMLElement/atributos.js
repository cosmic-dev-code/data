/* ##########===============########## */
/* ######===--- Atributos ---===###### */
/* ##########===============########## */

const element = document.createElement("div");

//Modoficar o agregar un atributo al elemento.
element.setAttribute("href", "#");

//Obtener el valor de un atributo del elemento.
let valorDelAtrubuto = element.getAttribute("href");

//Remover el atributo de un elemento.
element.removeAttribute("href");

//El elemento se puede editar cono si se tratara de una caja de texto.
element.setAttribute("contenteditable", "true");

//El atributo hidden oculta el elemento.
element.setAttribute("hidden", "");

//El tab index indica cual será el orden cuando el usuario realice un tab.
element.setAttribute("tabindex", "0");
element.setAtttibute("tabindex", "2");
element.setAttribute("tabindex", "3");