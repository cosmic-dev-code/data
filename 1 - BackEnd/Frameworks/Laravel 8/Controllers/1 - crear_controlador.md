### ========================================== ###
###### ===--- Crear un (controlador) ---=== ######
### ========================================== ###

<!-- Para crear un controlador utilizamos el siguiente comando. -->

```bat
	php artisan make:controller NombreController
```

<!-- El archivo se crea en la siguiente ruta: (App/Http/Controllers/). -->

###### --- --- --- --- --- --- {proyecto}/app/Http/Controllers/NombreController.php --- --- --- --- --- --- ######

```php
	# Esta es la hubicacion del archivo.
	namespace App\Http\Controllers;
	# Hcemos uso de la clase (Request) para manejar peticiones de (url).
	use Illuminate\Http\Request;

	class NombreController extends Controller
	{
		// ...
	}
```

### ====================================================== ###
###### ===--- Crear un (controlador de recursos) ---=== ######
### ====================================================== ###

<!-- El controlador de recursos contiene los metodos suficientes para hacer un CRUD y 
se crea con el siguiente comando. -->

```bat
	php artisan make:controller NombreController --resource

	Rem O puede ser: 

	php artisan make:Controller UsuarioController -r
```

###### --- --- --- --- --- --- {proyecto}/app/Http/Controllers/NombreController.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Controllers;
	use Illuminate\Http\Request;

	class UsuarioController extends Controller
	{
	    /**
	     * Este metodo despliega una lista de los recursos.
	     *
	     * @return \Illuminate\Http\Response
	     */
	    public function index()
	    {
	        //
	    }

	    /**
	     * Muestra el formulario de la creacion de un nuevo recurso.
	     *
	     * @return \Illuminate\Http\Response
	     */
	    public function create()
	    {
	        //
	    }

	    /**
	     * Almacena un recurso recien creado en el almacenamiento.
	     *
	     * @param  \Illuminate\Http\Request  $request
	     * @return \Illuminate\Http\Response
	     */
	    public function store(Request $request)
	    {
	        //
	    }

	    /**
	     * Muestra un recurso especifico.
	     *
	     * @param  int  $id
	     * @return \Illuminate\Http\Response
	     */
	    public function show($id)
	    {
	        //
	    }

	    /**
	     * Muestra el formulario para editar un recurso especifico.
	     *
	     * @param  int  $id
	     * @return \Illuminate\Http\Response
	     */
	    public function edit($id)
	    {
	        //
	    }

	    /**
	     * Actualiza el recurso especifico en el almacenamiento.
	     *
	     * @param  \Illuminate\Http\Request  $request
	     * @param  int  $id
	     * @return \Illuminate\Http\Response
	     */
	    public function update(Request $request, $id)
	    {
	        //
	    }

	    /**
	     * Elimina el recurso especifico del almacenamiento.
	     *
	     * @param  int  $id
	     * @return \Illuminate\Http\Response
	     */
	    public function destroy($id)
	    {
	        //
	    }
	}
```