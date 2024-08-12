### ======================================================= ###
###### ===--- (Informacion) del (padre) al (hijo) ---=== ######
### ======================================================= ###

<!-- Imaginemos que tenemos un componente llamado (login) dentro de la carpeta (componentes). -->

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/login/login.component.ts --- --- --- --- --- --- ######
```typescript
	// IMPORTANTE: Importamos al (Input).
	import { Component, OnInit, Input } from '@angular/core';

	@Component({
		selector: 'app-login', 
		templateUrl: './login.component.html', 
		styleUrls: ['./login.component.scss'] 
	})

	export class LoginComponent implements OnInit {

		constructor() { }
		
		ngOnInit():void{
			// Metodo que se ejecuta al iniciar el componente.
		}

		/* Con (Input), indicamos que esta sera la propiedad que recibira el valor 
		del componente padre.
			--- (@), se utiliza el decorador.
			--- (Input), indica la entrada de datos al compontente. */
		@Input() response:string = "";

		/* (@Input), puede recibir por parametro el nombre de la variable a recibir en el componente, 
		cuando se le van a pasar datos al componente. */
		@Input("respuesta") response:string = "";

		/**
		 * Recibir propiedad con logica.
		 */

		public response:string = "";
		// Manejamos la logica de la propiedad cuando se recibe.
		// NOTA: Aqui debemos especificar el nombre de la propiedad dentro de @Input("nombre de la propiedad").
		@Input("respuesta") set getResponse(response:string){
			this.response = response;
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/login/login.component.html --- --- --- --- --- --- ######
```html
	<!-- Imprimimos la propiedad (response). -->
	<h2>La url es: {{ response }}</h2>
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', 
		styleUrls: ['./app.component.sass']
	})

	export class AppComponent {
		public url:string = "";
	}
```
###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<!-- En este nuestro archivo principal. -->

	<section>
		<div>
			<h3>Mi componente (login)</h3>
		</div>
		<center>
			<div>
				<input type="text" [(ngModel)]="url" placeholder="url">
			</div>
			<!-- Podemos hacer una validacion y mostrar el componente. -->
			<div *ngIf="url != ''">
				<!-- (response), es la propiedad que se recibe en el componente (login), 
				el valor que se pasa es (url). -->
				<app-login response="{{ url }}"></app-login>
			</div>
			<div>
				<!-- Podemos hacer validaciones en la etiqueta y pasar el valor de la propiedad (response), 
				podemos tratar la etiqueta como cualquier otra. -->
				<app-login *ngIf="url != ''" [response]="url"></app-login>
			</div>
			<div>
				<!-- Podemos cambiar la variable de acuerdo a lo que se paso por parametro en (@Input). -->
				<app-login [respuesta]="url"></app-login>
			</div>
		</center>
	</section>
```