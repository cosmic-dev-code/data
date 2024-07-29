### =============================== ###
###### ===--- Reactividad ---=== ######
### =============================== ###

Angular acepta 3 formas de comunicacion entre componentes: 
-	Los decoradores *@Input* y *@Output*
-	La *reactividad*.

Pero Ionic recomienda la **reactividad** como forma para pasar datos un componente a otro.

###### --- --- --- --- --- --- {proyecto}/src/app/services/shared/shared.service.ts --- --- --- --- --- --- ######

<!-- Pagina que importa el servicio para mandar informacion. -->

```ts
	import { Injectable } from '@angular/core';
	import { BehaviorSubject } from 'rxjs';

	@Injectable({
		providedIn: 'root',
	})
	export class SharedService {
		// Puedes cambiar el tipo según tus necesidades
		private dataSubject = new BehaviorSubject<string>('');

		public data$ = this.dataSubject.asObservable();

		setData(data: string) {
			this.dataSubject.next(data);
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/origen/origen.page.ts --- --- --- --- --- --- ######

<!-- Pagina que importa el servicio para recibir informacion. -->

```ts
	import { Component } from '@angular/core';

	// Importamos el servicio que creamos.
	import { SharedService } from '../services/shared.service';

	@Component({
		selector: 'app-origen',
		templateUrl: './origen.page.html',
		styleUrls: ['./origen.page.scss'],
	})
	export class OrigenPage {
		constructor(private sharedService: SharedService) {}

		sendDataToDestination() {
			this.sharedService.setData("Información desde la página de origen");
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/destino/destino.page.ts --- --- --- --- --- --- ######

```ts
	import { Component, OnDestroy } from '@angular/core';

	// Importamos las clases para suscribir y desuscribir al componente.
	import { SharedService } from '../shared.service';
	import { Subscription } from 'rxjs';

	@Component({
		selector: 'app-destino',
		templateUrl: './destino.page.html',
		styleUrls: ['./destino.page.scss'],
	})
	export class DestinoPage implements OnDestroy {
		dataFromSource: string;
		private subscription: Subscription;

		constructor(private sharedService: SharedService) {
			// Suscribimos al componente para recibir los datos.
			this.subscription = this.sharedService.data$.subscribe(data => {
				this.dataFromSource = data;
			});
		}

		ngOnDestroy() {
			// Desuscribimos al componente cuando este ya no se muestra en la interfaz.
			this.subscription.unsubscribe();
		}
	}
```