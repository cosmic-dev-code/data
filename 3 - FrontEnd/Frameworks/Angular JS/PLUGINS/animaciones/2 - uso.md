
### =========================================================== ###
###### ===--- Nombre de (applicacion) y (dependencia) ---=== ######
### =========================================================== ###

<!-- Para hacer uso de la librería que instalamos por medio del CDN, debemos colocarle por nombre a 
nuestra aplicación: -->
*	--- [](ngAnimate).

```html
	<section ng-app="ngAnimate">
		<div ng-controller="ctrl">
			<!-- Código... -->
		</div>
	</section>
```

_Si cambiamos el nombre de nuestra aplicacion [](ng-app), tenemos una dependencia._

```html
	<section ng-app="app">
		<div ng-controller="ctrl">
			<!-- ... -->
		</div>
	</section>
```

```javascript
	/* Si nuestra aplicación tiene otro nombre, debemos colocar como dependencia la (ngAnimate). */
	angular.module("app", ["ngAnimate"]).controller("ctrl", function($scope){
		// ...
	});
```

### ============================================= ###
###### ===--- Agrear clases para animar ---=== ######
### ============================================= ###

La librería [](ngAnimate) no agrega animaciones como tal, sino que está a la escucha de algunos eventos, 
luego, agrega clases para poder _animar_.

Las propiedades que agregan y quitan clases son: 

*    --- [](ng-show)
*    --- [](ng-hide)
*    --- [](ng-class)
*    --- [](ng-view)
*    --- [](ng-include)
*    --- [](ng-repeat)
*    --- [](ng-if)
*    --- [](ng-switch)

Las propiedades [](ng-show) y [](ng-hide) agregan las clases: 
*    --- [](ng-enter), cuando aparecen en el _DOM_.
*    --- [](ng-leave), cuando desaparecen del _DOM_.

La propiedad (ng-repeat) agrega la clase: 
*    --- [](ng-move), cuando el elemento _HTML_ cambia de posición.

Se pueden agregar distintas clases durante una animación, como lo es en el 
caso de [](ng-hide): 
*    --- [](ng-animate)
*    --- [](ng-hide-animate)
*    --- [](ng-hide-add) (si el elemento estará oculto)
*    --- [](ng-hide-remove) (si se mostrará el elemento)
*    --- [](ng-hide-add-active) (si el elemento estará oculto)
*    --- [](ng-hide-remove-active) (si se mostrará el elemento)

### ===================================== ###
###### ===--- Creando una clase ---=== ######
### ===================================== ###

```html
	<div>
	    <!-- Alternamos el valor de la variable (myCheck). -->
	    <input type="checkbox" ng-model="myCheck">
	</div>
	<div>
	    <!-- La propiedad (ng-hide) se activa y se desactiva de acuerdo a la variable (myCheck). -->
	    <div ng-hide="myCheck"></div>
	</div>

	<style>
	    /* Creamos una animación. */
	    @keyframes myChange{
	        from{
	            height: 100px;
	        }to{
	            height: 0;
	        }
	    }

	    /* A nuestro Div le damos una altura y demás. */
	    div{
	        height: 100px;
	        background-color: lightblue;
	    }

	    /* Cuando nuestro (div) adquiera la clase 
	    (ng-hide) se ejecutará una animación. */
	    div.ng-hide{
	        animation: 0.5s myChange;
	    }
	</style>
```