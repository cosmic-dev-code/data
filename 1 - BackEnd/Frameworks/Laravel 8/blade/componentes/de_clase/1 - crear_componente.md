### ================================================== ###
###### ===--- Crear un (componente de clase) ---=== ######
### ================================================== ###

<!-- Debemos ejecutar el siguiente comando. -->

```bat
	php artisan make:component MiComponente
```

<!-- El comando anterior nos crea dos archivos: 
	--- un arhico para la logica del componente.
	--- Otro archivo para la vista del componente. -->

###### --- --- --- --- --- --- {proyecto}/app/View/Components/MiComponente.php --- --- --- --- --- --- ######

```php
	namespace App\View\Components;

	use Illuminate\View\Component;

	class Layout extends Component
	{
	    /**
	     * Cada que el componente se manda a llamar, se crea una nueva instancia y se ejecuta el (constructor).
	     *
	     * @return void
	     */
	    public function __construct()
	    {
	        //
	    }

	    /**
	     * Este metodo renderiza la vista del componente.
	     *
	     * @return \Illuminate\Contracts\View\View|\Closure|string
	     */
	    public function render()
	    {
	        return view('components.layout');
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/components/mi-componente.blade.php --- --- --- --- --- --- ######

```html
	<!-- Aqui va todo el codigo de la vista del componente. -->
```

###### --- --- --- --- --- --- {proyecto}/resources/views/welcome.blade.php --- --- --- --- --- --- ######

```html
	<!-- En un archivo (.blade) lo mandamos a llamar. -->
	<x-mi-componente></x-mi-componente>
```