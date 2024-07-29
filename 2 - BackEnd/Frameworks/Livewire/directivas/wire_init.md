### ============================================ ###
###### ===--- La propiedad (wire:init) ---=== ######
### ============================================ ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/CreatePost.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	class CreatePost extends Component
	{
		public function mi_metodo()
		{
			// Este metodo se ejecutara al ser llamado desde la vista.
		}

	    public function render()
	    {
	        return view('livewire.create-post');
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/create-post.blade.php --- --- --- --- --- --- ######

```html
	<!-- Por medio de la propiedad (wire:init) podemos ejecutar un metodo al inicializarse el componente. -->
	<div wire:init="mi_metodo">
		{{ __('Contenido') }}
	</div>
```