
<!-- Este es el codigo del componente principal de Angular. -->

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.ts --- --- --- --- --- --- ######
```typescript
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html', // Indicamos cual es la hoja HTML de nuestro componente.
		styleUrls: ['./app.component.sass'] // Indicamos cual es la hoja de estilos, en este caso es (SASS).
	})


	// Exportamos la clase del componente (AppComponent) -> (app.component.html).
	export class AppComponent {
		public name = 'Brandon';
		public edad = 22;

		public getData():string{
			return (`Mi nombre es: ${this.name} y mi edad es: ${this.edad}`);
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.scss --- --- --- --- --- --- ######
```css
	/* Aqui se colocan los estilos unicamente del componente principal. */

	/* Modifica los estilos de todos los divs solo de este componente. */
	div{
		display: block;
	}
```
###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######

<!-- Es el archivo que Angular nos da por defecto. Este es un componente, el componente principal. -->

```html
	<section>
		<div>
			<!-- El componente se comunica y nos brinda de sus propiedades y metodos. -->
			<h1>{{ getData() }}</h1>
		</div>
	</section>
```