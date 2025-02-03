/* ##########==============================########## */
/* ######===--- Eventos del (FileReader) ---===###### */
/* ##########==============================########## */

// Eventos del objeto instanciado de la clase (FileReader).

/* Etiqueta principal:

	--- Seleccionar multiples archivos.
	<input type="file" multiple="">

	--- Seleccionar un archivo.
	<input type="file"> */

const input = document.getElementById('idNewFile');

/**
 * Cuando el usuario sube un archivo.
 */
input.onchange = event => {
	// ...
}

/* ##########================########## */
/* ######===--- Input File ---===###### */
/* ##########================########## */

input.addEventListener("change", event => {

	/**
	 * Podemos obtener (uno) o (mas) archivos.
	 */
	input.files; 		  // File[]
	event.target.files;   // File[]

});

/* ##########=================########## */
/* ######===--- File Reader ---===###### */
/* ##########=================########## */

// (FileReader) puede cargar archivos binarios del (Input File).
const reader = new FileReader();


// Devuelve un objeto de (error) si ocurre alguno.
reader.error; // DOMError | null

/**
 * Eventos del (FileReader).
 */

reader.onabort = event => {
	// Cada vez que se (interrumpe) la operación de lectura.
};

reader.onerror = event => {
	// Cada vez que la operación de lectura (encuentra un error).
};

reader.onprogress = event => {
	// El archivo se encuentra (leyendose).
};

reader.onload = event => {
	// El archivo se ha (leido).
};

/* ##########=============================########## */
/* ######===--- Leer archivos de texto. ---===###### */
/* ##########=============================########## */

"use strict";

const input = document.getElementById('idNewFile'), 
	  reader = new FileReader();

input.addEventListener("change", event => {
	for(let file of input.files){

		// Para procesar archivos de texto.
		reader.readAsText(file);

		// Al cargar...
		reader.addEventListener("load", event => {

			// Contiene la informacion leida, (string).
			event.currentTarget.result
		});
	}
});

/* ##########==============================########## */
/* ######===--- Leer archivos de imagen. ---===###### */
/* ##########==============================########## */

input.addEventListener("change", event => {
	// Recorremos los archivos extraidos.
	for(let file of input.files){

		// Extraemos la direccion de la imagen.
		reader.readAsDataURL(file); 

		// Al cargar...
		reader.addEventListener("load", event => {

			// Contiene los archivos (binarios).
			event.currentTarget.result; // binarios

			// Convierte a (Blob).
			const blob = new Blob(
				[event.currentTarget.result], 
				{ type: 'image/png' }
			);

			// Convierte a URL.
			const url = URL.createObjectURL(blob), 
			// Otra forma seria directamente el (File).
				  urlF = URL.createObjectURL(file);
		});
	}
});

/**
 * NOTA: Los datos (binarios) pueden utilizarse directamente en el (src) de una imagen, 
 * pero no para una (URL valida), si quieres utilizar el link para otra cosa.
 * 
 * Para eso mejor convierte a una URL.
 */

/* ##########============================########## */
/* ######===--- Leer archivos de video ---===###### */
/* ##########============================########## */

input.addEventListener("change", event => {
	for(let file of input.files){

		// Ideal para leer videos.
		reader.readAsArrayBuffer(file);

		reader.addEventListener("progress", event => {
			/* Creamos una variable la cual contiene el valor de: 
				--- (e.loaded): La carga del video medida en 'bytes'.
				--- (file.size): La dimension completa en 'bytes' del archivo.
				--- (* 100): Convertir de (bytes) a porcentaje (%).
			*/
			let carga = Math.round(e.loaded / file.size * 100);

			// Mostramos porcentaje de carga.
			document.getElementById('span-text').textContent = (carga+"%"); // Texto.
			document.getElementById('div-progress').style.width = `${carga}%`; // Ancho.
		});

		reader.addEventListener("load", event => {

			// Contiene los archivos (binarios).
			event.currentTarget.result; // binarios

			// Convierte a (Blob).
			const blob = new Blob(
				// (Uint8Array) envuelve en un formato adecuado.
				[new Uint8Array(event.currentTarget.result)], 
				{type: "video/mp4"}
			);

			// Convierte a URL.
			const url = URL.createObjectURL(blob), 
			// Otra forma seria directamente el (File).
				  urlF = URL.createObjectURL(file);
		});
	}
});