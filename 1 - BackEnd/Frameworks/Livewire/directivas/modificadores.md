
```html
	<div>
		<!-- ------------------------------ -->
		<!-- ------ Con (wire:model) ------ -->
		<!-- ------------------------------ -->
		
		<!-- Por defecto (Livewire) aplica un rebote de (150ms) para evitar la saturacion de peticiones 
		cuando un usuario escribe en un elemento de texto. Esto puede ser modificado y aplicarlo a 
		otros elementos de la siguiente manera. -->
		<input type="text" wire:model.debounce.150ms="propiedad">

		<!-- Puede desactivar el (binding) del campo colocando (lazy). Ahora, la propiedad ($message) 
		solo se actualizará cuando el usuario haga clic fuera del elemento de entrada. -->
		<input type="text" wire:model.lazy="propiedad">

		<!-- Anula por completo el (binding) del elemento con la propiedad del componente. -->
		<input type="text" wire:model.defer="consulta">
		<!-- Cuando el usuario da click, se envian los datos. -->
		<button wire:click="buscar()">Search</button>

		<!-- ------------------------------------ -->
		<!-- ------ Para los demas eventos ------ -->
		<!-- ------------------------------------ -->

		<!-- Previene el comportamiento por defecto. -->
		<input type="button" value="Crear" wire:click.prevent="metodo">

		<!-- Detiene la propagacion. -->
		<input type="button" value="Crear" wire:click.stop="metodo">

		<!-- Modifica el tiempo de demora al realizar la peticion al servidor, (al componente). -->
		<input type="button" value="Crear" wire:click.debounce.150ms="metodo">

		<!-- Solo desencadena una acción si el evento se desencadenó sobre sí mismo. -->
		<input type="button" value="Crear" wire:click.self="metodo">
	</div>
```