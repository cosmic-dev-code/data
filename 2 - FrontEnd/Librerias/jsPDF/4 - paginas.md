### ============================================= ###
###### ===--- Manipulacion de (paginas) ---=== ######
### ============================================= ###

```js
	const doc = new jsPDF();
```
# --------------------- #
# ------ Agregar ------ #
# --------------------- #

```js
	// Agregar contenido en la (primera) página.
	doc.text('Contenido en la primera página', 10, 10);

	// Agregar una nueva página.
	doc.addPage();

	// Agregar contenido en la (segunda) página.
	doc.text('Contenido en la segunda página', 10, 10);

	// Descargar el PDF.
	doc.save('documento.pdf');
```

# ------------------------- #
# ------ Seleccionar ------ #
# ------------------------- #

```js
	// Se posiciona en una pagina en especifico, (recibe el numero de pagina).
	doc.setPage(3);

	// Obtenemos el numero total de paginas.
	doc.getNumberOfPages(); // number

	// Muestra la pagina actualmente posicionada.
	doc.internal.page; // number

	// Muestra un arreglo de todas las paginas.
	doc.internal.pages; // Pages[]

	// Une y separa todo el contenido de la pagina (1) por (comas) en una "cadena de texto".
	doc.internal.pages[1].join(","); // string
```

# ---------------------- #
# ------ Eliminar ------ #
# ---------------------- #

```js
	// Elimina una pagina en especifico, (recibe el numero de pagina).
	doc.deletePage(3);

	// Elimina todas las paginas desde el final, (--).
	for (let i = doc.internal.getNumberOfPages(); i > 0; i--) {
		doc.deletePage(i);
	}
```