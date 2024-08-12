### ====================================== ###
###### ===--- Crear un (request) ---=== ######
### ====================================== ###

<!-- Creamos un (request) con el siguiente comando: -->

```bat
	php artisan make:request NombreRequest
```

###### --- --- --- --- --- --- {proyecto}/app/Http/Requests/NombreRequest.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Requests;

	use Illuminate\Foundation\Http\FormRequest;

	class NombreRequest extends FormRequest
	{
	    /**
	     * Determinar si el usuario está autorizado para realizar esta solicitud.
	     *
	     * @return bool
	     */
	    public function authorize()
	    {
	        return false;
	    }

	    /**
	     * Obtenemos las reglas de validacion para aplicar al (request) de la URL.
	     *
	     * @return array<string, mixed>
	     */
	    public function rules()
	    {
	        return [
	            //
	        ];
	    }
	}
```