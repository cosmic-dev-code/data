<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Aqui estan todas las rutas que tenemos definidas.
|--------------------------------------------------------------------------
|
| Dado que nuestra archivo (resources/views/navigation-menu.blade.php) apunta a una 
| ruta llamada (home), debemos crear esa ruta, la cual no es mas que el 'name' 
| de la ruta 'welcome'.
|
*/

Route::get('/', function () {
    return view('welcome');
}) -> name('home'); # Esta es la ruta que necesitaremos asignarle un 'name'.

# Aqui viene la ruta (dashboard) protejida con un middleware, el usuario debe haber iniciado sesion.
Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');
