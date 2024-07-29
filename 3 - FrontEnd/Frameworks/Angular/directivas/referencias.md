###### --- --- --- --- --- --- {proyecto}/src/app/componentes/image/image.component.ts --- --- --- --- --- --- ######
```typescript
    // Es importante importarse (ElementRef) y (ViewChild).
    import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

    @Component({
        selector: 'app-image', 
        templateUrl: './image.component.html', 
        styleUrls: ['./image.component.scss']
    })

    export class ImageComponent implements OnInit {

        // Declara una propiedad de referencia a un elemento HTML.
        // En este caso llamada (ViewChild) extrae al elemento de referencia y lo asigna a la propiedad.
        @ViewChild('nameInput') referencia:ElementRef;

        // Al hacer 'click' se recibe el valor de la referencia por HTML.
        comparar(valueInput:string):void{

            if(valueInput === this.referencia.nativeElement.value){
                // ...
            }

        }

    }
```

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/image/image.component.html --- --- --- --- --- --- ######
```html
    <form>
        
        <!-- La (#) indica que se declara al elemento como una referencia. -->
        <input type="text" id="idName" #nameInput>

        <!-- Al hacer click mandamos el valor del elemento por el nombre de su referencia, sin (#). -->
        <button (click)="comparar(nameInput.value)">Click</button>

    </form>
```