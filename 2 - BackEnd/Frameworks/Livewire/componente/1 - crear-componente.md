### =============================================== ###
###### ===--- Crear componente (livewire) ---=== ######
### =============================================== ###

<!-- Para crear un nuevo componente ingresamos el siguiente comando:  -->

```bat
	
	: Ambas maneras son validas.
	php artisan make:livewire NuevoComponente 
	php artisan make:livewire nuevo-componente 

	: Podemos crear dentro de subcarpetas de las siguientes maneras: 
	php artisan make:livewire Posts\\Show
	php artisan make:livewire Posts/Show
	php artisan make:livewire Posts.show

```

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/NuevoComponente.php --- --- --- --- --- --- ######

<!-- Con el comando anterior ya creamos nuestro componente. -->

```php
/* Dentro de este archivo tenemos nuestro componente creado. */

namespace App\Http\Livewire;
use Livewire\Component;

class NuevoComponente extends Component
{
    public function render()
    {
    	# Esta es la vista que retorna nuestro componente.
        return view('livewire.nuevo-componente');
    }
}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/nuevo-componente.blade.php --- --- --- --- --- --- ######

```html
	<div>
	    {{-- Aqui podemos colocar todo el contenido del componente que queramos --}}
	</div>
```

### ========================================================== ###
###### ===--- Crear componente (livewire) en (linea) ---=== ######
### ========================================================== ###

<!-- Los componentes (inline) no retornan una vista, sino el codigo HTML directamente. -->

```bat
	php artisan make:livewire NuevoComponente --inline 
```

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/NuevoComponente.php --- --- --- --- --- --- ######

<!-- El comando anterior proporciona una clase con el mismo componente integrado. -->

```php

namespace App\Http\Livewire;
use Livewire\Component;

class NuevoComponente extends Component
{
    public function render()
    {
    	/* Aqui no es necesario que retorne nuestra vista en donde se encuentra nuestro 
    	componente, ya que directamente esta retornando nuestro componente. */
    	return <<< 'blade'
    		<div>
    			{{-- Aqui podemos colocar todo el contenido del componente que queramos --}}
    		</div>
    	blade;
    }
}

```

### =================================================== ###
###### ===--- Llamar un componente (Livewire) ---=== ######
### =================================================== ###

###### --- --- --- --- --- --- {proyecto}/resources/views/MisPaginas/page.blade.php --- --- --- --- --- --- ######

<!-- Para utilizar un componente de (livewire) es necesario utilizar la directiva de 
blade (livewire) de la siguiente manera:  -->

```html

	<!-- Muestra un componente. -->
	@livewire("nuevo-componente")
	<livewire:nuevo-componente/>

	<!-- Muestra un componente en una carpeta. -->
	@livewire("posts.show")
	<livewire:posts.show/>

	<!-- Pasa un valor al componente. -->
	@livewire("posts.show", [
		"post" => $post
	])
	<livewire:posts.show post="{{ $post }}"/>
	<livewire:posts.show :post="$post"/>

```