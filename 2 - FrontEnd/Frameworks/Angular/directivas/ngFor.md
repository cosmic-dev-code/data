<!-- ##########====================########## -->
<!-- ######===--- Iterar valores ---===###### -->
<!-- ##########====================########## -->

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', 
		styleUrls: ['./app.component.sass']
	})

	export class AppComponent {

		// Propiedad de arreglo para iterar.
		public names:string[] = [
			"Brandon", "Anthony", "Olivares", "Amador"
		];
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>
		<!-- Iteramos cada elemento del arreglo. -->
		<div *ngFor="let name of names">
			<p>Nombre: {{ name }}</p>
		</div>

		<!-- Iteramos cada elemento del arreglo y su indice. -->
		<!-- (Index as), indica que nombre llevara la variable que adquiere cada indice del arreglo. -->
		<div *ngFor="let name of names; index as indice">
			<p>Nombre: {{ name }}. Indice: {{ indice }}</p>
		</div>

		<!-- NOTA: (*ngFor) repite toda la estructura HTML, ejemplo: 
			--- Tenemos 3 names.
			--- Colocamos el (*ngFor) en un div.
			--- El (div) se repite (3 veces).

					<div>Nombre 1</div>
					<div>Nombre 2</div>
					<div>Nombre 3</div>
			-->
	</section>
```

<!-- ##########====================########## -->
<!-- ######===--- Iterar objetos ---===###### -->
<!-- ##########====================########## -->

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', 
		styleUrls: ['./app.component.sass']
	})

	export class AppComponent {

		// Tenemos un array de objetos.
		public products:Product[] = [
			{
				name: "Uno", 
				price: 10, 
				image: "https://www.fillmurray.com/640/360", 
				category: "Categoria 1"
			}, 
			{
				name: "Dos", 
				price: 20, 
				image: "https://www.fillmurray.com/640/360"
			}, 
			{
				name: "Tres", 
				price: 30, 
				image: "https://www.fillmurray.com/640/360", 
				category: "Categoria 2"
			}, 
			{
				name: "Cuatro", 
				price: 40, 
				image: "https://www.fillmurray.com/640/360", 
				category: "Categoria 3"
			}
		];
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>
		<!-- Podemos iterar objetos. -->
		<div *ngFor="let product of products; index as indice">
			<p>Producto: {{ (indice + 1) }}</p>
			<p>Nombre: {{ product.name }}</p>
			<p>Precio: {{ product.price }}</p>
			<p>Imagen: <img [src]="product.image" width="100" height="100" title="Titulo"></p>
			<div *ngIf="product.category">
				<p>Category: {{ product.category }}</p>
			</div>
		</div>
	</section>
```