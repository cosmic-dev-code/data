### ===================================== ###
###### ===--- Crear componentes ---=== ######
### ===================================== ###

###### --- --- --- --- --- --- {proyecto}/resources/views/welcome.php --- --- --- --- --- --- ######

<!-- Tenemos por ejemplo dos componentes: 
	--- Uno para mostrar los productos.
	--- Otro para registrarse e iniciar sesion.

Dependiendo si el usuario ha iniciado sesion o no mostraremos uno u otro. -->

```html
	@extends('plantillas.plantilla')
	@section('title_page', "Welcome")

	@section('ventana')
		<section>
			@auth
				<x-dashboard>
					<x-slot name="header">
						Bienvenido al dashboard
					</x-slot>
					<div>
						<!-- Contenido -->
					</div>
				</x-dashboard>
			@else
				<x-register-or-session>
					<x-slot name="header">
						Debe iniciar sesion o registrarse
					</x-slot>
					<div>
						<!-- Contenido -->
					</div>
				</x-register-or-session>
			@endauth
		</section>
	@endsection
```

### ============================================================= ###
###### ===--- Crear componentes dinamicos por etiquetas ---=== ######
### ============================================================= ###

###### --- --- --- --- --- --- {proyecto}/resources/views/welcome.php --- --- --- --- --- --- ######

```html
	@extends('plantillas.plantilla')
	@section('title_page', "Welcome")
```
```php
	<?php
		$component = ""; $title = "";

		# ($component) contendra el nombre del componente al cual debe mandarse a llamar.

		if(auth() -> user()){
			$component = "dashboard";
			$title = "Bienvenido al dashboard";
		}else{
			$component = "register-or-session";
			$title = "Debe iniciar sesion o registrarse";
		}
	?>
```
```html
	@section('ventana')
		<section>
			<div>
				<!-- Dependiendo del valor de ($component) se manda a llamar uno de los dos componentes. -->
				<x-dynamic-component :component="$component">
					<!-- Dado que los dos componentes comparten la misma estructura, podemos mandar cambiar 
					el valor de uno u otro. -->
					<x-slot name="header">
						{{ $title }}
					</x-slot>
					<div>
						<!-- Contenido -->
					</div>
				</x-dynamic-component>
			</div>
		</section>
	@endsection
```