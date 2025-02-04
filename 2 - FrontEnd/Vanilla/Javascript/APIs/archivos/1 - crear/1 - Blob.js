"use strict";

/* ##########===================########## */
/* ######===--- ¿Qué es Blob? ---===###### */
/* ##########===================########## */

/* Blob, que representa un conjunto de datos binarios.
Este objeto se usa comúnmente para manejar datos de archivos, como: 
		--- (Imágenes). 
		--- (Videos). 
		--- (Cualquier tipo de datos binarios en bruto).
*/

/**
 * NOTA: Util cuando quieres crear un (archivo) desde el navegador con tus datos.
 */

/* ##########================########## */
/* ######===--- Crear Blob ---===###### */
/* ##########================########## */

// ----------------------------- //
// ------ Generar archivo ------ //
// ----------------------------- //

/* El constructor recibe por parametros: 
	--- Un arreglo con la informacion a convertir.
	--- El tipo de archivo al que se convierte la informacion. */
let blob = new Blob(
	[ "Hola mundo" ], 
	{ type: "text/plain" }
);

// ------------------------- //
// ------ Propiedades ------ //
// ------------------------- //

// Tipo de archivo, ("text/plain")
blob.type;
// Peso del archivo, (number).
blob.size;

// -------------------------- //
// ------ Converciones ------ //
// -------------------------- //

/**
 * Convertir informacion del archivo a (texto).
 */
blob.text().then(plainText => {

	// Texto plano.
	plainText // string

}).catch(error => {
	console.error("Error: ", error);
});

// -------------------------- //
// ------ Generar link ------ //
// -------------------------- //

/**
 * Crea una URL para (visitar) o (mostrar) el archivo en un element HTML o ventana.
 */
const url = URL.createObjectURL(blob);

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

/**
 * Enlace para permitir la descarga.
 */
function descarga(downloadURL, fileName)
{
	const link = document.createElement("a");
		  link.style.display = "none";

	// Link del archivo a descargar.
	link.href = downloadURL;
	// Nombre del archivo a descargar.
	link.download = fileName;

	// Agregar, click y remover.
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

// ------------------------- //
// ------ Texto plano ------ //
// ------------------------- //

function archivoTextoPlano(){
	let datos = "Este es el contenido de mi archivo de texto plano";

	const blob = new Blob(new Array(datos), {type: "text/plain"}), 
		  url = URL.createObjectURL(blob);

	descarga(url, "plano.txt");
}

// ------------------ //
// ------ HTML ------ //
// ------------------ //

function archivoHTML(){
	let datos = (`
		<section>
			<article>
				<h3>Titulo</h3>
			</article>
		</section>
	`);

	const blob = new Blob(new Array(datos), {type: "text/html"}), 
		  url = URL.createObjectURL(blob);

	descarga(url, "document.html");
}

// ----------------- //
// ------ XML ------ //
// ----------------- //

function archivoXML(){
	let datos = (`
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
	`);

	const blob = new Blob(new Array(datos), {type: "text/xml"}), 
		  url = URL.createObjectURL(blob);

	descarga(url, "document.xml");
}

// -------------------- //
// ------ Imagen ------ //
// -------------------- //

function imagen(){
	let datos = /* Datos binarios de la imagen. */

	const blob = new Blob(new Array(datos), {type: "image/png"}), 
		  url = URL.createObjectURL(blob);

	descarga(url, "imagen.png");
}

/**
 * NOTA: Dado que una imagen son datos binarios, necesariamente debes extrar con 
 * un (Canvas) o (peticion), no puedes crearla de forma manual.
 */

// ----------------- //
// ------ PDF ------ //
// ----------------- //

function archivoPDF(){
	let datos = atob("Texto encriptado");

	const blob = new Blob(new Array(datos), {type: "application/pdf"}), 
		  url = URL.createObjectURL(blob);

	descarga(url, "document.pdf");
}