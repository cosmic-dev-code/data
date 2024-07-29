### ===================================== ###
###### ===--- Crear un (modelo) ---=== ######
### ===================================== ###

<!-- Para crear un modelo ejecutamos uno de los siguientes comandos. -->

```bat
	: Crea un modelo llamado (Usuario).
	php artisan make:model Usuario

	: (-m), crea el modelo y su migracion.
	php artisan make:model Usuario -m

	: (-c), crea el modelo y su controlador.
	php artisan make:model Usuario -c

	: (-s), crea el modelo y su seeder.
	php artisan make:model Usuario -s

	: (-f), crea el modelo y su factory.
	php artisan make:model Usuario -f

	: Podemos hacer convinaciones.
	php artisan make:model Usuario -mcsf
	php artisan make:model Usuario -a
```

###### --- --- --- --- --- --- {proyecto}/app/Models/Usuario.php --- --- --- --- --- --- ######

```php
	namespace App\Models;
	use Illuminate\Database\Eloquent\Factories\HasFactory;
	use Illuminate\Database\Eloquent\Model;

	class Usuario extends Model
	{
	    use HasFactory;

	    // Este es el modelo que se ha creado.
	}
```