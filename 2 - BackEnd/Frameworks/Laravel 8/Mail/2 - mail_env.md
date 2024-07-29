### =============================================== ###
###### ===--- Manipular el archivo (.env) ---=== ######
### =============================================== ###

<!-- Con las credenciales podemos llenar nuestro archivo (.env) en la parte de (mail) con los siguientes datos. -->

# Conectar con (Mailtrap)
-------------------------
```sh
	# Aqui indicamos la clase de conexion que utilizaremos, en este caso (smtp).
	MAIL_MAILER=smtp

	# Indicamos el 'host' que utilizaremos, en este caso el host le pertenece a un sitio web llamado (Maitrap).
	MAIL_HOST=smtp.mailtrap.io

	# Indicamos el puerto.
	MAIL_PORT=2525

	# Colocamos el usuario.
	MAIL_USERNAME=tu_usuario19294

	# Colocamos la contraseña.
	MAIL_PASSWORD=my_password

	# La tipo de encriptacion, en este caso (null).
	MAIL_ENCRYPTION=null

	# Quien lo envia.
	MAIL_FROM_ADDRESS=tu_correo@gmail.com

	# Nombre del sitio o aplicacion.
	MAIL_FROM_NAME="Desde el sitio web"
```

# Conectar con (Gmail)
-------------------------
```sh
	MAIL_MAILER=smtp

	# Por medio de GMAIL.
	MAIL_HOST=smtp.gmail.com

	# Este es el puerto que debemos colocar.
	MAIL_PORT=587

	# Correo que vamos a utilizar.
	MAIL_USERNAME=tu_correo@gmail.com

	# Contraseña de aplicacion, (Gmail la exige).
	MAIL_PASSWORD=my_password

	MAIL_ENCRYPTION=tls

	# IMPORTANTE: Coloca aqui un correo valido de remitente, (quien envia).
	MAIL_FROM_ADDRESS="tu_correo@gmail.com"

	MAIL_FROM_NAME="Nombre de la aplicacion"
```