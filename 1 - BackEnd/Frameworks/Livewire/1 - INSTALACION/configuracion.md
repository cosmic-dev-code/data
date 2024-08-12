
```bat
    : Publica el archivo de configuracion de (Livewire) en (vendor/livewire/livewire/config/livewire.php).
    php artisan livewire:publish --config
```

###### --- --- --- --- --- --- vendor/livewire/livewire/config/livewire.php --- --- --- --- --- --- ######
```php
    return [

        /*
        |--------------------------------------------------------------------------
        | Class Namespace
        |--------------------------------------------------------------------------
        |
        | Este valor establece el espacio de nombres raíz para las clases de componentes de Livewire en
        | su aplicación. Este valor afecta el descubrimiento automático de componentes y
        | cualquier comando auxiliar de archivo de Livewire, como `artisan make:livewire`.
        |
        | Después de cambiar este elemento, ejecute: `php artesanal livewire:discover`.
        |
        */

        'class_namespace' => 'App\\Http\\Livewire',

        /*
        |--------------------------------------------------------------------------
        | View Path
        |--------------------------------------------------------------------------
        |
        | Este valor establece la ruta para las vistas del componente Livewire.
        | Esto afecta a los comandos auxiliares de manipulación de archivos como `artisan make:livewire`
        |
        */

        'view_path' => resource_path('views/livewire'),

        /*
        |--------------------------------------------------------------------------
        | Layout
        |--------------------------------------------------------------------------
        | La vista de diseño predeterminada que se utilizará al renderizar un componente a través de
        | Route::get('/some-endpoint', SomeComponent::class);. En este caso el
        | la vista devuelta por SomeComponent estará envuelta en "layouts.app"
        |
        */

        'layout' => 'layouts.app',

        /*
        |--------------------------------------------------------------------------
        | Livewire Assets URL
        |--------------------------------------------------------------------------
        |
        | Este valor establece la ruta a los activos JavaScript de Livewire, para los casos en los que
        | la raíz del dominio de su aplicación no es la ruta correcta. Por defecto, Livewire
        | cargará sus activos de JavaScript desde la "raíz relativa" de la aplicación.
        |
        | Examples: "/assets", "myurl.com/app".
        |
        */

        'asset_url' => null,

        /*
        |--------------------------------------------------------------------------
        | Livewire App URL
        |--------------------------------------------------------------------------
        |
        | Este valor debe usarse si los activos de Livewire se sirven desde CDN.
        | Livewire se comunicará con una aplicación a través de esta URL.
        |
        | Examples: "https://my-app.com", "myurl.com/app".
        |
        */

        'app_url' => null,

        /*
        |--------------------------------------------------------------------------
        | Livewire Endpoint Middleware Group
        |--------------------------------------------------------------------------
        |
        | Este valor establece el grupo de middleware que se aplicará a la principal
        | Punto final de "mensaje" de Livewire (el punto final que se golpea cada vez
        | actualizaciones de un componente Livewire). Está configurado en "web" de forma predeterminada.
        |
        */

        'middleware_group' => 'web',

        /*
        |--------------------------------------------------------------------------
        | Livewire Temporary File Uploads Endpoint Configuration
        |--------------------------------------------------------------------------
        |
        | Livewire handles file uploads by storing uploads in a temporary directory
        | before the file is validated and stored permanently. All file uploads
        | are directed to a global endpoint for temporary storage. The config
        | items below are used for customizing the way the endpoint works.
        |
        */

        'temporary_file_upload' => [
            'disk' => null,        // Example: 'local', 's3'              Default: 'default'
            'rules' => null,       // Example: ['file', 'mimes:png,jpg']  Default: ['required', 'file', 'max:12288'] (12MB)
            'directory' => null,   // Example: 'tmp'                      Default  'livewire-tmp'
            'middleware' => null,  // Example: 'throttle:5,1'             Default: 'throttle:60,1'
            'preview_mimes' => [   // Supported file types for temporary pre-signed file URLs.
                'png', 'gif', 'bmp', 'svg', 'wav', 'mp4',
                'mov', 'avi', 'wmv', 'mp3', 'm4a',
                'jpg', 'jpeg', 'mpga', 'webp', 'wma',
            ],
            'max_upload_time' => 5, // Max duration (in minutes) before an upload gets invalidated.
        ],

        /*
        |--------------------------------------------------------------------------
        | Manifest File Path
        |--------------------------------------------------------------------------
        |
        | This value sets the path to the Livewire manifest file.
        | The default should work for most cases (which is
        | "<app_root>/bootstrap/cache/livewire-components.php"), but for specific
        | cases like when hosting on Laravel Vapor, it could be set to a different value.
        |
        | Example: for Laravel Vapor, it would be "/tmp/storage/bootstrap/cache/livewire-components.php".
        |
        */

        'manifest_path' => null,

        /*
        |--------------------------------------------------------------------------
        | Back Button Cache
        |--------------------------------------------------------------------------
        |
        | This value determines whether the back button cache will be used on pages
        | that contain Livewire. By disabling back button cache, it ensures that
        | the back button shows the correct state of components, instead of
        | potentially stale, cached data.
        |
        | Setting it to "false" (default) will disable back button cache.
        |
        */

        'back_button_cache' => false,

        /*
        |--------------------------------------------------------------------------
        | Render On Redirect
        |--------------------------------------------------------------------------
        |
        | This value determines whether Livewire will render before it's redirected
        | or not. Setting it to "false" (default) will mean the render method is
        | skipped when redirecting. And "true" will mean the render method is
        | run before redirecting. Browsers bfcache can store a potentially
        | stale view if render is skipped on redirect.
        |
        */

        'render_on_redirect' => false,

    ];
```