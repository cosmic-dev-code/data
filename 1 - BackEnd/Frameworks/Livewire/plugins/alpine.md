### ======================================== ###
###### ===--- La propiedad ($wire) ---=== ######
### ======================================== ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Livewire/NuevoComponente.php --- --- --- --- --- --- ######

```php
    namespace App\Http\Livewire;
    use Livewire\Component;

    class NuevoComponente extends Component
    {
        public $count = 0;

        public function incrementar(){
            $this -> count++;
        }

        public function render()
        {
            return view('livewire.nuevo-componente');
        }
    }
```

###### --- --- --- --- --- --- {proyecto}/resources/views/livewire/nuevo-componente.blade.php --- --- --- --- --- --- ######

```html
    <section>

        <!-- ----------------------- -->
        <!-- ------ Asincrono ------ -->
        <!-- ----------------------- -->

        <b>{{ $count }}</b>

        <!-- Modifica desde el componente. -->
        <input type="button" value="Incrementar" wire:click="incrementar()">

        <!-- --------------------------------- -->
        <!-- ------ Accion magica $wire ------ -->
        <!-- --------------------------------- -->

        <!-- Por medio de la propiedad ($wire) podemos adquirir el valor de una propiedad del componente, 
        pero los datos (no se sincronizan). -->
        <article x-data="{cout: $wire.count}">
            <div>
                <span>Conteo de alpine: <b x-text="count"></b></span>
            </div>
            <div>
                <!-- Ejecutamos el metodo (incrementar) del componente de (livewire). -->
                <input type="button" value="Incrementar" x-on:click="$wire.incrementar()">
            </div>
        </article>

        <!-- ----------------------------------- -->
        <!-- ------ Binding con @entangle ------ -->
        <!-- ----------------------------------- -->

        <!-- Podemos modificar las propiedades del componente por medio de (AlphineJS). -->
        <article x-data="{cout: @entangle('count')}">
            <div>
                <span>Conteo de alpine: <b x-text="count"></b></span>
            </div>
            <div>
                <!-- Incrementamos el valor de la propiedad del componente. -->
                <input type="button" value="Incrementar" x-on:click="(count++)">
            </div>
        </article>

        <!-- ------------------------------- -->
        <!-- ------ Binding con defer ------ -->
        <!-- ------------------------------- -->

        <!-- La propiedad (defer), permite solo modificar la propiedad de (alpine). 
        Sin embargo hasta que se ejecute el metodo de (livewire), es cuando la propiedad de 
        (livewire) va a adquirir los datos.

        Modifica la propiedad de (Livewire) hasta que se hace la peticion al servidor ejecutando su metodo. -->
        <article x-data="{count: @entangle('count').defer}">
            <div>
                <span>Conteo de alpine: <b x-text="count"></b></span>
            </div>
            <div>
                <input type="button" value="Incrementar" x-on:click="(count++)">
            </div>
        </article>
    </section>
```