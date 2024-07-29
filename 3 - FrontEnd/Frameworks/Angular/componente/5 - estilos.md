
###### --- --- --- --- --- --- {proyecto}/src/app/componentes/login/login.component.ts --- --- --- --- --- --- ######
```typescript

	import { Component, OnInit } from '@angular/core';

	@Component({
		selector: 'app-login', 
		templateUrl: './login.component.html', 
		styleUrls: ['./login.component.scss']
	})

	export class LoginComponent implements OnInit {

		// Para imprimir estilos directamente en el HTML.
		size = 12;

		constructor() { }
		
		ngOnInit():void{
			// ...
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/login/login.component.html --- --- --- --- --- --- ######
```html
	<!-- Digamos que aqui tenemos varias clases en nuestro componente. -->
	<section class="container">
		<div class="container-title">
			<h1 class="title">Aqui se muestran todos los productos</h1>
		</div>
		<div class="sub-container">
			<!-- Tambien mostramos un componente dentro de nuestro componente. -->
			<app-show-products></app-show-products>
		</div>

		<!-- Podemos imprimir estilos. -->
		<font [face]="size">Texto</font>
	</section>
```

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/login/login.component.scss --- --- --- --- --- --- ######
```css
	/* Todos los estilos que se apliquen aqui, solo afectaran al componente (login). */

	.container{
		display: block;
		width: 100%;
		max-width: 100%;
		text-align: center;
	}

	h1{
		font-size: 3rem;
		font-weight: normal;
		font-family: arial, sans-serif, serif;
		letter-spacing: 3px;
		line-height: 34px;
	}

	/* NOTA: Esto no se puede hacer, no se pueden modificar los estilos ni elementos de otro componente, 
	cada componente tiene su archivo de estilos. */
	app-show-products img{
		display: inline-block;
		width: 50%;
		object-fit: cover;
	}

	/* NOTA: 
		--- Cada componente tiene sus propios estilos.
	Si se quieren modificar los estilos de todos los componentes, debe hacerse en la (hoja de estilos global). */
```