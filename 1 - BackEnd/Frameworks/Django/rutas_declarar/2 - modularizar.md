### =============================== ###
###### ===--- Modularizar ---=== ######
### =============================== ###

{proyecto}/
├── myapp/
│   ├── views.py
└── mysite/
    └── urls.py

###### --- --- --- --- --- --- {proyecto}/myapp/views.py --- --- --- --- --- --- ######

<!-- En (views.py) dentro de nuestra App declaramos nuestras funciones. -->

```py
	from django.shortcuts import render

	# Importamos (HttpResponse).
	from django.http import HttpResponse

	def hello(request):
		# Envia texto simple
		return HttpResponse("hello")

	def about(request):
		# Envia HTML
		return HttpResponse("<h1>About</h1>")
```

###### --- --- --- --- --- --- {proyecto}/mysite/urls.py --- --- --- --- --- --- ######

<!-- Mandamos a llamar (views). -->

```py
	from django.contrib import admin
	from django.urls import path

	# Desde aqui nos importamos una funcion declarada en: 
	#	--- {proyecto}/myapp/views.py
	#		--- La funcion (hello).
	from myapp.views import hello

	# Nos podemos importar la carpeta (views) de la app (myapp).
	from myapp import views

	urlspatterns = [
		path("admin/", admin.site.urls)

		# Ejecutar como funcion.
		path("", hello)

		# Ejecutar como metodo.
		path("about/", views.about)
	]

	# NOTA: Los paths se declara como (path/) y NO como (/path).
```

### ================================ ###
###### ===--- Incluir URLs ---=== ######
### ================================ ###

{proyecto}/
├── myapp/
│   ├── views.py
│   └── urls.py
└── mysite/
    └── urls.py

<!-- Las (APPs) pueden tener sus propias URLs declaradas e importarlas en el archivo (Princial). -->

###### --- --- --- --- --- --- {proyecto}/myapp/urls.py --- --- --- --- --- --- ######

<!-- Creamos este archivo dentro de nuestra App. -->

```py
	from django.urls import path

	# En esta misma carpeta (.), se importa el archivo (views).
	from . import view

	# Rutas de esta aplicacion.
	urlspatterns = [
		path("", views.hello)
		path("about/", views.about)
	]
```

###### --- --- --- --- --- --- {proyecto}/mysite/urls.py --- --- --- --- --- --- ######

<!-- Archivo (urls) Principal. -->

```py
	from django.contrib import admin

	# Importamos (include).
	from django.urls import path, include

	urlspatterns = [
		path("admin/", admin.site.urls)

		# Incluye todas las rutas de: 
		#	--- Primer parametro, subfijo para las rutas del archivo a incluir: 
		#		--- (about/) o (subfijo/about/)
		#	--- Ruta del archivo urls a incluir en las rutas globales de la aplicacion: 
		#		--- {proyecto}/myapp/urls.py
		path("", include("myapp.urls"))
	]
```