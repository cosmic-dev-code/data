### ================================ ###
###### ===--- Validaciones ---=== ######
### ================================ ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/Reedireccionar.php --- --- --- --- --- --- ######

```php
namespace App\Http\Livewire;
use Livewire\Component;

use App\Models\Contact;

class NuevoComponente extends Component
{
	public string $mail = "";

	public function crear_contacto()
	{
		Contact::create([
			"mail" => $this -> mail
		]);

		// (Livewire) tambien admite el reedireccionamiento como (Laravel).
		return redirect("/contactos/todos");
		return redirect() -> to("/contactos/todos");
		return redirect() -> route("contacts.index");
	}

    public function render()
    {
        return view('livewire.reedireccionar');
    }
}
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/reedireccionar.blade.php --- --- --- --- --- --- ######

```html
	<div>
		<div>
			<input type="email" wire:model="mail" placeholder="Correo">
		</div>
		<div>
			<input type="button" value="Crear contacto" wire:click="crear_contacto()"/>
		</div>
	</div>
```