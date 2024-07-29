<!-- Cuando se tienen muchos controladores se tiene mucho codigo JavaScript, por lo que es posible querer 
modularizar el codigo JS de cada controlador en archivo separados.

Esto se puede hacer de la siguiente manera. -->

###### --- --- --- --- --- --- index.html --- --- --- --- --- --- ######

```html
	<!-- Importar el archivo global de las rutas. -->
	<script src="rutas.js" type="text/javascript"></script>
	<!-- Importar los controladores aislados. -->
	<script src="controladores/usuarios.js" type="text/javascript"></script>
	<script src="controladores/administradores.js" type="text/javascript"></script>

	<!-- Resto del codigo HTML. -->

	<section ng-app="app">
		<div ng-controller="ctrlGlobal">

			<div>
				<!-- Definimos algunas rutas. -->
				<a href="#/!">Inicio</a>
				<a href="#!usuarios">Usuarios</a>
			</div>
			<div>
				<!-- Aqui se encontrara el contenido de la ruta actual. -->
				<ng-view></ng-view>
			</div>
		</div>
	</section>
```

### ================================= ###
###### ===--- Controladores ---=== ######
### ================================= ###

###### --- --- --- --- --- --- controladores/usuarios.js --- --- --- --- --- --- ######

```js
	// Al indicar (app.ctrlUsuarios) declara un nuevo modulo para Angular JS.
	const app = angular.module("app.ctrlUsuarios", []);

	// Se define el controlador.
	app.controller("usuariosCtrl", function($scope){
		$scope.mensaje = "Bienvenido a los usuarios";
	});
```

###### --- --- --- --- --- --- controladores/administradores.js --- --- --- --- --- --- ######

```js
	// Al indicar (app.ctrlAdministradores) declara un nuevo modulo para Angular JS.
	const app = angular.module("app.ctrlAdministradores", []);

	// Se define el controlador.
	app.controller("adminCrtl", function($scope){
		$scope.mensaje = "Bienvenido a los administradores";
	});
```

### ==================================== ###
###### ===--- Archivo de rutas ---=== ######
### ==================================== ###

###### --- --- --- --- --- --- rutas.js --- --- --- --- --- --- ######

```javascript
	const app = angular.module("app", [
		"ngRoute", 
		// Se indica que se utilizaran los nuevos modulos declarados en archivos aparte.
		"app.ctrlUsuarios", "app.ctrlAdministradores"
	]);

	app.config(function($routeProvider){
		
		$routeProvider

		// (#/!).
		.when("/", {
			templateUrl: "welcome.html", 
		})
		// (#!usuarios).
		.when("/usuarios", {
			templateUrl: "usuarios.html", 
			// Asigna el controlador definido en el modulo (app.ctrlUsuarios)
			controller: "usuariosCtrl"
		})
		.when("/administradores", {
			templateUrl: "administradores.html", 
			// Asigna el controlador definido en el modulo (app.ctrlAdministradores)
			controller: "adminCrtl"
		})
		.otherwise({
			templateUrl: "perdido.html"
		});
	});

	/**
	 * Controlador global.
	 */

	// Todas las vistas tienen acceso a las propiedades y metodos definidos.
	app.controller("ctrlGlobal", function($scope){
		$scope.mensajeGlobal = `<h2>Hola mundo</h2>`;
	});
```