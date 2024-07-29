<!-- Imaginemos que tenemos un componente llamado (login) dentro de la carpeta (componentes). -->

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/login/login.component.ts --- --- --- --- --- --- ######
```typescript
	// Los archivos que nos estamos importando.
	import { Component, OnInit } from '@angular/core';

	@Component({
		selector: 'app-login', // Esta es la manera de llamar a nuestro componente: <app-login></app-login>
		templateUrl: './login.component.html', // La vista de nuestro componente.
		styleUrls: ['./login.component.scss'] // Los estilos (SASS) de nuestro componente.
	})

	export class LoginComponent implements OnInit {

		constructor() { }
		
		ngOnInit():void{
			// Metodo que se ejecuta al iniciar el componente.
		}

		// Metodos y propiedades del componente.

		public titulo:string = "Formulario de ingreso";

		public names:string = "";

		public submit(event:Event):void{
			event.preventDefault();
			// Resto del codigo...
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/login/login.component.html --- --- --- --- --- --- ######
```html
	<!-- Aqui va todo el contenido de nuestro componente, podemos utilizar toda las directivas de (Angular) que queramos. -->
	<div>
		<h6>{{ titulo }}</h6>

		<form #idForm="ngForm" (ngSubmit)="submit($event)" action="#" method="POST" autocomplete="on">
			<div>
				<input type="text" name="name" #idName [(ngModel)]="names" placeholder="Ingrese sus nombres">
			</div>
			<center>
				<button [disabled]="idForm.invalid" type="submit">Eviar</button>
			</center>
		</form>
	</div>
```

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/login/login.component.scss --- --- --- --- --- --- ######
```css
	/* Estilos que se aplican solo para los elementos de este componente. */

	div{
		display: block;
		width: 90%;
		max-width: 100%;
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<!-- En este nuestro archivo principal. -->

	<section>
		<div>
			<h3>Mi componente (login)</h3>
			<!-- Mandamos a llamar nuestro componente como cualquier otra etiqueta (HTML). -->
			<app-login></app-login>
		</div>

	</section>
```