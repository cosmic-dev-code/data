"use strict";

/* ##########===========================########## */
/* ######===--- El atributo (dowload) ---===###### */
/* ##########===========================########## */

/* El atributo (dowload) en un enlace permite descargar el archivo 
en lugar de reedireccionar al usuario a dicho archivo. */

const a = document.createElement('A');

// URL del archivo a descargar.
a.setAttribute("href", "archivos/descargas/imagen.png");

// Nombre del archivo al descargar.
a.setAttribute("download", "Descarga");

document.getElementById('idDiv').appendChild(a);

// ----------------------------------- //
// ------ Otra forma de hacerlo ------ //
// ----------------------------------- //

let a = `
	<a href="archivos/descargas/imagen.png" download="archivos/descargas/imagen.png">
		<span>Descargar imagen</span>
	</a>
`;

document.getElementById('idDiv').innerHTML = a;