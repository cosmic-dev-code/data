
### ==================================== ###
###### ===--- Rutas con nombre ---=== ######
### ==================================== ###

<!-- Sirve para referirnos a ellas de una manera global, asi, si cambia la URL, 
el nombre permanece igual. -->

###### --- --- --- --- --- --- {proyecto}/myapp/views.py --- --- --- --- --- --- ######

```py
    # CRUD.
    from django.views.generic import ListView, CreateView, UpdateView

    # (reverse_lazy) Permite redireccionar a rutas con (nombre).
    from django.urls import reverse_lazy

    from .models import Usuario

    # Vista para ver a los usuarios.
    class UsuarioListView(ListView):
        model = Usuario
        template_name = 'myapp/index.html'

    # Vista para crear un usuario.
    class UsuarioCreateView(CreateView):
        model = Usuario
        template_name = 'myapp/create.html'
        fields = ['name', 'age', 'email']

        # Redirige a la ruta con nombre.
        success_url = reverse_lazy('usuarios.index') # usuarios/

    # Vista para editar a un usuario.
    class UsuarioEditView(UpdateView):
        model = Usuario
        template_name = 'myapp/edit.html'
        fields = ['name', 'age', 'email']
        success_url = reverse_lazy('usuarios.index') # usuarios/
```

###### --- --- --- --- --- --- {proyecto}/myapp/urls.py --- --- --- --- --- --- ######

```py
    from django.urls import path

    # Tipos de vista para hacer un CRUD.
    from .views import UsuarioListView, UsuarioCreateView, UsuarioEditView

    '''
        (as_view) Convierte la clase a una vista.
    '''

    urlpatterns = [
        path('usuarios/', UsuarioListView.as_view(), name='usuarios.index'),
        path('usuarios/create/', UsuarioCreateView.as_view(), name='usuarios.create'),
        path('usuarios/<int:pk>/edit/', UsuarioEditView.as_view(), name='usuarios.edit'),
    ]
```

###### --- --- --- --- --- --- {proyecto}/myapp/templates/myapp/index.html --- --- --- --- --- --- ######

```html
    <header>
        <div>
            <!-- Ruta normal. -->
            <a href="/usuarios/create/">Crear nuevo usuario</a>
        </div>
    </header>

    <main>
        <section>
            {% for usuario in object_list %}
                <dl>
                    <dt>Usuario {{ usuario.name }}</dt>
                    <dd><b>Nombre: </b>{{ usuario.name }}</dd>
                    <dd><b>Edad: </b>{{ usuario.age }}</dd>
                    <dd><b>Correo: </b>{{ usuario.email }}</dd>
                    <div>

                        <!-- Colocamos el 'alias' de la ruta. -->
                        <a href="{% url 'usuarios.edit' usuario.pk %}">Editar usuario</a>
                        
                    </div>
                </dl>
            {% endfor %}
        </section>
    </main>
```