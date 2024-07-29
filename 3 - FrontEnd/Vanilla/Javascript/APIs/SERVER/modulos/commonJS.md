
<!-- ADVERTENCIA: --- NECESITA UN SERVIDOR -->

### =================================== ###
###### ===--- Export / Import ---=== ######
### =================================== ###

###### --- --- --- --- --- --- importar.js --- --- --- --- --- --- ######

Debes declarar frente a la palabra reservada [](export) el codigo que deseamos exportar.

```javascript
	// Con la palabra reservada (export) podemos exportar una funcion.
	export const sumarNumeros = function(){
		return [].reduce.call(arguments, (suma, numero) => suma += numero);
	};

	// Podemos exportar tambien variables.
	export let numbers = new Array(5, 10, 15);
```

###### --- --- --- --- --- --- index.js --- --- --- --- --- --- ######

Colocamos nuestro fichero [](JavaScript).

```html
	<script type="text/javascript" src="index.js"></script>
```

Ahora la funcion importar recibe por parametro el archivo del cual se va a importar el codigo. 

```javascript
	// NOTA: Es importante colocar un (./) cuando el archivo se encuentra en el mismo directorio, de lo contrario daria error.
	import("./importar.js");

	// El fichero se encuentra dentro del mismo directorio pero en otra carpeta.
	import("./js/importar.js");

	// Cuando el fichero se encuentra en otra carpeta fuera del directorio.
	import("../js/importar.js");

	// Cuando el fichero se encuentra en otra carpeta fuera del directorio.
	import("../js/./importar.js");
```

Ahora si procedemos a importar.

```javascript
	// La funcion (import) devuelve una promesa.
	import("../js/importar.js").then(respuesta => {

		// Objeto (respuesta) que contiene lo que importamos como propiedades.
		let suma = respuesta.sumarNumeros(5,5,5);
		let numeros = respuesta.numbers;

	})
		.catch(error => console.log("No se pudo recibir el objeto."));
```

# ------------------------------------------------- #
# ------ Exportar una sola cosa con (export) ------ #
# ------------------------------------------------- #

Otra forma de expoerar varias piezas de codigo.

###### --- --- --- --- --- --- importar.js --- --- --- --- --- --- ######

```js

	// Estos solo viven en este archivo.

	const div = document.createElement("DIV");
	const objUsuario = {};

	// A exportar.

	function suma(num = 0, num1 = 0){
		// ...
	}

	class Usuario{
		// ...
	}

	/**
	 * Podemos omitir la exportacion de codigo tan solo utilizando {un objeto}.
	 */
	export {suma, Usuario}
```

# ---------------------------- #
# ------ Desestructurar ------ #
# ---------------------------- #

Podemos [](desestructurar) el objeto.

###### --- --- --- --- --- --- index.js --- --- --- --- --- --- ######

```js
	(async function(){

		let { suma, Usuario } = await import("./importar.js");

		// Hacemos uso de las propiedades.
		suma();
		new Usuario();

		// ---------------------------------------------------------------------

		// Similar a esto.

		let respuesta = await import("./importar.js");

		respuesta.suma();
		new respuesta.Usuario();

	}());
```

### ============================ ###
###### ===--- Errores  ---=== ######
### ============================ ###

No se puede declarar y despues exportar.

```js
	function myFunction(){
		// Do something...
	}

	export myFunction; // ERROR.
```

Tampoco hacer varias declaraciones y luego exportar solo una declaracion, (a menos que utilices un objeto).

```js
	var variableUno = "Valor 1";
	var variableDos = "Valor 2";
	var variableTres = "Valor 3";

	export variableDos; // ERROR.
```

Tambien funciones anonimas dan error.

```js
	export function(){
		// ERROR.
	}
```

**NOTA**: [](export) es utilizado para hacer varias exportaciones, (o una exportacion ya declarada).

### ========================================== ###
###### ===--- Export Defualt Anonimo ---=== ######
### ========================================== ###

[](default), permite hacer una unica expoetacion, (no varias).

###### --- --- --- --- --- --- importar.js --- --- --- --- --- --- ######

```js
	// En este contexto si que es posible exportar funciones anonimas.
	export default function(){
		console.log("Hello")
	}
```

Ahora pasemos a importarla.

###### --- --- --- --- --- --- index.js --- --- --- --- --- --- ######

```js
	(async function(){

		let response = await import("./importar.js");

		console.log(response.default) // function(){ ... }

		// Ejecutas la unica funcion exportada.
		response.default();

	}());
```


**NOTA**: [](export_default) solo funciona cuando quieres exportar un solo dato.

### ================================== ###
###### ===--- Export Defualt ---=== ######
### ================================== ###

Aqui si podemos tener varias declaraciones.

```js
	function fn1(){
		console.log("Hello")
	}

	function fn2(){
		console.log("Hello 1")
	}

	function fn3(){
		console.log("Hello 2")
	}

	// Pero solo expoerar un dato.
	export default fn1;

	// -----------------------------------------------------------------------

	respuesta.default; // function fn1(){ console.log("Hello") }
```

O podemos exparlo todo como un unico dato, en este caso (un objeto).

```js
	export default { fn1, fn2, fn3 }

	// -----------------------------------------------------------------------

	respuesta.default; // {fn1: ƒ, fn2: ƒ, fn3: ƒ}
```

### =================================================== ###
###### ===--- Similitudes (export) / (import) ---=== ######
### =================================================== ###

Ambos pueden exportar varias cosas en un solo objeto.

```js

	// Ahora si permite hacer declaraciones sin necesidad de exportarlas.

	export { variableUno, fn2 }

	// -----------------------------------------------------------------------

	// Permite declarar sin exportar, pero solo exporta una unica cosa.
	// (Puede ser anonima, porque solo es una).

	export default { variableUno, fn2 }

```