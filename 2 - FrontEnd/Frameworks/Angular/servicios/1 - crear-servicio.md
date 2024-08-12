
```bat
	: Crea un servicio llamado (store) en la ruta [src/app/]
	ng g s store

	: Crea un servicio llamado (store) dentro de una carpeta llamada (services) en la ruta [src/app/services/].
	ng g s services/store
```

<!-- Los archivos que se crean dentro de nuestra carpeta (store) son: 
	--- (store.service.spec.ts) 
	--- (store.service.ts)
	--- Este es el archivo que debe llevar la logica reutilizable. -->

###### --- --- --- --- --- --- {proyecto}/src/app/services/store.service.spec.ts --- --- --- --- --- --- ######

<!-- Este es el archivo de (pruebas) del servicio. -->

```typescript
	import { TestBed } from '@angular/core/testing';

	import { StoreService } from './store.service';

	describe('StoreService', () => {
	  let service: StoreService;

	  beforeEach(() => {
	    TestBed.configureTestingModule({});
	    service = TestBed.inject(StoreService);
	  });

	  it('should be created', () => {
	    expect(service).toBeTruthy();
	  });
	});
```

###### --- --- --- --- --- --- {proyecto}/src/app/services/store.service.ts --- --- --- --- --- --- ######

<!-- Este es el archivo de la (logica) del servicio. -->

```typescript
	import { Injectable } from '@angular/core';

	@Injectable({
	  providedIn: 'root'
	})

	export class StoreService {
	  constructor() { }
	}
```