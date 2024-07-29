### =========================================== ###
###### ===--- Transpilacion de codigo ---=== ######
### =========================================== ###

<!-- Ahora transpila tu codigo JavaScript a ES6. -->

```bat
	: (Archivo de entrada) a (archivo de salida).
	npx babel babel index.js --out-file index-transpiled.js

	: Puedes indicar una ruta.
	npx babel src/tu_archivo.js --out-file src/js/archivo_transpilado.js
```