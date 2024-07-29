### ============================================================ ###
###### ===--- Componente (livewire) como (controlador) ---=== ######
### ============================================================ ###

<!-- Un componente de (livewire) puede actuar como si fuera un controlador, por lo que este 
puede renderizar una vista para una ruta. -->

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/Posts/ShowPosts.php --- --- --- --- --- --- ######

```php
    namespace App\Http\Livewire\Posts;
    use Livewire\Component;

    class ShowPosts extends Component
    {
        public function render()
        {
        	/* El metodo (layout) hace que nuestro componente utilize una plantilla de (blade). */
            return view('livewire.posts.show-posts') -> layout('layouts.base');
        }
    }
```
###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/posts/show-posts.blade.php --- --- --- --- --- --- ######

```html
    <div>
        <!-- Hacemos uso de la plantilla que extendimos. -->
        <x-slot name="header">
            <h2>Titulo</h2>
        </x-slot>

        <div>
        	<span>Esta vista se extiende del layout (base.blade.php)</span>
        </div>
    </div>
```

###### --- --- --- --- --- --- {proyecto}/routes/web.php --- --- --- --- --- --- ######

```php
    use Illuminate\Support\Facades\Route;

    # Importamos nuestro componente.
    use App\Http\Livewire\Nav\ShowPosts;

    /* El metodo (render) de nuestro componente (ShowPosts) renderizara la vista, como si se tratara de un controlador. */
    Route::get("/dashboard", ShowPosts::class) -> name("dashboard");
```

### ======================================================= ###
###### ===--- Rescatar (variables) de las (rutas) ---=== ######
### ======================================================= ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/Posts/ShowUsers.php --- --- --- --- --- --- ######

```php
    namespace App\Http\Livewire\Posts;
    use Livewire\Component;

    # Hacemos uso del modelo (User).
    use App\Models\User;

    class ShowUsers extends Component
    {
        # Propiedad donde guardaremos el dato que recuperamos de la (url).
        public $usuario;

        # Dar valor al iniciar el componente.
        public function mount($id_user)
        {
            $usuario = User::find($id_user);

            $this -> usuario = $usuario;
        }

        public function render()
        {
            return view('livewire.posts.show-users') -> layout('layouts.base');
        }
    }
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/posts/show-users.blade.php --- --- --- --- --- --- ######

```html
    <div>
        <x-slot name="header">
            <h2>{{ $usuario -> name . " " . $usuario -> surnames }}</h2>
        </x-slot>
    </div>
```

###### --- --- --- --- --- --- {proyecto}/routes/web.php --- --- --- --- --- --- ######

```php
    use Illuminate\Support\Facades\Route;

    # Importamos el componente (ShowPosts).
    use App\Http\Livewire\Posts\ShowPosts;

    // Rescatamos la variable (id_user) por el metodo (mount) del componente.
    Route::get("users/{id_user}", ShowPosts::class) -> name("users");
```