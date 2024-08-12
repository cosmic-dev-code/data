/* ##########=====================########## */
/* ######===--- Compartir (URL) ---===###### */
/* ##########=====================########## */

navigator.share({
	// Título del contenido compartido.
	title: 'Brandon Developer', 
	// Texto del contenido compartido.
	text: 'Ven y mira mi sitio web', 
	// URL a compartir.
	url: 'https://www.ejemplo.com'
})
.then(() => {
	// Contenido compartido con éxito.
})
.catch((error) => {
	// Error al compartir.
});

/* ##########==========================########## */
/* ######===--- Compartir (archivos) ---===###### */
/* ##########==========================########## */

// Tu archivo a partir de un Blob a partir de datos.
var file = new File(new Array(imageBlob), "archivo.png", {type: "image/png"});

navigator.share({
	title: 'Te comparto esta imagen', 
	// (files) recibe un arreglo de archivos (File).
	files: [archivo]
});