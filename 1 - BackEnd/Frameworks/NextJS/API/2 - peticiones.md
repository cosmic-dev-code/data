### =========================== ###
###### ===--- Metodos ---=== ######
### =========================== ###

# ------------------------ #
# ------ Definicion ------ #
# ------------------------ #

###### --- --- --- --- --- --- {proyecto}/src/app/api/route.js --- --- --- --- --- --- ######

<!-- Aqui definimos nuestras respuestas de cuerdo a la ruta. -->

```js

	// Aqui exportamos como (export).
	
	// Cuando a esta ruta se hace una peticion GET.
	export function GET(){
		// ...
	}

	// Cuando a esta ruta se hace una peticion POST.
	export function POST(req, res){
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

Las funciones pueden ser asincronas.

```js
	export async function POST()
	{
		let result = await pep();
	}

	// Podemos declarar tambien funciones fuera.
	async function pep(){
		// ...
	}
```

# ------------------------ #
# ------ Un handler ------ #
# ------------------------ #

###### --- --- --- --- --- --- {proyecto}/src/app/api/route.js --- --- --- --- --- --- ######

<!-- Si quieres escuchar peticiones diferentes. -->

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
###### ===--- Parametros ---=== ######
### ============================== ###

<!-- Similar a las (paginas), el sistema de enrutamiento se declara mediante (archivos). -->

<!-- Para definir parametros en las rutas. -->

	./src
	----------------------------------------------- ( /api/{nombre} ): Se recibe el nombre
		./api
			[nombre] === Nombre de PARAM.
			route.js === Respuesta.
	----------------------------------------------- ( /api/hola/{edad} ): Segundo nivel de nuestra API.
			./hola
				[edad] === Nombre de PARAM.
				route.js === Respuesta.

<!-- En este ejemplo las rutas declaradas son:  -->
<!-- 
	--- /api
	--- /api/[nombre]
	--- /api/hola
	--- /api/hola/[edad]
-->

###### --- --- --- --- --- --- {proyecto}/src/app/api/[nombre].js --- --- --- --- --- --- ######

```js
	// Por medio de (params).
	export function GET(request, { params }){

		// Formas de extraccion.
		let nombre = params.nombre;
		let { nombre } = params;
	}
```

<!-- Utilizando POST. -->

```js
	// Por medio de (request).
	export async function POST(request, response){

		// Resolvemos la (promesa).
		const body = await request.json();

		// Formas de extraccion.
		let nombre = body.nombre;
		let { nombre } = body;
	}
```