### ============================================== ###
###### ===--- Crear componente (Angular) ---=== ######
### ============================================== ###

```bat
	: Crea un componente llamado (img) dentro de una carpeta llamada (img) en la ruta [src/app/img].
	ng g c image

	: Crea un componente llamado (img) dentro de una carpeta llamada (components/img) en la ruta [src/app/components/img].
	ng g c components/image

	: Los archivos que se crean dentro de nuestra carpeta (img) son: 
		: --- (img-component.html): Esta es la vista de nuestro componente.
		: --- (img-component.scss): Este es el archivo (sass) de nuestro componente.
		: --- (img-component.spec.ts): Este es el archivo de pruebas de nuestro componente.
		: --- (img-component.ts): Este es el archivo de la logica de nuestro componente.
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.module.ts --- --- --- --- --- --- ######
```typescript
	import { NgModule } from '@angular/core';
	import { BrowserModule } from '@angular/platform-browser';

	import { FormsModule } from '@angular/forms';
	import { HttpClientModule } from '@angular/common/http';

	import { AppRoutingModule } from './app-routing.module';
	import { AppComponent } from './app.component';
	
	// NOTA: De manera automatica el componente se importa en este archivo.
	import { ImageComponent } from './componentes/image/image.component';

	@NgModule({
		declarations: [
			AppComponent, 
			// Aqui tambien se importa de manera automatica.
			ImageComponent
		],
		imports: [
			BrowserModule,
			AppRoutingModule, 
			FormsModule, 
			HttpClientModule
		],
		providers: [],
		bootstrap: [AppComponent]
	})
	export class AppModule { }
```

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/image/image.component.ts --- --- --- --- --- --- ######
```typescript
	// Los archivos que nos estamos importando.
	import { Component, OnInit } from '@angular/core';

	@Component({
		selector: 'app-image', 
		templateUrl: './image.component.html', 
		styleUrls: ['./image.component.scss']
	})

	export class ImageComponent implements OnInit {

		constructor() { }
		
		ngOnInit():void{
			// Metodo que se ejecuta al iniciar el componente.
		}

		// Contenido del componente para la vista.
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/image/image.component.html --- --- --- --- --- --- ######
```html
	<!-- Aqui va todo el contenido de nuestro componente, podemos utilizar toda las directivas de 
	(Angular) que queramos. -->
```

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/image/image.component.scss --- --- --- --- --- --- ######
```css
	/* Estilos que se aplican solo para los elementos de este componente. */
```

### =================================== ###
###### ===--- Mandar a llamar ---=== ######
### =================================== ###

<!-- Los componentes pueden ser mandados a llamar en el archivo principal (App.component.html) o 
dentro de otros componentes. -->

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>
		<!-- Como cualquier otra etiqueta, el componente se manda a llamar. -->
		<app-image></app-image>
	</section>
```