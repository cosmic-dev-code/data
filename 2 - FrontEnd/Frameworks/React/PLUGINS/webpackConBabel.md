### =========================== ###
###### ===--- Webpack ---=== ######
### =========================== ###

Es una herramienta de empaquetado de módulos para aplicaciones web, es utilizado comunmente para 
la __optimizacion__ de la aplicacion.

### ========================= ###
###### ===--- Babel ---=== ######
### ========================= ###

Se utiliza comunmente para convertir el codigo JavaScript a codigo compatible para navegadores modernos y antiguos, 
de esta manera se pueden crear aplicaciones [](compatibles) con varios [](navegadores).

### =============================== ###
###### ===--- Instalacion ---=== ######
### =============================== ###

Para la instalacion de __WebPack__ y __Babel__ en el proyecto React debemos seguir estos pasos.

```bat
	: Crear un proyecto React.
	npx create-react-app mi-proyecto

	cd mi-proyecto

	: Instalacion de (WebPack) y (Babel).
	npm install webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev
```

Ahora debemos [](crear) un archivo de configuracion para webpack llamado [](webpack.config.js).

###### --- --- --- --- --- --- mi-proyecto/webpack.config.js --- --- --- --- --- --- ######

```javascript
	// En este archivo se configura WebPack para que use babel y otras opciones segun las necesidades del proyecto.

	// NOTA: Este es un (ejemplo).
	
	const path = require('path');

	module.exports = {
		// Entrada de la aplicación.
		entry: './src/index.js', 
		// Salida de la aplicación.
		output: {
			// Nombre del archivo de salida.
			filename: 'bundle.js', 
			// Ruta donde se guardará el archivo de salida.
			path: path.resolve(__dirname, 'dist')
		}, 
		// Reglas para manejar diferentes tipos de archivos.
		module: {
			// Regla para archivos JavaScript.
			rules: [{
				// Expresión regular para seleccionar archivos JavaScript.
				test: /\.js$/,
				// Excluir archivos en la carpeta node_modules.
				exclude: /(node_modules)/,
				use: {
					// Usar Babel Loader para transpilar el código JavaScript.
					loader: 'babel-loader',
					options: {
						// Usar el preset @babel/preset-env.
						presets: ['@babel/preset-env']
					}
				}
			}]
		}
	};
```

###### --- --- --- --- --- --- mi-proyecto/package.json --- --- --- --- --- --- ######

<!-- Ahora actualizamos el archivo (package.json). -->

```json
	// Incluimos los scripts que ejecute (WebPack).
	"scripts": {
		"start": "webpack-dev-server --mode development --open",
		"build": "webpack --mode production"
	}
```