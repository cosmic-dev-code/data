
/* ##########=============================================================########## */
/* ######===--- Eventos del objeto instanciado de la clase (FileReader) ---===###### */
/* ##########=============================================================########## */

/* Etiqueta principal:

	--- Seleccionar multiples archivos.
	<input type="file" multiple="">

	--- Seleccionar un archivo.
	<input type="file"> */

const newFile = document.getElementById('idNewFile');

newFile.addEventListener("change", event => {
	/* Seutiliza cuando el objeto tiene algun cambio, (como subir un 
	archivo). */
});

newFile.addEventListener("abort", event => {
	/* Este evento se activa cada vez que se interrumpe la operación de lectura. */
});

newFile.addEventListener("error", event => {
	/* Este evento se activa cada vez que la operación de lectura encuentra un error. */
});

newFile.addEventListener("progress", event => {
	/* Este evento se activa cuando el archivo esta leyendose. */
});

newFile.addEventListener("load", () => {
	/* Este evento se activa cada vez que la operación de lectura se ha completado satisfactoriamente. */
});

/* ##########=============================########## */
/* ######===--- Propiedades de archivos ---===###### */
/* ##########=============================########## */

newFile.addEventListener("change", event => {

	let file = event.target.files[0];
	
	file.type; // "image/jpeg".
	file.lastModifield; // 1648012243880.
	file.lastModifiedDate; // "Tue Mar 22 2022 22:10:43 GMT-0700".
		file.lastModifiedDate.getMilliseconds();
		file.lastModifiedDate.getSeconds();
		file.lastModifiedDate.getMinutes();
		file.lastModifiedDate.getHours();
		file.lastModifiedDate.getMilliseconds();
		file.lastModifiedDate.getDay();
		file.lastModifiedDate.getDate();
		file.lastModifiedDate.getMonth();
		file.lastModifiedDate.getFullYear();
	file.name; // imagen.jpeg
	// Ruta alternativa, (si el archivo se elegio desde dentro de una carpeta).
	file.webkitRelativePath;
	// Devuelve el peso del archivo en (KB).
	file.size;

});

/* ##########=============================########## */
/* ######===--- Leer archivos de texto. ---===###### */
/* ##########=============================########## */

"use strict";

const newFile = document.getElementById('idNewFile');

/* El evento 'change' funciona para cambiar una imagen. */
newFile.addEventListener("change", event => {
	// Guardamos cada uno de los archivos de texto en la variable (file).
	for(let file of newFile.files){

		/* Procesamos esos archivos con un objeto creado a base de una clase llamada 'FileReader'. */
		let reader = new FileReader();
		reader.readAsText(file); //Para procesar archivos de texto.

		// Al cargar...
		reader.addEventListener("load", event => {
			// Mostramos el resultado.
			console.log(event.currentTarget.result);
		});
	}
});

/* ##########==============================########## */
/* ######===--- Leer archivos de imagen. ---===###### */
/* ##########==============================########## */

// --------------------- //
// ------ Forma 0 ------ //
// --------------------- //

newFile.addEventListener("change", event => {
	// Recorremos los archivos extraidos.
	for(let file of newFile.files){

		let reader = new FileReader();
		reader.readAsDataURL(file); // Extraemos la direccion de la imagen.

		// Cuando el archivo cargue entonces...
		reader.addEventListener("load", event => {
			// Convertimos la direccion en una direccion 'url'.
			let url = URL.createObjectURL(file);
			// Creamos un elemento (imagen).
			let img = document.createElement("IMG");

			/* Atributos de la imgen. */
			img.setAttribute("src", url) 
			img.setAttribute("width", "300");
			img.height = "300";

			// Mostrar el elemento.
			document.write(`<div id="idDiv"></div>`);
			document.querySelector('#idDiv').appendChild(img);
		});
	}
});

// --------------------- //
// ------ Forma 1 ------ //
// --------------------- //

newFile.addEventListener("change", event => {
	// Extraemos cada uno de los datos.
	for(let file of newFile.files){

		let reader = new FileReader();
		// Convertimos el archivo en una direccion 'url'.
		reader.readAsDataURL(file);

		// Al cargar...
		reader.addEventListener("load", event => {
			// Ponemos el resultado dentro de una etiqueta (IMG).
			let newImg = `<img src="${event.currentTarget.result}" width="300" height="auto">`;

			// Mandamos a imprimir.
			document.write(newImg);
		});
	}
});

