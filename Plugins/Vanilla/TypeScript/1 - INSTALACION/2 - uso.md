### ==================================== ###
###### ===--- Ejecutar archivo ---=== ######
### ==================================== ###

<!-- Primero debemos crear un archivo (TypeScript), no importa en que directorio sea, 
podemos escribir codigo (JavaScript) normal. -->

###### --- --- --- --- --- --- {proyecto}/prueba.ts --- --- --- --- --- --- ######

```ts
	interface Person{
		names:string,
		surnames:string,
		age:number,
		matters:string[],
		active:boolean
	}

	let user:Person = {
		names: "Brandon Anthony",
		surnames: "Olivares Amador",
		age: 22,
		matters: ["Javascript", "PHP", "TypeScript"],
		active: true
	};

	let getActive:Function = (active:boolean):string => {
		if(active) return "Activo";
		else return "Desactivado";
	};

	console.log(`
		<section>
			<dl>
				<dt>Persona ${user.names}</dt>
				<dd>
					<ol>
						<li><b>Nombres: </b>${user.names}</li>
						<li><b>Apellidos: </b>${user.surnames}</li>
						<li><b>Edad: </b>${user.age}</li>
						<li><b>Materias: </b>${user.matters.join(', ')}</li>
						<li><b>Estado: </b>${getActive(user.active)}</li>
					</ol>
				</dd>
			</dl>
		</section>
	`);
```

<!-- Para ejecutar el archivo (prueba.ts) debemos ingresar el siguiente comando:  -->

```bat
	tsc prueba.ts
```

<!-- Con el comando anterior hemos ejecutado el archivo, por lo que se crea en el mismo directorio un 
archivo llamado (prueba.js). -->

###### --- --- --- --- --- --- {proyecto}/prueba.js --- --- --- --- --- --- ######

```js
	var user = {
	    names: "Brandon Anthony",
	    surnames: "Olivares Amador",
	    age: 22,
	    matters: ["Javascript", "PHP", "TypeScript"],
	    active: true
	};
	var getActive = function (active) {
	    if (active)
	        return "Activo";
	    else
	        return "Desactivado";
	};
	console.log("\n\t\t<section>\n\t\t\t<dl>\n\t\t\t\t<dt>Persona " + user.names + "</dt>\n\t\t\t\t<dd>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li><b>Nombres: </b>" + user.names + "</li>\n\t\t\t\t\t\t<li><b>Apellidos: </b>" + user.surnames + "</li>\n\t\t\t\t\t\t<li><b>Edad: </b>" + user.age + "</li>\n\t\t\t\t\t\t<li><b>Materias: </b>" + user.matters.join(', ') + "</li>\n\t\t\t\t\t\t<li><b>Estado: </b>" + getActive(user.active) + "</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</dd>\n\t\t\t</dl>\n\t\t</section>\n\t");
```

### ======================================== ###
###### ===--- Colocar un (escucha) ---=== ######
### ======================================== ###

<!-- Todo el codigo (TypeScript) se transforma en codigo (Javascript). -->

```bat
	: El compilador se queda a la escucha.
	tsc prueba.ts --watch
	tsc prueba.ts -w

	: (--outDir), indica otro directorio de salida de compilacion.
	tsc ./src/ts/global.ts --outDir ./public/assets/js --watch
```

<!-- Con esto el compilador se queda a la (escucha), mostrando errores y transformando el JS en tiempo real. -->

# ------------------------------------ #
# ------ Compilar un directorio ------ #
# ------------------------------------ #

<!-- Creamos un archivo de configuracion JSON. -->

```bat
	tsc --init
```

```json
	{
		// Opciones del compilador, (ajustes).
		"compilerOptions": {

			/**
			 * Sistema de modulos, (importar/exportar) archivos JS.
			 */
			
			// Especifica el formato de salida JS para (el Navegador Nativo).
			"target": "ES6", 
			"module": "ESNext", 
			// Especifica el formato de salida JS para (Node JS).
			"target": "es5",
			"module": "commonjs",

			/**
			 * Rutas de archivos.
			 */

			// Ruta de salida TS compilado a JS.
			"outDir": "./public/assets/js", 
			// Ruta de archivos TS.
			"rootDir": "./src/ts", 
			// No toma en cuenta los tipos de (.d.ts), (codigo de terceros de librerias).
			"skipLibCheck": true,
			/* Permite la compatibilidad (ES6) y (CommonJS) para usarlos en el mismo proyecto.
			En lugar de utilizar (require), utilizas (import). */
			"esModuleInterop": true,
			/* Obliga a que todos los archivos se importen con el mismo nombre 
			(mayusculas) y (minusculas). */
			"forceConsistentCasingInFileNames": true,
			// Detectar errores de tipo en el código antes de que se ejecute.
			"strict": true,
		},

		"include": [
			// Indica todos los archivos a considerar para ser procesados.
			"./src/ts/**/*.ts", 
			// Indica archivos adicionales a considerar como lo son archivos de (tipos).
			"src/ts/resources/declares.d.ts"
		]
	}
```

<!-- Ahora ejecutamos el archivo de configuracion. -->

```bat
	: Se queda a la escucha del archivo, (--watch).
	tsc --watch
```