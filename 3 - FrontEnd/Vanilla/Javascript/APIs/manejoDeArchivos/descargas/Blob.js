"use strict";

/* ##########===================########## */
/* ######===--- ¿Qué es Blob? ---===###### */
/* ##########===================########## */

/* El constructor (Blob) crea un fichero con datos inmutables, (que no cambian), estos pueden ser utilizados 
para crear una (URL) valida, a diferencia de (DOMParser) que solo crea un fichero totalmente 
sobreescribible y que no puede utilizarse para crear una (URL). */

/* Creas un enlace que puedes utilizar para (enviar), (visualizar), (descargar) datos o un recurso. */

/* ##########================########## */
/* ######===--- Crear Blob ---===###### */
/* ##########================########## */

// ----------------------------- //
// ------ Generar archivo ------ //
// ----------------------------- //

/* El constructor recibe por parametros: 
	--- Un arreglo con la informacion a convertir.
	--- El tipo de archivo al cual se convertira la informacion. */
let blob = new Blob(["Hola mundo"], {type: "text/plain"});

// Tipo de archivo.
blob.type;
// Peso del archivo.
blob.size;

// Convertir informacion del archivo a texto.
blob.text().then(plainText => {

	// Texto plano.

}).catch(error => {
	console.error("Error: ", error);
});

// ---------------------------- //
// ------ Generar enlace ------ //
// ---------------------------- //

/**
 * (blob) es el archivo como tal, pero ahora debemos crear un enlace hacia ese archivo.
 */

const blob = new Blob([
	// Colocas aqui los datos de una imagen.
	dataImage
], {type: "image/png"});

// Transforma el (blob) a (url).
let url = URL.createObjectURL(blob);

// Podemos hacer uso de ese enlace.
document.getElementById("idEnlace").href = url;
document.getElementsByTagName("img")[0].src = url;

/* ##########===========================########## */
/* ######===--- Crear Blob (obsoleto) ---===###### */
/* ##########===========================########## */

const blobBuilder = new BlobBuilder();

blobBuilder.append(`
	<section>
		<article>
			<h3>Titulo</h3>
		</article>
	</section>
`);

// Obtenemos el (blob).
let blob = blobBuilder.getBlob('text/html');

/* ##########=====================########## */
/* ######===--- Crear descargas ---===###### */
/* ##########=====================########## */

// Enlace para permitir la descarga.
const descarga = (downloadURL, fileName) => {
	const a = document.createElement("a");
	a.style.display = "none";

	a.href = downloadURL;
	a.download = fileName;

	document.body.appendChild(a); a.click(); document.body.removeChild(a);
};

// ------------------------- //
// ------ Texto plano ------ //
// ------------------------- //

function archivoTextoPlano(){
	let content = "Este es el contenido de mi archivo de texto plano";

	const blob = new Blob([content], {type: "text/plain"});

	var url = URL.createObjectURL(blob);

	descarga(url, "plano.txt");
}

// ------------------ //
// ------ HTML ------ //
// ------------------ //

function archivoHTML(){
	let arrayContent = new Array(`
		<section>
			<article>
				<h3>Titulo</h3>
			</article>
		</section>
	`);

	const blob = new Blob(arrayContent, {type: "text/html"});

	var url = URL.createObjectURL(blob);

	descarga(url, "document.html");
}

// ----------------- //
// ------ XML ------ //
// ----------------- //

function archivoXML(){
	let arrayContent = [`
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
	`];

	const blob = new Blob(arrayContent, {type: "text/xml"});

	var url = URL.createObjectURL(blob);

	descarga(url, "document.xml");
}

// -------------------- //
// ------ Imagen ------ //
// -------------------- //

function imagen(){
	let content = 'ÿØÿà\0JFIF\0\0\0\0\0\0ÿþ\0;CREATOR: gd-jpeg v1.0 (using IJG JPEG v62), ';
	content += 'quality = 90 ÿÛ\0C\0 %# , #&\')*)-0-(0%()(ÿÛ\0C ';
	content += '(((((((((((((((((((((((((((((((((((((((((((((((((((ÿÀ\0@ \0\"\0ÿÄ\0\0\0\0\0\0\0\0\0\0\0 ÿÄ\0µ\0\0\0}\0!1AQa\"q2‘¡';
	content += '#B±ÁRÑð$3br‚ %&\'()*456789:CDEFGHIJSTUVWXYZcdefghijstuvwxyzƒ„…†‡ˆ‰Š’“”•–—˜™š¢£¤¥¦§¨©ª²³´µ¶·¸¹ºÂÃÄÅÆÇÈÉÊÒÓÔÕÖ×ØÙÚá';
	content += 'âãäåæçèéêñòóôõö÷øùúÿÄ\0\0\0\0\0\0\0\0 ÿÄ\0µ\0\0w\0!1AQaq\"2B‘¡±Á etc.';

	const blob = new Blob([content], {type: "image/png"});

	var url = URL.createObjectURL(blob);

	descarga(url, "imagen.png");
}

// ----------------- //
// ------ PDF ------ //
// ----------------- //

function archivoPDF(){
	let content = atob("Texto encriptado");

	const blob = new Blob([content], {type: "application/pdf"});

	var url = URL.createObjectURL(blob);

	descarga(url, "document.pdf");
}