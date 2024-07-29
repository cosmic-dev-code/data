###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', 
		styleUrls: ['./app.component.scss']
	})

	export class AppComponent {
		// Tenemos una variable que puede determinar la desicion.
		public name:string = "";
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>
		<div>
			<!-- Hacemos un binding para la propiedad (name). -->
			<input type="text" [(ngModel)]="name">
		</div>
		<!-- De acuerdo a lo que equivalga (name) se tomara una desicion. -->
		<article *ngSwitch="name">
			<div *ngSwitchCase="'Brandon'">
				<!-- Codigo a ejecutar de ser este el valor... -->
			</div>
			<div *ngSwitchCase="'Anthony'">
				<!-- Codigo a ejecutar de ser este el valor... -->
			</div>
			<div *ngSwitchCase="'Olivares'">
				<!-- Codigo a ejecutar de ser este el valor... -->
			</div>
			<div *ngSwitchDefault>
				<!-- Codigo a ejecutar de no ser ningun valor anterior... -->
			</div>
		</article>
	</section>
```