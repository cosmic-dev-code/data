### ==================================== ###
###### ===--- API Enrutamiento ---=== ######
### ==================================== ###

Por convencion, para crear las API REST estan se encuentran dentro de un directorio llamado 
[](api), el cual alberca las APIs que utilizaremos como servidor.

Estas APIs pueden ejecutar tareas como conectarse a bases de datos, y demas.

Por convencion la carpeta se llama [](api) y los archivos que responden son [](route.js).

	./src
	----------------------------------------------- ( /api ): Primer nivel de nuestra API.
		./api
			route.js === Respuesta.
	----------------------------------------------- ( /api/hola ): Segundo nivel de nuestra API.
			./hola
				route.js === Respuesta.

# Asi es como se maneja el [](Enrutamiento) de nuestras APIs.

### =========================== ###
###### ===--- Metodos ---=== ######
### =========================== ###

###### --- --- --- --- --- --- {proyecto}/src/app/api/route.js --- --- --- --- --- --- ######

Aqui definimos nuestras respuestas de cuerdo a la ruta.

# Codigo de servidor (Node JS).

```js

	// Aqui exportamos como (export).
	
	// Cuando a esta ruta se hace una peticion GET.
	export function GET(){
		// ...
	}

	// Cuando a esta ruta se hace una peticion POST.
	export function POST(){
		// ...
	}

	// Cuando a esta ruta se hace una peticion DELETE.
	export function DELETE(){
		// ...
	}

	// Cuando a esta ruta se hace una peticion PUT.
	export function PUT(){
		// ...
	}

	// Cuando a esta ruta se hace una peticion PATCH.
	export function PATCH(){
		// ...
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/api/route.js --- --- --- --- --- --- ######

Si quieres escuchar peticiones diferentes.

```js

	// Aqui exportamos como (default) cuando se trata de (handler).
	export default function handler(req, res) {
		if(req.method === 'GET'){
			// ...
		}else if(req.method === 'POST'){
			// ...
		}else if(req.method === 'DELETE'){
			// ...
		}else if(req.method === 'OPTIONS'){
			// ...
		}else if(req.method === 'PUT' || req.method === 'PATCH'){
			// ...
		}else{
			// ...
		}
	}

```

### ============================== ###
###### ===--- Respuestas ---=== ######
### ============================== ###

# ---------------------------- #
# ------ Clase Response ------ #
# ---------------------------- #

Esta es otra forma de retornar la respuesta.

```js
	export function GET(){
		/* Rerornamos la (instancia de una Respuesta), recibe: 
			--- Contenido de la respuesta, (text, json, HTML, Blob, etc).
			--- In objeto con los encabezados. */
	    return new Response("Hola mundo", {
	    	// Estado de respuesta.
	        status: 200, 
	        // Tipo de contenido a renderizar.
	        headers: { "Content-Type": "text/html; charset=UTF-8" }
	    });
	}
```

# --------------------------------- #
# ------ Modulo NextResponse ------ #
# --------------------------------- #

```js
	// Importamos.
	import { NextResponse } from "next/server";

	export function GET(){

		// Retornamos una respuesta JSON.
		return NextResponse.json({
			// El cuerpo puede tener la estructura que queramos.
			mensaje: "Hola mundo"
		});
	}

```

Ejemplo de [](salida).

```json
	{
		"mensaje": "Hola mundo"
	}
```

### ============================== ###
###### ===--- Parametros ---=== ######
### ============================== ###

Para definir parametros en las rutas.

	./src
	----------------------------------------------- ( /api/brandon ): Se recibe el nombre
		./api
			[nombre] === Nombre de parametro.
			route.js === Respuesta.
	----------------------------------------------- ( /api/brandon/24 ): Segundo nivel de nuestra API.
			./hola
				[edad] === Nombre de parametro.
				route.js === Respuesta.

En este ejemplo las rutas declaradas son: 

	- /api
	- /api/[nombre]
	- /api/hola
	- /api/hola/[edad]

###### --- --- --- --- --- --- {proyecto}/src/app/api/[nombre].js --- --- --- --- --- --- ######

```js
	export function GET(request, { params }){

		let nombre = params.nombre; // Contiene el nombre.

	    return new Response(nombre);
	}
```