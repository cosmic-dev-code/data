### =========================== ###
###### ===--- Estilos ---=== ######
### =========================== ###

```js
	const element = document.createElement("div");

	/* Devuelve un objeto (CSSStyleDeclaration). Este objeto devuelve los estilos del elemento y 
	tambien permite modificar los estilos. */
	element.style;
```

# --------------------------------- #
# ------ Obtener los estilos ------ #
# --------------------------------- #

```js
	let styles = getComputedStyle(element); // CSSStyleDeclaration
	let styles = element.style; // CSSStyleDeclaration

	styles.padding; // "30px"
	styles.border; // "1px dashed #000"
	styles.color; // "#fff"
	styles.backgroundColor; // "000"
```

# ----------------------------------- #
# ------ Modificar los estilos ------ #
# ----------------------------------- #

```js
	// Establece una propiedad.
	element.style.setProperty("display", "block");
	element.style.display = "block";

	// Obtener y modificar.
	let style = element.style;

	style.padding = "30px";
	style.border = "1px dashed #000";
	style.color = "#fff";
	style.backgroundColor = "#000";
```

### ==================================== ###
###### ===--- Pseudo elementos ---=== ######
### ==================================== ###

# ---------------------------------------- #
# ------ Obtener (pseudo elementos) ------ #
# ---------------------------------------- #

```js
	// Elemento a extraer estilos.
	const elemento = document.getElementsByTagName("div")[0];

	// Obtenemos los estilos (before) y (after) del elemento.
	const estilosBefore = getComputedStyle(elemento, '::before');
	const estilosAfter = getComputedStyle(elemento, '::after');
```

# ---------------------------------------------- #
# ------ Modificar los (pseudo elementos) ------ #
# ---------------------------------------------- #

```js
	// Obtener estilos de un elemento.
	var estilos = getComputedStyle(
		document.getElementsByClassName("mi-elemento")[0]
	);

	/* El metodo (setProperty) recibe: 
		--- El nombre de la propiedad a modificar.
		--- El valor que se le asignara a la propiedad.
		--- El pseudo elemento al que se aplican los cambios. */
	estilos.setProperty(`content`, `"Antes"`, `::before`);
	estilos.setProperty(`color`, `red`, `::before`);
	estilos.setProperty(`display`, `inline-block`, `::before`);
```

# ------------------------------------------------------------ #
# ------ Modificar los (pseudo elementos) con variables ------ #
# ------------------------------------------------------------ #

```css
	.mi-elemento::before{
		/* Definimos las variables para este (pseudo elemento). */
		content: var(--before-content);
		color: var(--before-color);
	}

	.mi-elemento::after{
		/* Definimos las variables para este (pseudo elemento). */
		content: var(--after-content);
		color: var(--after-color);
	}
```

```js
	// Elemento que contiene los (pseudo elementos).
	const elemento = document.querySelector('.mi-elemento');

	// Al modificar las variables, se modificalos los (pseudo elementos) que las utilizan.

	// (before).
	elemento.style.setProperty('--before-content', '"Antes"');
	elemento.style.setProperty('--before-color', 'red');

	// (after).
	elemento.style.setProperty('--after-content', '"Después"');
	elemento.style.setProperty('--after-color', 'blue');
```