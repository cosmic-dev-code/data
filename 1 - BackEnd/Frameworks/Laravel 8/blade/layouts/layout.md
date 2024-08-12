### ======================================= ###
###### ===--- Plantilla principal ---=== ######
### ======================================= ###

###### --- --- --- --- --- --- {proyecto}/resources/views/layouts/base.blade.php --- --- --- --- --- --- ######

```html
    <html>
    <head>
        <title>Título de la Página</title>
    </head>
    <body>
        <header>
            <!-- ... -->
        </header>

        <main>
            <!-- Aqui va el contenido dinamico a insertar. -->
            {{ $slot }}
        </main>

        <footer>
            <!-- ... -->
        </footer>
    </body>
    </html>
```

###### --- --- --- --- --- --- {proyecto}/resources/views/mi_plantilla.blade.php --- --- --- --- --- --- ######

```html
    <!-- Por convercion Laravel hace lo siguiente: 
        --- Busca el archivo (base.blade.php), dentro de la carpeta (resources/views/layouts). -->
    <x-base-layout>
        <h1>Contenido de la plantilla</h1>
    </x-base-layout>
```

### ====================================== ###
###### ===--- Cambiar convencion ---=== ######
### ====================================== ###

###### --- --- --- --- --- --- {proyecto}/app/Providers/AppServiceProvider.php --- --- --- --- --- --- ######

```php
    use Illuminate\Support\Facades\Blade;

    // ...

    public function boot()
    {
        /* Cambiamos la convencion: 
            --- (resources/views/layouts) a (resources/views/components/layouts). */
        Blade::componentNamespace('App\\View\\Components', 'layouts');
    }
```
<!-- Ahora debemos ejecutar el comando para que se actualice la caché de Blade y se reflejen los cambios en la 
resolución de componentes -->

```bat
    php artisan optimize
```

<!-- Ahora por convencion Laravel buscara las plantillas en: 
    --- (resources/views/components/layouts). -->

```html
    <x-base-layout>
        <h1>Contenido de la plantilla</h1>
    </x-base-layout>
```