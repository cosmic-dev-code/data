### ========================================================== ###
###### ===--- Modificar el archivo (filesystems.php) ---=== ######
### ========================================================== ###

<!-- Para subir imagenes al servidor de Laravel es necesario cambiar la ruta de la imagen de 
(local) a (publica). -->

###### --- --- --- --- --- --- {proyecto}/config/filesystems.php --- --- --- --- --- --- ######

```php
    return [

        /* Aqui muestra que las carpetas por defecto se gurdaran en un archivo (local), en la carpeta 
        Storage, pero podemos cambiar a la carpeta (public); para que el navegador pueda acceder 
        a esta carpeta. */
        'default' => env('FILESYSTEM_DRIVER', 'public'),

        /**
         * Hay mas datos aqui, pero solo muestro los necesarios para subir las imagenes al 
         * servidor.
         */
    ];
```

### ============================================================= ###
###### ===--- Colocar imagenes por medio de los seeders ---=== ######
### ============================================================= ###

###### --- --- --- --- --- --- {proyecto}/database/factories/ImageFactory.php --- --- --- --- --- --- ######

```php
	namespace Database\Factories;
	use Illuminate\Database\Eloquent\Factories\Factory;

	# Tenemos una tabla y un modelo.
	use App\Models\Image;

	class ImageFactory extends Factory
	{
	    /**
	     * Indicamos el modelo perteneciente a este (factory).
	     */
	    protected $model = Image::class;

	    public function definition()
	    {
	        return [
	        	/* Llenamos el campo 'url' con un dato de prueba, en este caso una imagen.
	        	Primero: 
	        		--- Concatenamos el texto (posts/).
	        		--- Mandamos a llamar a la propiedad (faker).
	        		--- De la propiedad (faker) mandamos a llmar su metodo (image) el cual 
	        		recibe los siguientes parametros: 
	        			--- La ruta donde la imagen se va a guardar, en este caso la carpeta 
	        			(public), luego la carpeta (storage) y despues la carpeta (posts), 
	        			una carpeta que nosotros mismos creamos.
	        			--- Define el ancho de la imagen.
	        			--- Define el alto de la imagen.
	                    --- Equipos, pero (faker) ya no trabaja con equipos, asi que es null.
	                    --- Define en (true) la ruta completa como nombre de la imagen. */
	            'url' => 'posts/' . $this -> faker -> image('public/storage/posts', 640, 480, null, false)
	        ];
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/database/seeders/DatabaseSeeder.php --- --- --- --- --- --- ######

```php
    namespace Database\Seeders;

    use App\Models\Image;
    use Illuminate\Database\Seeder;
    use Illuminate\Support\Facades\Storage;

    class DatabaseSeeder extends Seeder
    {
        /**
         * Seed the application's database.
         *
         * @return void
         */
        public function run()
        {
        	# Eliminamos la carpeta (posts) dentro de la carpeta (Storage).
            Storage::deleteDirectory('posts');
        	# Creamos la carpeta (posts) dentro de la carpeta (Storage).
            Storage::makeDirectory('posts');

            # Creamos 6 imagenes.
            Image::factory(6) -> create();
        }
    }
```

### ========================================================= ###
###### ===--- Traer imagenes desde la base de datos ---=== ######
### ========================================================= ###

<!-- Para traer las imgenes guardadas en la base de datos y mostrarlas, debemos 
hubicarnos en la carpeta (storage). -->

###### --- --- --- --- --- --- {proyecto}/resources/views/misPaginas/index.blade.php --- --- --- --- --- --- ######

```html
    <x-app-layout>
    	<div class="my-3 p-3 w-1/2 mx-auto rounded">
    		<h3 class="text-lg font-medium text-gray-900">Imagenes</h3>
    		@foreach($posts as $post)
    			<!-- Si tenemos una imagen entonces. -->
    			@if($post -> image)
    				@php 
    					/* Por medio del metodo (image) extraemos la 'url' con la direccion proporcionada 
    					por la funcion (Storage). */
    					$image = Storage::url($post -> image -> url); 
    				@endphp
    			@else
    				@php
    					# De lo contrario colocamos una imagen por defecto.
    					$image = "https://cdn.pixabay.com/photo/2021/09/28/18/35/anemone-6665274_960_720.jpg"; 
    				@endphp
    			@endif

    			<div class="my-2 p-3 bg-white w-1/2 mx-auto rounded shadow">
    				<!-- La propiedad (src) recibe la variable que alamacena la 'url' de la imagen. -->
    				<img src="{{ $image }}" width="640" height="480" alt="Imagen" title="Una imagen">
    			</div>

    		@endforeach
    	</div>
    </x-app-layout>
```