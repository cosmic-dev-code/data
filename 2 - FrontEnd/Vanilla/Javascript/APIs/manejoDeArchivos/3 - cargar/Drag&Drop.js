
/* ##########=============########## */
/* ######===--- Eventos ---===###### */
/* ##########=============########## */

// ------------------------------ //
// ------ Zona de arrastre ------ //
// ------------------------------ //

// La zona puede ser cualquier elemento.
const zona = document.getElementsByTagName('div')[0];

zona.addEventListener("dragenter", event => {
	// El elemento (entra) a la zona.
});

zona.addEventListener("dragover", event => {
	// El elemento se (mueve dentro) de la zona.
});

zona.addEventListener("drop", event => {
	// El elemento es (soltado dentro) de la zona.
});

zona.addEventListener("dragleave", event => {
	// El elemento ha (salido) de la zona.
});

// Acceder al elemento donde se origino el evento.
event.target;

// Para versiones antiguas del navegador.
event.srcElement;

// ------------------------------ //
// ------ Item a arrastrar ------ //
// ------------------------------ //

item.addEventListener("dragstart", event => {
	// El item se (toma) con el mouse.
});

item.addEventListener("drag", event => {
	// El item se (arrastra) manteniendo presionado.
});

item.addEventListener("draend", event => {
	// El item es (soltado) manteniendo presionado.
});

/**
 * NOTA: Habilita que el elemento se pueda mover.
 */

// Damos el atributo al elemento para que este se pueda mover.
item.setAttribute("draggable", true);

/* ##########================================########## */
/* ######===--- Mover un elemento de lugar ---===###### */
/* ##########================================########## */

/**
 * (DataTransfer), permite guardar datos planos para que el (item a arrastrar) y la (zona de arrastre) se comuniquen.
 */

// ------------------------------ //
// ------ Zona de arrastre ------ //
// ------------------------------ //

const zona = document.getElementById('idDivZona');

zona.addEventListener("drop", event => {
	// Prevenimos el comportamiento por defecto.
	event.preventDefault();

	// Extraemos el (id) del elemento guardado en la variable (item-id).
	let idGuardado = event.dataTransfer.getData("item-id");

	// Acceder al elemento donde se origino el evento.
	event.target.appendChild(
		// Colocamos el elmento, (item) que se guardo.
		document.getElementById(idGuardado)
	);
});

zona.addEventListener("dragover", evento => {
	// Preveir para evitar que el navegador abra una nueva pestaña.
	evento.preventDefault();
});

// ------------------------------ //
// ------ Item a arrastrar ------ //
// ------------------------------ //

const item = document.getElementById('idImg');

item.addEventListener("dragstart", event => {
	// Establecer la transferencia de datos: ["item-id" => id].
	event.dataTransfer.setData("item-id", event.target.id);
});

item.setAttribute("draggable", true);

/* ##########=============================================########## */
/* ######===--- Mover un elemento de lugar y regresarlo ---===###### */
/* ##########=============================================########## */

// ------------------------------- //
// ------ Zonas de arrastre ------ //
// ------------------------------- //

const zonaUno = document.getElementById('idZona_0'),
	  zonaDos = document.getElementById('idZona_1');

zonaUno.addEventListener("drop", evento => {
	evento.preventDefault();

	// Obtener los datos.
	evento.target.appendChild(
		document.getElementById(
			// Mover elemento (item).
			evento.dataTransfer.getData("item-id")
		)
	);
});

zonaDos.addEventListener("drop", evento => {
	evento.preventDefault();

	// Obtener los datos.
	evento.target.appendChild(
		document.getElementById(
			// Mover elemento (item).
			evento.dataTransfer.getData("item-id")
		)
	);
});

// Cancelar comportamientos por defecto.
zonaUno.addEventListener("dragover", evento => evento.preventDefault());
zonaDos.addEventListener("dragover", evento => evento.preventDefault());

// ------------------------------ //
// ------ Item a arrastrar ------ //
// ------------------------------ //

const item = document.getElementById('idImage');


item.addEventListener("dragstart", evento => {
	// Proporcionar (id) para las zonas.
	evento.dataTransfer.setData("item-id", evento.target.id);
});

item.setAttribute("draggable", true);

/* ##########=====================########## */
/* ######===--- Leer (archivos) ---===###### */
/* ##########=====================########## */

/**
 * Puedes crear una expresion regular para definir solo los formatos aceptados.
 */
let accepted = {
	image: /^[image/png]+[image/jpeg]+$/, 
	text: /^[text/html]+$/
};

zona.addEventListener("drop", event => {
	event.preventDefault();

	// Podemos obtener los (archivos) que son soltados en la (zona) por medio del (DataTransfer).
	event.dataTransfer.files; // File[]

	for(let file of event.dataTransfer.files){

		// Podemos acceder a los atributos del (File).
		file;

		// Puedes utilizar (FileReader) y de acuerdo al tipo de archivo leerlo.
		file.type;

		// Podemos crear una URL valida para visualizar el archivo.
		const url = URL.createObjectURL(file);

	}
});

zona.addEventListener("dragover", event => event.preventDefault());