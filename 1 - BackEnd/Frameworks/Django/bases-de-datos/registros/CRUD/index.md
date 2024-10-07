### ===================================== ###
###### ===--- Mostrar registros ---=== ######
### ===================================== ###

{proyecto}/
├── aplicacion/
│   ├── templates/
│   │   ├── curso/
│   │   │   ├── cursos.html
│   ├── views.py
│   ├── models.py
│   └── urls.py
└── sitio/
    └── settings.py
    └── urls.py

###### --- --- --- --- --- --- {proyecto}/aplicacion/views.py --- --- --- --- --- --- ######

<!-- En tu aplicacion. -->

```py
    from django.views.generic import ListView
    from .models import Curso

    # Clase en ligar de funcion para mayores funcionalidades.

    class CursoListView(ListView):
        # (model), recibe el modelo al cual se aplicara el 'query'.
        model = Curso

        # (template_name), define el nombre de la plantilla.
        template_name = 'curso/cursos.html'

        # (context_object_name), define el nombre de la variable que recibira los datos para la plantilla.
        context_object_name = 'mis_cursos'

        # (paginate_by), define una paginacion con una cantidad a paginar.
        #   --- En este caso, de (10) en (10).
        paginate_by = 10

        # (get_queryset), opcionalmente puedes modificar el 'query'.
        def get_queryset(self):
            # Devuelve todos los registros (por defecto).
            return Curso.objects.all()
```

###### --- --- --- --- --- --- {proyecto}/aplicacion/urls.py --- --- --- --- --- --- ######

```py
    from django.urls import path
    from .views import CursoListView

    # Creamos una ruta, le damos la clase y le asignamos el nombre, (cursos.index).
    urlpatterns = [
        path('cursos/', CursoListView.as_view(), name='cursos.index'),
    ]
```

###### --- --- --- --- --- --- {proyecto}/aplicacion/templates/curso/cursos.html --- --- --- --- --- --- ######

```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Cursos gratis</title>
    </head>
    <body>
        <h1>Cursos</h1>
        <h3>Bienvenido a nuestra página de cursos</h3>
        <pre>

            <!-- Aqui iteramos todos los registros. -->
            {% for curso in mis_cursos %}
                <ul>
                    <li>{{ curso.nombre }}</li>
                    <li>{{ curso.apellido }}</li>
                    <li>{{ curso.edad }}</li>
                </ul>
            {% endfor %}

            <!-- Links para paginación -->
            <div>
                {% if is_paginated %}
                    {% for page_num in page_obj.paginator.page_range %}
                        {% if page_obj.number == page_num %}
                            <strong>{{ page_num }}</strong>
                        {% else %}
                            <a href="?page={{ page_num }}">{{ page_num }}</a>
                        {% endif %}
                    {% endfor %}
                {% endif %}
            </div>
        </pre>
    </body>
    </html>
```

###### --- --- --- --- --- --- {proyecto}/sitio/urls.py --- --- --- --- --- --- ######

<!-- Declaramos las URLs de (aplicacion) en el proyecto. -->

# NOTA: No olvides registrar la aplicacion.

```py
    from django.contrib import admin
    from django.urls import path, include

    urlpatterns = [
        path('admin/', admin.site.urls),

        # Incluimos todas las URLs de la aplicacion (aplicacion).
        path('', include('myapp.urls')), 
    ]
```