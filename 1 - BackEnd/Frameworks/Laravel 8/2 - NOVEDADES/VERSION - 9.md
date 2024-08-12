### ================================ ###
###### ===--- Enrutamiento ---=== ######
### ================================ ###

# NOTA: Es necesario tener instalada la version 8 o superior de PHP.

El metodo [](controller) permite declarar las rutas asignar los metodos a utilizar sin la necesidad de 
especificar el controlador.

```php
	Route::controller(UserController::class) -> group(function(){

		# Route::get("/users", [UserController::class, "index"]);

		Route::get("/users", "index");

		Route::get("/users/create", "create");

		Route::get("/users/{user}", "show");

		Route::get("/users/{user}/edit", "edit");

		Route::post("/users", "store");

		Route::post("/users/{user}", "update");

		Route::post("/users/{user}", "destroy");
	});
```

El metodo [](prefix) permite utilizar un prefijo para el nombre de las rutas.


```php
	Route::controller(UserController::class) -> prefix("users") -> group(function(){

		# Sin necesidad de especificar "/{algo}/accion".

		Route::get("/", "index");

		Route::get("/create", "create");

		Route::get("/{user}", "show");

		Route::get("/{user}/edit", "edit");

		// Control mas granular de cada ruta, a diferencia del metodo (Route::resource).
		Route::post("/", "store") -> middleware("auth") -> name('users.store');

		Route::post("/{user}", "update");

		Route::post("/{user}", "destroy");
	});
```

### =========================== ###
###### ===--- Helpers ---=== ######
### =========================== ###

El metodo [](to_route) simplifica el redireccionamiento en Laravel.

```php
	# Forma tradicional.

	Route::get("/", function(){
		return redirect() -> route("articles");
	});

	# Con (to_route).

	Route::get("/", function(){
		return to_route("articles");
	});
```

La funcion [](str) simplifica la forma de crear objetos string con funcionalidades extra.

```php
	# Forma tradicional.

	use Illuminate\Support\Str;

	Str::to($my_string) -> replace("text", "string");

	# Con la funcion.

	str($my_string) -> replace("text", "string");
```

### ================================= ###
###### ===--- Base de datos ---=== ######
### ================================= ###

```php
	namespace App\Models;
	use Illuminate\Database\Eloquent\Factories\HasFactory;
	use Illuminate\Database\Eloquent\Model;

	class User extends Model
	{
		use HasFactory;

		protected $table = "users";

		/* 
			(Mutadores): 
				Cuando el registro sea creado, el atributo (names) convertira las letras en minusculas, 
				guardando de esa manera el registro.
		*/

		public function setNamesAttribute($value)
		{
			$this -> attributes['names'] = strtolower($value);
		}

		/* 
			(Accesores): 
				Cuando el registro sea traido, el atributo (names) convertira las letras de cada palabra 
				en mayuscula, trayendo asi el registro, mas no lo guarda en la base de datos de esa manera.
		*/

		public function getNameAttribute($value)
		{
			return ucwords($value)
		}
	}
```