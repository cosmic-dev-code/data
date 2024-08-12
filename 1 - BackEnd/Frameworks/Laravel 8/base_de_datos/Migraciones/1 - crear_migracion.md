### ========================================= ###
###### ===--- Crear una (migracion) ---=== ######
### ========================================= ###

<!-- Para crear una migracion Debemos ejecutar el siguiente comando. -->

```bat
	php artisan make:migration create_nombre_tabla_table
```

###### --- --- --- --- --- --- {proyecto}/database/migrations/2019_12_14_000001_create_nombre_tabla_table.php --- --- --- --- --- --- ######

```php
	use Illuminate\Database\Migrations\Migration;
	use Illuminate\Database\Schema\Blueprint;
	use Illuminate\Support\Facades\Schema;

	class CreateNombreTablaTable extends Migration
	{
	    /**
	     * Este metodo permite crear la base de datos.
	     *
	     * @return void
	     */
	    public function up()
	  	{
	  		/* Aqui esta creada nuestra migracion, que describe los campos de la base de datos. */

	        Schema::create('nombre_tabla', function(Blueprint $tabla){
	        	$tabla -> id();
	        	// Los demas campos se ingresan aqui.
	            $tabla -> timestamps();
	        });
	    }

	    /**
	     * Este metodo permite borrar la base de datos.
	     *
	     * @return void
	     */
	    public function down()
	    {
	        Schema::dropIfExists('nombre_tabla');
	    }
	}
```