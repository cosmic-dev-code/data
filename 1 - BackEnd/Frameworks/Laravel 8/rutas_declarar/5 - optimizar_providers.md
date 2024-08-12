### =================================== ###
###### ===--- Optimizar rutas ---=== ######
### =================================== ###

<!-- Imaginemos que en nuestro archivo (web.php) tenemos muchas rutas. -->

###### --- --- --- --- --- --- {proyecto}/routes/web.php --- --- --- --- --- --- ######

```php
	use Illuminate\Support\Facades\Route;
	use App\Http\Controllers\Nuevo_Controller;
	use App\Http\Controllers\UsuarioController;

	Route::get('/', Nuevo_Controller::class);

	Route::get('usuarios', [UsuarioController::class, 'index']) -> name('usuarios.index');

	Route::get('usuarios/create', [UsuarioController::class, 'create']) -> name('usuarios.create');

	Route::post('usuarios', [UsuarioController::class, 'store']) -> name('usuarios.store');

	Route::get('usuarios/{curso}', [UsuarioController::class, 'show']) -> name('usuarios.show');

	Route::get('usuarios/{curso}/edit', [UsuarioController::class, 'edit']) -> name('usuarios.edit');

	Route::put('usuarios/{curso}', [UsuarioController::class, 'update']) -> name('usuarios.update');

	Route::delete('usuarios/{curso}', [UsuarioController::class, 'destroy']) -> name('usuarios.destroy');
```

###### --- --- --- --- --- --- {proyecto}/routes/web.php --- --- --- --- --- --- ######

<!-- Podemos optimizar esto con tan solo seguir la convencion, tal como se muestra en este archivo. -->

```php
    use Illuminate\Support\Facades\Route;
    use App\Http\Controllers\Nuevo_Controller;
    use App\Http\Controllers\UsuarioController;

    Route::get('/', Nuevo_Controller::class);

    /* De esta manera tenemos todo lo anterior pero completamente optimizado en una linea de codigo, 
    sin la necesidad de definir cada ruta, solo los metodos dentro del controlador 
    (UsuarioController).

    De esta forma la convencion de hara cargo completamente. */
    Route::resource('usuarios', UsuarioController::class);
```

### ============================================================== ###
###### ===--- Modificar las 'urls' del metodo (resource) ---=== ######
### ============================================================== ###

###### --- --- --- --- --- --- {proyecto}/app/Providers/AppServiceProvider.php --- --- --- --- --- --- ######

<!-- Para cambiar nombres en la 'url' solo debemos entrar a este archivo y modificar el metodo (boot). -->

```php
	namespace App\Providers;
	use Illuminate\Support\ServiceProvider;
	use Illuminate\Support\Facades\Route;

	class AppServiceProvider extends ServiceProvider
	{
	    /**
	     * Register any application services.
	     *
	     * @return void
	     */
	    public function register()
	    {
	        //
	    }

	    /**
	     * Bootstrap any application services.
	     *
	     * @return void
	     */
	    public function boot()
	    {
	    	/* Debemos escribir colocar la clase (Route), utilizar su metodo estatico (resourceVerbs) y pasarle 
	    	los datos de la 'url' que que queremos cambiar con los datos nuevos en forma de array. */
	        Route::resourceVerbs([
	            'create' => 'crear',
	            'edit' => 'editar'
	        ]);
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/routes/web.php --- --- --- --- --- --- ######

```php
    use Illuminate\Support\Facades\Route;
    use App\Http\Controllers\Nuevo_Controller;
    use App\Http\Controllers\UsuarioController;

    Route::get('/', Nuevo_Controller::class);

    // Por medio del metodo (names) podemos cambiar la base de las rutas, que en este caso es (usuarios).
    Route::resource('usuarios', UsuarioController::class) -> names('asignaturas');

    /* Por medio del metodo (parameters) podemos cambiar los nombres de las variables que reciben los datos 
    de la 'url' en el controlador. El metodo recibe un 'array' con las variables ya existentes y 
    su nuevo valor.

    Cabe recalcar que el nombre de las variables se asigna de acuerdo al nombre de la base de la 'url'.  */
    Route::resource('usuarios', UsuarioController::class) -> parameters([
        "usuarios" => 'asignatura'
    ]);

    // Podemos mezclar los dos metodos anteriores.
    Route::resource('usuarios', UsuarioController::class) -> parameters([
        "usuarios" => "asignatura"
    ]) -> names("asignaturas");
```

### ========================================= ###
###### ===--- Ver rutas por consola ---=== ######
### ========================================= ###

<!-- Para ver todas las rutas que tenemos por consola, ejecutamos el siguiente comando:  -->

```bat
	php artisan r:l
```

<!-- De esa manera aunque solo tengamos el controlador con su metodo estatico (resource) dentro del 
archivo (web.php), de igual manera podremos ver todas las rutas. -->