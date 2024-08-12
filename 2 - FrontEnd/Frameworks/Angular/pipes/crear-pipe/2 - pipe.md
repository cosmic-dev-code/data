<!-- Suponiendo que tenemos un pipe llamado (reverse), entonces... -->

###### --- --- --- --- --- --- {proyecto}/src/app/pipes/reverse.pipe.ts --- --- --- --- --- --- ######
```typescript
	// Se importan las clases necesarias para nuestro pipe.
	import { Pipe, PipeTransform } from '@angular/core';

	@Pipe({
		// Aqui lleva el nombre de nuestro pipe.
		name: 'reverse'
	})

	export class ReversePipe implements PipeTransform {

		// Colocamos el tipado del valor que se va a recibir desde el HTML.
		// Colocamos el tipado que tambien se va a regresar.
		transform(value: string): string {

			// Retornamos nuestro valor modificado por nuestro pipe.
			return value.split("").reverse().join("");
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>
		<!-- Ahora podemos utilizar nuestro pipe como cualquier otro y de manera global. -->
		<p>Descripcion: {{ decription | reverse }}</p>
	</section>
```

###### --- --- --- --- --- --- {proyecto}/src/app/components/products/product.component.html --- --- --- --- --- --- ######
```html
	<div>
		<h3>{{ title | reverse }}</h3>
	</div>
```