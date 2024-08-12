### ====================================== ###
###### ===--- Utilizar directiva ---=== ######
### ====================================== ###

<!-- Suponiendo que hemos creado una directiva llamada (changecolor). -->

###### --- --- --- --- --- --- {proyecto}/src/app/directives/changecolor.directive.ts --- --- --- --- --- --- ######

```typescript
	// (ElementRef), es un (servicio) que permite obtener el elemento al que se le aplica la (directiva).
	import { Directive, ElementRef } from '@Angular/core';

	@Directive({
		// (appChangecolor), es la manera en la que se mandara a llamar la directiva.
		selector: '[appChangecolor]'
	})

	export class ChangecolorDirective{

		constructor(
			// Hacemos una inyeccion de dependencias.
			private element:ElementRef
		){
			/* (nativeElement), representa el elemento nativo de JavaScript al cual se le esta 
			aplicando la directiva. */
			this.element.nativeElement.style.backgroundColor = "red";
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/product/product.component.html --- --- --- --- --- --- ######

<!-- La directiva se aplica a los elementos en forma de atributo. -->

```html
	<div appChangecolor>
		<p>Lorem ipsum dolor sit amet consectetur.</p>
	</div>
```

### =========================== ###
###### ===--- Eventos ---=== ######
### =========================== ###

###### --- --- --- --- --- --- {proyecto}/src/app/directives/changecolor.directive.ts --- --- --- --- --- --- ######

```typescript
	import { Directive, ElementRef } from '@Angular/core';

	@Directive({
		selector: '[appChangecolor]'
	})

	export class ChangecolorDirective{

		// El (HostListener) permite escuchar eventos del elemento al que se aplica la (directiva).

		@HostListener("mouseenter") onMouseEnter(){
			this.element.nativeElement.style.backgroundColor = "blue";
		}

		@HostListener("mouseleave") onMouseLeave(){
			this.element.nativeElement.style.backgroundColor = "red";
		}

		constructor(private element:ElementRef){}
	}
```