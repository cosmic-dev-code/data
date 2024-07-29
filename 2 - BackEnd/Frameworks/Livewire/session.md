### ============================================= ###
###### ===--- La propiedad (wire:click) ---=== ######
### ============================================= ###

<!-- La propiedad (wire:click) permite vincular los datos. -->

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/CreatePost.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	class CreatePost extends Component
	{
		public function crear_post():void
		{
			/**
			 * Codigo para crear el post.
			 */

			// Enviamos en mensaje de sesion exitoso a este mismo componente.
			session() -> flash("mensaje", "El post ha sido creado");
		}

		public function crear_post():void
		{
			/**
			 * Codigo para crear el post.
			 */

			// Enviamos en mensaje de sesion exitoso a una ruta en especifico.
			session() -> flash("mensaje", "El post ha sido creado");
			// Retornamos a una nueva ruta con el mensaje de sesion.
			return redirect() -> to("/posts/index");
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
		<form wire:submit.prevent="crear_post">
			<div>
				<!-- Se recibe la sesion en la ruta actual o redireccionada y se imprime. -->
				@if(session() -> has("mensaje"))
					<x-alert-success>
						{{ session("mensaje") }}
					</x-alert-success>
				@endif
			</div>
			<div>
				<button type="submit">
					{{ __('Crear post') }}
				</button>
			</div>
		</form>
	</section>
```