{proyecto}/### ==================================== ###
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

### ================================== ###
###### ===--- Ver un archivo ---=== ######
### ================================== ###

<!-- Todo el codigo (TypeScript) se transforma en codigo (Javascript).

Para no tener que estar ejecutando el mismo comando ingresamos el siguiente comando:  -->

```bat
	tsc prueba.ts --watch
```

<!-- Esto hara que el archivo este siempre a la escucha, y cada vez que el archivo se este actualizando nuestro codigo 
automaticamente se transformara y si hay errores tambien los ira mostrando. Otra forma de ejecutar el mismo 
comando es ingresando el siguiente comando:  -->

```bat
	tsc prueba.ts -w
```

<!-- Es lo mismo que el otro comando aterior, pero en lugar de escribir completa la palabra (--watch) 
solo escribimos (-w). -->