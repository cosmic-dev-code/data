### ==================================== ###
###### ===--- ES Modules o ESM ---=== ######
### ==================================== ###

ESM es un sistema de modularización de archivos utilizado en JavaScript. A diferencia de CommonJS, 
**ESM es compatible con los navegadores web** y se puede utilizar tanto en entornos de 
procesado/transpilado como directamente desde el navegador.

Este sistema de modularizado se produjo en **2015**.

### ===================================== ###
###### ===--- Exportar archivos ---=== ######
### ===================================== ###

<!-- Para exportar datos utilizamos un archivo JavaScript con la extension (mjs). -->

###### --- --- --- --- --- --- {proyecto}/functions.mjs --- --- --- --- --- --- ######

```js
	function miFuncion(){}

	// Exportamos algun dato de referencia.
	export miFuncion;

	// Declaramos y exportamos.
	export function miFuncion(){}

	// Exportamos algun dato de forma anonima.
	export {
		// ...
	}
```

### ===================================== ###
###### ===--- Requerir archivos ---=== ######
### ===================================== ###

###### --- --- --- --- --- --- {proyecto}/functions.mjs --- --- --- --- --- --- ######

<!-- Suponiendo que tenemos un archivo llamado (functions.mjs) dentro de la misma raiz. -->

```js
	function suma(num, num1){
		return num + num1;
	}

	// Exportando funcion.
	export suma;
```

<!-- Alternativamente. -->

```js
	export function suma(num, num1){
		return num + num1;
	}
```

<!-- INVALIDA: Se requiere un nombre para exportar, no pueden exportarse datos de manera anonima. -->

```js
	export function (num, num1){
		return num + num1;
	}
```

###### --- --- --- --- --- --- {proyecto}/program.js --- --- --- --- --- --- ######

```js
	// Requerimos el archivo el cual se encuentra en la misma raiz (./), pero sin el tipo de extension, (solo el nombre).
	const sumarNumeros = require("./functions");

	sumarNumeros(10, 10);

	// NOTA: El problema es que cambiamos el nombre de lo que recibimos del (require).
```