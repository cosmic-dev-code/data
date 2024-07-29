"use strict";

/* ##########============================########## */
/* ######===--- Comprobar el navegador ---===###### */
/* ##########============================########## */

// Comprobar en el navegador.
if(window.DOMParser){
	// Crear objeto.
	const dom = new DOMParser();

	// Leer string.
	let documentoXML = dom.parseFromString(texto, "text/xml");	

}else{
	// Crear objeto con (ActiveXObject).
	const documentoXML = new ActiveXObject('Microsoft.XMLDOM');
	
	// Leer string.
	documentoXML.async = false;
	documentoXML.loadXML(texto);
}

/* ##########=========================########## */
/* ######===--- De (string) a (DOM) ---===###### */
/* ##########=========================########## */

// --------------------------- //
// ------ Documento XML ------ //
// --------------------------- //

// Cadena XML.
let texto = `
	<books>
		<book>
			<title>El buen programador</title>
			<autor>Brandon Anthony</autor>
			<price>$30.00</price>
		</book>
		<book id="idMiLibro">
			<title>Css</title>
			<autor>Anthony</autor>
			<price>$29.99</price>
		</book>
		<book>
			<title>Manual PHP</title>
			<autor>Olivares Amador</autor>
			<price>$49.99</price>
		</book>
	</books>
`;

const dom = new DOMParser();

let documentoXML = dom.parseFromString(texto, "text/xml");

// Se puede manipular el DOM del archivo.
documentoXML.getElementsByTagName('book');
documentoXML.getElementById('idMiLibro');

// ---------------------------- //
// ------ Documento HTML ------ //
// ---------------------------- //

// Cadena HTML.
let texto = (`
	<div>
		<b><i>Hola</i></b>
	</div>
`);

const dom = new DOMParser();

let documentHTML = dom.parseFromString(texto, "text/html");

console.log(documentHTML);
/* #document

	<html>
		<head></head>
		<body>
			<div>
				<b>
					<i>Hola</i>
				</b>
			</div>
		</body>
	</html>
*/