### ========================================== ###
###### ===--- Crear un dominio local ---=== ######
### ========================================== ###

<!-- Para esto lo primero que debemos hacer es abrir nuestro (blog de notas) como (administrador), 
una vez hecho eso colocamos la siguiente ruta:  -->

#	--- [](C:\Windows\System32\drivers\etc)

###### --- --- --- --- --- --- Archivo (hosts) --- --- --- --- --- --- ######

```sh
	# Copyright (c) 1993-2009 Microsoft Corp.
	#
	# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
	#
	# This file contains the mappings of IP addresses to host names. Each
	# entry should be kept on an individual line. The IP address should
	# be placed in the first column followed by the corresponding host name.
	# The IP address and the host name should be separated by at least one
	# space.
	#
	# Additionally, comments (such as these) may be inserted on individual
	# lines or following the machine name denoted by a '#' symbol.
	#
	# For example:
	#
	#      102.54.94.97     rhino.acme.com          # source server
	#       38.25.63.10     x.acme.com              # x client host

	# localhost name resolution is handled within DNS itself.
	#	127.0.0.1       localhost
	#	::1             localhost

	# Este es nuestro dominio local.
	127.0.0.1       blog.test

	# Podemos crear mas de un dominio local.
	127.0.0.1       ventaolivares.test
	127.0.0.1		ensayo.test
```

### ======================================================= ###
###### ===--- Apuntar dominio local a un proyecto ---=== ######
### ======================================================= ###

<!-- Para apuntar nuestro dominio a un proyecto local, debemos indicarle cuales son los archivos que va a abrir 
cuando accedamos a dicho dominio. -->

<!-- Accedemos a la siguiente (URL). -->

#	--- [](C:\xampp\apache\conf\extra)

###### --- --- --- --- --- --- Archivo (httpd-vhosts.conf) --- --- --- --- --- --- ######

```xml
	<!-- Esto es lo que debe venir por defecto en este archivo, de no tenerlo lo agregamos. -->
	NameVirtualHost *
	<VirtualHost *>
		DocumentRoot "C:\xampp\htdocs"
		ServerName localhost
	</VirtualHost>
```

```xml
	<!-- De esta manera agregamos nuestro proyecto a un dominio local, colocando 
	el nombre del dominio que creamos, por ejemplo (blog.test) -->
	<VirtualHost *>
		DocumentRoot "C:\xampp\htdocs\blog\public"
		ServerName blog.test
		<Directory "C:\xampp\htdocs\blog\public ">
			Options All
			AllowOverride All
			Require all granted
		</Directory>
	</VirtualHost>

	<!-- Podemos agregar otro proyecto. -->
	<VirtualHost *>
		DocumentRoot "C:\xampp\htdocs\livensayo\public"
		ServerName ensayo.test
		<Directory "C:\xampp\htdocs\livensayo\public ">
			Options All
			AllowOverride All
			Require all granted
		</Directory>
	</VirtualHost>
```

### ======================== ###
###### ===--- Nota ---=== ######
### ======================== ###

# Una vez hecho esto, debemos apagar apache y volver a encenderlo. 
--------------------------------------------------------------------