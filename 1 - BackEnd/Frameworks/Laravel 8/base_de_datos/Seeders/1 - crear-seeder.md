### ===================================== ###
###### ===--- Crear un (seeder) ---=== ######
### ===================================== ###

<!-- Para crear un seeder colocamos el siguiente comando. -->

```bat
	php artisan make:seeder (NombreSeeder)
```

###### --- --- --- --- --- --- {proyecto}/database/seeders/NombreSeeder --- --- --- --- --- --- ######

```php
	namespace Database\Seeders;

	use Illuminate\Database\Seeder;
	use App\Models\curso;

	class NombreSeeder extends Seeder
	{
	    /**
	     * Run the database seeds.
	     *
	     * @return void
	     */
	    public function run()
	    {
	        /* Aqui colocamos todos los registros que queramos. */
	    }
	}
```