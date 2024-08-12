### ========================================== ###
###### ===--- Utilizar (templateUrl) ---=== ######
### ========================================== ###

###### --- --- --- --- --- --- index.html --- --- --- --- --- --- ######

```html
	<section ng-app="app">
		<div ng-controller="ctrlGlobal">

			<div>
				<!-- Definimos algunas rutas. -->
				<a href="#/!">Inicio</a>
				<a href="#!usuarios">Usuarios</a>
				<a href="#!administradores">Administradores</a>
				<a href="#!contacto">Contacto</a>
			</div>
			<div>
				<!-- Aqui se encontrara el contenido de la ruta actual. -->
				<ng-view></ng-view>
			</div>
		</div>
	</section>
```

###### --- --- --- --- --- --- global.js --- --- --- --- --- --- ######

```javascript
	const app = angular.module("app", ["ngRoute"]);

	app.config(function($routeProvider){
		
		// Proveedor de rutas.
		$routeProvider

		/* (templateUrl), recibe la ruta de un archivo HTML a incrustar dentro de (ng-view). */
		/* (controller), hace que cada template puede tener su propio controlador, de esta manera 
		cada una de las vistas pueden tener sus propiedades y metodos. */

		// (#/!).
		.when("/", {
			templateUrl: "welcome.html", 
		})
		// (#!usuarios).
		.when("/usuarios", {
			templateUrl: "usuarios.html", 
			controller: "usuariosCtrl" // Definimos los controles de cada ruta.
		})
		// (#!administradores).
		.when("/administradores", {
			templateUrl: "admin.html", 
			controller: "adminCrtl" // Definimos los controles de cada ruta.
		})
		.otherwise({
			templateUrl: "perdido.html"
		});
	});

	/**
	 * Este es el controlador global para todas las rutas.
	 */

	// Todas las vistas tienen acceso a las propiedades y metodos definidos.
	app.controller("ctrlGlobal", function($scope){
		$scope.mensajeGlobal = `<h2>Hola mundo</h2>`;
	});

	/**
	 * Definimos los controladores para cada una de las rutas.
	 */

	app.controller("usuariosCtrl", function($scope){
		$scope.mensaje = "Bienvenido a los usuarios";
	});

	app.controller("adminCrtl", function($scope){
		$scope.mensaje = "Bienvenido a los administradores";
	});
```

### ================================== ###
###### ===--- Contenido HTML ---=== ######
### ================================== ###

###### --- --- --- --- --- --- paginas/welcome.html --- --- --- --- --- --- ######

```html
	<section>
		<h1>Bienvenido a la vista (welcome)</h1>
		<div>
			<!-- (ctrlGlobal). -->
			<p>{{ mensajeGlobal }}</p>
		</div>
	</section>
```

###### --- --- --- --- --- --- paginas/usuarios.html --- --- --- --- --- --- ######

```html
	<section>
		<!-- Esta vista puede utilizar las propiedades y metodos de su controlador, 
		tambien las directivas de (Angular JS). -->
		<h1>{{ mensaje }}</h1>

		<div>
			<!-- (ctrlGlobal). -->
			<p>{{ mensajeGlobal }}</p>
		</div>
	</section>
```

###### --- --- --- --- --- --- paginas/admin.html --- --- --- --- --- --- ######

```html
	<section>
		<!-- Esta vista puede utilizar las propiedades y metodos de su controlador, 
		tambien las directivas de (Angular JS). -->
		<h1>{{ mensaje }}</h1>

		<div>
			<!-- (ctrlGlobal). -->
			<p>{{ mensajeGlobal }}</p>
		</div>
	</section>
```