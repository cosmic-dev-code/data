### ============================================ ###
###### ===--- Eventos del (componente) ---=== ######
### ============================================ ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/NuevoComponente.php --- --- --- --- --- --- ######

<!-- Dentro de este archivo tenemos nuestro componente creado. -->

```php
	namespace App\Http\Livewire;
	use Livewire\Component;

	class NuevoComponente extends Component
	{
		public function booted()
		{
			/* Se ejecuta en cada solicitud, después de montar o hidratar el componente, 
			pero antes de llamar a cualquier método de actualización. */
		}

		public function mount()
		{
			/* Este es el metodo es el primero que se ejecuta cuando se manda a 
			llamar al metodo (render). Normalmente se utiliza para darle valores 
			iniciales a las propiedades del componente. */
		}

		public function updating()
		{
			/* Se ejecuta antes de cualquier actualizacion de los datos, 
			luego se ejecuta cada vez que una propiedad del componente 
			es modificada utilizando (wire:model). */
		}

		public function updated()
		{
			# Se ejecuta cada vez que una propiedad del componente es modificada utilizando (wire:model).
		}

		/* Bajo la convencion (updated/updating) seguido del nombre de una propiedad, podemos darle seguimiento 
		a la alteracion de cierta propiedad en especifico. */
		public $myVar = null;
		public function updatedMyVar(){}
		public function updatingMyVar(){}

		// Metodo que renderiza la vista del componente.
	    public function render()
	    {
	        return view('livewire.nuevo-componente');
	    }
	}
```

### ============================================ ###
###### ===--- Eventos del (JavaScript) ---=== ######
### ============================================ ###

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/nuevo-componente.blade.php --- --- --- --- --- --- ######

<!-- Eventos de carga del (JavaScript). -->

```html
	<div>
		<script>
			document.addEventListener("DOMContentLoaded", () => {
				Livewire.hook('component.initialized', (component) => {
					// Llamado cuando un componente ha sido inicializado en la página por Livewire.
				});
				Livewire.hook('element.initialized', (el, component) => {
					// Llamado cuando Livewire inicializa un elemento individual.
				});
				Livewire.hook('element.updating', (fromEl, toEl, component) => {
					/* Llamado antes de que Livewire actualice un elemento durante su ciclo de 
					diferenciación de DOM después de un viaje de ida y vuelta a la red. */
				});
				Livewire.hook('element.updated', (el, component) => {
					/* Llamado después de que Livewire actualiza un elemento durante su ciclo de 
					diferenciación de DOM después de un viaje de ida y vuelta a la red. */
				});
				Livewire.hook('element.removed', (el, component) => {
					// Llamado después de que Livewire elimina un elemento durante su ciclo de diferenciación de DOM.
				});
				Livewire.hook('message.sent', (message, component) => {
					// Llamado cuando una actualización de Livewire activa un mensaje enviado al servidor a través de AJAX.
				});
				Livewire.hook('message.failed', (message, component) => {
					// Llamado si el envío del mensaje falla por alguna razón.
				});
				Livewire.hook('message.received', (message, component) => {
					/* Llamado cuando un mensaje ha terminado su viaje de ida y vuelta, pero antes de que Livewire 
					actualice el DOM. */
				});
				Livewire.hook('message.processed', (message, component) => {
					/* Llamado después de que Livewire procesa todos los efectos secundarios 
					(incluida la diferenciación de DOM) de un mensaje. */
				});
			});
		</script>
	</div>
```