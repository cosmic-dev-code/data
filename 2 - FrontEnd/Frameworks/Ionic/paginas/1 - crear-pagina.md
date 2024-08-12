### ================================ ###
###### ===--- Crear pagina ---=== ######
### ================================ ###

<!-- Las paginas en Angular Ionic no son archivos HTML como tal, sino que Angular maneja el 
concepto de una sola pagina, (SPA). -->

<!-- Para crear una pagina de Ionic utilizando el comando de generacion. -->

```bat
	: ionic generete page {NombreDeLaPagina}
	ionic generate page MyPagina
	ionic g page MyPagina
```

**Una vez ejecutado el comando, se generan los siguientes archivos:**
	- [](src/app/my-pagina/my-pagina-routing.module.ts): 
		--- Aqui se manejan las rutas de navegacion asosiadas a la pagina.
	- [](src/app/my-pagina/my-pagina.page.spec.ts): 
		--- Se utiliza para realizar las pruebas unitarias.
	- [](src/app/my-pagina/my-pagina.module.ts): 
		--- Se utilizan para organizar y configurar componentes, servicios y otras funcionalidades.
	- [](src/app/my-pagina/my-pagina.page.html): 
		--- Este archivo contiene el marcado HTML de la página.
	- [](src/app/my-pagina/my-pagina.page.ts): 
		--- Este archivo contiene la lógica y el controlador asociado a la página.
	- [](src/app/my-pagina/my-pagina.page.scss): 
		--- Contiene estilos específicos (CSS o Sass) para la página.

# NOTA: Es posible crear todas las paginas dentro de una carpeta llamada (Pages).

```bat
	ionic g page Pages/MyPagina
```

<!-- Automaticamente crea: 
	--- app
		--- Pages
			--- MyPagina
				{Todos los archivos .ts, .scss y .html} -->

###### --- --- --- --- --- --- {proyecto}/src/app/my-pages/my-pages.page.ts --- --- --- --- --- --- ######

<!-- Aqui se maneja la logica de la pagina, (en este caso componente de Angular). -->

```ts
	// Como puedes obserbar se importan las clases y objetos de Angular.
	import { Component, OnInit } from '@angular/core';

	@Component({
		selector: 'app-my-pages',
		templateUrl: './my-pages.page.html',
		styleUrls: ['./my-pages.page.scss'],
	})
	export class MyPagesPage implements OnInit {
		constructor() { }
		ngOnInit() {}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/app/my-pagina/my-pagina.page.html --- --- --- --- --- --- ######

<!-- Este es el archivo de marcado de la pagina. -->

```html
	<ion-header [translucent]="true">
		<ion-toolbar>
			<ion-title>Bienvenido</ion-title>
		</ion-toolbar>
	</ion-header>

	<ion-content [fullscreen]="true">
		<ion-header collapse="condense">
			<ion-toolbar>
				<ion-title size="large">Titulo de contenido principal</ion-title>
			</ion-toolbar>
		</ion-header>
	</ion-content>
```

###### --- --- --- --- --- --- {proyecto}/src/app/my-pagina/my-pagina.page.scss --- --- --- --- --- --- ######

<!-- Este es el archivo de estilos de la pagina. -->