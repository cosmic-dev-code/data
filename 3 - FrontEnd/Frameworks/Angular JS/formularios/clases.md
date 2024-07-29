### ======================================== ###
###### ===--- Clases de un (campo) ---=== ######
### ======================================== ###


Estas son las propiedades de un campo del formulario de acuerdo a su estado: 

[](ng-untouched), El campo aún no ha sido tocado.
[](ng-touched), El campo ha sido tocado
[](ng-pristine), El campo aún no ha sido modificado.
[](ng-dirty), El campo ha sido modificado.
[](ng-valid), El contenido del campo es válido.
[](ng-invalid), El contenido del campo no es válido.
[](ng-valid-key), Una clave para cada validación. Ejemplo: ng-valid-required, 
útil cuando hay más de una cosa que se debe validar
[](ng-invalid-key), Ejemplo: [](ng-invalid-required)

### ============================================= ###
###### ===--- Clases de un (formulario) ---=== ######
### ============================================= ###

Estas son las propiedades del formulario de acuerdo a su estado: 

[](ng-pristineNingún), campo no ha sido modificado todavía
[](ng-dirtyUno), o más campos han sido modificados
[](ng-validEl), contenido del formulario es válido.
[](ng-invalidEl), contenido del formulario no es válido.
[](ng-valid-keyUna), clave para cada validación. Ejemplo: [](ng-valid-required), útil cuando hay más de una cosa que se debe validar
[](ng-invalid-key), Ejemplo: [](ng-invalid-required).

### =================================== ###
###### ===--- Utilizar clases ---=== ######
### =================================== ###

Las clases fueron creadas específicamente para dar algunos estilos [](CSS) a dichos elementos que las contengan.
Las clases pueden agregarse siempre que el valor de alguna propiedad sea _(true)_.
La clase no se agregará o se quitará si el valor de la propiedad se encuentra en _(false)_.

```css

	/* Estilos para un campo segun las clases. */

	input.ng-invalid {
		background-color: pink;
	}
	input.ng-valid {
		background-color: lightgreen;
	}

	/* Estilos para el formulario segun las clases. */

	form.ng-pristine {
		background-color: lightblue;
	}
	form.ng-dirty {
		background-color: pink;
	}
```