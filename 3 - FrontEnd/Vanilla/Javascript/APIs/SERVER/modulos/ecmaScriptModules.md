<!-- ADVERTENCIA: --- NECESITA UN SERVIDOR -->

### ============================= ###
###### ===--- Common JS ---=== ######
### ============================= ###

Aplican todas las bases de **Common JS** para **Ecma Script Modules**, pero si que hay minimos cambios.

### ============================ ###
###### ===--- Exportar ---=== ######
### ============================ ###

Podemos exportar una unica cosa.

###### --- --- --- --- --- --- importar.js --- --- --- --- --- --- ######

```js
	function fn1(){ /* ... */ }

	function fn2(){ /* ... */ }

	function fn3(){ /* ... */ }

	// Solo la segunda funcion.
	export { fn2 }
```

O podemos exportar todo.

```js
	export function fn1(){ /* ... */ }

	export function fn2(){ /* ... */ }

	export function fn3(){ /* ... */ }

	// ---------------------------------------------------------

	// Equivalente a esto.

	export { fn1, fn2, fn3 }
```

# ------------------------------ #
# ------ Ahora a importar ------ #
# ------------------------------ #

Lo que define a **(Ecma Script Modules)**, es su forma de importar los datos.

```html
	<!-- Arhivo que importa los datos desde un fichero (JavaScript). -->

	<!-- Marcamos como (MODULE) en el (type) para poder utilizar (Ecma Script Modules). -->
	<script type="module" src="index.js"></script>
```

Ahora si podemos importar en el [](index.js).

###### --- --- --- --- --- --- index.js --- --- --- --- --- --- ######

```js
	// Con (from) indicamos el origen del archivo.
	import importar from "./importar.js";

	// Ejecutamos.
	importar.fn1();
	importar.fn2();
	importar.fn3();
```

Podemos [](desestructurar) el objeto.

```js
	import { fn1, fn2, fn3 } from "./importar.js";

	// Ejecutamos.
	fn1(); fn2(); fn3();
```

### ================================== ###
###### ===--- Export Defualt ---=== ######
### ================================== ###

Exportar datos anonimos.

```js
	export default function(){
		// ...
	}

	// ------------------------------------------------------------------

	export default 30;
```

Ahora importamos el dato.

```js
	import data from "./importar.js";

	// El dato depende de lo que exportes.
	data; // Fuction|number
```