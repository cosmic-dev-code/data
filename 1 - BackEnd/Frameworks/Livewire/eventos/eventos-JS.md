### =========================================== ###
###### ===--- Componente a JavaScript ---=== ######
### =========================================== ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/Prueba.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	class Prueba extends Component
	{

		public function mount()
		{
			// Emitimos un evento llamado (creado) con su valor.
			$this -> emit('creado', 'El evento ha sido creado');
		}

	    public function render()
	    {
	        return view('livewire.prueba');
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/welcome.blade.php --- --- --- --- --- --- ######

```html
	<x-app-layout>
		<dl>
			<dt>
				@livewire("prueba")
			</dt>
			<dd>
				<script type="text/javascript">
					// El evento emitido es escuchado por (JavaScript) y recibe el valor del evento.
					Livewire.on('creado', function(message){
						window.alert(message);
					});
				</script>
			</dd>
		</dl>
	</x-app-layout>
```

# NOTA: El evento [](emit) emite a JS y a PHP, debes asegurarte que el evento que se emite y se recibe sean diferentes.
# NOTA: No nombres [](emit) y [](on) con el mismo nombre.

### =========================================== ###
###### ===--- JavaScript a Componente ---=== ######
### =========================================== ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/Prueba.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	# Importamos al modelo (Post).
	use App\Models\Post;

	class Prueba extends Component
	{
		// Cuando recibamos el evento llamado (delete_event) ejecutaremos el metodo (delete).
		protected $listeners = array(
			'delete_event' => 'delete'
		);

		// Este metodo recibe la informacion del (evento).
		public function delete(Post $id)
		{
			$id -> delete();
		}

	    public function render()
	    {
	        return view('livewire.create-post', [
	        	'posts' => Post::all()
	        ]);
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/prueba.blade.php --- --- --- --- --- --- ######

```html
	<div>
		@if($posts -> count())
			@foreach($posts as $post)
				<div>
					<div>
						<h6>{{ $post -> title }}</h6>
					</div>
					<div>
						<!-- La funcion ($emit) emite un evento que sera escuchado por (Livewire), 
						este recibe por parametros: 
							--- El nombre del evento.
							--- La informacion del evento. -->
						<input 
							type="button" 
							class="btn" 
							value="Eliminar" 
							wire:click="$emit('eventoDelete', {{ $post -> id }})"
						>
					</div>
				</div>
			@endforeach
		@endif
	</div>
```

###### --- --- --- --- --- --- {proyecto}/resources/views/welcome.blade.php --- --- --- --- --- --- ######

```html
	<x-app-layout>
		<script type="text/javascript">
			// Recibimos el evento con su informacion.
			Livewire.on('eventoDelete', idPost => {
				/* El metodo (emit) emite un evento a todos los componentes, recibe dos parametros: 
					--- El nombre del evento.
					--- La informacion del evento. */
				Livewire.emit('delete_event', idPost);

				/* El metodo (emitTo) emite un evento a un componente especifico, recibe tres parametros: 
					--- El nombre del componente al cual se le emitira el evento.
					--- El nombre del evento.
					--- La informacion del evento. */
				Livewire.emitTo('show-posts', 'delete', idPost);
			});
		</script>
	</x-app-layout>
```