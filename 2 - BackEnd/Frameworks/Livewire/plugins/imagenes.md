### ====================================== ###
###### ===--- Manejo de archivos ---=== ######
### ====================================== ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/CreatePost.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	use App\Models\Image;

	# Importamos la clase (WithFileUploads) para poder utilizar los metodos de la imagen.
	use Livewire\WithFileUploads;

	class CreatePost extends Component
	{
		// Hacemos uso de la clase (WithFileUploads).
		use WithFileUploads;

		// Esta propiedad almacenara el valor del (input file).
		public $image;
		// Esta propiedad almacenara el valor del (input file multiple).
		public $images = [];
		// Esta propiedad almacenara un valor aleatorio para reiniciar el input, (el cache).
		public $identificador;

		// Aignamos un valor aleatorio.
		public function mount()
		{
			$this -> identificador = round();
		}

		public function reiniciar():void
		{
			$this -> reset(["image", "images"]);
			$this -> identificador = round();
		}

		// ------------------------------ //
		// ------ Subir una imagen ------ //
		// ------------------------------ //

		public function crear_imagen():void
		{
			// Guarda el archivo cargado en el directorio "mis_fotos" del disco del sistema de archivos predeterminado.
			$url = $this -> image -> store('mis_fotos');

			Image::create(array("url" => $url));

			$this -> reiniciar();
		}

		// ------------------------------------- //
		// ------ Subir mas de una imagen ------ //
		// ------------------------------------- //

		// Si tenemos mas de una imagen.
		public function crear_imagenes()
		{
			foreach($this -> images as $image){
				Image::create([
					'url' => $image -> store("mis_fotos")
				]);
			}

			$this -> reiniciar();
		}

		// ----------------------------------- //
		// ------ Actualizar una imagen ------ //
		// ----------------------------------- //

		public function actualizar_imagen(Image $image)
		{
			if($image -> url){
				// Elimanos la imagen que teniamos.
				Storage::delete([$image -> url]);

				// Le damos el nuevo valor a la imagen.
				$image -> url = $this -> image -> store('mis_fotos');
				$image -> save();
			}

			$this -> reiniciar();
		}

		// -------------------------------------- //
		// ------ Propiedades de la imagen ------ //
		// -------------------------------------- //

		public function propiedades_de_imagen()
		{
			# Muestra la (url) de donde se esta subiendo la imagen.
			#
			# NOTA: Por razones de seguridad (temporaryUrl) solo se admite para cargar imagenes.
			$this -> image -> temporaryUrl();
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
		<div>
			<!-- Sincronizamos el (input) con la propiedad (image).
				Tambien le damos como 'id' la propiedad (identificador), esto para reiniciar el input.

				Normalmente, los (inputs) no se reinician porque son (inmutables), es por esto 
				que debemos darle un (id) que este canbiando, asi el input se reinicia. -->
			<input type="file" wire:model="image" id="{{ $identificador }}" />
			<input type="file" wire:model="images" multiple id="{{ $identificador }}" />

			<label for="{{ $identificador }}">Seleccione un archivo.</label>

			<!-- Si no tenemos una imagen, colocamos su (url) temporal al cargarla. -->
			@if(!$image)
				<?= $image -> temporaryUrl() ?>
			@else
				<!-- Si tenemos ya una imagen, entonces colocamos la (url). -->
				<?= Storage::url($image) ?>
			@endif
		</div>
	</section>
```