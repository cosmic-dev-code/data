### =================================== ###
###### ===--- Inyectar codigo ---=== ######
### =================================== ###

<!-- Podemos inyectar codigo adicional a una pagina web, modificando asi su funcionamiento, estilos y demas. -->

<!-- La seccion (content_scripts) contiene los escripts que se inyectaran a la pagina para modificar su funcionamiento. 
En el contexto de la pagina, los scripts pueden acceder al (HTML), al (DOM) y otros recursos de la pagina. -->

###### --- --- --- --- --- --- proyecto/src/file.js --- --- --- --- --- --- ######

<!-- Codigo (JavaScript) a inyectar. -->

<!-- Habiamos dicho que los scrips pueden acceder al (DOM) de la pagina a la cual se inyecta. -->

```js
	(function(){
		// Agregar codigo HTML en la pagina.
		document.getElementsByTagName("body")[0].innerHTML += (`
			<div>
				<h1>Hola mundo</h1>
			</div>
		`);
	}());
```

###### --- --- --- --- --- --- proyecto/src/file.css --- --- --- --- --- --- ######

<!-- Codigo (CSS) a inyectar. -->

<!-- Modifica los estilos CSS de la pagina a la cual se inyecta. -->

```css
	body{
		background-color: red;
	}
```

###### --- --- --- --- --- --- proyecto/manifest.json --- --- --- --- --- --- ######

```json
	{
		"content_scripts": [
			{
				/* Indica la lista de (URLs) donde se inyectaran los scripts, al visitar uno de esos enlaces los 
				scripts se inyectaran en la pagina de dicho enlace. */

				// Inyecta los scripts en solo las paginas que contengan (Google).
				"matches": ["*://*/*google*"], 

				// Puede especificar mas de una pagina.
				"matches": ["*://*/*google*", "*://*/*facebook*"], 

				// Inyecta en cualquir URL.
				"matches": ["<all_urls>"], 

				// Especifica los archivos JavaScript que se inyectaran al visitar la URL especificada.
				// Este accede al HTML, DOM y otros recursos de la pagina.
				"js": ["src/file.js"], 
				"js": ["src/file.js", "src/file_1.js"], 

				// Especifica los archivos CSS que se inyectaran al visitar la URL especificada.
				// Este sobreescribe los estilos de la pagina.
				"css": ["src/file.css"], 
				"css": ["src/file.css", "src/file_1.css"], 

				/* Especifica cuando deben inyectarse los (scripts), tiene disponible las siguientes opciones: 
					--- (document_start): Se ejecuta en el inicio del proceso de carga del documento.
					--- (document_end): Se ejecuta al final del proceso de carga del documento.
					--- (document_idle): Se ejecuta cuando la página está completamente cargada y el navegador está inactivo.
					--- (document_body): Se ejecuta después de que se haya cargado el elemento "body" de la página. */
				"run_at": "document_idle"
			}
		]
	}
```

### =============================================== ###
###### ===--- Funcionalidad de JavaScript ---=== ######
### =============================================== ###

###### --- --- --- --- --- --- proyecto/src/file.js --- --- --- --- --- --- ######

<!-- Es posible utilizar caracteristicas de JavaScript aunque un poco limitadas. -->

```js
	// Por ejemplo: Si quieres que la extension recuerde algo en cada pagina, puedes acceder al almacenamiento local.
	/**
	 * NOTA: La extension solo puede acceder a la informacion que la misma almacena, es decir, que cada extension 
	 * tiene su propio almacenamiento local y no puede acceder al almacenamiento del navegador o 
	 * de otras paginas.
	 */
	window.localStorage;
	window.sessionStorage;
	window.indexedDB;

	// Puede realizarse peticiones HTTP y HTTPS para obtener informacion.
	/**
	 * Nota: Esto esta limitado, ya que algunos sitios web pueden bloquear las solicitudes HTTP y HTTPS 
	 * realizadas desde una extension.
	 */
	window.XMLHttpRequest;
	fetch("https://www.example.com");

	/* NOTA: No todas las APIs estan disponibles, entre ellas tenemos: 
		--- API de manipulación de eventos del navegador, como window.onload y window.onunload.
		--- API de manejo de cookies de terceros.
		--- API de lectura y escritura de archivos del sistema de archivos local.
		--- API de autenticación del navegador, como OAuth. */

```