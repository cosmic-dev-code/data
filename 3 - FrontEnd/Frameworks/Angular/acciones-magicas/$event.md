
###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', 
		styleUrls: ['./app.component.sass']
	})

	export class AppComponent {
		
		// Extraemos el evento.
		public metodo(event:Event):void{
			const element:HTMLElement = event.target as HTMLElement;
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>
	
		<!-- Le pasamos al metodo el evento que se ejecuto, ($event). -->
		<input type="button" value="Click" (click)="metodo($event)">
		<input type="text" (keyup)="metodo($event)" placeholder="Edad">

	</section>
```