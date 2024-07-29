### ======================================= ###
###### ===--- Crear un (observer) ---=== ######
### ======================================= ###

<!-- Para crear un observer debemos ingresar el siguiente comando:  -->

```bat
	php artisan make:observer UsuarioObserver
```

###### --- --- --- --- --- --- {proyecto}/app/Observers/UsuarioObserver --- --- --- --- --- --- ######

```php
	namespace App\Observers;

	class UsuarioObserver
	{
	    // Aqui va toda la logica del observer.
	}
```

### ================================================== ###
###### ===--- Crear un (observer con modelo) ---=== ######
### ================================================== ###

<!-- Para crear un observer con todos los metodos implementados introducimos el siguiente comando. -->

```bat
	: (--model), le indica al observer el modelo al cual va a observar.
	php artisan make:observer UsuarioObserver --model=Usuario
```

###### --- --- --- --- --- --- {proyecto}/app/Observers/UsuarioObserver --- --- --- --- --- --- ######

```php
	namespace App\Observers;
	use App\Models\Usuario;

	class UsuarioObserver
	{

	    /**
	     * Metodo que se ejecuta antes de que el objeto se cree.
	     *
	     * @param  \App\Models\Usuario  $usuario
	     * @return void
	     */
	    public function creating(Usuario $usuario)
	    {
	        //
	    }

	    /**
	     * Metodo que se ejecuta cuando el objeto del modelo se a creado.
	     *
	     * @param  \App\Models\Usuario  $usuario
	     * @return void
	     */
	    public function created(Usuario $usuario)
	    {
	        //
	    }

	    /**
	     * Metodo que se ejecuta cuando el objeto del modelo se a actualizado.
	     *
	     * @param  \App\Models\Usuario  $usuario
	     * @return void
	     */
	    public function updated(Usuario $usuario)
	    {
	        //
	    }

	    /**
	     * Metodo que se ejecuta antes de que el objeto se elimine.
	     *
	     * @param  \App\Models\Usuario  $usuario
	     * @return void
	     */
	    public function deleted(Usuario $usuario)
	    {
	        //
	    }

	    /**
	     * Metodo que se ejecuta cuando el objeto se restaura.
	     *
	     * @param  \App\Models\Usuario  $usuario
	     * @return void
	     */
	    public function restored(Usuario $usuario)
	    {
	        //
	    }

	    /**
	     * Metodo que se ejecuta para forzar la eliminacion del objeto.
	     *
	     * @param  \App\Models\Usuario  $usuario
	     * @return void
	     */
	    public function forceDeleted(Usuario $usuario)
	    {
	        //
	    }
	}
```

### ============================================= ###
###### ===--- Dar de alta un (observer) ---=== ######
### ============================================= ###

###### --- --- --- --- --- --- {proyecto}/app/Providers/EventServiceProvider.php --- --- --- --- --- --- ######

```php
	namespace App\Providers;

	use Illuminate\Auth\Events\Registered;
	use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
	use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
	use Illuminate\Support\Facades\Event;

	# Importamos el modelo al que vamos a obervar.
	use App\Models\Usuario;

	# Importamos el observer que creamos.
	use App\Observers\UsuarioObserver;

	class EventServiceProvider extends ServiceProvider
	{
	    protected $listen = [
	        Registered::class => [
	            SendEmailVerificationNotification::class,
	        ],
	    ];

	    /**
	     * Justo en la parte de aca abajo, en el metodo (boot) registramos 
	     * nuestro (observer) que acabamos de crear.
	     */
	    public function boot()
	    {
	    	// El usuario es obervado por nuestro observer.
	        Usuario::observe(UsuarioObserver::class);
	    }
	}
```