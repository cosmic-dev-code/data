### ================================== ###
###### ===--- Crear proyecto ---=== ######
### ================================== ###

<!-- Supongamos que ya tienes tu libreria y quieres publicarla en NPM. -->

<!-- Crea la carpeta de tu proyecto. -->

```bat
	mkdir cosmic-animation & cd cosmic-animation
```

<!-- Ejecuta el siguiente comando para iniciar tu proyecto. -->

```bat
	: Crea el archivo (package.json) saltando las preguntas sobre tu proyecto.
	: NOTA: Esta forma es la recomendada para no ingresar licencias.
	npm init --y

	: Esto te pedira manualmente que ingreses los datos generales de tu proyecto, (nombre, version, descripcion, etc).
	npm init
```

<!-- Ahora se creara el archivo (package.json) dentro de tu proyecto. -->

```json
	{
		// Datos generales del proyecto.
		"name": "cosmic-animation",
		"version": "1.0.0",
		"description": "",
		// Otros datos del proyecto.
		"keywords": [],
		"author": "",
		// Indica la licencia.
		"license": "ISC", 
		// Archivo principal del proyecto.
		"main": "index.js",
		// Comandos del proyecto.
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		}
	}
```

<!-- Ahora procede a crear una carpeta llamada (src) donde estaran los archivos de tu proyecto, 
incluyendo el archivo raiz que tengas en el campo "main". -->

```bat
	mkdir src & cd src
```