###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/CreatePost.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	class CreatePost extends Component
	{
		# Metodo que recibira el los valores.
		public function metodo(string $value, int $length)
		{
			return redirect("/ruta") -> with("mensaje", $value);
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

		<!-- De manera asincrona. -->

		<!-- ($event), proporciona informacion sobre el evento. -->
		<input type="button" value="Click me" wire:click="metodo($event.target.value)"/>

		<!-- Multiples valores. -->
		<input type="text" wire:keyup="
			metodo(
				$event.target.value, 
				$event.target.value.length
			)
		">
	</section>
```