/* ##########============================########## */
/* ######===--- Leer archivos de video ---===###### */
/* ##########============================########## */

// --------------------- //
// ------ Forma 0 ------ //
// --------------------- //

newFile.addEventListener("change", event => {
	// Extraer los datos cargados.
	for(let file of newFile.files){

		// Creamos el objeto (FileReader).
		let reader = new FileReader();
		reader.readAsArrayBuffer(file);

		// Mientras el video se sube. (Se ejecura constantemente).
		reader.addEventListener("progress", event => {
			/* Creamos una variable la cual contiene el valor de: 
				--- (e.loaded), la carga del video medida en 'bytes'.
				--- (file.size), la dimension completa en 'bytes' del archivo que se paso por parametro, (el video).
				--- (* 100) convertir la carga de (bytes) a porcentaje (%).
				--- (la carga del video en 'bytes' por la dimension total del video en 'bytes' por 100 para medir la 
					carga en porcentaje). */
			let carga = Math.round(e.loaded / file.size * 100);

			// Le damos la carga concatenada con el texto '%' como contenido de texto al elemento 'idDivBarraProgreso'.
			const textProgress = document.getElementById('idDivBarraProgreso').textContent = (carga+"%");

			/* Modificamos el ancho del elemento poniendo los `template strings` y dentro de ellos pasandole la carga, 
			ademas ponemos la medida '%' para que el ancho se vaya modificando hasta el 100%, de esta manera hacemos una 
			barra de carga. */
			const progress = document.getElementById('idProgress').style.width = `${carga}%`;
		});

		// Al cargar...
		reader.addEventListener("load", event => {
			/* Creamos un objeto de tipo 'array especial' para el video:
				--- por primer parametro le pasamos el resultado que se cargo, (el video).
				--- Por segundo parametro le pasamos un objeto el cual tendra la extension del formato 
					perteneciente al video. */
			let videoAjustes = new Blob([new Uint8Array(event.currentTarget.result), {type: "video/mp4"}]);

			/* El objeto (videoAjustes) contiene el (event.currentTarget.result) el cual se encuentra 
			alamacenado y es convertido a una direccion 'url'. */
			let url = URL.createObjectURL(videoAjustes);

			// Creamos el elemento (video).
			const video = document.createElement('VIDEO');

			// Le damos al elemento (video) sus siguientes atributos:
			video.setAttribute("src", url);
			video.setAttribute("preload", "auto");
			video.setAttribute("controls", ""); // Habilitamos los controles.
			elementVideo.setAttribute("class", "mi-clase");

			// Mostramos el objeto en patalla.
			document.write("<div id=\"idVideo\"></div>");
			document.querySelector('#idVideo').appendChild(video);

			video.play(); // Damos 'play' al video.
		});
	}
});

// --------------------- //
// ------ Forma 1 ------ //
// --------------------- //

newFile.addEventListener("change", event => {
	// Extraer los datos cargados.
	for(let file of newFile.files){

		let reader = new FileReader();
		reader.readAsArrayBuffer(file);

		// Mientras carga...
		reader.addEventListener("progress", event => {
			// Obtener el progreso en porcentajes.
			let carga = Math.round(e.loaded / file.size * 100);

			// Modificar barrita de porcentaje, (puede ser solo un 'div').
			const textProgress = document.getElementById('idDivBarraProgreso').textContent = (carga+"%");
			const progress = document.getElementById('idProgress').style.width = `${carga}%`;
		});

		// Cuando el video haya cargado entonces...
		reader.addEventListener("load", event => {

			// Obtenemos los ajustes del video y la 'url' a raiz de los ajustes.
			let videoAjustes = new Blob([new Uint8Array(event.currentTarget.result), {type: "video/mp4"}]);
			let url = URL.createObjectURL(videoAjustes);

			// Creamos una etiqueta (video) con sus atributos y su (src).
			const video = `<video id="idVideo" preload="auto" controls=""><source src="${url}"></video>`;

			// Mostramos en pantalla el video con la direccion 'url'.
			document.write(video);

			// Damos 'play' al video.
			document.getElementById('idVideo').play();
		});
	}
});