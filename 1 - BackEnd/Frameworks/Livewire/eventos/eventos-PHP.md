### ========================================= ###
###### ===--- Entre dos componentes ---=== ######
### ========================================= ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/ComUno.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	class ComUno extends Component
	{
		public function emitir_mensaje()
		{
			/* El metodo (emitTo) permite emitir un evento a otro componente, recibe 
			los siguietes parametros: 
				--- El componente al cual se quiere emitir el evento.
				--- El nombre del evento que se emite. */
			$this -> emitTo('show-posts', 'crear_usuario');
		}

		public function mount()
		{
			$this -> emitir_mensaje();
		}

	    public function render()
	    {
	        return view('livewire.com-uno');
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/ComDos.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	class ComDos extends Component
	{
		// Cuando recibamos el evento llamado (crear_usuario) ejecutaremos el metodo (crearUsuario).
		protected $listeners = array(
			"crear_usuario" => "crearUsuario"
		);

		/* Este metodo se ejecutara cuando se reciba el evento emitido. */
		public function crearUsuario()
		{
			// Codigo a ejecutar ...
		}

	    public function render()
	    {
	        return view('livewire.com-dos');
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/ComUno.blade.php --- --- --- --- --- --- ######

```html
	<div>
		<!-- Dentro de la vista del componente (ComUno) mandamos a llamar al componente (ComDos) -->
		<livewire:com-dos/>
	</div>
```

###### --- --- --- --- --- --- {proyecto}/resources/views/welcome.blade.php --- --- --- --- --- --- ######

```html
	<x-app-layout>
		<div>
			<!-- Mandamos a llamar al componete el cual manda a llamar al otro componente dentro de su vista. -->
			@livewire('com-uno')
		</div>
	</x-app-layout>
```

<!-- ===--- NOTA: ---===

La vista (welcome.blade.php) manda a llamar a la vista (com-uno.blade.php) que a su vez 
manda a llamar a la vista (com-dos.blade.php): 
	--- La vista (com-uno.blade.php) emite un mensaje a la vista anidada (com-dos.blade.php). -->

### ============================================ ###
###### ===--- Entre varios componentes ---=== ######
### ============================================ ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/CreatePost.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	class CreatePost extends Component
	{
		public function emitir_mensaje():void
		{
			/* El metodo (emit) permite emitir un evento a mas de un componente, recibe por parametros: 
				--- El nombre del evento que se emite.
				--- El valor del evento que se emite. */
			$this -> emit('mostrar', 'todos los usuarios');
			$this -> emit('eliminar', 'un usuario');
		}

		public function mount()
		{
			$this -> emitir_mensaje();
		}

	    public function render()
	    {
	        return view('livewire.create-post');
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/ShowPosts.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	class ShowPosts extends Component
	{
		// Recibimos los eventos y estos ejecutan un metodo.
		protected $listeners = array(
			'mostrar' => 'mostrar_usuarios',
			'eliminar' => 'eliminar_usuario'
		);

		public function mostrar_usuarios():string
		{
			// Codigo a ejecutar ...
		}

		public function eliminar_usuario():void
		{
			// Codigo a ejecutar ...
		}

	    public function render()
	    {
	        return view('livewire.create-post');
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/show-posts.blade.php --- --- --- --- --- --- ######

<div>
	<livewire:create-post/>
</div>

###### --- --- --- --- --- --- {proyecto}/resources/views/welcome.blade.php --- --- --- --- --- --- ######

<x-main>
	<div>
		<!-- Mandamos a llamar al componete el cual manda a llamar al otro componente dentro de su vista. -->
		@livewire('show-posts')
	</div>
</x-main>