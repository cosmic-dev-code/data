
/* ##########====================================########## */
/* ######===--- Eventos de la zona de arrastre ---===###### */
/* ##########====================================########## */

// La zona puede ser cualquier elemento.
const zona = document.getElementsByTagName('div')[0];

zona.addEventListener("dragenter", () => {
	// Verifica que el elemento entre a la zona donde se puede colocar.
});

zona.addEventListener("dragover", () => {
	// Verifica que el elemento se mueva dentro se la zona donde se puede colocar.
});

zona.addEventListener("drop", () => {
	// Verifica cuando soltamos el elemento dentro de la zona donde se puede colocar.
});

zona.addEventListener("dragleave", () => {
	// Verifica que el elemento haya salido de la zona donde se puede colocar.
});

/* ##########=============================================########## */
/* ######===--- Eventos del item que se desea arrastrar ---===###### */
/* ##########=============================================########## */

const item = document.querySelectorAll('div')[0];

item.addEventListener("dragstart", () => {
	/* Este evento escucha cuando el elemento se toma con el mouse. */
});

item.addEventListener("drag", () => {
	/* Este evento escucha cuando estamos arrastrando el elemento y lo 
	mantenemos presionado. */
});

item.addEventListener("draend", () => {
	/* Este evento escucha cuando soltamos el elemento. */
});

/* ##########================================########## */
/* ######===--- Mover un elemento de lugar ---===###### */
/* ##########================================########## */

/* La transferencia de datos se establece por (dataTransfer), el (item) guarda su 'id', 
en la (dataTransfer), de esa manera lo lee la zona y lo extrae. */

const zona = document.getElementById('idDivZona'),
	item = document.getElementById('idImg');

/**
 * La zona
 */
zona.addEventListener("drop", evento => {
	// Prevenimos el comportamiento por defecto.
	evento.preventDefault();

	// Extraemos la informacion guardada en la variable (datosDeTransferencia).
	let datos = evento.dataTransfer.getData("datosDeTransferencia");

	// Acceder al elemento donde se origino el evento.
	evento.target.appendChild(document.getElementById(datos));
});

zona.addEventListener("dragover", evento => {
	// Preveir para evitar que el navegador abra una nueva pestaña.
	evento.preventDefault();
});

/**
 * El item
 */
item.addEventListener("dragstart", evento => {
	// Establecer la transferencia de datos: ["datosDeTransferencia" => id].
	evento.dataTransfer.setData("datosDeTransferencia", evento.target.id);
});

// Habilitar que el elemento se pueda mover.
item.setAttribute("draggable", true);

/* ##########=============================================########## */
/* ######===--- Mover un elemento de lugar y regresarlo ---===###### */
/* ##########=============================================########## */

const zona0 = document.getElementById('idZona_0'),
	  zona1 = document.querySelector('#idZona_1'),
	  item = document.getElementById('idElemento');

// --------------------- //
// ------ Forma 0 ------ //
// --------------------- //

/**
 * Las (zonas)
 */
zona0.addEventListener("drop", evento => {
	evento.preventDefault();

	// Obtener los datos.
	let datos = evento.dataTransfer.getData("datosDeTransferencia");
	evento.target.appendChild(document.getElementById(datos));
});

zona1.addEventListener("drop", evento => {
	evento.preventDefault();

	// Obtener los datos.
	let datos = evento.dataTransfer.getData("datosDeTransferencia");
	evento.target.appendChild(document.getElementById(datos));
});

zona0.addEventListener("dragover", evento => evento.preventDefault());
zona1.addEventListener("dragover", evento => evento.preventDefault());

/**
 * El elemento a mover.
 */
item.addEventListener("dragstart", evento => {
	evento.dataTransfer.setData("datosDeTransferencia", evento.target.id);
});

item.setAttribute("draggable", true);

// ---------------------------------- //
// ------ Forma mas optimizada ------ //
// ---------------------------------- //

function obtenerDatos(evento){
	evento.preventDefault();

	let datos = evento.dataTransfer.getData("datos");
	evento.target.appendChild(document.getElementById(datos));
}

/**
 * Las zonas.
 */
zona0.addEventListener("drop", evento => obtenerDatos(evento));
zona1.addEventListener("drop", evento => obtenerDatos(evento));

zona0.addEventListener("dragover", evento => evento.preventDefault());
zona1.addEventListener("dragover", evento => evento.preventDefault());

/**
 * El elemento a mover.
 */
item.addEventListener("dragstart", evento => evento.dataTransfer.setData("datos", evento.target.id));

item.setAttribute("draggable", true);

/* ##########===========================================########## */
/* ######===--- Tomar un elemento fuera del navegador ---===###### */
/* ##########===========================================########## */

// --------------------- //
// ------ Forma 0 ------ //
// --------------------- //

const zona = document.getElementById('div');

zona.addEventListener("drop", event => {
	event.preventDefault();

	// Obtenemos los archivos soltados fuera del navegador.
	let file = event.dataTransfer.files[0];

	const img = document.createElement("IMG");
	img.src = file.name;
	img.width = "100";
	img.height = "100";

	zona.appendChild(img);
});

zona.addEventListener("dragover", event => event.preventDefault());

// --------------------- //
// ------ Forma 1 ------ //
// --------------------- //

const zona = document.querySelector('div');

zona.ondrop = evento => {
	evento.preventDefault();
	
	// Crear imagen y dar al elemento (target).
	let img = `<img src="${evento.dataTransfer.files[0].name}" width="100" height="100">`;
	evento.target.innerHTML = img;
};

zona.ondragover = evento => evento.preventDefault();