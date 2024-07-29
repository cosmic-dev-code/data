### =========================================== ###
###### ===--- Personalizar paginacion ---=== ######
### =========================================== ###

<!-- Existe la posibilidad de personalizar el codigo inyectado de las paginaciones: -->

```php
    $users -> links();
```

<!-- Primero debemos publicar las vistas de las paginaciones con el siguiente comando: -->

```bat
    php artisan livewire:publish --pagination
```

<!-- El comando anterior crea las vistas en la siguiente ruta: 
    --- (resorces\views\vendor\livewire\livewire\src\views\pagination).

Ahi tendremos disponibles las vistas de paginacion de (Tailwindcss) y (Boostrap). -->