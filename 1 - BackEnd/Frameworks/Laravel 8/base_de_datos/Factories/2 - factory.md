### =========================== ###
###### ===--- Factory ---=== ######
### =========================== ###

###### --- --- --- --- --- --- {proyecto}/database/factories/UsuarioFactory.php --- --- --- --- --- --- ######

```php
    namespace Database\Factories;
    use Illuminate\Database\Eloquent\Factories\Factory;

    use App\Models\Usuario;

    class UsuarioFactory extends Factory
    {
        /**
         *
         * @var string
         */

        // Especificamos el modelo del factory, (la referencia para los datos de prueba).
        protected $model = Usuario::class;

        /**
         * @return array
         */
        public function definition()
        {
            return [
                /* Llanamos cada campo de la tabla del (modelo) con datos de prueba de la propiedad (faker).

                (Faker) nos permite crear datos de prueba para los campos. */
                "nombre" => $this -> faker -> sentence(),
                "apellido" => $this -> faker -> sentence(),
                "edad" => $this -> faker -> randomElement(array(10,20,25)),
                "descripcion" => $this -> faker -> paragraph()
            ];
        }
    }
```

### ================================================ ###
###### ===--- Mandar a llamar un (factory) ---=== ######
### ================================================ ###

###### --- --- --- --- --- --- {proyecto}/database/seeders/DatabaseSeeder.php --- --- --- --- --- --- ######

```php
    namespace Database\Seeders;
    use Illuminate\Database\Seeder;

    // Importamos el modelo.
    use App\Models\Usuario;

    class DatabaseSeeder extends Seeder
    {
        /* El (factory) puede ser llamada desde el archivo (DatabaseSeeder.php) el cual 
        se manda a llamar al ejecutar las bases de datos. */
        public function run()
        {
            // Creamos (30) registros de prueba con los datos especificados en el factory.
            Usuario::factory(30) -> create();
        }
    }
```
### ================================================================ ###
###### ===--- Mandar a llamar un factory desde un (seeder) ---=== ######
### ================================================================ ###

# Primero mandamos a llamar los factories desde el seeder.

###### --- --- --- --- --- --- {proyecto}/database/seeders/TablaSeeder.php --- --- --- --- --- --- ######

```php
    namespace Database\Seeders;
    use Illuminate\Database\Seeder;

    // Importamos al modelo.
    use App\Models\Usuario;

    class UsuarioSeeder extends Seeder
    {
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run()
        {
            // Aqui creamos (30) registros de prueba haciendo uso del factory.
            Usuario::factory(30) -> create();
        }
    }
```

###### --- --- --- --- --- --- {proyecto}/database/seeders/DatabaseSeeder.php --- --- --- --- --- --- ######

```php
    namespace Database\Seeders;
    use Illuminate\Database\Seeder;

    use App\Models\Usuario;

    class DatabaseSeeder extends Seeder
    {
        // Ahora en nuestro archivo principal (DatabaseSeeder).
        
        public function run()
        {
            // Podemos mandar a llamar al seeder sin importarlo.
            $this -> call(UsuarioSeeder::class);
        }

    }
```