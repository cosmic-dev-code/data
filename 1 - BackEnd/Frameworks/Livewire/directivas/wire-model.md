### ============================================= ###
###### ===--- La propiedad (wire:model) ---=== ######
### ============================================= ###

<!-- /* La propiedad (wire:model) permite vincular los datos. -->

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/CreatePost.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	class CreatePost extends Component
	{
		// Dos variables publicas.
		var string $titulo;
		var string $contenido;

		// Propiedad publica booleana.
		var boolean $mostrar = false;

	    public function render()
	    {
	        return view('livewire.create-post');
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/create-post.blade.php --- --- --- --- --- --- ######

```html
	<div>

		<!-- (wire:model), hace un binding en tiempo real con una propiedad del componente, 
		cada que se actualiza el valor del elemento, tambien lo hace la propiedad del 
		componente. -->

		<div>
			<input type="text" placeholder="Titulo del post" wire:model="titulo"/>
		</div>
		<div>
			<textarea cols="30" rows="10" wire:model="contenido">
				{{ __('Sin contenido') }}
			</textarea>
		</div>

		<!-- Mostramos los valores de cada propiedad publica. -->

		<div>
			<div>Titulo: {{ $titulo }}</div>
			<div>Contenido: {{ $contenido }}</div>
		</div>

		<!-- Mostrar elementos y ocultar elementos. -->

		<section>
			<!-- Ya que (mostrar) es una propiedad publica booleana, esto hara que un 
			elemento pueda ser renderizado en la vista o no. -->
			<x-jet-dialog-modal wire:model="mostrar">
				<x-slot name="title">
					<h6>{{ __('Titulo') }}</h6>
				</x-slot>
				<x-slot name="content">
					<h6>{{ __('Contenido') }}</h6>
				</x-slot>
				<x-slot name="footer">
					<div>
						<!-- La funcion ($set) permite cambiar el valor de una propiedad del componente. -->
						<input type="button" wire:click="$set('mostrar', false)" value="Cerrar">
					</div>
				</x-slot>
			</x-jet-dialog-modal>

			<!-- Modificamos el valor de (mostrar). -->
			<x-jet-button wire:click="$set('mostrar', true)">
				{{ __('Abrir modal') }}
			</x-jet-button>
		</section>
	</div>
```