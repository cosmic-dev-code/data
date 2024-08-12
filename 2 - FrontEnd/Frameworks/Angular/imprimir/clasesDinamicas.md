###### --- --- --- --- --- --- {proyecto}/src/app/app.component.scss --- --- --- --- --- --- ######
```php
	// Creamos una clase para los mensajes de error.
	.mensaje{
		display: block;
		width: 90%;
		margin: 1rem auto;
		padding: 0.6rem;
		// Cuando la clase (mensaje) tenga la clase (invalido).
		&.invalido{
			background-color: red;
			color: #ffffff;
		}
		// Cuando la clase (mensaje) tenga la clase (valido).
		&.valido{
			background-color: green;
			color: #ffffff;
		}
	}
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
		// Propiedad a la que se hara binding.
		public name:string = "";
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>
		<!-- ---------------------------------- -->
		<!-- ------ Reglas de validacion ------ -->
		<!-- ---------------------------------- -->

		<!-- Etiqueta con Binding y algunas (reglas) de validacion que se tendran en cuenta para 
		agregar y quitar clases dinamicamente.

		NOTA: El (binding) es solo para validar el campo en tiempo real. -->
		<input 
			type="text" 
			#idName [(ngModel)]="name" 
			required minlength="5" 
			maxlength="10" 
			placeholder="Ingrese un nombre"
		>

		<!-- --------------------------- -->
		<!-- ------ Una propiedad ------ -->
		<!-- --------------------------- -->

		<!-- Imprime una clase directamente desde TS o por una condicion. -->
		<span [class]=" 'mi-clase' ">Hola mundo</span>
		<span [class]="(idName.invalid) ? 'invalido' : 'valido'">Hola mundo</span>

		<!-- Tambien es posible utilizar (prefijos). -->

		<!-- Clase (mensaje) a la cual: 
			--- Se agrega la clase (invalido) si la condicion es verdadera del input es verdadera, 
				de no serlo borra la clase (invalido). -->
		<font 
			class="mensaje" 
			[class.invalido]="idName.invalid"
		>
			<span>El nombre es invalido</span>
		</font>

		<!-- ---------------------------------- -->
		<!-- ------ Mas de una propiedad ------ -->
		<!-- ---------------------------------- -->

		<!-- Si las condiciones del input (idName): 
				--- Se cumplen, agregara la clase (mensaje.valido).
				--- Si no se cumplen, agregara la clase (mensaje.invalido). -->
		<font 
			class="mensaje" 
			[class.invalido]="idName.invalid" 
			[class.valido]="idName.valid"
		>
			<span>El nombre es invalido</span>
		</font>

		<!-- ----------------------------------- -->
		<!-- ------ Objeto de propiedades ------ -->
		<!-- ----------------------------------- -->

		<!-- (ngClass), recibe un JSON con: 
			--- La clase a agregar, (key).
			--- La condicion para agregarla, (value). -->
		<font 
			class="mensaje" 
			[ngClass]="{
				'invalido': idName.invalid, 
				'valido': idName.valid
			}" 
		>
			<span>El nombre es invalido</span>
		</font>
		
	</section>
```