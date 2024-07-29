<?php

/* ##########==================================########## */
/* ######===--- Archivo de rutas por defecto ---===###### */
/* ##########==================================########## */

######### --- --- --- Archivo (routes/web.php) --- --- --- ######### */

# Suponemos que tenemos muchas rutas, hay una manera de separarlas colocando otro archivo de rutas.

use Illuminate\Support\Facades\Route;

// Usuarios.

use App\Models\Usuario;

Route::get("/usuarios/todos", function(){
    return view("usuarios.todos");
});

Route::get("/usuarios/mostrar/{id}", function($id){
    return view("usuarios.todos", [
        "usuario" => Usuario::find($id)
    ]);
});

// Administradores.

use App\Models\Admin;

Route::get("/administradores/todos", function(){
    return view("administradores.todos");
});

Route::get("/administradores/mostrar/{id}", function($id){
    return view("administradores.todos", [
        "usuario" => Admin::find($id)
    ]);
});

Route::get("/administradores/correo", function(){
    return view("administradores.correo");
}) -> name("admin.mail");

/* ##########==================================########## */
/* ######===--- Crear nuevo archivo de rutas ---===###### */
/* ##########==================================########## */

######### --- --- --- Archivo (routes/admin.php) --- --- --- ######### */

# En la carpeta (routes) creamos un archivo llamado (admin.php).

// Importamos la misclase (Route) para crear rutas.
use Illuminate\Support\Facades\Route;

// Traemos las rutas que queramos y sus importaciones del archivo (web.php).

use App\Models\Admin;

Route::get("/administradores/todos", function(){
    return view("administradores.todos");
});

Route::get("/administradores/mostrar/{id}", function($id){
    return view("administradores.todos", [
        "usuario" => Admin::find($id)
    ]);
});

Route::get("/administradores/correo", function(){
    return view("administradores.correo");
}) -> name("admin.mail");

/* ##########=====================================########## */
/* ######===--- Dar de alta el archivo de rutas ---===###### */
/* ##########=====================================########## */

######### --- --- --- Archivo (app/Providers/RouteServiceProvider.php) --- --- --- ######### */

namespace App\Providers;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

# En este archivo, tenemos una clase que se encarga de administrar los archivos de ruta.

class RouteServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->configureRateLimiting();

        $this->routes(function(){
            Route::prefix('api')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/api.php'));

            // Archivo de rutas por defecto (web.php).
            Route::middleware('web')
                ->namespace($this->namespace)
                ->group(base_path('routes/web.php'));

            // Duplicamos y modificamos.
            Route::middleware('web')
                ->namespace($this->namespace)
                // Especificamos la ruta de nuestro archivo.
                ->group(base_path('routes/admin.php'));

            /* Modificaciones */

            /* Con el segundo parametro indicamos que el usuario debe iniciar sesion para visitar alguna 
            de estas rutas. */
            Route::middleware('web', 'auth')
                ->namespace($this->namespace)
                /* Este prefijo indica que todas las rutas del archivo (admin.php) deberan iniciar 
                siempre con (administradores). */
                ->prefix('administradores')
                ->group(base_path('routes/admin.php'));
        });
    }

    /**
     * No debemos tocar este metodo llamado (configureRateLimiting).
     */
    protected function configureRateLimiting()
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by(optional($request->user())->id ?: $request->ip());
        });
    }
}

######### --- --- --- Archivo (routes/admin.php) --- --- --- ######### */

/* Hecho lo anterior, ya tenemos dado de alta nuestro archivo de rutas. */

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;

/* (Si utilizaste el prefijo) en el archivo (app/Providers/RouteServiceProvider.php), entonces ya no es 
necesario especificarle a la ruta que iniciara con "administradores". */

// La ruta sera: "administradores/todos".
Route::get("todos", function(){
    return view("administradores.todos");
});

// ...