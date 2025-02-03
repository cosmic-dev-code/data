### ============================ ###
###### ===--- Archivos ---=== ######
### ============================ ###

Para iniciar a crear una extension de Google, es necesario hacer los siguientes pasos. 
	--- Crear una carpeta llamada [](src) para los archivos.
	--- Crear una carpeta llamada [](icons) para los iconos de la aplicacion.

###### --- --- --- --- --- --- proyecto/src --- --- --- --- --- --- ######

<!-- Dentro de esta carpeta estaran todos los archivos HTML, CSS y JS de la extension. -->

###### --- --- --- --- --- --- proyecto/icons --- --- --- --- --- --- ######

<!-- Es importante dar a notar que esta carpeta debe contener la imagen que sera el icono de la aplicacion 
en los siguientes tamaños: 16, 24, 32, 48, 128. -->

###### --- --- --- --- --- --- proyecto/manifest.json --- --- --- --- --- --- ######

<!-- En la raiz de nuestro proyecto creamos este archivo de manifiesto, este archivo contendra los ajustes de 
la extension, permisos y demas. -->

__Las ramas deben tener esta estructura:__
	--- proyecto/
		--- src/
			--- pages/
				--- popup.html
			--- scripts/
				--- popup.js
				--- document.js
				--- background.js
			--- css/
				--- popup.css
				--- document.css
			--- images/
				--- image16.png
				--- image32.png
		--- icons/
			--- image16.png
			--- image24.png
			--- image32.png
			--- image48.png
			--- image128.png
		--- manifest.json