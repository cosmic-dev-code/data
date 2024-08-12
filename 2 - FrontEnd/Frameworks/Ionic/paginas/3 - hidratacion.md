### ======================================= ###
###### ===--- Hidratar una pagina ---=== ######
### ======================================= ###

La hidratacion de una pagina en Ionic funciona exactamente igual a [](Angular), ya que practicamente una pagina de Ionic 
es un componente de Angular.

###### --- --- --- --- --- --- {proyecto}/src/app/my-pages/my-pages.page.ts --- --- --- --- --- --- ######

```ts
	import { Component, OnInit } from '@angular/core';

	// Interfaz personalizada.
	interface User{
		name:string,
		age:number
	}

	@Component({
		selector: 'app-my-pages',
		templateUrl: './my-pages.page.html',
		styleUrls: ['./my-pages.page.scss'],
	})
	export class MyPagesPage implements OnInit {

		// Creamos una arreglo de usuarios.
		public users:User[] = [
			{
				name: "Brandon", 
				age: 24
			}, 
			{
				name: "Anthony", 
				age: 20
			}
		];

		constructor() { }
		ngOnInit() {}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/my-pages/my-pages.page.html --- --- --- --- --- --- ######

```html
	<ion-header>
		<ion-toolbar>
			<ion-title>MyPages</ion-title>
		</ion-toolbar>
	</ion-header>

	<!-- A todos los elementos de Ionic podemos darle (clases) y (id) personalizado. -->

	<ion-content id="idContentMain">
		<!-- Con la directiva de angular iteramos los registros. -->
		<ul>
			<li *ngFor="let user of users">Nombre: {{ user.name }}. Edad: {{ user.age }}</li>
		</ul>
	</ion-content>
```

###### --- --- --- --- --- --- {proyecto}/src/app/my-pages/my-pages.page.scss --- --- --- --- --- --- ######

<!-- Podemos dar estilos personalizados unicamente a esta pagina, (similar a los componentes de Angular). -->

```css
	#idContentMain{
	    padding-top: 3rem;
	    > ul{
	        background-color: #000;
	        > li{
	            color: #fff;
	        }
	    }
	}
```