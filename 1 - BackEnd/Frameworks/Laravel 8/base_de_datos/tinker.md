### ===================================== ###
###### ===--- Entrar a (tinker) ---=== ######
### ===================================== ###

<!-- Primero, debemos ejecutar el comando que nos permitira manipular los registros en forma de objeto por 
consola haciendo uso de eloquent, el comando que debemos ejecutar en consola es el siguiente:  -->

```bat
  php artisan tinker
```

<!-- El comando anterior nos permitira entrar a (Tinker) el cual nos permitira 
realizar los comandos. -->

### ===================================== ###
###### ===--- Salir de (tinker) ---=== ######
### ===================================== ###

<!-- Para salir de (Tinker) solo debemos ejecutar el siguiente comando:  -->

```bat
  exit
```

### =================================== ###
###### ===--- Uso de (tinker) ---=== ######
### =================================== ###

<!-- Una vez creado el modelo debemos proceder a utilizarlo, para lo cual accederemos a (tinker):  -->

```bat
  php artisan tinkerz
```

<!-- Dentro de tinker estaremos utilizando codigo PHP, por lo que hacemos uso de la siguiente libreria: -->

```bat
  App\Models\usuario; 

  : Creamos un objeto de la clase (nombre_modelo).
  $usuario = new usuario;
  
  : Comenzamos a definir las propiedades que lleva en nuestra tabla.
  $usuario -> nombre = "Brandon";
  $usuario -> apellido = "Olivares";
  $usuario -> edad = 21;
```
<!-- El registro no tiene ninguna otra propiedad mas que las que definimos, dado que no tiene un 'id' 
definido este objeto se insertara como un nuevo registro. -->

```bat
  $usuario -> save();

  $usuario;

  : Imprimimos el objeto {
  :  #3440
  :  nombre: "Brandon",
  :  apellido: "Olivares",
  :  edad: 21,
  :  updated_at: "2021-08-29 01:57:39",
  :  created_at: "2021-08-29 01:57:39",
  :  id: 1,
  : }
```