### ====================================== ###
###### ===--- Descargar (textos) ---=== ######
### ====================================== ###

```js
	var doc = new jsPDF();

	// Seteamos los estilos del texto a descargar.
	doc.setFontSize(12);
	doc.setTextColor(0, 0, 255);
	doc.setFontStyle("italic");
	doc.setFillColor(255, 0, 0);

	/* El metodo (text) recibe: 
		--- El texto a imprimir.
		--- Coordenada "X" de izquierda a derecha del documento.
		--- Coodernada "Y" de arriba hacia abajo del documento. */
	doc.text("Hola mundo", 10, 10);

	// Guarda el documento como "documento.pdf".
	doc.save('documento.pdf');
```

# --------------------------------------- #
# ------ Descargar (varios textos) ------ #
# --------------------------------------- #

<!-- Cuando estilamos, los estilos se aplican a todos los textos a partir desde donde seteamos 
los estilos, por lo cual podemos setear nuevamente los estilos y colocar los 
textos nuevos que tendran esos estilos. -->

```js
	var doc = new jsPDF();

	/**
	 * Primer texto a agregar.
	 */

	// Seteamos los estilos del primer texto, (el encabezado).
	doc.setFontSize(12);
	doc.setTextColor(0, 0, 255);
	// Colocamos el primer texto.
	doc.text("Mi encabezado", 10, 10);

	/**
	 * Segundo texto a agregar.
	 */

	// Seteamos los estilos del segundo texto, (el parrafo).
	doc.setFontSize(12);
	doc.setTextColor(0, 0, 255);
	// Colocamos el segundo texto (debajo del otro).
	doc.text("Mi parrafo", 10, 30);

	/**
	 * Guardamos el documento en formato (PDF).s
	 */

	// Guarda el documento como "documento.pdf".
	doc.save('documento.pdf');
```

### ======================================== ###
###### ===--- Descargar (imagenes) ---=== ######
### ======================================== ###

```js
	const doc = new jsPDF();

	doc.addImage(
		// Imagen a descargar en formato PDF, (puede ser "local" o "remota").
		"https://example.com/ejemplo.jpg", 
		// Formato de la imagen a descargar.
		'JPEG', 
		// Coodenadas en el documento PDF, (X) e (Y).
		15, 15, 
		// Dimensiones de la imagen en el documento, (ancho) y (alto).
		100, 80
	);

	// Descargar el PDF.
	doc.save('documento.pdf');
```

### ========================================= ###
###### ===--- Descargar (elementos) ---=== ######
### ========================================= ###

<!-- Tenemos un codigo HTML en nuestro documento. -->

```html
	<!-- Elemento a imprimir. -->
	<div id="idHTMLCode">
		<h1 style="color: red; font-size: 30px;">Título del PDF</h1>
		<p class="center">Este es un ejemplo de contenido HTML que se exportará a PDF.</p>
	</div>

	<!-- Podemos imprimir el elemento. -->
	<script type="text/javascript">
		var doc = new jsPDF();

		/* Usando el metodo (fromHTML): 
			--- Guardamos el elemento HTML con el "idHTMLCode".
			--- En las coordenadas "X" de izquierda a derecha del documento.
			--- En las coordenadas "Y" de arriba hacia abajo del documento. */
		doc.fromHTML(
			document.getElementById("idHTMLCode"), 10, 10
		);

		// Guardamos el elemento.
		doc.save('documento.pdf');
	</script>
```