### ======================== ###
###### ===--- REPL ---=== ######
### ======================== ###

**Read-Eval-Print Loop** o **Bucle de Lectura de Evaluacion e Impresion** permite ejecutar código JavaScript directamente 
en la linea de comandos sin tener que crear un archivo .JS aparte.

<!-- Accedemos al REPL  -->

```bat
	node
```

<!-- Podemos ejecutar codigo JavaScript como en la consola del navegador. -->

```js
	
	console.log("Hola mundo"); 

	// >> "Hola mundo"

	function sumar(num, num1){return num + num1;}

	// >> undefined

	sumar(5,5);

	// >> 10

```

<!-- Con (.help) podemos ver las opciones que tenemos dentro del (REPL). -->

```bat
	.help
```

<!-- Para salir del editor utilizamos la instruccion (.exit) -->

```bat
	.exit
```