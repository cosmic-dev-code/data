### ==================================== ###
###### ===--- Componente padre ---=== ######
### ==================================== ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/ShowPosts.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	# Importamos el modelo (Post).
	use App\Models\Post;

	class ShowPosts extends Component
	{
		public function delete(Post $post)
		{
			$post -> delete();
		}

	    public function render()
	    {
	    	// Le mandamos los datos a la vista.
	        return view('livewire.show-posts', array(
	        	'posts' => Post::all()
	        ));
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/show-posts.blade.php --- --- --- --- --- --- ######

```html
	<section>
		@if($posts -> count())
			@foreach($posts as $post)
				<article>
					<header>
						<h2>{{ $post -> title }}</h2>
					</header>
					<dl>
						<dt>
							<h3>{{ $post -> user() -> names }}</h3>
						</dt>
						<dd>
							@if($post -> image)
								<img src="<?= Storage::url($post -> image) ?>">
							@else
								<div class="error-message">
									<span>No hay imagen</span>
								</div>
							@endif
							<p>{{ $post -> description }}</p>
						</dd>
						<dd>
							
							<!-- El boton (editar) vendra del componente (edit-post), pero, dado que vamos a imprimir 
							el mismo componente segun la cantidad de registros que tengamos, es necesario 
							diferenciar a cada uno de ellos.

							La funcion (key) la cual recibe un 'id', esto sirve para que (Livewire) diferencie un 
							registro de otro.

							NOTA: Si no pasamos el tercer parametro (key), entonces nos dara error.  -->

							@livewire("edit-post", ["post" => $post], key($post -> id))

							<!-- Otra manera de hacerlo. -->
							<livewire:edit-post :post="$post" wire:key="{{ $post -> id }}"/>
							<livewire:edit-post :post="$post" :wire:key="$post -> id"/>

							<!-- Si mas de dos componentes anidados requieren el mismo parametro -->

							<!-- Mandamos la misma llave concatenada con un "string" para diferenciarlo. -->
							<livewire:edit-post :post="$post" :wire:key=" 'edit-' . $post -> id "/>
							<livewire:show-post :post="$post" :wire:key=" 'show-' . $post -> id "/>
							<livewire:send-post :post="$post" :wire:key=" 'send-' . $post -> id "/>

						</dd>
						<footer>
							<x-jet-danger-button wire:click="delete($post)">
								{{ __('Eliminar') }}
							</x-jet-danger-button>
						</footer>
					</dl>
				</article>
			@endforeach
		@else
			<div class="error-message">
				<span>No hay posts</span>
			</div>
		@endif
	</section>
```

### ====================================== ###
###### ===--- Componente anidado ---=== ######
### ====================================== ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/EditPost.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	# Importamos el modelo (Post).
	use App\Models\Post;

	class EditPost extends Component
	{
		var boolean $show_modal = false;
		var $post;

		public function mount(Post $post)
		{
			// Adquirimos el valor de la base de datos.
			$this -> post = $post;
		}

		public function edit()
		{
			$this -> post -> save();
		}

	    public function render()
	    {
	    	return view('livewire.edit-post');
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/edit-post.blade.php --- --- --- --- --- --- ######

```html
	<div>
		<div>
			<x-jet-secondary-button wire:click="$set('show_modal', true)">
				{{ __('Editar') }}
			</x-jet-secondary-button>

			<x-jet-dialog-modal wire:model="show_modal">
				<x-slot name="title">
					<h5>{{ $post -> title }}</h5>
				</x-slot>
				<x-slot name="content">
					<div>
						<x-jet-label value="Titulo del post"/>
						<x-jet-input type="text" wire:model="post.title"/>
					</div>
					<div>
						<x-jet-label value="Contenido del post"/>
						<x-jet-input type="text" wire:model="post.content"/>
					</div>
					<div>
						<x-jet-label value="Footer del post"/>
						<x-jet-input type="text" wire:model="post.footer"/>
					</div>
				</x-slot>
				<x-slot name="footer">
					<x-jet-secondary-button wire:click="$set('show_modal', false)">
						{{ __('Cancelar') }}
					</x-jet-secondary-button>
					<!-- Ejecutamos el metodo (edit). -->
					<x-jet-danger-button wire:click="edit()" wire:loading.remove wire:target="edit">
						{{ __('Editar') }}
					</x-jet-danger-button>
				</x-slot>
			</x-jet-dialog-modal>
		</div>
	</div>
```

### ============================================ ###
###### ===--- Invocar componente padre ---=== ######
### ============================================ ###

###### --- --- --- --- --- --- {proyecto}/resources/views/welcome.blade.php --- --- --- --- --- --- ######

```html
	<x-app-layout>
		<x-header-nav/>
		<div>
			<!-- Mandamos a llamar al componente (show-posts) el cual en su vista 
			manda a llamar al componente (edit-post). -->
			<livewire:show-posts/>
		</div>
	</x-app-layout>
```