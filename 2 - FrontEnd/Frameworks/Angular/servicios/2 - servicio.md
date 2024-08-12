### ============================ ###
###### ===--- Servicio ---=== ######
### ============================ ###

<!-- Los servicios son archivos de logica que permiten modularizar el codigo y reutilizarlo en otros componentes. -->

###### --- --- --- --- --- --- {proyecto}/src/app/services/store.service.ts --- --- --- --- --- --- ######

<!-- Suponemos que tenemos un servicio llamado (store) dentro de la carpeta (services). -->

```typescript
	// Importamos a (Injectable).
	import { Injectable } from '@angular/core';

	// (@Injectable) es quien nos permite inyectar nuestro servicio a otros componentes.
	@Injectable({
	  providedIn: 'root'
	})

	// Aqui esta la clase que implementa la logica de nuestro servicio.
	export class StoreService {

	  constructor() { }
	}
```

### ===================================== ###
###### ===--- Inyectar servicio ---=== ######
### ===================================== ###

###### --- --- --- --- --- --- {proyecto}/src/app/services/store/store.service.ts --- --- --- --- --- --- ######

<!-- Servicio -->

```typescript
	import { Injectable } from '@angular/core';

	// Podemos importarnos nuestros tipados.
	import { Product } from '../models/product';

	@Injectable({
	  providedIn: 'root'
	})

	export class StoreService {
		
		// Aqui podemos tener la logica que queramos para nuestro servicio.

		private products:Product[] = [];

		public getProducts():Product[]{
			return this.products;
		}

		public addProduct(product:Product):void{
			this.products.push(product);
		}

		public getTotalPrice():number{
			return this.products.reduce((sum, product) => {
				sum += product.price;
			});
		}

		constructor() { }
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/product/product.component.ts --- --- --- --- --- --- ######

<!-- Componente -->

```typescript
	import { Component, OnInit } from '@angular/core';
	import { Product } from 'models/product';

	// Importamos el servicio que queremos inyectar.
	import { StoreService } from '../../services/store.service';

	@Component({
		selector: 'app-product', 
		templateUrl: './product.component.html', 
		styleUrls: ['./product.component.scss'] 
	})

	export class LoginComponent implements OnInit {

		/**
		 * Debemos agregar la dependencia en el constructor.
		 */

		// De esta manera.
		private storeService:StoreService;
		constructor(storeService:StoreService){
			this.storeService = storeService;
		}

		// O de esta.
		constructor(private storeService:StoreService){}

		/**
		 * Ahora podemos hacer uso del servicio.
		 */

		/* Podemos utilizar todas las propiedades del servicio, a su vez el servicio puede ser 
		utilizado por otros componentes, pero debe ser inyectado. */

		public products:Product[] = [];
		public total:number = 0;

		constructor(private storeService:StoreService){
			// Recibimos en el constructor los valores.
			this.products = this.storeService.getProducts();
		}
		
		ngOnInit():void{
			this.total = this.storeService.getTotalPrice();
		}

		onEventAddProduct(product:Product):void{
			this.storeService.addProduct(product);
		}

		/* NOTA: Si otro componente quiere utilizar el mismo servicio, puede hacerlo inyectando el 
		servicio en el constructor; mas de un componente puede manipular los datos del servicio. */
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/componentes/product/product.component.html --- --- --- --- --- --- ######
```html
	<section>
		<div>
			<h3>Deuda total: {{ total }}</h3>
		</div>
		<div>
			<h3>Total de productos: {{ products.length }}</h3>
		</div>
		<div>
			<app-all-products (product)="onEventAddProduct($event)"></app-all-products>
		</div>
	</section>
```