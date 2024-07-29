
###### --- --- --- --- --- --- {proyecto}/app/Http/Controllers/AuthController.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Controllers;
	use Illuminate\Http\Request;

	use App\Models\User;

	class AuthController extends Controller{

		// ------------------------------- //
		// ------ La funcion (auth) ------ //
		// ------------------------------- //

		public function verificacion(){
			# Devuelve si hay un usuario actualmente autentificado.
			auth() -> check();

			/* El metodo (guard) permite extraer al usuario actualmente autentificado instanciandolo 
			por un modelo especifico. */
			auth() -> guard("user") -> attempt([
				"mail" => "brandon@gmail.com", 
				"password" => "MiPassword123"
			]); # bool

			# Devuelve el (id) del usuario actualmente autentificado.
			auth() -> id();

			# Devuelve al usuario actualmente autentificado.
			auth() -> user();
		}

		public function autenticacion(){
			$user = User::find(1);

			# Extrae al usuario de la base de datos e inicia sesion con el.
			auth() -> attempt(["mail" => "brandon@gmail.com"]);

			# Inicia sesion con un usuario ya existente.
			auth() -> login($user);
			auth() -> login($user, true);

			# Inicia sesion con un usuario ya existente y lo instanciara bajo el modelo especificado.
			auth() -> guard("user") -> login($user, true);

			# Cierra la sesion.
			auth() -> logout();
		}
	}
```