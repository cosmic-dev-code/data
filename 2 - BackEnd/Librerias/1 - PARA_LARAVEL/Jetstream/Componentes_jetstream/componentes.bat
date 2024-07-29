
: Existen varios componentes que tenemos por defecto dentro de nuestro proyecto 'Laravel', estos componentes 
: pertenecen a (Lawire), son componentes los cuales forman nuestra aplicacion.

: En la carpeta (resources/views) podemos encontrar varios documentos con las extensiones (.blade.php), esos 
: documentos son los archivos que forman nuestra aplicacion, son los archivos 'plantilla'.

: Los archivos 'plantilla' los cuales realmente son componentes de 'lawire' se encuentran en la siguiente ubicacion: 
: 	--- (vendor/laravel/jetstream/resources/views/components)

: Si queremos modificar estos componentes de manera que no se sobreescriban cuando actualicemos nuestro laravel 
: a una version mas reciente, debemos ingresar el siguiente comando: 

php artisan vendor:publish

: Nos preguntara que queremos publicar, ingresamos (0) para publicar todo.

>>> 0

: De esta manera podremos modificar los componentes sin ningun problema a futuro.