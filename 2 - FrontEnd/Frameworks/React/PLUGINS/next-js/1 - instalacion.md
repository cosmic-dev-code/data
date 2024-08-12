### ========================================= ###
###### ===--- Instalacion por (npm) ---=== ######
### ========================================= ###

<!-- Instalar por medio de consola. -->

```bat
	npm i next --save
```

###### --- --- --- --- --- --- package.json --- --- --- --- --- --- ######

```json
	{
		// Dentro de dependencias.
		"dependencies": {
			// Debemos tener estas dependencias.
			"next": "^11.0.0", 
			"react": "^17.0.2", 
			"react-dom": "^17.0.2"
		}, 

		// En "start" cambiamos el arranque a "next".
		"scripts": {
			"start": "next"
		}
	}
```

<!-- NOTA: Es importante crear una carpeta para las paginas, de esta manera se tendra el codigo mas 
modularizado y controlado. -->

###### --- --- --- --- --- --- next.config.js --- --- --- --- --- --- ######

<!-- Este archivo de configuracion de (Next.js) se utiliza para configurar diferentes aspectos de la aplicacion. -->

```js
	module.exports = {
	    // Configuración del webpack
	    webpack: (config, { isServer }) => {
	        // Personalización de la configuración de webpack
	        return config;
	    },

	    // Configuración del servidor
	    serverRuntimeConfig: {
	        // Configuración para el servidor
	    },
	    publicRuntimeConfig: {
	        // Configuración para el cliente
	    },
	};
```