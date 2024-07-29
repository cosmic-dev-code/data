### ================================================== ###
###### ===--- Mandar datos a un (componente) ---=== ######
### ================================================== ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/ShowPosts.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	class ShowPosts extends Component
	{

		# Propiedades publicas, disponibles para el componente.
		public string $title;
		public string $content = "";
		public string $user = null;
		public integer $age = 0;

		// ----------------------------------------- //
		// ------ La propiedad ($queryString) ------ //
		// ----------------------------------------- //

		/* La propiedad (queryString) permite enviar valores por medio de la url. */

		/* Esta propiedad envia por la "url" las propiedades que se le indiquen 
		con sus respectivos valores. */
		protected $queryString = [
			'title', 'content', 'user'
		];

		// Mientras la propiedad tenga el valor del (except) no se enviara por la "url".
		protected $queryString = array(
			'title' => ['except' => 'Brandon Anthony'],
			'content' => "Contenido", 
			"age" => 22, 
			'user'
		);

		// ------------------------------ //
		// ------ El metodo (fill) ------ //
		// ------------------------------ //

		public function mount()
		{
			// Damos los valores a cada una de las propiedades.
			$this -> title = "Titulo de mi componente";
			$this -> content = "Contenido de mi componente";
			$this -> user = array("name" => "Brandon", "password" => 123);

			// El metodo (fill) da valores a varias propiedades.
			$this -> fill([
				"title" => "Titulo de mi componente", 
				"content" => "Contenido de mi componente", 
				"user" => array(
					"name" => "Brandon", 
					"password" => 123
				)
			]);
		}

		// ------------------------------------------------- //
		// ------ Los metodos (reset) y (resetExcept) ------ //
		// ------------------------------------------------- //

		public function reiniciar_valores()
		{
			// El metodo (reset) reestablece una o mas propiedades a su valor inicial.
			$this -> reset("title");
			$this -> reset(["title", "content"]);
			// No reinicia ninguno.
			$this -> reset();

			/* El metodo (reset) reestablece una o mas propiedades a su valor inicial a 
			excepcion de las propiedades especificadas. */
			$this -> resetExcept("title");
			$this -> resetExcept(["title", "content"]);
			// Reinicia todos los campos.
			$this -> resetExcept();
		}

	    public function render()
	    {
	        return view('livewire.show-posts');
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/show-posts.blade.php --- --- --- --- --- --- ######

```html
	<div>
		<section>
			<!-- Imprimimos la propiedad publica. -->
			<span>{{ $title }}</span>
		</section>
	</div>
```