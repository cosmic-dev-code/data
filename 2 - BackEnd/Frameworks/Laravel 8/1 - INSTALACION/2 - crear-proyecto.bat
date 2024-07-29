: ##########================================########## :
: ######===--- Instalacion via (composer) ---===###### :
: ##########================================########## :

: Los tres parametros que se reciben son: 
	: --- El comando para crear un nuevo proyecto, (create-project).
	: --- (laravel/laravel), indica que se trata de un proyecto (Laravel).
	: --- El nombre del proyecto.
: Esto instala la ultima version de Laravel.
composer create-project laravel/laravel nombreDelProyecto

: NOTA: Esta es la forma mas segura, ya que (--prefer-dist) comprime los archivos e instala la 
: version mas estable de Laravel 9.
composer create-project laravel/laravel nombreDelProyecto "9.*" --prefer-dist

: Opcionalmente podemos indicar cual version de Laravel vamos a manejar.
composer create-project laravel/laravel nombreDelProyecto "5.5.*"
composer create-project laravel/laravel nombreDelProyecto "10.*"

: Accedemos a la carpeta creada e iniciamos el (servidor).
cd nombreDelProyecto & php artisan serve

: ##########========================########## :
: ######===--- Instalacion global ---===###### :
: ##########========================########## :

: Instalamos (laravel) de manera global para poder utilizar los comandos de (laravel).
composer global require laravel/installer

: Vemos la version instalada de Laravel de manera global.
laravel --version

: Creamos un nuevo proyecto de laravel colocando el nombre del proyecto.
laravel new nombreDelProyecto

: Accedemos a la carpeta creada e iniciamos el (servidor).
cd nombreDelProyecto & php artisan serve