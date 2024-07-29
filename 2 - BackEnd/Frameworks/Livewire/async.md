### ======================================== ###
###### ===--- La propiedad ($wire) ---=== ######
### ======================================== ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/NuevoComponente.php --- --- --- --- --- --- ######

```php
    namespace App\Http\Livewire;
    use Livewire\Component;

    class NuevoComponente extends Component
    {
        public integer $count = 0;

        public function incrementar()
        {
            $this -> $count++;
        }

        public function render()
        {
            return view('livewire.nuevo-componente');
        }
    }
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/nuevo-componente.blade.php --- --- --- --- --- --- ######

<!-- Cada vez que se hace "click" en el boton modifica la propiedad ($count), y caundo esto pasa la vista 
(livewire.nuevo-componente) se vuelve a renderizar pero no recarga toda la pagina, 
(solo recarga la vista del componente). -->

```html
    <section>
        <div>
            <h1>{{ $count }}</h1>
        </div>
        <div>
            <!-- Los eventos por defecto hacen la peticion al servidor en (150 milisegundos), 
            la respuesta regresa recargando la vista del componente mas no recarga 
            la pagina completa.

            NOTA: Esto es codigo asincrono. -->
            <input type="button" value="Incrementar" wire:click.debounce.150ms="incrementar()">
        </div>
    </section>
```