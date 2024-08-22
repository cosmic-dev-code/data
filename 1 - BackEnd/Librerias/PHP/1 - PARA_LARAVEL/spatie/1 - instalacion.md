### ============================================== ###
###### ===--- Instalacion por (composer) ---=== ######
### ============================================== ###

<!-- (Spatie) es unalibreria que nos permite tener en nuestro proyecto (Laravel) todo un sistema de 
roles y permisos, este sistema funciona para lo siguiente:  -->
*	--- Tener usuarios dados de alta con algun rol o permiso o ambos.
*	--- Asignar y desasignar roles a diferentes usuarios.
*	--- Crear administradores.
*	--- Etc.

<!-- Para su instalacion lo unico que debemos hacer es instroducir en nuestro proyecto (Laravel) el 
siguiente comando:  -->

```bat
	composer require spatie/laravel-permission
```

<!-- El comando anterior instalara todos los archivos que necesitamos dentro de una carpeta llamada (vendor/spatie). 
Dentro de esa carpeta tenemos las migraciones correspondientes para hacer nuestro sistema de roles y permisos, 
por lo que debemos publicar las migraciones con el siguiente comando:  -->

```bat
	php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
```

<!-- Con eso tenemos ya publicadas las migraciones de (spatie) paranostros (roles y permisos) en nuestra 
carpeta (database/migrations). Ahora debemos realizar esas migraciones con el siguiente comando:  -->

```bat
	php artisan migrate
```

<!-- Y con eso ya tenemos ejecutadas esas migraciones de (espatie) las cuales se veran reflejadas en nuestra 
base de datos. -->