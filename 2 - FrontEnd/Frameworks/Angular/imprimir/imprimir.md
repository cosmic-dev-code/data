<!-- Este es el codigo del componente principal de Angular. -->
###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', 
		styleUrls: ['./app.component.sass'] 
	})

	export class AppComponent {
		// Propiedad publica.
		public type:string = "text";

		// Propiedad publica.
		image:{url:string, width:number, height:number} = {
			url: "https://www.google.com";
			width: 100, 
			height: 100
		};

		// Metodo que retorna un "string".
		public getData():string{
			return ("El campo es de tipo " + this.type);
		}
	}
```

<!-- Es el archivo que Angular nos da por defecto. Este es un componente, el componente principal. -->
###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>
		<div>
			<!-- Imprimimos el valor de la propiedad (type). -->
			<p>El campo es de tipo: {{ type }}</p>

			<!-- Podemos obtener lo retirnado por la funcion. -->
			<p>{{ getData() }}</p>
		
		</div>
		<div>
			<!-- Podemos darle valor a las propiedades colocandolas entre corchetes []. -->
			<input [type]="type">
			<input type="radio" [value]="type">
			<img [src]="image.url" [width]="image.width" [height]="image.height">
		</div>
	</section>
```