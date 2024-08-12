###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', 
		styleUrls: ['./app.component.sass']
	})

	export class AppComponent {

		// Objeto que se utilizara para validar.
		public user:{names:string, age:number} = {
			names: "Brandon", 
			age: 22
		};
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>
		
		<!-- Si la condicion se cumple se muestra el bloque. -->
		<div *ngIf="user.names === 'Brandon'">
			<p>Es valido</p>
		</div>

		<!-- Se puede validar mas de una condicion. -->
		<p *ngIf="user.names === 'Brandon' && user.age === 22">x
			Se cumplen ambas
		</p>

		<!-- Para ejecutar un bloque (else) debe colocarse la palabra (else) 
		luego el nombre del bloque a ejecutar. -->
		<p *ngIf="
			user.names === 'Brandon' && user.age === 22; 
			else idBloqueElse
		"></p>
		<!-- Bloque (else) que se va a ejecutar de acuerdo a donde se llame. -->
		<!-- Es importante colocarle un nombre utilizando (#), 
		asi nos referimos a el. -->
		<ng-template #idBloqueElse>
			<p>No se cumplen ambas condiciones.</p>
		</ng-template>

	</section>
```