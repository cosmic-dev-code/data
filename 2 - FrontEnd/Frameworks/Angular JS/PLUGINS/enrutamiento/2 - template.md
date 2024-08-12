### ======================================= ###
###### ===--- Utilizar (template) ---=== ######
### ======================================= ###

###### --- --- --- --- --- --- index.html --- --- --- --- --- --- ######

```html
	<section ng-app="app">
		<div ng-controller="ctrl">

			<div>
				<!-- Colocamos los enlaces de enrutamiento utilizando (#/!{nombreDeRuta}). -->
				<a href="#/!">Inicio</a>
				<a href="#!usuarios">Usuarios</a>
				<a href="#!admin">Usuarios</a>
			</div>

			<!-- La (ng-view) es necesaria, representa el lugar dónde se va a insertar el contenido de la 
			propiedad (template) o (templateUrl).

			Solo puede haber (una) en la página y se puede escribir de una de las siguientes maneras: -->
			
			<!-- Forma de clase. -->
			<div class="ng-view"></div>
			<!-- Forma de directiva. -->
			<div ng-view></div>
			<!-- Forma de etiqueta. -->
			<ng-view></ng-view>

		</div>
	</section>
```

###### --- --- --- --- --- --- global.js --- --- --- --- --- --- ######

<!-- Codigo JavaScript modularizado. -->

```javascript
	const app = angular.module("app", ["ngRoute"]);
	
	/* El método (config) recibe por parámetro un callback que recibe el proveedor de rutas ($routeProvider). */
	app.config(function($routeProvider){
		
		// Proveedor de rutas.
		$routeProvider

			/* El método (when) recibe por parámetros: 
				--- La ruta a definir.
				--- Un objeto con dos posibles propiedades: 
					--- (templete), en la cual se puede escribir directamente código HTML.
					--- (templateUrl), en la cual se recibe la URL de un archivo (HTML) la cual se 
					incrustará en la página. */

			// (#/!).
			.when("/", {
				template: "<h3>Bienvenido</h3>", 
			})

			// (#!usuarios).
			.when("/usuarios", {
				template: (`
					<section>
						<article>
							<h1>Bienvenido a usuarios</h1>
						</article>
					</section>
				`)
			})

			// (#!admin).
			.when("/admin", {
				// URL de un archivo HTML.
				template: (`
					<section>
						<article>
							<h1>Bienvenido a administradores</h1>
						</article>
					</section>
				`)
			})

			/* El método (otherwise) es el encargado de direccionar al usuario cuando este se encuentra en una ruta 
			no definida, recibe por parámetro: 
				--- Un objeto con dos posibles propiedades: 
					--- (template), para código directo HTML.
					--- (templateUrl), para una URL de un archivo HTML. */

			.otherwise({
				// Solo informamos al usuario.
				template: (`
					<section>
						<article>
							<h1>No se encuentra la página que solicita</h1>
						</article>
					</section>
				`)
			});

	});
```