### ============================================== ###
###### ===--- La propiedad (wire:ignore) ---=== ######
### ============================================== ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/CreatePost.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	use App\Models\Post;

	class CreatePost extends Component
	{
	    public function render()
	    {
	    	// Mandamos datos a la vista.
	        return view('livewire.create-post', array(
	        	"posts" => Post::all()
	        ));
	    }
	}
```
###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/create-post.blade.php --- --- --- --- --- --- ######

```html
	<form action="{{ route('posts.update') }}" method="POST" autocomplete="off">
		@csrf
		@method("POST")

		@foreach($posts as $post)
			<div>
				<x-jet-label>{{ $post -> name }}</x-jet-label>
			</div>
			<div>
				<x-jet-label>{{ $post -> description }}</x-jet-label>
			</div>
			
			<!-- Cada vez que se renderize la vista, el elemento que contenga el atributo (wire:ignore) 
			no se volvera a rederizar, (sino solo una vez). -->
			<div wire:ignore>
				<input type="submit" value="Enviar">
			</div>

		@endforeach
	</form>
```