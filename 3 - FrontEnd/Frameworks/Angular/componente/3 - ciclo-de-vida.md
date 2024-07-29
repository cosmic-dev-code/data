###### --- --- --- --- --- --- {proyecto}/src/app/componentes/login/login.component.ts --- --- --- --- --- --- ######
```typescript
	// Importamos las clases necesarias para manipular el ciclo de vida del componente.
	import { 
		Component, OnInit, Input, 
		Output, EventEmitter, OnChanges, 
		AfterViewInit, OnDestroy, SimpleChanges 
	} from '@angular/core';

	@Component({
		selector: 'app-login', 
		templateUrl: './login.component.html', 
		styleUrls: ['./login.component.scss'] 
	})

	// Extendemos de las interfaces (OnChanges, AfterViewInit, OnDestroy) para poder utilizar sus metodos.
	export class LoginComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

		constructor(){
			/* Se llama solo una vez cuando el componente es creado, antes de renderizar, 
			aqui no se debe correr codigo asincrono como peticiones al servidor. */
		}
		
		ngOnInit():void{
			/* Metodo que se ejecuta al iniciar el componentem.
			Aqui si es conveniente colocar codigo asincrono y hacer peticiones al servidor. */
		}

		ngOnChanges(changes:SimpleChanges):void{
			/* Se ejecuta despues del renderizado, pero solo se ejecuta cuando se realiza un cambio 
			de cada input del componente. */

			/* Se recibe (SimpleChanges) cuando cualquier @Input cambia, de manera que (SimpleChanges) 
			contiene la informacion de cada @Input que cambie. */
		}

		@Input() response:string = "";

		ngAfterViewInit():void{
			/* Este metodo se ejecuta despues del renderizado, cuando ya todo el componente y sus 
			elementos cargaron. Aqui normalmente se manejan los elementos del componente. */
		}

		ngOnDestroy():void{
			/* Se ejecuta cuando el componente no se muestra en la interfaz, (por ejemplo el usuario navega a otra pagina), 
			tambien puede ser que por medio de el (ngIf) el componente no se muestre. */

			// Aqui cancelamos todo cuando el componente ya no se renderize.
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/login/login.component.html --- --- --- --- --- --- ######
```html
	<!-- Imprimimos la propiedad (response). -->
	<h2>La url es: {{ response }}</h2>
```