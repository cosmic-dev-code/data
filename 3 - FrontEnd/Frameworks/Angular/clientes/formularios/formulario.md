###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';
	import { User } from './interfaces.models';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', 
		styleUrls: ['./app.component.sass']
	})

	export class AppComponent {
		/* Tenemos una propiedad de tipo (User), que puede contener: 
			--- Nombre.
			--- Correo.
			--- Password. */
		public user:User = new User("Ninguno", "ejemplo@gmail.com", "123") as User;

		// Evento que se ejecutara al hacer (submit) en el formulario.
		public submit(event:Event):void{
			event.preventDefault();

			// Codigo...
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section class="section">
		<!-- Le damos al formulario: 
			--- Un nombre: (idForm) y le damos el valor (ngForm) indicando que (idForm) es el formulario.
			--- (ngSubmit), es el evento que se ejecutara cuando se envie el formulario. -->
		<form #idForm="ngForm" (ngSubmit)="submit($event)" action="#" method="POST" autocomplete="on">
			<!-- NOTA: Una de las cosas importantes a considerar, es que cada campo de entrada (input), 
			debe tener la propiedad (name), de lo contrario habra un error. -->
			<div>
				<label for="idName">Nombre: </label>
				<!-- Cada campo esta validado (required) y tiene su binding (ngModel). -->
				<input type="text" name="name" required id="idName" [(ngModel)]="user.names" placeholder="Nombres">
				<p>El nombre no es valido</p>
			</div>
			<div>
				<label for="idMail">Correo: </label>
				<input type="email" name="mail" required id="idMail" [(ngModel)]="user.mail" placeholder="Correo">
				<p>El correo no es valido</p>
			</div>
			<div>
				<label for="idPassword">Password: </label>
				<input type="text" name="password" required id="idPassword" [(ngModel)]="user.password" placeholder="Password">
				<p>El password no es valido</p>
			</div>
			<div>
				<!-- NOTA: Solo debe haber un boton (submit), si se deja un boton sin especificar, entonces 
				el formulario tomara por defecto a ese boton como el (submit).

				Podemos desabilitar el boton (submit) si el formulario (idForm) es invalido (idForm.invalid). -->
				<input [disabled]="idForm.invalid" type="submit" value="Registrar"/>
				<button type="button">Accion</button>
			</div>
		</form>
	</section>
```