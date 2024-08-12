### ========================= ###
###### ===--- Rutas ---=== ######
### ========================= ###

###### --- --- --- --- --- --- {proyecto}/src/app/app-routing.module.ts --- --- --- --- --- --- ######

<!-- Aqui se manejan las rutas de la aplicacion. -->

```ts
	import { NgModule } from '@angular/core';
	import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

	const routes: Routes = [
		{
			// Cuando se visita la ruta (/home).
			path: 'home',
			// Indica el archivo {proyecto}/src/app/home/home.module.ts
			loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
		},
		{
			// Cuando se visita la raiz de la pagina (/).
			path: '',
			// Redirige a (/home).
			redirectTo: 'home',
			pathMatch: 'full'
		},
		{
			// Indica la ruta (/my-pages).
			path: 'my-pages',
			loadChildren: () => import('./my-pages/my-pages.module').then( m => m.MyPagesPageModule)
		},
	];

	/* NOTA: Normalmente cuando se define una ruta (/ruta) es porque tenemos una pagina con el nombre de esa 
	ruta, y esa pagina es la que se devuelve al visitar la ruta, por ejemplo: 
		--- (/home) => {proyecto}/src/app/home/home.page.html */

	@NgModule({
		imports: [
			RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
		],
		exports: [RouterModule]
	})
	export class AppRoutingModule { }
```

### =========================== ###
###### ===--- Navegar ---=== ######
### =========================== ###

<!-- El enrutamiento puede manejarse de dos formas. -->

```html
	<ion-content>

		<center>
			<!-- Redirige a la pagina (my-pages) segun la ruta definida. -->
			<a href="/my-pages">Ir a pagina</a>
		</center>

	</ion-content>
```

<!-- Otra forma de hacerlo, (la recomendada). -->

```html
	<ion-content>

		<center>
			<!-- Tambien reedirige pero con una animacion. -->
			<ion-button [routerLink]="['/my-pages']">Ir a pagina</ion-button>
		</center>

	</ion-content>
```