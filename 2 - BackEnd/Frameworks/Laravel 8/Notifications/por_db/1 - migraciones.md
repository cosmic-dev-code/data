### ============================================== ###
###### ===--- Crear migracion y correrla ---=== ######
### ============================================== ###

```bat
	: Crea una migracion para las notificaciones.
	php artisan notifications:table

	: Corremos la migracion.
	php artisan migrate
```

###### --- --- --- --- --- --- {proyecto}/app/Notifications/UserNotification.php --- --- --- --- --- --- ######

<!-- La migracion que se crea y se corre es la siguiente. -->

```php
	use Illuminate\Database\Migrations\Migration;
	use Illuminate\Database\Schema\Blueprint;
	use Illuminate\Support\Facades\Schema;

	return new class extends Migration
	{
	    /**
	     * Run the migrations.
	     *
	     * @return void
	     */
	    public function up()
	    {
	        Schema::create('notifications', function (Blueprint $table) {
	            $table->uuid('id')->primary();
	            // Tipo de notificacion.
	            $table->string('type');
	            // Campo polimorfico.
	            $table->morphs('notifiable');
	            // Aqui guardara datos la notificacion.
	            $table->text('data');
	            // El tiempo en que la notificacion fue leida, (opcional).
	            $table->timestamp('read_at')->nullable();
	            $table->timestamps();
	        });
	    }

	    /**
	     * Reverse the migrations.
	     *
	     * @return void
	     */
	    public function down()
	    {
	        Schema::dropIfExists('notifications');
	    }
	};
```