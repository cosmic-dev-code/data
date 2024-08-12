### ========================================= ###
###### ===--- Propiedades y metodos ---=== ######
### ========================================= ###

<!-- Los componentes de clase se utilizan cuando se quiere mostrar informacion con logica. 
Por ejemplo extraer informacion de la base de datos y mostrarla en mas de una pagina, 
ahi podemos crear un componente de clase y reutilizar codigo. -->

El archivo [](Alerta.php) y las carpetas [](View/Components) son creadas una vez que hemos creado nuestro componenete.

###### --- --- --- --- --- --- {proyecto}/app/View/Components/Alerta.php --- --- --- --- --- --- ######

```php
	namespace App\View\Components;
	use Illuminate\View\Component;

	class Alerta extends Component
	{
		# Las propiedades y metodos publicos estan disponibles para utilizar en la vista del componente.

		public string $color = "red";

	    # NOTA: ESTO DA ERROR. No se puede dejar en null.
	    public string $color = null;

	    public function get_text():string
	    {
	    	return "
	    		<span>
	    			<strong>Este es un texto de prueba</strong>
	    		</span>
	    	";
	    }

	    # Cuando el componente se crea puede recibir propiedades desde el HTML.
	    public function __construct()
	    {
	    	// ...
	    }

	    # Aqui se renderiza la vista de nuestro componente.
	    public function render()
	    {
	        return view('components.alerta');
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/components/alerta.blade.php --- --- --- --- --- --- ######

<!-- Aqui en el componente se hace uso de sus propiedades y metodos publicos. -->

```html
	<div>
		<div class="text-<?= $color ?>-500">
			<!-- Los metodos se recibien como variables -->
			<p><?= $get_text() ?></p>
		</div>
	</div>
```

<!-- ----------------------------- -->
<!-- ------ Mandar a llamar ------ -->
<!-- ----------------------------- -->

###### --- --- --- --- --- --- {proyecto}/resources/views/mis_paginas/mipagina.blade.php --- --- --- --- --- --- ######

```html
	@extends('plantillas.plantilla')
	@section('title', "Mi pagina web")

	@section('contenido')
		<div>
			<!-- Se manda a llamar al componente. -->
			<x-alerta/>
		</div>
	@endsection
```

### ================================================== ###
###### ===--- Pasar parametros al componente ---=== ######
### ================================================== ###

###### --- --- --- --- --- --- {proyecto}/app/View/Components/Alerta.php --- --- --- --- --- --- ######

```php
	namespace App\View\Components;
	use Illuminate\View\Component;


	class Alerta extends Component
	{
	    public string $color;
	    public string $segundo_color = "blue";

	    # El componente recibe dos parametros.
	    public function __construct(string $color, string $segundo = "blue")
	    {
	    	// Este valor es obligatorio.
	        $this -> color = $color;

	        // Este valor es opcional.
	        $this -> segundo_color = $segundo;
	    }

	    public function render()
	    {
	        return view('components.alerta');
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/components/alerta.blade.php --- --- --- --- --- --- ######

```html
	<div>
		<p>Lorem, ipsum, dolor.</p>
		<div>
			<!-- Podemo utilizar las propiedades publicas. -->
			<div style="color: <?= $color ?>">
				<p>El color es {{ $color }}</p>
				<p>El color opcional es {{ $segundo_color }}</p>
			</div>
		</div>
	</div>
```

<!-- ----------------------------- -->
<!-- ------ Mandar a llamar ------ -->
<!-- ----------------------------- -->

###### --- --- --- --- --- --- {proyecto}/resources/views/mis_paginas/mipagina.blade.php --- --- --- --- --- --- ######

```html
	@extends('plantillas.plantilla')
	@section('title', "Mi pagina web")

	@section('contenido')
		<div class="container mx-auto">
			<!-- La propiedad (color) recibe el valor por el constructor y renderiza la vista. -->
			<!-- La propiedad (srgundo) es opcional, por lo que puede omitirse. -->
			<x-alerta color="red" segundo="cyan"/>

			<!-- Podemos imprimir valores de PHP. -->

			<?php $color = "red"; ?>
			<x-alerta color="{{ $color }}"/>
			<x-alerta :color="$color"/>
		</div>
	@endsection
```

### ======================================= ###
###### ===--- Utilizar los (slot) ---=== ######
### ======================================= ###

###### --- --- --- --- --- --- {proyecto}/resources/views/components/alerta.blade.php --- --- --- --- --- --- ######

```html
	<div class="card">
		<dl>
			<dt>
				<!-- Imprimimos una seccion que sera definida al llamar el componente. -->
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
				<!-- Tambien esta propiedad sera definida al llamar al componente. -->
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
		<x-alerta>
			<!-- Definimos el primer (slot) y le damos el valor a incrustar el cual es codigo HTML. -->
			<x-slot name="cabecera">
				<h1>Hola mundo</h1>
			</x-slot>

			<!-- Este es el (slot) que viene por defecto y es el contenido del componente. -->
			<div>
				<p>Lorem ipsum dolor sit amet consectetur.</p>
			</div>

			<!-- Este es el otro (slot) definiendolo. -->
			<x-slot name="pie">
				<small>Brandon</small>
			</x-slot>
		</x-alerta>
	@endsection
```

### ===================================== ###
###### ===--- Agregar atributos ---=== ######
### ===================================== ###

###### --- --- --- --- --- --- {proyecto}/resources/views/components/alerta.blade.php --- --- --- --- --- --- ######

```php
	// (attributes) permite que el componente reciba las propiedades que sea desde fuera del componente.
	// (merge) es un metodo que une esas propiedades con unas que definimos por defecto.
	<?php
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

		<!-- Puede ser a cualquier elemento. -->
		<div {{ $propiedades }}>
			<!-- ... -->
		</div>
	</div>
```

###### --- --- --- --- --- --- {proyecto}/resources/views/misPaginas/mipagina.blade.php --- --- --- --- --- --- ######

```html
	@section('contenido')
		<!-- La clase (w-full) se une con (card) dando (card w-full) y ademas aplica el atributo (disabled). -->
		<x-alerta class="w-full" disabled onclick="alert('Hola')"></x-alerta>
	@endsection
```