### ========================================= ###
###### ===--- Instalacion por (CDN) ---=== ######
### ========================================= ###

<!-- ---------------------------- -->
<!-- ------ CDN por (link) ------ -->
<!-- ---------------------------- -->

```html
	<head>
		<!-- Podemos llamar al CDN de la hoja de estilos. -->
	  	<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
		
		<!-- NOTA: (Esto esta desactualizado): esta manera no es recomendable ya que carece de muchas 
		funcionalidades que nos brinda (tailwind), entre aquellas desventajas: 
			--- No puedes personalizar el tema predeterminado de Tailwind.
			--- No se puede utilizar cualquier directivas como @apply, @variants, etc.
			--- No puede habilitar variantes adicionales como group-focus.
			--- No puede instalar complementos de terceros.
			--- No puedes sacudir los estilos que no usas.
			--- Hay utilidades que no se encuentran en esta version.

		Esos son los problemas que tenemos al trabajar con la (cdn). -->
	</head>
```

<!-- ------------------------------ -->
<!-- ------ CDN por (script) ------ -->
<!-- ------------------------------ -->

```html
	<head>
	  <!-- Podemos llamar al (script) que permite hacer algunas modificaciones. -->
	  <script src="https://cdn.tailwindcss.com"></script>
	  <!-- NOTA: Play CDN está diseñado solo para fines de desarrollo y no es la mejor opción para la producción. -->
	</head>
```

### ========================================= ###
###### ===--- Instalacion por (npm) ---=== ######
### ========================================= ###

<!-- Debemos tener instalado (Node JS) para instalar Tailwindcss y sus dependecias. -->

```bat
	node -v
```

<!-- Ejecutamos el siguiente comando: -->

```bat
	npm init -y
```

<!-- Crea un archivo (json) el cual es necesario para tailwind, algo parecido a esto:  -->
```json
	{
	  "name": "Tildwincss",
	  "version": "1.0.0",
	  "description": "",
	  "main": "index.js",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
	  "keywords": [],
	  "author": "",
	  "license": "ISC"
	}
```
<!-- Despues de haber creado el (json), sigue instalar tailwind, ejecutaremos el siguiente comando: -->

```bat
	npm install tailwindcss
```

<!-- El comando anterior nos creara una carpeta llamada (node_modules), ahora falta extraer los estilos de (tailwind): -->
*	--- Podemos crear las carpetas [](public) y [](src) para modularizar el codigo.
*	--- Podemos crear los archivos en la misma raiz.

[](styles.css) sera el archivo para crear utilidades.

```bat
	mkdir public src & cd src
	
	echo @tailwind base; > styles.css
	echo @tailwind components; >> styles.css
	echo @tailwind utilities; >> styles.css

	cd ..
```

###### --- --- --- --- --- --- {proyecto} --- --- --- --- --- --- ######

<!-- Ahora debemos ejecutar el comando:  --> -->

```bat

	Rem Debemos crear el archivo (tailwind.config.js) para configurar los estilos de (tailwind) 
	: donde el archivo (final.css) se estara sobreescribiendo con los nuevos estilos.
	
	Rem puedes ejecutar uno de los dos siguientes comandos: 

	: Crea el archivo (tailwind.config.js) sin estilos para crear desde cero.
	npx tailwindcss init

	: Crea el archivo (tailwind.config.js) con estilos prefabricados, (con utilidades de tailwind).
	npx tailwindcss init --full

	: Cambia el nombre del archivo (tailwind.config.js) por ejemplo a (tailwindcss-config.js).
	npx tailwindcss init tailwindcss-config.js
```

###### --- --- --- --- --- --- {proyecto}/tailwind.config.js --- --- --- --- --- --- ######

<!-- Este archivo se encarga de crear las configuraciones de las utilidades de (tailwindcss). 

NOTA: Este es un ejemplo con el archivo completamente vacio, (no es recomendable asi). -->

```javascript
	module.exports = {
		content: [],
		theme: {
			extend: {},
		},
		plugins: [],
	}
```