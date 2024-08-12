### ================================ ###
###### ===--- Validaciones ---=== ######
### ================================ ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/CreatePost.php --- --- --- --- --- --- ######

# Cabe resaltar que las validaciones ocurren de manera [](asincrona).

```php
    namespace App\Http\Livewire;
    use Livewire\Component;

    use App\Models\Post;

    class CreatePost extends Component
    {
        var string $title, string $content;

        // ------------------------------- //
        // ------ Reglas y mensajes ------ //
        // ------------------------------- //

        // En la propiedad (rules) colocamos un array con las validaciones para las propiedades.
        protected $rules = array(
            'title' => 'required',
            'content' => 'required|min:100'
        );

        // Podemos cambiar los mensajes de los errores.
        protected $messages = array(
            "title.required" => "El titulo es obligatorio", 
            "content.required" => "El contenido es obligatorio", 
            "content.min" => "El contenido debe tener al menos 100 caracteres"
        );

        // Podemos cambiar el nombre de las variables.
        protected $validationAttributes = array(
            "title" => "titulo", 
            "content" => "contenido del post"
        );

        // --------------------- //
        // ------ Validar ------ //
        // --------------------- //

        public function validar()
        {
            /**
             * Validamos
             */

            // Validamos las propiedades del componente segun la propiedad (rules).
            $this -> validate();

            // Solo valida un campo especifico segun la propiedad (rules).
            $this -> validateOnly("title");

            /**
             * Podemos colocar las reglas de validacion aqui mismo
             */

            $this -> validate([
                'title' => 'required|max:10',
                'content' => 'required|min:100'
            ]);

            $this -> validateOnly("title", [
                'title' => 'required|max:10'
            ]);
            $this -> validateOnly("title", [
                'title' => 'required|max:10',
                'content' => 'required|min:100' 
            ]);

            // Si pasa la validacion, entonces continuamos con el codigo.

            Post::create([
                'title' => $this -> title,
                'content' => $this -> content
            ]);
            
            $this -> emit('alert', 'El post se creo satisfactoriamente.');
            $this -> reset(['open', 'title', 'content']);
        }

        public function validarConMensajes()
        {
            // Podemos colocar todo al momento de hacer la validacion.
            $this -> validate(array(
                ['title' => 'required', 'content' => 'required|min:100'], 
                [
                    "title.required" => "El titulo es obligatorio", 
                    "content.required" => "El contenido es obligatorio", 
                    "content.min" => "El contenido debe tener al menos 100 caracteres"
                ], 
                [
                    "title" => "titulo", 
                    "content" => "contenido del post"
                ]
            ));
        }

        // ----------------------------- //
        // ------ Manejar errores ------ //
        // ----------------------------- //

        public function errores()
        {
            // Agrega un error a la bolsa de errores.
            $this -> addError("Un error", "Hubo un error inesperado");

            // Borrar la bolsa de errores.
            $this -> resetErrorBag();
            $this -> resetValidation();

            // Borra un error especifico de la bolsa de errores.
            $this -> resetValidation('title');
            $this -> resetErrorBag('title');

            // Retorna la bolsa de errores.
            $errores = $this -> getErrorBag();

            // Con esta instancia de bolsa de errores, puede hacer cosas como esta: 
            $errores -> add("Un error", "Hubo un error inesperado");
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
        <!-- Imprimimos los errores de la (validacion) por medio de la directiva (@error). -->
        <div>
            <input type="text" placeholder="Titulo del post" wire:model="title"/>
            @error('title')
                <div>
                    <span class="text-red-600">{{ $message }}</span>
                </div>
            @enderror
        </div>
        <div>
            <input type="text" placeholder="Titulo del post" wire:model="content"/>
            @error('content')
                <div>
                    <span class="text-red-600">{{ $message }}</span>
                </div>
            @enderror
        </div>
        <div>
            <!-- Se realiza la validacion (asincrona). -->
            <x-jet-danger-button wire:click="validar()">
                {{ __('Crear post') }}
            </x-jet-danger-button>
        </div>
    </section>
```

### =============================================== ###
###### ===--- Validacion en (tiempo real) ---=== ######
### =============================================== ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/CreatePost.php --- --- --- --- --- --- ######

```php
    namespace App\Http\Livewire;
    use Livewire\Component;

    use App\Models\Post;

    class CreatePost extends Component
    {
        var $title, $content;

        // Aplicamos las reglas de validacion.
        protected $rules = array(
            'title' => 'required|max:10',
            'content' => 'required|min:100'
        );

        // A la escucha de cualquier cambio en cualquier propiedad.
        public function updated($propiedad)
        {
            // Validamos solo la propiedad que se reciba.
            $this -> validateOnly($propiedad);
        }

        public function save()
        {
            // Validamos todo cuando se ejecute este metodo.
            $this -> validate();

            Post::create([
                'title' => $this -> title,
                'content' => $this -> content
            ]);
            
            $this -> emit('alert', 'El post se creo satisfactoriamente.');
            $this -> reset(['open', 'title', 'content']);
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
        <!-- Las propiedades se estaran validando en tiempo real (wire:model) ya que estamos a la escucha 
        de cualquier modificacion (updated). -->
        <div>
            <input type="text" placeholder="Titulo del post" wire:model="title"/>
            @error('title')
                <div>
                    <span class="text-red-600">{{ $message }}</span>
                </div>
            @enderror
        </div>
        <div>
            <input type="text" placeholder="Contenido del post" wire:model="content"/>
            <x-jet-input-error for="content"/>
        </div>
        <div>
            <x-jet-danger-button wire:click="save()">
                {{ __('Crear post') }}
            </x-jet-danger-button>
        </div>
    </section>
```