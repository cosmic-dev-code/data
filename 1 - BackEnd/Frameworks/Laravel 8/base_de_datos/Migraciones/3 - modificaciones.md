### ========================================= ###
###### ===--- Crear una (migracion) ---=== ######
### ========================================= ###

```bat
	: Crea una nueva tabla.
	php artisan mike:migration create_nombre_tabla_table
```

### =================================== ###
###### ===--- Agregar columna ---=== ######
### =================================== ###

```bat
	: Crea una migracion para agregar una nueva columna.
	php artisan make:migration add_(nombre_columna)_to_(nombre_tabla)
```

###### --- --- --- --- --- --- {proyecto}/database/migrations/2021_08_28_231806_add_category_id_to_products.php --- --- --- --- --- --- ######

```php
	######### --- --- --- Archivo () --- --- --- ######### */

	use Illuminate\Database\Migrations\Migration;
	use Illuminate\Database\Schema\Blueprint;
	use Illuminate\Support\Facades\Schema;

	class addCategoryIdToProducts extends Migration
	{
	    public function up()
	    {
	        Schema::table('products', function (Blueprint $table) {
	            /* La nueva columna: 
	                    --- Nombre de la columna: (fotografia).
	                    --- Sera agregada despues de la columna (description). */
	            $table -> string("fotografia") -> nullable() -> after("description");
	        });
	    }

	    public function down()
	    {
	        Schema::table('products', function (Blueprint $table) {
	        	// Para borrar la columna.
	            $table -> dropColumn("fotografia");
	        });
	    }
	}
```

### ===================================== ###
###### ===--- Modificar columna ---=== ######
### ===================================== ###

```bat
	: Comando necesario para realizar la modificacion de una columna.
	composer doctrine/dbal

	: Ahora si podemos modificar una columna.
	php artisan make:migration (nombre_columna)_to_(nombre_tabla)
```

###### --- --- --- --- --- --- {proyecto}/database/migrations/2021_08_29_000217_name_to_products.php --- --- --- --- --- --- ######

```php
	use Illuminate\Database\Migrations\Migration;
	use Illuminate\Database\Schema\Blueprint;
	use Illuminate\Support\Facades\Schema;

	class NameToProducts extends Migration
	{
	    public function up()
	    {
	        Schema::table('products', function (Blueprint $table) {
	            // Cambiamos su valor (change).
	            $table -> string("avatar", 30) -> change();
	        });
	    }

	    public function down()
	    {
	        Schema::table('products', function (Blueprint $table) {
	            // En caso de que queramos cambiarla de regreso, ponemos los valores por defecto.
	            $table -> string("avatar", 255) -> change();
	        });
	    }
	}
```