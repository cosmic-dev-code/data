### ==================================== ###
###### ===--- Ruta por defecto ---=== ######
### ==================================== ###

###### --- --- --- --- --- --- {proyecto}/mysite/urls.py --- --- --- --- --- --- ######

<!-- Archivo (urls) Principal. -->

```py
	from django.contrib import admin
	# (path), es la funcion que permite declarar nuevas rutas.
	from django.urls import path

	# Esta es la ruta que viene por defecto.
	urlspatterns = [
		# Sirve para entrar al administrador.
		path("admin/", admin.site.urls)
	]
```

# NOTA: Recordemos que esto es posible porque las carpetas tiene __init__.py 
# que permite a las carpetas tratarse como modulos que pueden importarse.

# ------------------------------ #
# ------ Crear nueva ruta ------ #
# ------------------------------ #

```py
	from django.contrib import admin
	from django.urls import path

	# Importamos (HttpResponse) este modulo para devolver una respuesta.
	from django.http import HttpResponse

	# Funcion a pasar por parametro.
	def cursos(request):
		# Retorna la respuesta.
		return HttpResponse("""
			<h1>Bienvenido a la pagina de <strong>cursos</strong></h1>
			<div>
				<p>Gracias por visitar nuestra pagina de cursos.</p>
			</div>
		""")

	urlspatterns = [
		path("admin/", admin.site.urls)

		# Declaramos la ruta y pasamos la funcion con la respuesta.
		path("cursos/", cursos)
	]
```

### ========================================= ###
###### ===--- Parametros con nombre ---=== ######
### ========================================= ###

<!-- Las rutas pueden recibir parametros, (de una manera convencional). -->
	Forma personalizada: --- /cursos?el_curso=18
	Forma convencional: --- /cursos/18

# NOTA: Estos parametros son obligatorios cuando los defines en una ruta.

```py
	from django.urls import path
	from django.http import HttpResponse

	# Puede ser una funcion aqui aparte.
	def usuario_id(request, id):
		# Retornamos la respuesta con el parametro recibido: 
		# 	--- usuarios/brandon
		return HttpResponse(f"El usuario tiene el id: {usuario_id}")

	urlspatterns = [
		# Esta ruta recibe un parametro de tipo (str), y la variable se llama (usuario).
		# Podemos colocar una (lambda) en lugar de una (funcion).
		path(
			"usuarios/<str:usuario>", 
			lambda request, usuario: HttpResponse(f"El usuario es: {usuario}")
		)

		# Recibir (id) como (int).
		path("usuario/id/<int:id>", usuario_id)
	]
```

# ----------------------------------- #
# ------ Mas de un (parametro) ------ #
# ----------------------------------- #

# NOTA: Por (convencion) el nombre del parametro en la ruta lleva el mismo que el que se recibe la funcion.

```py
	from django.http import HttpResponse
	from django.urls import path

	def cursos(request, curso, seccion):
	    return HttpResponse(f"""
	        <h1>Bienvenido a la sección {seccion} del curso {curso}</h1>
	        <div>
	            <p>Esta sección llamada {seccion} tiene contenido gratuito y de 
	            calidad.</p>
	        </div>
	    """)

	# Recibimos dos parametros (curso), (seccion) como tipo (str).
	urlpatterns = [
	    path('cursos/<str:curso>/<str:seccion>/', cursos),
	]
```

### ========================================= ###
###### ===--- Parametros opcionales ---=== ######
### ========================================= ###

<!-- Los parametros opciones pueden NO dar error al visitarse. -->

```py
	from django.http import HttpResponse
	from django.urls import path

	# Como podemos ver (curso) ya tiene un valor por defecto.
	def curso(request, curso = "Ninguno"):
	    return HttpResponse(f"""
	        <h1>Parametro opcional: {curso}</h1>
	    """)

	# Un nivel de profundidad mas de la URL.
	def nombre(request, nombre = "Brandon"):
	    return HttpResponse(f"""
	        <h1>Parametro opcional: {curso}</h1>
	    """)

	urlpatterns = [
		# Recibimos (curso).
	    path('cursos/<str:curso>', curso), 

	    # Una profundidad mas.
	    path('cursos/<str:curso>/<str:nombre>', nombre)
	]
```

### =========================== ###
###### ===--- Queries ---=== ######
### =========================== ###

<!-- Trata de datos adicionales: 
	--- ruta?var=brandon -->

```py
	from django.http import HttpResponse
	from django.urls import path

	def information(request):
	    # Extraer parámetros de consulta por medio de (request).
	    name = request.GET.get("nombre")
	    age = request.GET.get("edad")

	    # Aquí puedes usar los parámetros extraídos.
	    content = f"""
	        <div>
	            <p>Nombre: {name}</p>
	            <p>Edad: {age}</p>
	        </div>
	    """
	    
	    return HttpResponse(content)

	urlpatterns = [
		# Le pasamos a la ruta la funcion.
	    path('usuarios/usuario', information),
	]
```