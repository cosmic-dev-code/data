### ================================ ###
###### ===--- Package.json ---=== ######
### ================================ ###

<!-- Puede tener multiples propiedades. -->

```json
	{
		// Nombre, version y descripcion del proyecto.
		"name": "cosmic-animation",
		"version": "1.0.0",
		"description": "",

		// Palabras clave por las que pueden encontrar tu proyecto.
		"keywords": ["react", "html", "css", "animations"],

		// Indica solo el nombre del autor.
		"author": "Brandon Anthony",
		// Podemos resumir detalles en una sola linea.
		"author": "Brandon Anthony <contact@brandondeveloper.com> (https://brandondeveloper.com/)", 
		// Inidica mas detalles del autor.
		"author": {
			"name": "Brandon Anthony", 
			"email": "contact@brandondeveloper.com", 
			"url": "https://www.brandondeveloper.com"
		},

		// Puedes especificar varios autores.
		"authors": [
			{
				"name": "Autor 1",
				"email": "autor1@example.com"
			},
			{
				"name": "Autor 2",
				"email": "autor2@example.com"
			}
		], 

		// Puedes especificar contribuidores.
		"contributors": [
			{
				"name": "Contribuyente 1",
				"email": "contribuyente1@example.com"
			},
			{
				"name": "Contribuyente 2",
				"email": "contribuyente2@example.com"
			}
		], 


		// Indica el repositorio del proyecto.
		"repository": {
			"type": "git",
			"url": "https://github.com/npm/cli.git"
		}, 

		// Pagina del proyecto en especifico, la gente suele colocar el repositorio de (github) o el (readme).
		"homepage": "https://github.com/npm/cli.git#readme", 

		/* La licencia indica si hay restricciones legales para utilizar.
			--- (MIT) y (ISC): De uso publico, puedes hacer lo que te plazca. */
		"license": "ISC", 

		// Archivo principal del proyecto, para (Navegar) y para (Node).
		"browser": "dist-node/index.js", 
		"main": "dist-node/index.js", 

		// Comandos para ejecutar las dependencias.
		"scripts": {
			"build-browser": "npx babel src/index.js --out-file dist-browser/index.js", 
			"build-node": "npx babel src/index.js --out-file dist-node/index.js", 
			"build": "npm run build-browser & npm run build-node"
		}, 

		// En este sitio van las dependencias de tu proyecto.
		"devDependencies": {
			"typescript": "^4.5.4", 
		    "@babel/cli": "^7.23.9",
		    "@babel/core": "^7.23.9",
		    "@babel/preset-env": "^7.23.9",
		}
	}
```

### ========================== ###
###### ===--- README ---=== ######
### ========================== ###

<!-- Todo proyecto debe tener un archivo (README.md), este contendra toda la documentacion de nuestro codigo. -->