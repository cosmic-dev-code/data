### ==================================== ###
###### ===--- Ejecutar Node JS ---=== ######
### ==================================== ###

<!-- Para esto creamos un archivo, por ejemplo uno llamado (program.js), dentro de el escribimos un codigo basico. -->

###### --- --- --- --- --- --- {proyecto}/index.js --- --- --- --- --- --- ######

```js
	"use strict";

	console.log(`La suma de 5 + 5 es: ${(5 + 5)}. `);
```

<!-- Ahora para ejercutarlo hacemos lo siguiente: 
	--- Abrimos el terminal y vamos a la ruta donde se encuentre nuestro archivo (JS). -->

```bat
	: Ejecutamos el siguiente comando.
	node proyecto/index.js

	: (--watch) Para no tener que reiniciar el servidor una y otra vez.
	node proyecto/index.js --watch
```

<!-- La salida en nuestra terminal sera la siguiente:  -->

```txt
	La suma de 5 + 5 es: 10.
```