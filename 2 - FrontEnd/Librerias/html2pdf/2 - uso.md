### =========================================== ###
###### ===--- Imprimir elementos HTML ---=== ######
### =========================================== ###

<!-- Tenemos algunos elementos HTML. -->

```html
	<style type="text/css">
		/* ... */
	</style>

	<!-- Identificamos al elemento con el "id", (idTicket). -->
	<main class="main" id="idTicket">
		<section class="ticket">
			<picture class="ticket-logo">
				<img src="../public/images/logo.png" width="300" height="300" title="Logotipo">
			</picture>
			<article class="ticket-body">
				<h1>Ticket de venta</h1>
				<div>
					<!-- ... -->
				</div>
				<div>
					<!-- ... -->
				</div>
			</article>
		</section>
	</main>
```

<!-- Podemos descargar en formato PDF todo el elemento con sus estilos tal cual estan solo con pasar por 
parametro el elemento a descargar. -->

```js
	// Haciendo uso de la funcion (html2pdf).
	html2pdf(
		// Colocamos el elemento por parametro.
		document.getElementById("idTicket")
	);
```

### =================================== ###
###### ===--- Ajustes del PDF ---=== ######
### =================================== ###

```js
	var pdf = html2pdf().from(document.getElementById("idTicket"))
		// Pasamos un objeto con todos los ajustes.
		.set({
			// Define el margen de la hoja del PDF en (milimetros).
			margin: 10, 
			// El nombre del documento PDF a descargar.
			filename: "mi-document.pdf", 
			// Despues de que el PDF es creado.
			outputPdf: function(pdf) {
				// Podemos definir los metadatos, (titulo, autor y asunto).
				pdf.setProperties({
					title: 'Mi Documento PDF', 
					author: 'Mi Nombre',
					subject: 'Un ejemplo de PDF generado con HTML2PDF',
				});
			}
		});

	// Guardamos el PDF.
	pdf.save();
```

# --------------------------------------- #
# ------ (Calidad) de la impresion ------ #
# --------------------------------------- #

```js
	var pdf = html2pdf().from(document.getElementById("idTicket"))
		.set({
			html2canvas: {
				/* Se refiere a la calidad de la imagen que se guarda en el PDF, (porque se renderiza el HTML a imagen), 
				una mayor calidad conyeba un mayor peso en el PDF resultante. */
				scale: 2, 
				/* Indica los (puntos por pulgada), en este caso (192 pt * pulgada). Esto puede mejorar la calidad 
				de la imagen del PDF, especialmente cuando se va a imprimir.  */
				dpi: 192, 
				// Los caracteres tendran mas nitidez, claridad y legibilidad.
				letterRendering: true
			}, 

			// Define los ajustes de la imagen.
			image: {
				type: "png", // Tipo de imagen.
				quality: 0.98 // Calidad entre (0 - 1).
			}
		});

	// Guardamos el PDF.
	pdf.save();
```

# ------------------------ #
# ------ (Margenes) ------ #
# ------------------------ #

```js
	var pdf = html2pdf().from(document.getElementById("idTicket"))
		.set({
			// Define el margen de la hoja del PDF en (milimetros).
			margin: 10, 

			/* (Opcionalmente) podemos definir cada lado del margen: 
				--- (superior), (derecha), (abajo) e (izquierda). */
			margin: {
				top: 10, 
				right: 20, 
				bottom: 10, 
				left: 20
			}
		});

	// Guardamos el PDF.
	pdf.save();
```

# ---------------------- #
# ------ (Pagina) ------ #
# ---------------------- #

```js
	var pdf = html2pdf().from(document.getElementById("idTicket"))
		.set({
			// Define los valores de la pagina.
			jsPDF: {
				/* Define la unidad de medida que se empleara en la pagina.
					--- (mm): Milímetros.
					--- (pt): Puntos (1 pulgada = 72 puntos).
					--- (in): Pulgadas.
					--- (px): Píxeles. */
				unit: 'mm', 
				/* Define el tamaño de la pagina.
					--- (a3): Tamaño estandar mundial (Europa), 
						--- (Ancho 297 mm [milímetros] y Altura: 420 mm).

					--- (a4): Tamaño de página estándar (internacional/mundial).
						--- (Ancho 210 mm [milímetros] y Altura: 297 mm).

					--- (letter): Tamaño de página de carta en (América del Norte/Canada).
						--- (Ancho 8.5 in [inches/pulgadas] y Altura: 11 in).

					--- (legal): Tamaño de página legal en (América del Norte/Canada).
						--- (Ancho 8.5 in [inches/pulgadas] y Altura: 14 in). */
				format: 'a4', 
				/* Define la orientacion de la pagina.
					--- (portrait): Orientación vertical, donde la página es más alta que ancha.
					--- (landscape): Orientación horizontal, donde la página es más ancha que alta. */
				orientation: 'portrait'
			}
		});

	// Guardamos el PDF.
	pdf.save();
```