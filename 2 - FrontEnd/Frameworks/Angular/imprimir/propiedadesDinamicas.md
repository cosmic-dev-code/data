<!-- ##########=======================########## -->
<!-- ######===--- Cambiar atributos ---===###### -->
<!-- ##########=======================########## -->

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', 
		styleUrls: ['./app.component.scss']
	})

	export class AppComponent {

		/**
		 * Propiedades para dar estios.
		 */
		public opacidad:string = "0";
		public font:any = {
			size: "14", 
			color: "#000", 
			family: "arial"
		};
		public enlace:string = window.location.href;
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>

		<!-- Las propiedades puede recibir valores devueltos con TypeScript. -->

		<!-- Dar valores a estilos especificos. -->
		<div [style.opacity]="opacidad"></div>
		<p [style.fontSize.px]="font.size" [style.color]="font.color"></p>

		<font [size]="font.size" [color]="font.color" [face]="font.family">Hola mundo</font>

		<!-- Utilizando clases. -->
		<span [class]="font.color != null ? 'valido' : 'invalido'"></span>
		<span [class.color]="10 == 10"></span>

		<!-- Es posible pasar una propiedad como lo es (enlace) a un atributo. -->
		<img [src]="enlace" width="14" [height]="font.size">
	</section>
```

<!-- ##########=============########## -->
<!-- ######===--- Binding ---===###### -->
<!-- ##########=============########## -->

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';
	import { Box } from './box.model';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', 
		styleUrls: ['./app.component.scss']
	})

	export class AppComponent {
		// Tenemos un objeto con algunas propiedades a las cuales se hara un binding.
		public box:Box = {
			bg: "red", 
			width: 100, 
			height: 100
		};
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>

		<div>
			<!-- Cada input hace (binding) con una propiedad del objeto (box). -->
			<input type="number" [(ngModel)]="box.width">
			<input type="number" [(ngModel)]="box.heigth">
			<input type="color" [(ngModel)]="box.bg">
		</div>

		<div>
			<!-- ---------------------------------- -->
			<!-- ------ Estilos por cada uno ------ -->
			<!-- ---------------------------------- -->

			<!-- Cambiamos los estilos en linea de acuerdo a los valores del objeto (box). Las medidas pueden ser: 
				--- Puede especificarse la unidad de medida CSS con modificadores, [px, %, em, rem, etc]. -->
			<div 
				[style.width.px]="box.width" 
				[style.heigth.%]="box.heigth" 
				[style.background-color]="box.bg"
			></div>

			<!-- -------------------------- -->
			<!-- ------ Acortamiento ------ -->
			<!-- -------------------------- -->

			<!-- (ngStyle), recibe un JSON con: 
				--- La propiedad a modificar, (key).
				--- El valor de la propiedad a modificar, (value). -->
			<div [ngStyle]="{
				'width.px': box.width, 
				'heigth.%': box.heigth, 
				'background-color': box.bgs
			}"></div>
		</div>
		
	</section>
```