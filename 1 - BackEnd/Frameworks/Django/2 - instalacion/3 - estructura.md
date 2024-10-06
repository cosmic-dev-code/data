### ============================== ###
###### ===--- Estructura ---=== ######
### ============================== ###

<!-- Es una base de datos de prueba, (solo para desarrollo). -->
# Archivo [](db.sqlite3)

<!-- La carpeta que contiene tu aplicacion principal. -->
# Carpeta [](mysite)

<!-- Permite a la carpeta ser tratada como un modulo de Python para ser importado. -->
__init__.py

<!-- Carpeta donde Python guarda el codigo que ya compilo, para servirlo mas rapido. -->
__pycache__

###### --- --- --- --- --- --- {proyecto}/mysite/settings.py --- --- --- --- --- --- ######

<!-- Ajustes globales del proyecto. -->

```py
	# Permite al servidor decirle que direcciones pueden consultar al servidor.
	ALLOWED_HOSTS = []

	# Especifica si el proyeto esta en modo produccion.
	# Proporciona mas informacion en modo desarrollo.
	DEBUG = True

	# Una clave para encriptar datos entre el navegador y servidor.
	# NOTA: Se crea por defecto, pero de preferencia coloca una.
	SECRET_KEY = ""

	# (Django), permite separar la app en distintas aplicaciones.
	# Al modularizar puedes traerlas aqui, acoplarlas y desacoplarlas.
	INSTALLED_APPS = [
		"django.contrib.admin", 
		"django.contrib.auth", 
		"django.contrib.contenttypes", 
		# etc...
	]

	# Procesamiento de datos.
	MIDDLEWARE = [
		# ...
	]

	# Zona para conectarse a una base de datos.
	DATABASES = {
		# Por defecto.
		"default": {
			# Se conecta a la base de datos de desarrollo (sqlite3).
			# NOTA: En produccion necesitaremos una aqui.
			"ENGINE": "django.db.backends.sqlite3", 
			"NAME": BASE_DIR / "db.sqlite3"
		}
	}

	# Configuracion del idioma de la aplicacion.
	LANGUAGE_CODE = "en-us"

	# Zona horaria.
	TINE_ZONE = "UTC"

	# Donde se ubican los archivos estaticos HTML, CSS y JS.
	# Django permite servir archivos web.
	STATIC_URL = "static/"
```

###### --- --- --- --- --- --- {proyecto}/mysite/urls.py --- --- --- --- --- --- ######

<!-- URLs globales del proyecto. -->

```py
	from django.contrib import admin
	from django.urls import path

	# URLs que los usuarios pueden visitar.
	urlspatterns = [
		path("admin/", admin.site.urls)
	]
```

###### --- --- --- --- --- --- {proyecto}/mysite/asgi.py --- --- --- --- --- --- ######
###### --- --- --- --- --- --- {proyecto}/mysite/wsgi.py --- --- --- --- --- --- ######

<!-- Modulos que sirven el contenido web. -->