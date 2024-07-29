
###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', 
		styleUrls: ['./app.component.sass']
	})

	export class AppComponent {

		// Metodo que ejecutara el evento.
		public metodo(event:Event):void{
			console.log(
				event.scrollTop
			);
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>
		<!-- El evento se ejecuta cada vez que hacemos (scroll) en el elemento. -->
		<div (scroll)="metodo($event)">
			<!-- Mucho contenido... -->
		</div>
	</section>
```