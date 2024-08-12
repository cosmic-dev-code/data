### =================================== ###
###### ===--- Publicar vistas ---=== ######
### =================================== ###

<!-- Ejecutamos el siguiente comando. -->

```bat
	php artisan vendor:pusblish
```

<!-- Ahora procedemos a publicar las vistas de:  -->

```bat
	--- laravel-mail
	--- laravel-notifications

	>>> 13
	>>> 14
```

Una vez hecho eso las vistas se habran publicado en la ruta: 
	--- [](resources/vendor/mail)
	--- [](resources/vendor/notifications)

En esas vistas podremos encontrar el codigo de nuestra notificacion.