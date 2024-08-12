
###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/create-post.blade.php --- --- --- --- --- --- ######

### ======================================= ###
###### ===--- Eventos del (mouse) ---=== ######
### ======================================= ###

```html
	<section>
		<div>
			<!-- (wire:click), ejecuta metodos del componente al hacer click en un elemento. -->

			<div>
				<input type="button" value="Mostrar datos" wire:click="get_info()"/>
			</div>
			<div>
				<input type="button" value="Mostrar datos" wire:click="reiniciar_info()"/>
			</div>

		</div>
	</section>
```

### ========================================= ###
###### ===--- Eventos del (teclado) ---=== ######
### ========================================= ###

```html
	<section>
		<!-- (wire:keydown), se ejecuta al presionar una tecla. -->
		<input type="text" wire:keydown="metodo"/>
		<input type="text" wire:keydown="metodo()"/>

		<!-- -------------------------------------- -->
		<!-- ------ Modificadores del evento ------ -->
		<!-- -------------------------------------- -->

		<input type="text" wire:keydown.enter="metodo"/>
		<!-- Tenemos varios modificadores, entre ellos: 
			--- (enter).
			--- (backspace).
			--- (escape).
			--- (shift).
			--- (tab).
			--- (arrow-up).
			--- (arrow-right).
			--- (arrow-down).
			--- (arrow-left).
			--- (page-down).
		-->
	</section>
```