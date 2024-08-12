
/* ##########============================########## */
/* ######===--- Validaciones al soltar ---===###### */
/* ##########============================########## */

const zona = document.getElementById('div2');

zona.addEventListener("drop", event => {
	event.preventDefault();

	// Extraer tipo de archivo.
	let typeFile = event.dataTransfer.files[0].type;

	// Tipos de archivos (aceptados).
	let imagesTypes = /^[image/png]+[image/jpeg]+$/,
		textTypes = /^[text/html]+$/;

	/**
	 * Si el tipo es de imagen.
	 */
	if(imagesTypes.test(typeFile)){
		// (file) contiene el archivo de fuera.
		let file = event.dataTransfer.files[0];

		// Realizamos el (FileReader).
		let reader = new FileReader();
		reader.readAsDataURL(file);

		reader.addEventListener("load", evento => {
			let img = `<img src="${URL.createObjectURL(file)}" width="300" height="300">`;
			zona.innerHTML = img;
		});

	/**
	 * Si el tipo es texto.
	 */
	}else if(textTypes.test(typeFile)){

		let reader = new FileReader();
		reader.readAsText(event.dataTransfer.files[0]);

		reader.onload = event => {
			let p = `<p>${event.currentTarget.result}</p>`;
			zona.textContent = p;
		};
	}
});

zona.addEventListener("dragover", event => event.preventDefault());

/* ##########====================================########## */
/* ######===--- Arrastrar objetos al navegador ---===###### */
/* ##########====================================########## */

// Extraemos el elemento que servira como contenedor del texto, imagen o video.
const caja = document.getElementById('idCaja');

/**
 * NOTA: (e.srcElement) es el elemento.
 */

/**
 * Cuando el cursor este encima del elemento.
 */
caja.addEventListener("dragover", e => {
	e.preventDefault();
	changeStyle(e.srcElement, "#000");
});

/**
 * Cuando el cursor se vaya de encima del elemento.
 */
caja.addEventListener("dragleave", e => {
	e.preventDefault();
	changeStyle(e.srcElement, "#ccc");
});

/**
 * Cuando el cursor suelte algun objeto.
 */
caja.addEventListener("drop", e => {
	e.preventDefault();
	changeStyle(e.srcElement, "#ccc");

	// Mandamos por parametro el archivo que hemos cargado, naturalmente el primero [0].
	cargarArchivo(e.dataTransfer.files[0]);
});

// Funcion la cual sirve solo para cambiar el color del elemento cuando el cursor entre y se vaya.
const changeStyle = (object, color) => {
	object.style.color = color;
	object.style.border = "4px dashed ${color}";
}

/**
 * Cargar archivo de video.
 */
const cargarArchivo = argument => {

	// Objeto 'reader'.
	const reader = new FileReader();
	
	// Para cargar un video.
	reader.readAsArrayBuffer(argument);

	// Cargando.
	reader.addEventListener("progress", e => {

		let carga = Math.round(e.loaded / argument.size * 100);
		// Le damos la carga concatenada con el texto '%' como contenido de texto al elemento 'idTextProgress'.
		const textProgress = document.getElementById('idTextProgress').textContent = (carga+"%");
		const progress = document.getElementById('idProgress').style.width = `${carga}%`;
	});

	// Completado.
	reader.addEventListener("load", e => {
		let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: "video/mp4"});
		let url = URL.createObjectURL(video);

		let elementVideo = document.createElement("VIDEO");

		elementVideo.setAttribute("src", url);
		elementVideo.setAttribute("class", "wd-600 height-300");
		elementVideo.setAttribute("controls", "");
		elementVideo.setAttribute("preload", "auto");

		document.getElementById('idCaja').appendChild(elementVideo);

		// Le damos 'play' al video.
		elementVideo.play();
	});
}