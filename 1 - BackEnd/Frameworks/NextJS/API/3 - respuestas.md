### ============================== ###
###### ===--- Respuestas ---=== ######
### ============================== ###

# ---------------------------- #
# ------ Clase Response ------ #
# ---------------------------- #

<!-- Esta es otra forma de retornar la respuesta. -->

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

		// El cuerpo puede tener la estructura que queramos.
		return NextResponse.json({ mensaje: "Hola mundo" });

		// Mandar con un codigo de estado.
		return NextResponse.json({ mensaje: "Hola mundo" }, { status: 200 });
	}

```

<!-- Ejemplo de salida. -->

```json
	{
		"mensaje": "Hola mundo"
	}
```