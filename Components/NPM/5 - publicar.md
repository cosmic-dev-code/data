### ============================ ###
###### ===--- Publicar ---=== ######
### ============================ ###

<!-- Primero debes logiarte en NPM. -->

```bat
	: Iniciamos el proceso de login.
	npm login

	: Ingresa tu (username).
	> cosmic-dev

	: Ingresa tu (password).
	> password
```

<!-- Ahora procedemos a publicar nuestro paquete. -->

```bat
	: El paquete se publica de forma publica.
	npm publish --access public

	: Por defecto publica el paquete de forma (privada).
	: NOTA: Necesitas tener configurada una cuenta de pago.
	npm publish
```

### ============================== ###
###### ===--- Actualizar ---=== ######
### ============================== ###

<!-- Si has realizado algun cambio a tu libreria, entonces puedes reesubirla a (npm). -->

```json
	{
		// ...

		// Modifica la version de tu proyecto para reesubirlo, (de lo contrario dara un error).
		// Da error porque intentarias subir una version ya subida.
		"version": "1.0.1",

		// ...
	}
```

<!-- Ejecuta de regreso el comando de publicacion. -->

```bat
	npm publish
```