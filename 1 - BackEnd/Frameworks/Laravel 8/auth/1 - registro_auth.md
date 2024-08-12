
###### --- --- --- --- --- --- {proyecto}/app/Http/Controllers/AuthController.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Controllers;
	use Illuminate\Http\Request;

	use App\Models\User;

	# Importamos la clase (Hash) para encriptar los datos e iniciar sesion.
	use Illuminate\Support\Facades\Hash;
	# Importamos la clase (Auth) para autenticar al usuario.
	use Illuminate\Support\Facades\Auth;

	class AuthController extends Controller{

		// ------------------------------------------------ //
		// ------ Pasos para autenticar a un usuario ------ //
		// ------------------------------------------------ //

		public function iniciar_sesion(Request $request)
		{
			/* Para inicar sesion debemos: 
				--- Encriptar el password de un usuario.
				--- Registrar al usuario con su password encriptado en la base de datos.
				--- Iniciar sesion con el usuario registrado. */
			// Encriptamos el password del usuario.
			$request -> merge([
				"password" => Hash::make($request -> password)
			]);

			// Registramos al usuario en la base de datos.
			User::create($request -> all());

			// Por motivos de seguridad cambiamos el token (csrf).
			$request -> session() -> regenerate();

			/* (attempt), es un metodo que recibe por parametros un array asosiativo, puede tener mas de un dato del usuario, 

			Con esos datos lo extrae de la base de datos e inicia sesion con el.
			NOTA: Devuelve un booleano que comprueba si todo salio bien o no. */
			
			$iniciar_sesion = auth() -> attempt([
				"mail" => "brandon@gmail.com", 
				// NOTA: Aqui no va el password encriptado.
				"password" => "1999Brandon"
			]);

			$iniciar_sesion = Auth::attempt([
				"mail" => "brandon@gmail.com", 
				// NOTA: Aqui no va el password encriptado.
				"password" => "1999Brandon"
			]);

			// Verificamos el existo de la autenticacion.

			if($iniciar_sesion){
				// ...
			}else{
				// ...
			}

		}
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/welcome.blade.php --- --- --- --- --- --- ######

```html
	<section>

		<!-- La funcion (auth) permite validar que un usuario se ha auntenticado. -->
		@if(auth() -> check())
			<h1><?= "Bienvenid@ " . auth() -> user() -> names ?></h1>
		@endif

		<!-- Esta es otra forma de hacerlo. -->
		@auth
			<h1>{{ "Bienvenid@ " . auth() -> user() -> names }}</h1>
		@endauth

		<!-- La contraparte de (@auth), si el usuario no se ha autenticado. -->

		@guest
			<a href="{{ route('login') }}">Iniciar sesion</a>
		@endguest
		
	</section>
```