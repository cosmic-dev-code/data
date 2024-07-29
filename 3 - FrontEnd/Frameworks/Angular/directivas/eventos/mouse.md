
###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', 
		styleUrls: ['./app.component.sass']
	})

	export class AppComponent {

		public increment(event:Event):void{
			// ...
		}

		public metodo():void{
			// ...
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>

		<div>
			<!-- El evento (click) permite ejecutar codigo TS. -->
			<input type="button" value="Incrementar" (click)="incrementar($event)">

			<!-- Cuando se da doble click. -->
			<input type="button" value="Metodo" (dblclick)="metodo()">

			<!-- Podemos utilizar varios atributos de evento del mouse como: 
				--- (mousedown), cuando bajamos el mouse sobre el elemento.
				--- (mouseup), cuando bajamos el mouse sobre el elemento.
				--- (mouseenter), cuando colocamos el mouse sobre el elemento.
				--- (mouseleave), cuando sacamos el mouse fuera del elemento.
				--- (mousemove), cuando movemos el mouse dentro de elemento.
				--- (mouseover), cuando colocamos el mouse sobre el elemento.
				--- (submit), cuando se hace un envío de datos en un formulario.
			 -->
		</div>

	</section>
```