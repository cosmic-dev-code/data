
###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', 
		styleUrls: ['./app.component.sass']
	})

	export class AppComponent {

		// Metodo que se ejecuta de acuerdo a un evento.
		public metodo():void{
			// ...
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>
		<div>
			<!-- Cuando se presiona una tecla hacia arriba. -->
			<input type="text" (keyup)="metodo()">

			<!-- Cuando se presiona una tecla hacia abajo. -->
			<input type="text" (keydown)="metodo()">

			<!-- Cuando se presiona una tecla. -->
			<input type="text" (keypress)="metodo()">

			<!-- Cuando se selecciona el input. -->
			<input type="text" (focus)="metodo()">

			<!-- Cuando se deselecciona el input. -->
			<input type="text" (blur)="metodo()">

			<!-- Cuando cambia el valor del input. -->
			<input type="text" (change)="metodo()">

			<!-- Pueden aplicarse a otros elementos. -->
			<div (keydown)="metodo()">
				<p>Keyboard</p>
			</div>
		</div>
	</section>
```