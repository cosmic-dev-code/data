### ====================================== ###
###### ===--- Crear un (factory) ---=== ######
### ====================================== ###

<!-- Los factories sirven para llenar de datos una tabla. Los factories son aquellas fabricas que utilizaremos 
para llenar con datos de prueba las tablas que necesitemos llenar. -->

<!-- Para crear un factory ejecutamos el comando. -->

```bat
	php artisan make:factory NombreFactory

	: (--model), especifica a que modelo y tabla hace referencia el factory.
	php artisan make:factory UsuarioFactory --model=Usuario
```

###### --- --- --- --- --- --- {proyecto}/database/factories/NombreFactory.php --- --- --- --- --- --- ######

```php
	namespace Database\Factories;
	use App\Models\model;
	use Illuminate\Database\Eloquent\Factories\Factory;

	class UsuarioFactory extends Factory
	{
	    /**
	     * La palabra (model) debe ser reemplazada por el 
	     * nombre del (factory).
	     *
	     * @var string
	     */
	    protected $model = model::class;

	    /**
	     * Define the model's default state.
	     *
	     * @return array
	     */
	    public function definition()
	    {
	        return [
	            // Aqui van todos los datos de la tabla a rellenar.
	        ];
	    }
	}
```