### ======================== ###
###### ===--- NOTA ---=== ######
### ======================== ###

La libreria de [](jsPDF) es gratuita y no tiene una especie de limite, es de codigo abierto.

### ========================================= ###
###### ===--- Instalacion por (CDN) ---=== ######
### ========================================= ###

<!-- Instalamos la libreria por medio del (CDN). -->

```html
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js"></script>
```

### ========================================= ###
###### ===--- Instalacion por (npm) ---=== ######
### ========================================= ###

<!-- Instalamos (jsPDF) via (npm). -->

```bat
	npm install jspdf --save
```

<!-- Podemos importar (jsPDF) directamente en nuestro codigo JavaScript. -->

```js
	// Importar la librería jsPDF
	import jsPDF from 'jspdf';

	// Crear un nuevo documento PDF
	const doc = new jsPDF();
```