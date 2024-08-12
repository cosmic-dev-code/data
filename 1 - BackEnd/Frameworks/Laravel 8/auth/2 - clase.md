
###### --- --- --- --- --- --- {proyecto}/app/Http/Controllers/AuthController.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Controllers;
	use Illuminate\Http\Request;

	use App\Models\User;

	# Importamos la clase (Auth).
	use Illuminate\Support\Facades\Auth;

	class AuthController extends Controller{

		// ----------------------------- //
		// ------ La clase (Auth) ------ //
		// ----------------------------- //

		// Todos los metodos de la funcion (auth) los implementa como estaticos la clase (Auth).

		public function verificacion(){
			# Devuelve si hay un usuario actualmente autentificado.
			Auth::check();

			/* El metodo (guard) permite extraer al usuario actualmente autentificado instanciandolo 
			por un modelo especifico. */
			Auth::guard("user") -> attempt([
				"mail" => "brandon@gmail.com", 
				"password" => "MiPassword123"
			]); # bool

			# Devuelve el (id) del usuario actualmente autentificado.
			Auth::id();

			# Devuelve al usuario actualmente autentificado.
			Auth::user();
		}

		public function autenticacion(){
			# Extrae al usuario de la base de datos e inicia sesion con el.
			Auth::attempt(["mail" => "brandon@gmail.com"]);

			# Inicia sesion con un usuario ya existente.
			Auth::login($user);
			Auth::login($user, true);

			# Inicia sesion con un usuario ya existente y lo instanciara bajo el modelo especificado.
			Auth::guard("user") -> login($user, true);

			# Cierra la sesion.
			Auth::logout();
		}
	}
```