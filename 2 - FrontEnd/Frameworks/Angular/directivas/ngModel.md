<!-- ##########=====================########## -->
<!-- ######===--- Importar modulo ---===###### -->
<!-- ##########=====================########## -->

###### --- --- --- --- --- --- {proyecto}/src/app/app.module.ts --- --- --- --- --- --- ######
```typescript

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Para poder utilizar la directiva (ngModel) debemos importarla en este archivo.
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

<!-- ##########========================########## -->
<!-- ######===--- Utilizar (ngModel) ---===###### -->
<!-- ##########========================########## -->

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', 
		styleUrls: ['./app.component.scss']
	})

	export class AppComponent {

		// Propiedad que se encontrara en sincronia.
		public names:string = "";
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>
		<div>
			<div>
				<!-- [(ngModel)], permite sincronizar una propiedad. -->
				<input type="text" [(ngModel)]="names" placeholder="Sincronizar">
			</div>
			<!-- Podemos mostrar los cambios en tiempo real. -->
			<p>{{ names }}</p>
		</div>
	</section>
```