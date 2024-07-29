
###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/CreatePost.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	class CreatePost extends Component
	{
		// Propiedad a cambiar.
		public boolean $booleano = false;

		public function cambiar():void{
			# Es posible invertir el valor de la propiedad por medio del metodo (toggle).
			$this -> booleano -> toggle();
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
		
		<!-- ($toggle), atajo para invertir variables booleanas. (false a true), (true a false). -->
		<input type="button" value="Click me" wire:click="$toggle('booleano')"/>

	</section>
```