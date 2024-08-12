<!-- ##########=====================########## -->
<!-- ######===--- Importar modulo ---===###### -->
<!-- ##########=====================########## -->

###### --- --- --- --- --- --- {proyecto}/src/app/app.module.ts --- --- --- --- --- --- ######
```typescript

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Debemos importar el modulo de los (formularios).
import { FormsModule } from '@angular/forms'; // Esta.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule, 
		FormsModule // Ahora la importamos.
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', 
		styleUrls: ['./app.component.scss']
	})

	export class AppComponent {
		public user:{name:string, age:number, email:string} = {
			name: "", 
			age: 0, 
			email: ""
		};
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>

		<!-- (#idNombre), le da los nombres a cada campo. -->
		<!-- (required), (min), (max), (type); dictan las reglas para cada uno de los campos. -->
		<!-- [(ngModel)], sincroniza cada campo cin una propiedad de la clase del componente. -->

		<input type="text" #idName required [(ngModel)]="user.name" placeholder="Nombre">
		<input type="number" #idAge required min="10" [(ngModel)]="user.age" placeholder="Edad">
		<input type="email" min="3" max="20" #idEmail required [(ngModel)]="user.email" placeholder="Correo">

		<!-- De acuerdo al nombre que le dimos a cada campo, podemos acceder a una propiedad llamada: (valid). -->
		<!-- Devuelve un booleano si el campo cumple con las reglas (HTML). -->
		<p>Nombre: {{ idName.valid }}</p>
		<p>Edad: {{ idAge.valid }}</p>
		<p>Correo: {{ idEmail.valid }}</p>

		<!-- Podemos utilizar la propiedad (valid) dentro de condicionales. -->
		<div *ngIf="idEmail.valid">
			<p>El campo no es valido</p>
		</div>

	</section>
```