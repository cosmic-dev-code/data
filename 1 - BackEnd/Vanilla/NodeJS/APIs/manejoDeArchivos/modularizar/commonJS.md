### ================================== ###
###### ===--- CommonJS o CJS ---=== ######
### ================================== ###

CommonJS es un sistema de modularización de archivos utilizado en JavaScript del lado del servidor.
Los **navegadores no admiten el uso de CommonJS**, CommonJS utiliza la extension *.js* 
en sus archivos.

Este sistema de modularizado se produjo en **2009**.

### ===================================== ###
###### ===--- Exportar archivos ---=== ######
### ===================================== ###

###### --- --- --- --- --- --- {proyecto}/functions.js --- --- --- --- --- --- ######

<!-- Utilizamos (exports) para exportar diferentes tipos de datos, por ejemplo: 
	--- Objetos, clases, funciones, arrays, etc. -->

```js
	function miFuncion(){}

	// Podemos exportar un funcion, objeto, clase, etc.
	exports = miFuncion;

	// Podemos declarar el nombre y exportar.
	exports.printeable = function(){
		// ...
	};

	// Podemos exportar de forma anonima.
	exports = {
		// ...
	};
```

###### --- --- --- --- --- --- {proyecto}/date.js --- --- --- --- --- --- ######

<!-- Podemos optar por utilizar (module.exports) igual a (exports). -->

```js
	module.exports.FullData = function(){

		this.getData = () => {/* ... */};

		this.isData = () => {/* ... */};

		this.remove = function(){/* ... */};

		this.add = function(){/* ... */};

		this.has = function(){/* ... */};

		this.clear = function(){/* ... */};
	};
```

### ===================================== ###
###### ===--- Requerir archivos ---=== ######
### ===================================== ###

###### --- --- --- --- --- --- {proyecto}/functions.js --- --- --- --- --- --- ######

<!-- Suponiendo que tenemos un archivo llamado (functions.js) dentro de la misma raiz. -->

```js
	function suma(num, num1){
		return num + num1;
	}

	// Exportando funcion.
	module.exports = suma;
```

###### --- --- --- --- --- --- {proyecto}/program.js --- --- --- --- --- --- ######

```js
	// Requerimos el archivo el cual se encuentra en la misma raiz (./).
	const sumarNumeros = require("./functions.js");
	// Tambien podemos requirir los datos sin especificar la extension.
	const sumarDigitos = require("./functions");

	sumarNumeros(10, 10);

	// NOTA: El problema es que cambiamos el nombre de lo que recibimos del (require).
```

# ----------------------------- #
# ------ Forzar nombrado ------ #
# ----------------------------- #

###### --- --- --- --- --- --- {proyecto}/functions.js --- --- --- --- --- --- ######

```js
	function suma(num, num1){
		return num + num1;
	}

	// Exportamos un objeto anonimo con un metodo llamado (suma).
	exports = {
		suma // suma: function(){}
	}
```

###### --- --- --- --- --- --- {proyecto}/program.js --- --- --- --- --- --- ######

```js
	// Destructuramos el metodo tal cual se llama.
	const { suma } = require("./functions.js");

	sumarNumeros(10, 10);
```

# -------------------------------------- #
# ------ Exportar varios archivos ------ #
# -------------------------------------- #

###### --- --- --- --- --- --- {proyecto}/data.js --- --- --- --- --- --- ######

```js
	var variableUno = 50, 
		variableDos = "Dos";

	// En cada (module.exports) declaramos el (nombre) = (valor).
	module.exports.variableUno = variableUno;
	module.exports.variableDos = variableDos;
	module.exports.variableTres = function(){}

	// Esta es otra forma de hacerlo.
	module.exports = {
		variableUno, 
		variableDos, 
		variableTres: function(){}
	}

	// INCORRECTO.
	module.exports = variableUno;
	module.exports = variableDos;
	// Solo esta ultima se exportara.
	module.exports = function suma(){}
```

###### --- --- --- --- --- --- {proyecto}/program.js --- --- --- --- --- --- ######

<!-- Para recibir lo expoetado. -->

```js
	const datos = require("./data.js");

	datos.variableUno;
	datos.variableDos;
	datos.variableTres();
```

<!-- Destructurando objeto. -->

```js
	const { variableUno, variableDos, variableTres } = require("./data.js");

	variableTres();
```

