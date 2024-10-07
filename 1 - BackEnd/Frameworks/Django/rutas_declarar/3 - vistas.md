### =================================================== ###
###### ===--- La pagina que viene por defecto ---=== ######
### =================================================== ###

###### --- --- --- --- --- --- {proyecto}/mysite/urls.py --- --- --- --- --- --- ######

<!-- Archivo (urls) Principal. -->

```py
	from django.contrib import admin
	from django.urls import path

	urlspatterns = [
		# Sirve la vista para entrar al administrador.
		path("admin/", admin.site.urls)
	]
```

### ========================================== ###
###### ===--- Crear nuestras paginas ---=== ######
### ========================================== ###

<!-- Dentro de nuestra aplicacion creamos una carpeta llamada: 
		--- (templates): 
			--- (myapp): 
				--- contacto.html
				--- usuarios/principal.html -->
{proyecto}/
├── myapp/
│   ├── templates/
│	│	│	<!-- Subcarpeta para mantener nombres únicos -->
│   │   ├── myapp/
│   │   │   ├── contacto.html
│   │   │   └── usuarios/
│   │   │       └── principal.html
│   ├── views.py
│   └── urls.py
└── mysite/
    └── settings.py
    └── urls.py

# views.py en (myapp)
	Declaras las funciones que devuelven la vista.

# urls.py en (myapp)
	Declaras las rutas a las que asignas las funciones para devolver las vistas.

# settings.py en (mysite)
	Haces los ajustes para que (render) busque en todos los templates de las APPs.

# urls.py en (mysite)
	Incluyes las URLs declaradas de (myapp).

###### --- --- --- --- --- --- {proyecto}/mysite/settings.py --- --- --- --- --- --- ######

<!-- Primero venimos aqui. -->

```py
	TEMPLATES = [
	    {
	        'BACKEND': 'django.template.backends.django.DjangoTemplates',
	        'DIRS': [],
	        
	        # Indicamos que Django buscara en cada (templates) de cada aplicacion registrada.
	        'APP_DIRS': True,

	        'OPTIONS': {
	            'context_processors': [
	                'django.template.context_processors.debug',
	                'django.template.context_processors.request',
	                'django.contrib.auth.context_processors.auth',
	                'django.contrib.messages.context_processors.messages',
	            ],
	        },
	    },
	]
```

###### --- --- --- --- --- --- {proyecto}/myapp/views.py --- --- --- --- --- --- ######

<!-- El en archivo (views) de mi aplicacion. -->

```py
	from django.shortcuts import render

	# Funciones que retornaran las vistas.

	def contacto(request):
		# (render) busca en todos los (templates) de cada aplicacion.
		# Por eso colocamos la subcarpeta (myapp).

		# Recibe: 
		#	--- El (request).
		#	--- Ruta de la plantilla HTML a renderizar.
	    return render(request, 'myapp/contacto.html')

	def usuarios_principal(request):
	    return render(request, 'myapp/usuarios/principal.html')
```

# NOTA: Recuerda colocar una (subcarpeta) en (templates) para que (render) la encuentre.

###### --- --- --- --- --- --- {proyecto}/myapp/urls.py --- --- --- --- --- --- ######

```py
	from django.urls import path
	# Del archivo (views) de esta carpeta (myapp), extraemos las funciones.
	from .views import contacto, usuarios_principal

	urlpatterns = [
		# Declaramos las rutas y le pasamos la funcion.
	    path('contacto/', contacto),
	    path('usuarios/', usuarios_principal),
	]
```

###### --- --- --- --- --- --- {proyecto}/mysite/urls.py --- --- --- --- --- --- ######

```py
	# Importamos (include).
	from django.urls import path, include

	urlpatterns = [
		# Incluye todas las rutas de (myapp) sin sibfijo.
		path('', include('myapp.urls'))
	]
```

### ========================================== ###
###### ===--- (vistas) y (variables) ---=== ######
### ========================================== ###

###### --- --- --- --- --- --- {proyecto}/myapp/views.py --- --- --- --- --- --- ######

```py
	from django.shortcuts import render

	def todos_usuarios(request):
	    # Datos que deseas pasar a la plantilla
	    datos = {
	        "informacion": "Esta es una cadena de texto",
	        "mas_info": {
	            "uno": 1,
	            "dos": 2,
	            "tres": 3,
	        }
	    }
	    
	    # (render) ahora recibe: 
		#	--- El (request).
		#	--- Ruta de la plantilla HTML a renderizar.
		#	--- Datos para la plantilla.
	    return render(request, 'myapp/usuarios/todos.html', datos)
```

###### --- --- --- --- --- --- {proyecto}/myapp/templates/myapp/usuarios/todos.html --- --- --- --- --- --- ######

```html
	<!DOCTYPE html>
	<html>
	<head>
	    <title>Todos los Usuarios</title>
	</head>
	<body>
	    <h1>Usuarios</h1>

	    <!-- Imprimimos la variable -->
	    <p>{{ informacion }}</p>

	    <!-- Accedemos al diccionario -->
	    <ul>
	        <li>Uno: {{ mas_info.uno }}</li>
	        <li>Dos: {{ mas_info.dos }}</li>
	        <li>Tres: {{ mas_info.tres }}</li>
	    </ul>
	</body>
	</html>
```