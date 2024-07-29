### ======================================= ###
###### ===--- Crear un (observer) ---=== ######
### ======================================= ###

<!-- Creamos una policy con el siguiente comando. -->

```bat
	php artisan make:policy UsuarioPolicy
```

###### --- --- --- --- --- --- {proyecto}/app/Policies/UsuarioPolicy --- --- --- --- --- --- ######

```php
	namespace App\Policies;

	# Las (policies) por defecto trabajan con el usuario autentificado, es por eso que el modelo (User) ya viene importado.
	use App\Models\User;
	use Illuminate\Auth\Access\HandlesAuthorization;

	class UsuarioPolicy
	{
	    use HandlesAuthorization;

	    /**
	     * Podemos crear una nueva instancia de esta (policy).
	     *
	     * @return void
	     */
	    public function __construct()
	    {
	        //
	    }
	}
```