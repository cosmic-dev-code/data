###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/CreatePost.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	class CreatePost extends Component
	{
		# Propiedad de PHP a modificar.
		public string $propiedad = null;

	    public function render()
	    {
	        return view('livewire.create-post');
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/create-post.blade.php --- --- --- --- --- --- ######

```html
	<section>
		
		<!-- ($set), setea una propiedad del componente, dandole un nuevo valor. -->
		<input type="button" value="Click me" wire:click="$set('propiedad', 'Hola mundo')"/>

		<!-- Por ejemplo, al dar "enter" la propiedad (propiedad) recibe el valor del input. -->
		<input type="text" wire:keydown.enter="
			$set('propiedad', $event.target.value)
		">

	</section>
```