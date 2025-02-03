### =============================== ###
###### ===--- Informacion ---=== ######
### =============================== ###

###### --- --- --- --- --- --- proyecto/manifest.json --- --- --- --- --- --- ######

<!-- Debe especificarse la version del manifiesto y de la extension. -->

```json
	{
		/**
		 * Verifica la version de la extension.
		 */

		/* En cada actualizacion se especifica una version diferente de la extension, por lo que se puede llevar 
		un registro de las versiones de la extension. Ademas ofrece compatibilidad con el sistema operativo 
		y los navegadores.

		Tambien, si el usuario encuentra algun problema, el desarrollador puede pedirle al usuario que comparta 
		la version de la extension, (de esta manera puede localizar el problema). */
		"version": "1.0", 

		/**
		 * Indica el formato del manifiesto.
		 */
		 
		/* Cada navegador tiene su propia version de manifiesto, es importante saber que versiones estan 
		disponibles para utilizar, por ejemplo: 
			--- (Google) posee hasta la version 3 del manifiesto.
			--- (FireFox) posee hasta la cersion 2 del manifiesto.
		La version especifica cuales caracteristicas y novedades podra utilizar la extension, es decir, que los 
		permisos y caracteristicas disponibles para un manifiesto V3 no estan disponibles para la V2 y 
		podrian presentar problemas de compatibilidad.

		Ademas la version indica la forma de empaquetado de la extension. */
		"manifest_version": 3, 
	}
```

<!-- Aqui configuramos la informacion general de la extension. -->

```json
	{
		// Representa el nombre de la extension.
		"name": "Mi extension - Google", 

		// Representa la descripcion de la extension.
		"description": "Esta es la descripcion", 

		// Author de la aplicacion.
		"author": "Brandon Anthony Olivares Amador", 

		// Indicamos donde se encuentran cada una de las imagenes de la extension, (es obligatorio).
		"icons": {
			"16": "images/icon16.png",
			"32": "images/icon32.png",
			"48": "images/icon48.png",
			"128": "images/icon128.png"
		}
	}
```