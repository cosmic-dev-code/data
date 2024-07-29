### ===================================================== ###
###### ===--- Crear componente con (paginacion) ---=== ######
### ===================================================== ###

<!-- Las paginaciones suelen hacerse facilmente desde un componente de (livewire), 
para esto primero debemos de crear un componente de (livewire). -->

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/UserComponent.php --- --- --- --- --- --- ######

```php
    namespace App\Http\Livewire;
    use Livewire\Component;

    use App\Models\User;

    # Importamos la clase (WithPagination) para utilizar la paginacion.
    use Livewire\WithPagination;

    class UserComponent extends Component
    {
        // Hacemos uso de la clase que permite la paginacion.
        use WithPagination;

        // Si trabajas con "bootstrap" puedes especificar los estilos de la paginacion.
        protected $paginationTheme = "bootstrap";

        public string $search = "";

        // A la escucha de los cambios de la propiedad (search).
        public function updatingSearch()
        {
            // Metodo que reinicia la pagina.
            $this -> resetPage();
        }

        public function render()
        {
            // Trae los datos paginados.
            $users = User::paginate();

            // Trae las paginaciones con (6) registros cada pagina.
            $users = User::paginate(6);

            /* Podemos colocar condiciones y traer los datos con (paginate) en lugar de utilizar (get). */
            $users = User::where('title', 'like', ("%{$this -> search}%")) 
                -> orWhere('content', 'like', ("%{$this -> content}%")) 
                -> orderBy('id', 'desc') 
                -> paginate(10);

            return view('livewire.user-component', array(
                'users' => $users
            ));
        }
    }
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/user-component.blade.php --- --- --- --- --- --- ######

```html
    <section>
        <div class="my-2">
            @if($users -> count())
                <div>
                    <!-- Buscamos los registros y los paginamos segun el metodo (updatingSearch), 
                    el metodo (render) manda los datos de nuevo a la vista. -->
                    <input type="text" wire:model="search" placeholder="Buscar registro">
                </div>
                <table class="block w-full">
                    <thead class="bg-gray-800 p-3">
                        <tr>
                            <th class="text-bold">Nombre</th>
                            <th class="text-bold">Correo</th>
                            <th class="text-bold">Numero telefonico</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($users as $user)
                            <tr>
                                <td>{{ $user -> name }}</td>
                                <td>{{ $user -> mail }}</td>
                                <td>{{ $user -> phone_number }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            @else
                <x-alert>No hay registros</x-alert>
            @endif
        </div>
        <div class="bg-white shadow-lg p-3 text-center rounded">
            <!-- Verificamos si tenemos mas de una pagina. -->
            @if($users -> hasPages())
                <!-- Colocamos la paginacion de la clase (WithPagination). -->
                {!! $users -> links() !!}
            @endif
        </div>
    </section>
```