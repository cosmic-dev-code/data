: Ejecuta las tablas y se crean en la base de datos.
php artisan migrate

: Borra las tablas creadas recientemente.
php artisan migrate:rollback 

: Borra todas las tablas.
php artisan migrate:reset

: Borra las tablas y las vuelve a ejecutar.
php artisan migrate:fresh

: Borra las tablas una a una y las va creando una a una.
php artisan migrate:refresh