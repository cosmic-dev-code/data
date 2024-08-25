### =============================== ###
###### ===--- Reactividad ---=== ######
### =============================== ###

La reactividad sirve para comunicar componentes de manera mas rapida sin la 
necesidad de recorrer todos los componentes.

De esta manera un componente desendiente puede comunicarse con el primer padre sin 
tener que pasar los datos un componente tras otro.

### ============================ ###
###### ===--- Practica ---=== ######
### ============================ ###

# Crear servicio para transmitir los datos.

###### --- --- --- --- --- --- {proyecto}/src/app/services/store/store.service.ts --- --- --- --- --- --- ######

<!-- Primero debemos crear la reactividad en un servicio. -->

```typescript
	import { Injectable } from '@angular/core';

	/**
	 * Esta es la libreria que debemos importar.
	 */
	import { BehaviorSubject } from 'rxjs';

	// Nuestros tipados.
	import { Product } from '../models/product';

	@Injectable({
	  providedIn: 'root'
	})

	export class StoreService {

		// Instanciamos un objeto el cual recibe un arreglo, y su estado inicial es un arreglo vacio.
		private myCart = new BehaviorSubject<Product[]>([]);

		/* Propiedad publica la cual sera un (Observable).
		Por buena practica se coloca al final de un (observable) el simbolo ($). */
		myCart$ = this.myCart.asObservable();

		// Este servicio contiene estos datos que se compartiran a los componentes que se suscriban a este servicio.
		private products:Product[] = [];

		public addProduct(product:Product):void{
			this.products.push(product);

			// Transmitimos los datos a los componentes suscritos al (observable).
			this.myCart.next(this.products);
		}

		/**
		 * NOTA: Solo los (componentes) suscritos podran recibir los datos transmitidos.
		 * 
		 * 	---- component.storeService.myCart$.subscribe();
		 */

		constructor() { }
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/services/product/product.service.ts --- --- --- --- --- --- ######

# Transmitir los datos.

```typescript
	import { Component, OnInit } from '@angular/core';

	// Importamos el servicio que tiene el (observable).
	import { StoreService } from '../../services/store.service';

	@Component({
		selector: 'app-image', 
		templateUrl: './image.component.html', 
		styleUrls: ['./image.component.scss']
	})

	export class ImageComponent implements OnInit {
		// Hacemos la inyeccion de dependecias.
		constructor(private storeService:StoreService) { }
		
		ngOnInit():void{
			// Introducimos los datos.
		    this.storeService.addProduct({ name: "Brandon" });
		    this.storeService.addProduct({ name: "Anthony" });
		    this.storeService.addProduct({ name: "Olivares" });
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/image/image.component.ts --- --- --- --- --- --- ######

# Obtener los datos.

```typescript
	import { Component, OnInit } from '@angular/core';

	// Importamos el servicio que tiene el (observable).
	import { StoreService } from '../../services/store.service';

	// Importamos la clase para poder desuscribir al componente cuando este ya no lo requiera.
	// (Esto ayuda a ahorrar memoria).
	import { Subscription } from 'rxjs';

	@Component({
		selector: 'app-image', 
		templateUrl: './image.component.html', 
		styleUrls: ['./image.component.scss']
	})

	export class ImageComponent implements OnInit {

		// Propiedad para desuscribir.
		private subscription: Subscription;

		public count:number = 0;

		// Inyectamos el servicio con el patron de dependencias.
		constructor(private storeService:StoreService) { }
		
		ngOnInit():void{
			// Ya que el servicio contiene al (observable) el cual es (myCart$), procedemos a suscribirnos.

			/* El metodo (next) de la propiedad (myCart:BehaviorSubject) dentro del servicio transfiere 
			los datos a este componente. */
			this.subscription = this.storeService.myCart$.subscribe(products => {
				this.count = products.length;
			});
		}

		/* Guardamos la suscripcion de este componente en la propiedad (subscription), una vez que el componente se 
		oculte en la interfaz lo desuscribimos para ahorrar memoria. */
		ngOnDestroy() {
			this.subscription.unsubscribe();
		}
	}
```