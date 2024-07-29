### =================================== ###
###### ===--- Crear directiva ---=== ######
### =================================== ###

```bat
	: Crea una nueva directiva llamada (midirectiva) en la carpeta (directives).
	ng g d directives/midirectiva
```

###### --- --- --- --- --- --- {proyecto}/src/app/directives/changecolor.directive.ts --- --- --- --- --- --- ######

<!-- De esta manera se crea la directiva. -->

```typescript
	import { Directive } from '@Angular/core';

	@Directive({
		selector: '[changecolor]'
	})

	export class changecolor{
		constructor(){}
	}
```