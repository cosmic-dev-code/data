### ============================== ###
###### ===--- Background ---=== ######
### ============================== ###

El archivo de fondo [](background) de una extensión de navegador es un archivo JavaScript que **se ejecuta en segundo plano** y controla las funciones principales de la extensión. Permite escuchar y responder a eventos del navegador, realizar tareas programáticas y comunicarse con otras partes de la extensión.

Algunas de las tareas que puede realizar incluyen:

- Descargar datos desde un servidor externo.
- Leer y escribir datos en el almacenamiento local del navegador.
- Enviar mensajes a otros scripts en la extensión y mostrar notificaciones o mensajes emergentes.

El archivo de fondo es esencial para el funcionamiento de muchas extensiones de navegador.

###### --- --- --- --- --- --- proyecto/src/js/background.js --- --- --- --- --- --- ######

<!-- Este es el archivo que se ejecutara en segundo plano. -->

<!-- Por ejemplo: Queremos escuchar cuando el usuario habra una nueva pestaña y se le notifique.  -->

```js
	"use strict";

	browser.tabs.onCreated.addListener(function(){
		// Mostrar la notificación emergente.
	    browser.notifications.create({
	        type: "basic",
	        iconUrl: "icon.png",
	        title: "Nueva pestaña",
	        message: "Se ha abierto una nueva pestaña",
	    });
	});
```

###### --- --- --- --- --- --- proyecto/manifest.json --- --- --- --- --- --- ######

```json
	{
	    "name": "Mi extensión",
	    "version": "1.0",
	    "manifest_version": 3,

		// Segundo plano presente en el navegador.
	    "background": {
	    	// Indicamos el archivo que se mantendra en segundo plano.
	        "service_worker": "background.js", 
	        // (true), indica que el archivo se ejecutara en segundo plano aun cuando la extension este inactiva. 
	        // (false) indica que se ejecutara en segundo plano solo cuando la extension este activa.
	        "persistent": true // Valor por defecto.
	    }
	}
```