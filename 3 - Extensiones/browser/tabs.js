/* ##########==========########## */
/* ######===--- Tabs ---===###### */
/* ##########==========########## */

// NOTA: Es necesario especificar el permiso en el (manifest.json).
{
	"permissions": [
		"tabs"
	]
}

/**
 * Los (tabs) se refiere a las pestañas que pueden abrirse en el navegador.
 */

/* ##########================================########## */
/* ######===--- Manipulacion de (pestañas) ---===###### */
/* ##########================================########## */

// Abre una pestaña en segundo plano.
browser.tabs.create({
	// URL a cargar.
	url: "https://www.google.com/", 
	// Indica si esta sera la pestaña activa.
	active: false
});

// Actualiza la URL o el título de una pestaña existente.
browser.tabs.update({
	url: "https://www.google.com/", 
	active: false
});

// Inyecta código JavaScript en una pestaña existente.
browser.tabs.executeScript(tabId, {
	code: `
		document.body.style.backgroundColor = 'red';
	`
});

// Envía un mensaje a un script de contenido en una pestaña existente.
browser.tabs.sendMessage(tabId, {
	action: "showPopup"
});

// Captura una captura de pantalla de la pestaña actual.
browser.tabs.captureVisibleTab(null, {}, function(dataUrl) {

	// Imagen de captura de pantalla como "string".
	dataUrl;

	// Puede utilizarse en una imagen.
	document.body.innerHTML = (`
		<img src="${dataUrl}" alt="Texto alternativo">
	`);
});

/* ##########=============########## */
/* ######===--- Eventos ---===###### */
/* ##########=============########## */

/**
 * Se activa cuando se crea una nueva pestaña.
 */
browser.tabs.onCreated.addListener(tab => {
	// Informacion de la pestaña.
	tab.id;
	tab.url;
});

/**
 * Se activa cuando se actualiza una pestaña, por ejemplo, cuando se carga una nueva URL.
 */
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	// Id de la pestaña.
	tabId;
	// URL a la que cambio.
	changeInfo.url;
});

/**
 * Se activa cuando se selecciona una pestaña.
 */
browser.tabs.onActivated.addListener(activeInfo => {
	// Pestaña seleccionada.
	activeInfo.tabId;
});

/**
 *  Se activa cuando se cierra una pestaña. 
 */
browser.tabs.onRemoved.addListener(tabId => {
	// Pestaña cerrada.
	tabId;
});

/**
 * Se activa cuando una pestaña es reemplazada por otra, por ejemplo, cuando se navega hacia 
 * una URL desde una página de error de DNS.
 */
browser.tabs.onReplaced.addListener((, removedTabId) => {
	// Pestaña removida.
	removedTabId;
	// Nueva pestaña de reemplazo.
	addedTabId;
});