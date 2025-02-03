/* ##########====================########## */
/* ######===--- Notificaciones ---===###### */
/* ##########====================########## */

// NOTA: Es necesario especificar el permiso en el (manifest.json).
{
	"permissions": [
		"notifications"
	]
}

// Muestra una notificacion al usuario.
browser.notifications.create({
	// Tipo de notificacion, puede ser: ("basic", "image", "list" o "progress").
	type: "basic", 
	// El título de la notificación.
	title: "Mi extensión", 
	// El mensaje de la notificación.
	message: "Hola, esto es una notificación de mi extensión", 
	// La URL del icono que se mostrará en la notificación.
	iconUrl: "images/icon48.png", 
	// Un arreglo con los botones de la notificacion.
	buttons: []
})
	.then(id => {
		// Recibe el identificador unico de la notificacion creada.
		id;
	})
	.catch(error => {
		// ...
	});

/* ##########==================================########## */
/* ######===--- Notificaciones con (botones) ---===###### */
/* ##########==================================########## */

// ---------------------------------------- //
// ------ Notificacion con (botones) ------ //
// ---------------------------------------- //

// Notificacion que muestra botones al usuario.
browser.notifications.create({
	type: "basic", 
	title: "Mi extensión", 
	message: "Hola, esto es una notificación de mi extensión", 
	// Un arreglo con los botones de la notificacion.
	buttons: []
});

// Todos los botones son objetos dentro del arreglo, (cada elemento tinene su indice).
browser.notifications.create({
	buttons: [
	    { title: "Botón 1", iconUrl: "images/button1.png" }, 
	    { title: "Botón 2", iconUrl: "images/button2.png" }
	]
});

// --------------------------------------- //
// ------ Manipulacion de (botones) ------ //
// --------------------------------------- //

browser.notifications.create({
	// Todos los botones son objetos dentro del arreglo, (cada elemento tinene su indice).
	buttons: [
		// Index 0.
	    { title: "Botón 1", iconUrl: "images/button1.png" }, 
	    // Index 1.
	    { title: "Botón 2", iconUrl: "images/button2.png" }
	]
});

// Escuchar evento (onButtonClicked).
browser.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
	if (notificationId === "notificacion-ejemplo") {
		if (buttonIndex === 0) // Click al primer boton.
		else if (buttonIndex === 1) // Click al segundo boton.
	}
});

/* ##########=============================########## */
/* ######===--- Tipos de notificaciones ---===###### */
/* ##########=============================########## */

// ----------------------------------- //
// ------ Notificacion (basica) ------ //
// ----------------------------------- //

// Se utilizan para notificaciones simples, (no requieren interaccion con el usuario).
browser.notifications.create({
    type: "basic",
    iconUrl: "icon.png",
    title: "Título de la notificación",
    message: "Mensaje de la notificación",
});

// -------------------------------------- //
// ------ Notificacion de (imagen) ------ //
// -------------------------------------- //

// Es igual a la simple, pero muestra una imagen, (como el avatar del usuario).
browser.notifications.create({
    type: "image", 
    iconUrl: "icon.png", 
    // Imagen a mostrar.
    imageUrl: "images/image.png", 
    title: "Título de la notificación", 
    message: "Mensaje de la notificación"
});
// ------------------------------------- //
// ------ Notificacion de (lista) ------ //
// ------------------------------------- //

// Muestra una notificacion con una lista, el usuario puede seleccionar uno de los elementos de la lista.
browser.notifications.create({
    type: "list",
    iconUrl: "icon.png",
    title: "Título de la notificación",
    message: "Mensaje de la notificación", 
    // Elementos de la lista que se pueden seleccionar.
    items: [
	    {
	    	// Titulo del elemento.
	    	title: "Elemento 1", 
	    	// Mensaje descriptivo.
	    	message: "Descripción del elemento 1", 
	    	// Coloca una imagen al elemento de la lista.
	    	imageUrl: "images/imagen0.jpg"

	    }
        { title: "Elemento 1", message: "Descripción del elemento 1" },
        { title: "Elemento 2", message: "Descripción del elemento 2", imageUrl: "images/imagen1.jpg" },
        { title: "Elemento 3", message: "Descripción del elemento 3" },
    ]
});

// ---------------------------------------- //
// ------ Notificacion de (progreso) ------ //
// ---------------------------------------- //

// Muestra una notificacion con una barra de progreso, (muestra el progreso de la tarea en segundo plano).
// Ejemplo: Como la descarga de un archivo o la subida de un archivo a un servidor remoto.
browser.notifications.create({
    type: "progress", 
    iconUrl: "icon.png",
    title: "Título de la notificación",
    message: "Mensaje de la notificación", 
    // Progreso actual.
    progress: 50,
});

/* ##########==============================########## */
/* ######===--- Manipular notificaciones ---===###### */
/* ##########==============================########## */

/**
 * Actualizar notificacion.
 */

// Actualizar la notificacion existente de acuerdo al (id).
browser.notifications.update(notificationId, {
	// Por ejemplo: Actualiza el titulo de la notificacion existente.
    title: "Nuevo título"
});

/**
 * Obtener notificaciones.
 */

/* Para obtener información sobre una notificación, recibe: 
	--- El id de la notificacion a obtener.
	--- La notificacion. */
browser.notifications.get(notificationId, (notification) => {
	// Titulo de la notificacion.
	notification.title;
});

// Obtiene todas las notificaciones creadas en la extension.
browser.notifications.getAll().then((notifications) => {
	// Contiene los (id) de las notificaciones.
	notifications;

	// Iterar.
	for(let id in notifications){
		// Id de la notificacion.
		id;

		// Notificacion.
		notifications[id];
		notifications[id].title;
		notifications[id].message;
	}
});

// Obtener con timestamp de hace un día.
browser.notifications.getAll({
	since: Date.now() - (24 * 60 * 60 * 1000)
}).then((notifications) => {
	// ...
});

/**
 * Eliminar notificaciones.
 */

// Para eliminar una notificación, (recibe el [id] de la notificacion).
browser.notifications.clear(notificationId);

/* ##########=============########## */
/* ######===--- Eventos ---===###### */
/* ##########=============########## */

browser.notifications.create({
	type: "basic",
	iconUrl: "icon.png",
	title: "¡Notificación!",
	message: "Esta es una notificación de ejemplo.",
	buttons: [
		// Botón de ejemplo.
		{ title: "Haz click" }
	]
});

/**
 * Se activa cuando el usuario hace clic en uno de los botones de una notificación creada por la extensión.
 */
browser.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
	// Id de la notificacion a la que se hizo click.
	notificationId;
	// Indice del boton al cual se hizo click.
	buttonIndex;

	// Primer boton del arreglo (buttons).
	if(buttonIndex === 0){
		// Se hizo click al primer el botón de ejemplo.
	}
});

/**
 * Se activa cuando el usuario hace clic en la notificación.
 */
browser.notifications.onClicked.addListener(notificationId => {
	notificationId;
	// Id de la notificacion clickeada.
});

/**
 * 
 */
browser.notifications.onClosed.addListener((notificationId, byUser) => {
	// Id de la notificacion cerrada.
	notificationId;
	// Usuario el cual cerro la notificacion, (puede ser [undefined]).
	byUser;
});