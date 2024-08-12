### ====================================== ###
###### ===--- Crear (middleware) ---=== ######
### ====================================== ###

<!-- Para crear un (middleware) debemos ejecutar el siguiente comando:  -->

```bat
	php artisan make:middleware Nombre
```

###### --- --- --- --- --- --- {proyecto}/app/Http/Middleware/VerificarEdad.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Middleware;
	use Closure;
	use Illuminate\Http\Request;

	class VerificarEdad
	{
		/* El objeto (request) recibe los datos pasados por 'url' o por medio de un formulario.
		
		El objeto (next), decide dejar proseguir al usuario con sus peticiones. */
	    public function handle(Request $request, Closure $next)
	    {
	        return $next($request);
	    }
	}
```

### ============================================= ###
###### ===--- Dar de alta un middleware ---=== ######
### ============================================= ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Kernel.php --- --- --- --- --- --- ######

<!-- Este archivo tiene mas codigo, pero aqui solo se muestra el fundamental, en la parte final debemos de 
agregar nuestro (middleware) bajo un 'alias'. -->

```php
	namespace App\Http;
	use Illuminate\Foundation\Http\Kernel as HttpKernel;

	class Kernel extends HttpKernel
	{
	    protected $routeMiddleware = [
	        'auth' => \App\Http\Middleware\Authenticate::class,
	        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
	        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
	        'can' => \Illuminate\Auth\Middleware\Authorize::class,
	        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
	        'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class,
	        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
	        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
	        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,

	        # Nuestro (middleware) se da de alta bajo el alias 'edad'.
	        'edad' => \App\Http\Middleware\VerificarEdad::class,

	    ];
	}
```