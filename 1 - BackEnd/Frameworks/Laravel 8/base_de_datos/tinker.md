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

<!-- Entramos en la consola a (tinker).  -->

```bat
  php artisan tinker
```

<!-- Podemos utilizar codigo PHP. -->

```php
  App\Models\User;

  // Creamos un registro.
  $usuario = new User;
  $usuario -> nombre = "Brandon";
  $usuario -> apellido = "Olivares";
  $usuario -> edad = 21;
  $usuario -> save();

  // Podemos imprimirlo.
  $usuario;

  /*
    Imprimimos el objeto {
      #3440
      nombre: "Brandon",
      apellido: "Olivares",
      edad: 21,
      updated_at: "2021-08-29 01:57:39",
      created_at: "2021-08-29 01:57:39",
      id: 1,
    }
  */

  // Podemos traernos todos los datos.
  $usuarios = User::all()
```