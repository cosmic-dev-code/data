# ##########================================##########
# ######===--- Insertar un nuevo registro ---===######
# ##########================================##########

# Importamos el modelo que queremos utilizar.
from app.models import Usuario

# Creamos un objeto de la clase (nombre_modelo).
usuario = Usuario()

# Comenzamos a definir las propiedades que lleva en nuestra tabla.
usuario.nombre = "Brandon"
usuario.apellido = "Olivares"
usuario.edad = 21

# El registro no tiene ninguna otra propiedad más que las que definimos.
# Dado que no tiene un 'id' definido, este objeto se insertará como un nuevo registro.
usuario.save()

# ##########============================##########
# ######===--- Actualizar un registro ---===######
# ##########============================##########

# Para actualizar el registro, simplemente cambiamos
# el valor de las propiedades que queremos actualizar.
usuario.nombre = "Brandon Anthony"
usuario.apellido = "Olivares Amador"
usuario.edad = 20

# Dado que el objeto ahora tiene un 'id',
# el registro se actualizará en lugar de insertarse.
usuario.save()

# ##########==========================##########
# ######===--- Eliminar un registro ---===######
# ##########==========================##########

# El registro se elimina.
usuario.delete()

# ##########=====================##########
# ######===--- Traer registros ---===######
# ##########=====================##########

from app.models import Curso

# Truncar la tabla.
Curso.objects.all().delete()

# Traer todos los registros de la tabla.
Curso.objects.all()  # Curso[]

# Solo trae 10 registros.
Curso.objects.all()[:10]  # Curso[]

# Ordenar los registros por el 'id' de forma ascendente.
Curso.objects.order_by('id')  # Curso[]

# Ordenar los registros por el 'id' de forma descendente.
Curso.objects.order_by('-id')  # Curso[]

# De todos los registros, solo trae el primer registro.
Curso.objects.first()  # Curso

# De todos los registros, solo trae el último registro.
Curso.objects.last()  # Curso

# Trae el primer registro que coincida con la condición.
Curso.objects.filter(edad=20).first()  # Curso

# Trae el último registro que coincida con la condición.
Curso.objects.filter(edad=20).order_by('-id').first()  # Curso

# Solo trae los registros que tengan una (edad) de 20.
Curso.objects.filter(edad=20)  # Curso[]

# Trae todos los registros que coincidan con la condición ordenados ascendentemente por su 'id'.
Curso.objects.filter(edad=20).order_by('id')  # Curso[]

# Trae los registros que contengan en su campo (nombre) la palabra (Brandon).
Curso.objects.filter(nombre__icontains='Brandon')  # Curso[]

# Traemos los datos solo si el 'id' es:
Curso.objects.filter(id__gt=9)  # Mayor que 9
Curso.objects.filter(id__gte=9)  # Mayor o igual a 9
Curso.objects.filter(id__lt=9)  # Menor que 9
Curso.objects.filter(id__lte=9)  # Menor o igual a 9
Curso.objects.filter(id=9)  # Igual a 9
Curso.objects.exclude(id=9)  # Diferente a 9

# Trae todos los 'nombres' y los 'correos'.
Curso.objects.values('nombre', 'correo')  # Curso[]

# Trae el correo y la edad solo si el correo es correspondiente a (brandon@gmail.com).
Curso.objects.filter(correo='brandon@gmail.com').values('correo', 'edad')  # Curso[]

# Podemos traer los datos bajo un 'alias'.
Curso.objects.values('nombre', mail=F('correo'))  # Curso[]

# Trae el dato donde su campo (id) sea igual a 10.
Curso.objects.get(id=10)  # Curso

# Trae el dato donde su campo (id) sea igual a 10, pero en caso de que no 
# se encuentre el 'id', entonces da un error (404).
try:
    Curso.objects.get(id=10)  # Curso
except Curso.DoesNotExist:
    # Manejar el error 404 aquí
    pass

# Esto devuelve un queryset paginado de 3 en tres.
from django.core.paginator import Paginator

cursos = Curso.objects.filter(correo__icontains='gmail')
paginator = Paginator(cursos, 3)  # 3 registros por página
page_number = 1  # Cambia según la página deseada
cursos_pagina = paginator.get_page(page_number)

# Proporciona los links de la paginación.
# Puedes usar `cursos_pagina.has_next()` y `cursos_pagina.has_previous()` para generar enlaces en la vista.

# Podemos replicar un registro haciendo uso del método (replicate).
Curso.objects.get(id=10)  # Curso
curso_clon = Curso(nombre=curso.nombre, correo=curso.correo, edad=curso.edad)  # Clonando el objeto
curso_clon.save()