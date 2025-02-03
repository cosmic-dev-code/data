/* ##########====================########## */
/* ######===--- Almacenamiento ---===###### */
/* ##########====================########## */

// NOTA: Es necesario especificar el permiso en el (manifest.json).
{
	"permissions": [
		"storage"
	]
}

/* Proporciona una forma sencilla de almacenar datos en el navegador y acceder a ellos desde una extensión. 
Hay dos tipos de almacenamiento disponibles: 
	--- (local), es específico del perfil de usuario en el navegador y se sincroniza entre las distintas ventanas de 
		la misma extensión. Los datos almacenados en local están disponibles incluso después de que el navegador 
		se haya cerrado y se haya vuelto a abrir.

		Tienen acceso a el las pestañas y ventanas abiertas por el mismo código de la extensión.
		
	--- (sync), está sincronizado en la nube a través de la cuenta de Google del usuario y está 
		disponible en cualquier dispositivo en el que se haya iniciado sesión con la 
		misma cuenta. */

/* NOTA: El almacen de objetos puede almacenar datos de cualquier tipo: 
	--- (string, boolean, number, object, etc).
A deferencia del (localStorage) que solo puede almacenar (strings). */

/* ##########================================########## */
/* ######===--- Manipulacion del (storage) ---===###### */
/* ##########================================########## */

/**
 * Guardar elementos.
 */

// Objeto a guardar en el almacenamiento local.
const registro = {
	"mi-key": { name: "John", age: 30 }
}

// El elemento se almacena bajo la llave (mi-key) y su valor.
browser.storage.local.set(registro, function() {
	// El elemento se ha guardado con exito.
});

// Guardar mas de un elemento a la vez.
browser.storage.local.set({"key-0": "Valor"}, {"key-1": true}, {"key-2": registro});

/**
 * Recuperar elementos.
 */

// Recuperar elemento utilizando su (llave).
browser.storage.local.get("mi-key", function (result) {
	// Extraemos el objeto de acuerdo al (key) que definimos.
	result["mi-key"]; // object
});

// Obtener elemento por medio de una promesa.
browser.storage.local.get("mi-key")
	.then(result => {
		result["mi-key"]; // object
	})
	.catch(error => {
		// ...
	});

// Recuperar todos los elementos del almacenamiento.
browser.storage.local.get().then(result => {
	// Elementos recuperado.
	for(let key in result) result[key];

	// Elemento recuperado.
	Object.keys(result).forEach(key => result[key]);
});

/**
 * Eliminar elementos.
 */

// Eliminar un elemento utilizando la (llave).
browser.storage.local.remove("mi-key", function () {
	// El elemento se elimino con exito.
});

// Eliminar mas de un elemento.
browser.storage.local.remove(["key-0", "key-1" "key-2"]);

// Eliminar todos los elementos.
browser.storage.local.clear();

/* ##########=============########## */
/* ######===--- Eventos ---===###### */
/* ##########=============########## */

/**
 * Este evento se activa cuando cambia el valor de una clave en el almacenamiento local de la extensión.
 */
browser.storage.onChanged.addListener((changes, areaName) => {
	// Almacenamiento local donde se realizo cambios.
	changes;
	// Clave que cambio.
	Object.keys(changes)[0];
	// Cambio de area.
	areaName;
});