
### ==================================== ###
###### ===--- Incluir archivos ---=== ######
### ==================================== ###

###### --- --- --- --- --- --- index.html --- --- --- --- --- --- ######

<!-- La directiva (ng-include) permite inyectar codigo HTML aisaldo de la pagina web. -->

```html
	<!DOCTYPE html>
	<html lang="es">
		<head>
			<meta charset="UTF-8">
			<title>Incluyendo archivos en mi pagina</title>
			<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.32/angular.min.js"></script>
		</head>
		<body>

			<script defer type="text/javascript">
				angular.module("app", []).controller("ctrl", function($scope){
					// Tenemos un arreglo de objetos el cual utilizará nuestro archivo (tabla.html).
					$scope.usuarios = [
						{nombre: "Brandon", edad: 22}, 
						{nombre: "Anthony", edad: 20}, 
						{nombre: "Cosmic", edad: 19}
					];
				});
			</script>

			<section ng-app="myApp" ng-controller="ctrl">
				<!-- Dentro de este elemento incluimos el codigo HTML del archivo ('tabla.html').

				NOTA: Debe colocarse entre comillas ''. -->
				<div ng-include="'tabla.html'"></div>
			</section>

		</body>
	</html>
```

###### --- --- --- --- --- --- tabla.html --- --- --- --- --- --- ######

```html
	<dl>
		<dt>
			<h3>Usuarios</h3>
		</dt>
		<dd>
			<ul>
				<!-- Dentro del archivo aislado podemos utilizar las directivas de Angular JS.
				Porque el codigo se integra al Framework. -->
				<li ng-repeat="usuario in usuarios | orderBy: 'id'">
					<div>
						<b>Id: </b><span>{{ usuario.id }}</span>
					</div>
					<div>
						<b>Nombres: </b><span>{{ usuario.nombres }}</span>
					</div>
					<div>
						<b>Apellidos: </b><span>{{ usuario.apellidos }}</span>
					</div>
				</li>
			</ul>
		</dd>
	</dl>
```

### ============================================= ###
###### ===--- Incluir dominios cruzados ---=== ######
### ============================================= ###

```html
	<div ng-app="myApp">
		<div>
			<!-- Podemos incluir un archivo de otro dominio. -->
			<div ng-include="''https://tryit.w3schools.com/angular_include.php''"></div>
		</div>
	</div>

	<script type="text/javascript">
		const app = angular.module('myApp', []);

		/* El método (config) nos permite configurar nuestro archivo que queremos incluir, 
		recibe por parámetro: 
			--- Un callback que por parámetro lleva el objeto a configurar. */
		app.config(function($sceDelegateProvider){
			// Agregamos nuestro archivo a la lista.
			$sceDelegateProvider.resourceUrlWhitelist([
				'https://tryit.w3schools.com/**'
			]);
		});
	</script>
```
