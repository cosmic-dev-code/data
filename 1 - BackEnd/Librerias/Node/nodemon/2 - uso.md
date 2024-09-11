### ======================= ###
###### ===--- Uso ---=== ######
### ======================= ###

<!-- Ahora podemos usarlo en lugar de (node {archivo a ejecutar}). -->

```bat

	: Forma antigua de ejecutar.
	node index.js

	: Con nodemon para detectar cambios sin recargar.
	nodemon index.js

```

###### --- --- --- --- --- --- {proyecto}/package.json --- --- --- --- --- --- ######

<!-- Podemos utilizar los scripts. -->

```json
	{
		"scripts": {
			// Definimos aqui el comando.
			"dev": "nodemon index.js"
		}
	}
```

<!-- Ahora ejecutamos. -->

```bat
	npm run dev
```