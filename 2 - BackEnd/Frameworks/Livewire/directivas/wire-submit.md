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
		public function metodo()
		{
			// Codigo...
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
		<!-- (wire:submit.prevent), previene el comportamiento por defecto, y en su lugar ejecuta el metodo 
		especificado cada que se envia el formulario. -->
		<form wire:submit.prevent="metodo" action="#" method="GET" autocomplete="off">
			<!-- Todas las propiedades se convierten en (solo lectura). -->
		</form>
	</section>
```