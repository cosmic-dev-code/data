### ===================================================== ###
###### ===--- Informacion del (hijo) al (padre) ---=== ######
### ===================================================== ###

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/login/login.component.ts --- --- --- --- --- --- ######
```typescript
	// IMPORTANTE: Importamos (Output) y (EventEmitter).
	import { Component, OnInit, Output, EventEmitter } from '@angular/core';

	@Component({
		selector: 'app-login', 
		templateUrl: './login.component.html', 
		styleUrls: ['./login.component.scss'] 
	})

	export class LoginComponent implements OnInit {

		constructor() { }

		// @Output() indica que la propiedad emitira datos desde el componente.

		// Generamos una propiedad que no emite ningun dato.
		@Output() emitterEmpty = new EventEmitter();

		// Generamos una propiedad que emite solo datos de tipo (string).
		@Output() emitterString:EventEmitter<string> = new EventEmitter<string>();
		
		ngOnInit():void{
			// Por ejemplo, al iniciar el componente...

			// Emitimos sin datos...
			this.emitterEmpty.emit();
			// Emitimos un string.
			this.emitterString.emit("Dato que emite el componente.");
		}
	}
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
		public eventoSinDatos():void{
			// Aqui se recibe la emision del componente sin datos.
		}

		public eventoString(datos:string):void{
			// Aqui se recibe la emision del componente con datos.

			console.log(datos);
		}
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
			<!-- Podemos escuchar los eventos como se escucha cualquier otro evento.
				--- (emitterEmpty), no recibe datos.
				--- (emitterString), si recibe datos, por eso recibe a ($event).

			Cada evento son las propiedades que se instanciaron en el componente. -->
			<app-login 
				(emitterEmpty)="eventoSinDatos()" 
				(emitterString)="eventoString($event)"
			></app-login>
		</center>
	</section>
```