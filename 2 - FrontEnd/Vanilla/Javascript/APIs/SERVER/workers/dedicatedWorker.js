
/* ##########=================########## */
/* ######===--- El (Worker) ---===###### */
/* ##########=================########## */

/* ADVERTENCIA: --- NECESITA UN SERVIDOR --- */

/* El (Worker) es una clase que nos permite trabajar 
eventos y codigo en segundo plano, cuando el 
escuchador de eventos se activa ya no 
se puede hacer nada hasta que el 
evento haya terminado, 
ejemeplo: 

	--- Si se esta cargando una fotografia, video o 
	algun otro archivo pesado y el usuario quiere 
	ejecutar algun otro evento, entonces no 
	se podra porque ya hay un evento 
	ejecutandose.

	--- Por lo que el web (Worker) nos permite 
	ejecutar otro evento mas en segundo 
	plano.

/* ##########========================================########## */
/* ######===--- Crear un archivo auxiliar (worker) ---===###### */
/* ##########========================================########## */

///////// --- --- --- Archivo (miArchivo.js) --- --- --- /////////

/* El constructor recibe por parametro el archivo que se 
ejecutara en segundo plano. */
let worker = new Worker("segundoPlano.js");

document.getElementById('idBtnSubirVideo').onclick = () => {
	// Evento que se estara ejecutando...
};

document.getElementById('idSubirFotografia').onclick = () => {
	/* Este metodo permite enviarle una data al (Worker) para 
	ejecutar algun otro evento. */
	worker.postMessage(true);
};

///////// --- --- --- Archivo (segundoPlano.js) en segundo plano --- --- --- /////////

addEventListener("message", e => {
	// Si la data que recibimos es verdadera, entonces...
	if(e.data === true){
		subirFotografia(); // Ejecutamos el evento.
	}else{
		postMessage("Hubo un error al subir la fotografia.");
	}
});

function subirFotografia(){
	// Codigo para subir fotografia.
}

/* ##########===========================================########## */
/* ######===--- Intercambio de mensajes entre la data ---===###### */
/* ##########===========================================########## */

///////// --- --- --- Archivo (miArchivo.js) --- --- --- /////////

/* La propiedad (data) conteiene los mensajes que se envian entre los 
archivos (Worker), normalmente un archivo (Worker) tiene limitaciones, 
por lo que no puede ser tratado como un archivo Javascript normal.

En los archivos (Worker) no se pueden crear objetos, por lo que 
los mensajes, la (data), es muy util para intercambiar informacion. */

let worker = new Worker("segundoPlano.js");

document.getElementById('idBtnData').addEventListener("click", message);

function message(){
	// Mensaje que enviamos al (Worker).
	worker.postMessage("Este es un mensaje cadena de texto corta.");

	/* Evento (message) para recibir un mensaje. */
	worker.addEventListener("message", e => {
		// Mensaje que obtenemos del (Worker).
		console.log(e.data);
		/* Cerramos el (Worker) para evitar que se vuelva a 
		ejecutar por accidente. */
		worker.terminate();
	});
}

///////// --- --- --- Archivo (segundoPlano.js) en segundo plano --- --- --- /////////

/* Evento (message) para recibir un mensaje. */
addEventListener("message", e => {
	// Recibimos el mensaje desde el archivo (HTML).
	let mensajeRecibido = String(e.data);

	/* Depende del resultado de la condicion reenviamos un mensaje 
	al archivo (HTML). */
	if(mensajeRecibido.indexOf("mensaje") !== -1){
		postMessage("El mensaje conteiene la palabra: (mensaje).");
	}else{
		postMessage("El mensaje no contiene la palabra.");
	}
});

/* ##########====================================########## */
/* ######===--- Mismo protocolo, host y puerto ---===###### */
/* ##########====================================########## */

/* Los archivos (Worker) se mandan a llamar en el metodo 
constructor con la misma direccion del protocolo, 
host y puerto, de lo contrario el 
(DOM) dara error, es un nuevo 
metodo de seguridad.

Debe de ser el mismo (protocolo, host y puerto) que el 
archivo desde donde se esta llamando. */
let worker = new Worker("http://localhost:80/myCodigo/Worker/prueba.js");