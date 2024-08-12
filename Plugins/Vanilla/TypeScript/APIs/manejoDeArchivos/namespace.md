### =========================================== ###
###### ===--- namespace en TypeScript ---=== ######
### =========================================== ###

###### --- --- --- --- --- --- {proyecto}/geometria.ts --- --- --- --- --- --- ######

```ts
	/* Creamos un namespace llamado Geometria que contendra dos funciones y una constante. */
	export namespace Geometria 
	{
		// Elementos exportados.

	    export const PI:number = 3.1416;
	    
	    export function areaCirculo(radio: number):number {
	        return PI * radio * radio;
	    }
	    
	    export function areaRectangulo(base: number, altura: number):number {
	        return base * altura;
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/index.ts --- --- --- --- --- --- ######

```ts
	/* Importamos el namespace Geometria y utilizamos sus funciones y constantes. */
	import { Geometria } from "./geometria";
	
	// Los elementos exportados pueden utilizarse.
	Geometria.areaCirculo(5)
	Geometria.areaRectangulo(5, 10)
```

### ======================================= ###
###### ===--- La palabra (export) ---=== ######
### ======================================= ###

###### --- --- --- --- --- --- {proyecto}/matematicas.ts --- --- --- --- --- --- ######

<!-- Las propiedades que se pueden exportar dentro de un (namespace) pueden ser: 
	--- Valores primitivos.
	--- Valores complejos. -->

```ts
	export namespace Matematicas
	{
		// Dentro del (namespace).

		// Propiedad privada, (sin export).
		const PI:number = 3.1416;

		// Propiedad publica (con export).
		export const Gravedad:number = 18;

		export class Mate{
			static public get PI():number{
				return PI;
			}
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/index.ts --- --- --- --- --- --- ######

```ts
	// Exportamos el (namespace) como un bojeto JS.
	import { Matematicas } from "./matematicas";

	// Accedemos a sus propiedades.

	// ERROR: Esto da un error, la variable no se exporta.
	Matematicas.PI;

	// Esto es correcto ya que se exporta en el (namespace Matematicas).
	Matematicas.Gravedad;
	Matematicas.Mate.PI;
```

### ========================================== ###
###### ===--- Ambito del (namespace) ---=== ######
### ========================================== ###

```ts
	export namespace Matematicas
	{
		class User
		{
			// ...
		}

		export class Admin extends User
		{
			// ...
		}

		// Las propiedades son accesibles dentro del (namespace).
		const user:User = new User();
		const admin:Admin = new Admin();
	}

	// ERROR: Esto no es posible porque (User) solo existe dentro del namespace (Matematicas).
	const user:User = new User();

	// En cambio (Admin) pertenece al namespace (Matematicas).
	const admin:Admin = new Matematicas.Admin();
	// Ademas (Admin) es una propiedad (publica / export) del namespace (Matematicas).
	const admin:Admin = new Admin();
```