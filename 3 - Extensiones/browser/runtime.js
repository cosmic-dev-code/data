/* ##########=================########## */
/* ######===--- Informacion ---===###### */
/* ##########=================########## */

/* Proporciona funciones para interactuar con la extensión y su entorno de ejecución. 
Algunas de las cosas que puedes hacer con este objeto son: 
	--- Obtener información sobre la extensión, como su nombre, versión y ID.
	--- Obtener información sobre el entorno de ejecución, como el tipo de navegador y el sistema operativo.
	--- Enviar mensajes entre los diferentes componentes de la extensión, como el contenido de la página web, 
		el fondo y la interfaz de usuario.
	--- Administrar las actualizaciones de la extensión.
	--- Agregar y eliminar permisos necesarios para el funcionamiento de la extensión.
	--- Administrar el almacenamiento local y sincronizado de la extensión. */

/* ##########===================================########## */
/* ######===--- Informacion de la (extension) ---===###### */
/* ##########===================================########## */

// Obtiene informacion la informacion del archivo (manifest.json) de la extension.
browser.runtime.getManifest().name;
browser.runtime.getManifest().version;

// Devuelve el (id) unico de la extension actual asignado por (Chrome).
browser.runtime.id; // "ibmbjagahhehiblabfjfpmgcjbalckio"

// Refresca la extension.
browser.runtime.reload();

// -------------------------------------- //
// ------ Permisos de la extension ------ //
// -------------------------------------- //

// Pedir un permiso.
browser.permissions.request({ permissions: ["tabs"] }).then(result => {
	// Representa si el permiso fue conseguido o denegado.
	result; // boolean
});

// Remover un permiso.
browser.permissions.remove({ permissions: ["tabs"] }).then(result => {
    // Representa si el permiso pudo removerse.
    result; // boolean
});

// Comprobar si se tiene un permiso.
browser.permissions.contains({ permissions: ["tabs"] }).then(result => {
	// Representa si se tiene el permiso.
    result; // boolean
});


/* ##########===============================########## */
/* ######===--- Intercambio de (mensajes) ---===###### */
/* ##########===============================########## */

// Enviando un mensaje desde el contenido de la página web al fondo.
browser.runtime.sendMessage({
	saludo: "Hola mundo"
});

// Escuchando los mensajes en el fondo.
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
	message.saludo; // "Hola mundo"
});

/* ##########=============########## */
/* ######===--- Eventos ---===###### */
/* ##########=============########## */

/**
 * Este evento se activa cuando se instala o actualiza la extensión.
 */
browser.runtime.onInstalled.addListener(details => {
	// Estado de la extension.
	details.reason;
});