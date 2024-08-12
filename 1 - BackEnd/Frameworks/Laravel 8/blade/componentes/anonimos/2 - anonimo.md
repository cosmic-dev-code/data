### ============================================= ###
###### ===--- Crear un componente nuevo ---=== ######
### ============================================= ###

Los componentes anonimos nos ayudan a no repetir codigo HTML y poder reutilizarlo. Todos los componentes 
deben ser creados dentro de la carpeta [](components) y estos deben llevar la extension [](.blade.php).

###### --- --- --- --- --- --- {proyecto}/resources/views/components/targeta.blade.php --- --- --- --- --- --- ######

<!-- Podemos colocar codigo (HTML), (CSS) y (JavaScript) en este archivo. -->

```html
	<section>
		<dl>
			<dt>Titulo del componente</dt>
			<dd>
				<p>Lorem ipsum dolor sit amet consectetur.</p>
			</dd>
		</dl>
	</section>
```

### ================================================= ###
###### ===--- Mandar a llamar un componente ---=== ######
### ================================================= ###

Para mandar a llamar un componente debemos posicionarnos es alguna 
de nuestras vistas, _(la vista que queramos)_.

###### --- --- --- --- --- --- {proyecto}/resources/views/misPaginas/mipagina.blade.php --- --- --- --- --- --- ######

```html
	@extends('plantillas.plantilla')
	@section('title', "Mi pagina web")

	@section('contenido')
		<div>
			<!-- Mandamos a llamar al componente y su codigo sera pegado aqui. -->
			<x-targeta/>
		</div>
	@endsection
```

### ===================================================== ###
###### ===--- Atributos para nuestro componente ---=== ######
### ===================================================== ###

###### --- --- --- --- --- --- {proyecto}/resources/views/components/targeta.blade.php --- --- --- --- --- --- ######

La directiva [](@props), proporciona propiedades al componente las cuales podemos utilizar.

```php
	@props([
		'color' => "gray"
	]);
```

```html
	<section>
		<dl style="color: <?= $color ?>;">
			<dt>Titulo del componente</dt>
			<dd>
				<p>El color es {{ $color }}</p>
			</dd>
		</dl>
	</section>
```

###### --- --- --- --- --- --- {proyecto}/resources/views/misPaginas/mipagina.blade.php --- --- --- --- --- --- ######

```html
	@extends('plantillas.plantilla')
	@section('title', "Mi pagina web")

	@section('contenido')
		<div>
			<!-- Le damos la propiedad al componente. -->
			<x-targeta color="red"/>

			<!-- Esta es otra manera de proporcionar con codigo PHP. -->

			<?php
				$color = "red";
			?>

			<x-targeta color="<?= $color ?>"/>
			<x-targeta :color="$color"/>
		</div>
	@endsection
```

### ======================================= ###
###### ===--- Utilizar los (slot) ---=== ######
### ======================================= ###

###### --- --- --- --- --- --- {proyecto}/resources/views/components/targeta.blade.php --- --- --- --- --- --- ######

Los [](slot) son secciones que podemos definir del componente para incrustar codigo HTML.

```php
	@props([
		// Las recibimos como propiedades.
		'cabecera' => "Cabecera de targeta", 
		'pie' => "Este es el pie de la targeta"
	]);
```
```html
	<div class="card">
		<dl>
			<dt>
				<span>{{ $cabecera }}</span>
			</dt>
			<dd>
				<!-- Este ya viene definido por defecto y es el contenido del componente: 
					<x-componente>
						Contenido
					<x-componente>
				-->
				{{ $slot }}
			</dd>
			<footer>
				{{ $pie }}
			</footer>
		</dl>
	</div>
	<style type="text/css">
		.card{
			display: block;
			width: 90%;
			margin: 3rem auto;
		}
	</style>
```

###### --- --- --- --- --- --- {proyecto}/resources/views/misPaginas/mipagina.blade.php --- --- --- --- --- --- ######

```html
	@section('contenido')
		<x-targeta>
			<!-- Definimos el primer (slot) y le damos el valor a incrustar el cual es codigo HTML. -->
			<x-slot name="cabecera">
				<h1>Hola mundo</h1>
			</x-slot>

			<!-- Este es el (slot) que viene por defecto y es el contenido del componente. -->
			<div>
				<p>Lorem ipsum dolor sit amet consectetur.</p>
			</div>

			<!-- Este es el otro (slot) definido. -->
			<x-slot name="pie">
				<small>Brandon</small>
			</x-slot>
		</x-targeta>
	@endsection
```

### ===================================== ###
###### ===--- Agregar atributos ---=== ######
### ===================================== ###

###### --- --- --- --- --- --- {proyecto}/resources/views/components/targeta.blade.php --- --- --- --- --- --- ######

```php
	<?php
		// (attributes) permite que el componente reciba las propiedades que sea desde fuera del componente.
		// (merge) es un metodo que une esas propiedades con unas que definimos por defecto.
		$propiedades = $attributes -> merge(array(
			// Dfinimos una propiedad con su valor por defecto.
			"class" => "card"
		));
	?>
```
```html
	<div>
		<!-- Le damos al elemento las propiedades recibidas. -->
		<input type="text" class="card" <?= $propiedades ?>>
	</div>
```

###### --- --- --- --- --- --- {proyecto}/resources/views/misPaginas/mipagina.blade.php --- --- --- --- --- --- ######

```html
	@section('contenido')
		<!-- La clase (w-full) se une con (card) dando (card w-full) y ademas aplica el atributo (disabled). -->
		<x-targeta class="w-full" disabled></x-targeta>
	@endsection
```