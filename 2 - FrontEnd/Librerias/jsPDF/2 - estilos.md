### ====================================== ###
###### ===--- Metodos de estilos ---=== ######
### ====================================== ###

# --------------------------------------- #
# ------ Estilos para los (textos) ------ #
# --------------------------------------- #

```js
	/* Indica: 
		--- Nombre de la fuente.
		--- (italic, normal, bold, semibold, etc). */
	doc.setFont("times", "normal");

	// Dimension de la fuente.
	doc.setFontSize(12);

	// Color (RGB) de la fuente.
	doc.setTextColor(0, 0, 255); // Texto en azul.

	/* Establece el estilo de la fuente: 
		--- ("normal", "italic", "bold", "bolditalic" o "underline"). */
	doc.setFontStyle("italic");
```

# -------------------------------------------- #
# ------ Estilos para los (rectangulos) ------ #
# -------------------------------------------- #

```js
	// Color (RGB) de relleno para los elementos como: (Rectangulos y las celdas de una tabla).
	doc.setFillColor(255, 0, 0); // Relleno en rojo.

	// Color (RGB) de borde para los elementos como: (Rectangulos y las celdas de una tabla).
	doc.setDrawColor(0, 128, 0); // Borde en verde.

	// Este metodo define el grosor de las lineas de los bordes.
	doc.setLineWidth(0.5); // Grosor de línea de 0.5 puntos.

	// Establece los margenes de cada lado del documento.
	doc.setMargins(10, 10, 10, 10); // Márgenes de 10 puntos en cada lado.
```