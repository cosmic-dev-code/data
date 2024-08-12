### ===================================== ###
###### ===--- Opciones de carga ---=== ######
### ===================================== ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/CreatePost.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	class CreatePost extends Component
	{
		// Tenemos dos propiedades que se sincronizaran con dos inputs.
		public string $title, string $content;

		// Metodo que realizara algun proceso largo, (como guardar un usuario).
		public function crear_post():void
		{
			// code...
		}

	    public function render()
	    {
	        return view('livewire.create-post');
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/create-post.blade.php --- --- --- --- --- --- ######

```html
	<section>

		<form action="#" method="POST" autocomplete="on">
			<div>
				<input type="text" placeholder="Titulo del post" wire:model="title">
			</div>
			<div>
				<input type="text" placeholder="Contenido del post" wire:model="content">
			</div>
			<div>
				<input type="button" value="Crear post" wire:click="crear_post()">
			</div>
		</form>
		<figure>

			<!-- La propiedad (wire:loading), le da a un elemento un (display: hidden), 
			sin embargo, cuando el componente realiza cualquier tarea, este elemento 
			adquiere un (display: inline-block). -->
			<span wire:loading>{{ __('Cargando ...') }}</span>

			<!-- ------------------------------------------ -->
			<!-- ------ (Mostrar) durante la (carga) ------ -->
			<!-- ------------------------------------------ -->

			<!-- Cuando se realize cualquier tarea, el elemento aparecera como un elemento: 
				--- (wire:loading.block), en bloque.
				--- (wire:loading.flex), en flexible.
				--- (wire:loading.grid), en grilla.
				--- (etc)... -->
			<span wire:loading.block>{{ __('Cargando ...') }}</span>

			<!-- (Remueve) el elemento mientras carga. -->
			<span wire:loading.remove>{{ __('Cargando ...') }}</span>

			<!-- -------------------------------------- -->
			<!-- ------ (Clases) y (propiedades) ------ -->
			<!-- -------------------------------------- -->

			<!-- Mientras se realiza un proceso en el componente, este elemento adquiere clases. -->
			<span wire:loading.class="p-6 w-full m-10">{{ __('Cargando ...') }}</span>

			<!-- Mientras se realiza un proceso en el componente, este elemento elimina clases. -->
			<span wire:loading.class.remove="p-6 w-full m-10">{{ __('Cargando ...') }}</span>

			<!-- Mientras se realiza un proceso en el componente, este elemento adquiere atributos. -->
			<span wire:loading.attr="hidden">{{ __('Cargando ...') }}</span>

			<!-- ----------------------------------- -->
			<!-- ------ (Objetivo) de (carga) ------ -->
			<!-- ----------------------------------- -->

			<!-- La propiedad (wire:target) permite hacer que el proceso de carga sea especifico, 
			como por ejemplo, cuando se ejecute el metodo (crear_post). -->
			<span wire:loading.block wire:target="crear_post">{{ __('Cargando ...') }}</span>

			<!-- Podemos tener mas de un (objetivo), puede ser una (propiedad) o un (metodo). -->
			<span wire:loading.block wire:target="crear_post, content">{{ __('Cargando ...') }}</span>
		</figure>
	</section>
```

### ================================= ###
###### ===--- Aplazar carga ---=== ######
### ================================= ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/CreatePost.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	// Importamos el modelo (Post).
	use App\Models\Post;

	class CreatePost extends Component
	{

		public string $posts;
		// Esta propiedad decide cuando traer los datos.
		public boolean $cargar_registros = false;

		// Para ser enejecutado en (wire:init).
		public function cargarDatos()
		{
			$this -> cargar_registros = true;
		}

	    public function render()
	    {
	    	// Se obtienen datos segun el valor de (cargar_registros).
	    	($this -> cargar_registros) ? (
	    		$this -> posts = Post::paginate(10)
	    	) : (
	    		$this -> posts = array()
	    	);

	        return view('livewire.create-post');
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/create-post.blade.php --- --- --- --- --- --- ######

```html
	<!-- Cunado el componente se inicie, traeremos todos los registros de la base de datos, 
	es asi como podemos aplazar intencionalmente la (carga). -->
	<div wire:init="cargarDatos">
		<section>
			@if(count($posts))
				@foreach($posts as $post)
					<div>
						<p>
							<span>{{ $post -> id }}</span>
						</p>
						<p>
							<span>{{ $post -> name }}</span>
						</p>
						<p>
							<span>{{ $post -> description }}</span>
						</p>
					</div>
				@endforeach
				@if($posts -> hasPages())
					<?= $posts -> links() ?>
				@endif
			@endif
		</section>
	</div>
```