### ================================================== ###
###### ===--- Mandar datos a un (componente) ---=== ######
### ================================================== ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/ShowPosts.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	class ShowPosts extends Component
	{

		# Propiedad disponible para la (vista).
		public string $title;
		public $arreglo = [
			"primero" => "Primer valor", 
			"segundo" => "Segundo valor", 
			"tercer" => "Tercer valor"
		];

		public function mount()
		{
			$this -> title = "Titulo de mi componente";
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

			<!-- Imprimimos las propiedades publicas. -->

			<span>{{ $title }}</span>

			<span>{{ $arreglo["primero"] . " " . $arreglo["segundo"] }}</span>
		</section>
	</div>
```

###### --- --- --- --- --- --- {proyecto}/resources/views/misPaginas/index.blade.php --- --- --- --- --- --- ######

```html
	<x-app-layout>
		
		<!-- Mandamos a llamar al componente, pero tambien le damos un valor a su propiedad (title). -->
		@livewire('show-posts', array(
			'title' => "Este es el titulo"
		))

		<!-- Tambien de esta manera. -->
		<livewire:show-posts :title="'Este es el titulo'"/>

	</x-app-layout>
```