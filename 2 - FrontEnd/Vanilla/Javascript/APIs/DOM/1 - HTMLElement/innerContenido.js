/* ##########===============########## */
/* ######===--- Contenido ---===###### */
/* ##########===============########## */

const element = document.createElement("div");

/**
 * Manipulo solo el texto.
 */
element.textContent;
element.textContent = "Hola mundo";

/**
 * El texto pero recurre al estilo.
 */
element.innerText;
element.outerText;

/**
 * Muestra la etiqueta completa.
 */
element.outerHTML;

/**
 * Manipulacion del codigo HTML de la etiqueta.
 */
element.innerHTML;
element.innerHTML = (`
	<section>
		<p>Hola mundo</p>
	</section>
`);