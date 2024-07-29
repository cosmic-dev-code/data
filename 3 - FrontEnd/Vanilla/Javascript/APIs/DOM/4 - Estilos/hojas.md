### ========================================== ###
###### ===--- Crear hojas de estilos ---=== ######
### ========================================== ###

```js
	// Crear hojas de estilo.
	const hoja = document.createElement("style");

	// Definir tipo de contenido.
	hoja.type = "text/css";

	// Definir reglas.
	hoja.textContent = (`
		body{
			background-color: red;
			color: darkred;
			font-size: 14px;
		}
	`);

	// Insertar en el documento.
	document.body.appendChild(hoja);
```

### ============================================ ###
###### ===--- Obtener hojas de estilos ---=== ######
### ============================================ ###

```js
	// Devuelve un arreglo con las hojas de estilos del documento (HTML).
	var styleSheets = document.styleSheets; // StyleSheetList

	// Devuelve la cantidad de las hojas de estilo, (+1 como cualquier arreglo).
	styleSheets[0].length; // number

	// Devuelve la ruta de la cual viene la hoja de estilos.
	styleSheets[0].href; // string

	// Tipo de hoja.
	styleSheets[0].type; // "text/css"

	// Devuelve el tipo de etiqueta donde se declaran los estilos.
	styleSheets[0].ownerNode; // HTMLStyleElement | HTMLLinkElement

	// Lista de las reglas de la hoja de estilos CSS.
	styleSheets[0].cssRules; // CSSRuleList

	// Extrae la longitud de la hoja de estilos.
	styleSheets[0].cssRules.length; // number
```

### ============================================= ###
###### ===--- Modificar hoja de estilos ---=== ######
### ============================================= ###

<!-- Podemos insertar nuevas reglas a la hoja de estilos. -->

```js
	// Extraemos la primera y hoja de estilos del documento.
	var hoja = document.styleSheets[0];

	/* El metodo (insertRule) recibe: 
		--- La cadena de texto que representa las reglas CSS que a insertar.
		--- El índice numérico que indica la posición en la hoja de estilos donde se insertará la regla. */

	// Inserta al principio de la hoja.
	hoja.insertRule(`/* Nuevas reglas CSS */`, 0);

	// Inserta al final de la hoja.
	hoja.insertRule(`/* Nuevas reglas CSS */`, hoja.cssRules.length);

	// ------------------------------------------ //
	// ------ Modificar (pseudo elementos) ------ //
	// ------------------------------------------ //

	// Modificar estilos (before).
	hoja.insertRule(`
		.main > h1::before {
			content: "Antes";
			display: block;
			color: red;
		}
	`, 0);

	// Modificar estilos (after).
	hoja.insertRule(`
		.main > h1::after {
			content: "Despues";
			display: block;
			color: blue;
		}
	`, 0);
```

# NOTA: La (insertRule) no permite insertar mas de una regla CSS, de lo contrario no funcionara.

### ============================================= ###
###### ===--- Insertar mas de una regla ---=== ######
### ============================================= ###

```js
	function insertRules(hoja, reglas){
		// Iterar las reglas e insertarlas una por una.
		reglas.forEach(regla => hoja.insertRule(regla));
	}

	// Extraer ultima hoja de estilos del documento.
	var hoja = document.styleSheets[document.styleSheets.length - 1];

	// Insetar las reglas en la hoja extraida.
	insertRules(hoja, [
		"/* ... */", 
		"/* ... */", 
		"/* ... */"
	]);
```