### ============================================ ###
###### ===--- Transpilacion del codigo ---=== ######
### ============================================ ###

<!-- Digamos que ahora ya tienes el codigo fuente de tu libreria. -->

- [](src/index.js).

<!-- Ahora debes agegar al final de tu codigo el codigo que deseas (exportar), para que pueda ser importando por 
terceros cuando sea instalado via (npm). -->

```js
	export default MiClase;

	// O bien.

	export default { Clase1, Clase2, Clase3 }
```

<!-- Transpila tu codigo utilizando Babel de acuerdo para lo que necesites, (Navegador) o (Node). -->
<!-- La carpeta con el codigo transpilado debe llamarse (dist-browser) o (dist-node). -->

```bat
	: Utilizando Babel.
	npx babel src/index.js --out-file dist-browser/index.js
	npx babel src/index.js --out-file dist-node/index.js

	: Pero si utilizas TypeScript.
	tsc src/index.ts --outDir dist-browser --module ES6
	tsc src/index.ts --outDir dist-node
```

<!-- Modifica el (package.json) -->

```json
	{
		// ...

		"scripts": {
			// Transpilar para el navegador, (si tu codigo es para el navegador).
			"build-browser": "npx babel src/index.js --out-file dist-browser/index.js", 
			// Transpilar para NodeJS, (si tu codigo es para Node).
			"build-node": "npx babel src/index.js --out-file dist-node/index.js", 
			// Ejecuta los dos comandos anteriores.
			"build": "npm run build-browser & npm run build-node"
		}, 

		// Indicamos la ruta de los archivos correspondientes, (cuando el usuario realice un import de nuestro codigo).
		"main": "dist-node/index.js", 
		"browser": "dist-node/index.js", 

		// ...
	}
```