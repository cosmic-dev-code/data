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

# El registro no tiene ninguna otra propiedad más que las que definimos,
# dado que no tiene un 'id' definido, este objeto se insertará como un
# nuevo registro.
usuario.save()

print(usuario)  # Imprimimos el objeto
"""
  Imprimimos el objeto:
  Usuario(
    id=1,
    nombre="Brandon",
    apellido="Olivares",
    edad=21,
    created_at="2021-08-29 01:57:39",
    updated_at="2021-08-29 01:57:39"
  )
"""

# ##########============================##########
# ######===--- Actualizar un registro ---===######
# ##########============================##########

# Para actualizar el registro, solo debemos cambiar
# el valor de la propiedad que queremos actualizar y
# volver a guardarlo.
usuario.nombre = "Brandon Anthony"
usuario.apellido = "Olivares Amador"
usuario.edad = 20

# Dado que el objeto ya tiene un 'id', el registro
# en lugar de insertarse se actualizará.
usuario.save()

# ##########==========================##########
# ######===--- Eliminar un registro ---===######
# ##########==========================##########

# El registro se elimina.
usuario.delete()

# Trunca toda la tabla.
Curso.objects.all().delete()

# Borra todos los registros.
Curso.objects.all().delete()

# ##########=====================##########
# ######===--- Traer registros ---===######
# ##########=====================##########

# -------------------------- #
# ------ Extraer todo ------ #
# -------------------------- #

# Traer todos los registros de la tabla.
Curso.objects.all()

# Extraer todos los registros por el 'id' de forma ascendente o descendente.
Curso.objects.order_by('-id')
Curso.objects.order_by('id')

# NOTA: 'latest' por defecto ordena por 'created_at'.

Curso.objects.latest('id')
Curso.objects.earliest('id')

# ------------------------- #
# ------ Un registro ------ #
# ------------------------- #

# Extrae el primer registro.
Curso.objects.first()

# Extrae el segundo registro.
Curso.objects.last()

# Trae el registro donde su campo 'id' sea igual a 10.
Curso.objects.get(id=10)

# Maneja el error si no se encuentra el curso con id 10.
try:
    Curso.objects.get(id=10)
except Curso.DoesNotExist:
    # Manejo del error
    pass

# --------------------- #
# ------ Filtros ------ #
# --------------------- #

# Solo trae 10 registros.
Curso.objects.all()[:10]

# Solo trae los registros que tengan una (edad) de 20.
Curso.objects.filter(edad=20)

# Trae todos los registros que coincidan con la (condición) bajo el (orden).
Curso.objects.filter(edad=20).order_by('-id')

# Trae los registros que contengan en su campo (nombre) la palabra (Brandon).
Curso.objects.filter(nombre__icontains="Brandon")

# Podemos concatenar más (WHERE) utilizando (AND).
Curso.objects.filter(nombre__icontains="Brandon", activo=1, categoria="Matemáticas")

# Podemos concatenar con un (OR).
from django.db.models import Q
Curso.objects.filter(Q(nombre__icontains="Brandon") | Q(categoria="Matemáticas"))

# Traemos los datos solo si el 'id' es:
Curso.objects.filter(id__gt=9)  # Mayor que 9
Curso.objects.filter(id__gte=9)  # Mayor o igual a 9
Curso.objects.filter(id__lt=9)  # Menor a 9
Curso.objects.filter(id__lte=9)  # Menor o igual a 9
Curso.objects.filter(id=9)  # Igual a 9
Curso.objects.filter(id__ne=9)  # Diferente a 9

# (WHERE) y (AND), utilizando un diccionario.
Curso.objects.filter(
    nombre__icontains="Brandon",
    activo=1,
    categoria="Matemáticas"
)

# -------------------- #
# ------ Select ------ #
# -------------------- #

# Trae todos los (nombres) y los (correos).
Curso.objects.values('nombre', 'correo')

# Trae el (correo) y la (edad) solo si el (where) se cumple.
Curso.objects.filter(correo="brandon@gmail.com").values('correo', 'edad')

# Podemos traer los datos bajo un (alias).
Curso.objects.values('nombre', correo='email')

# Selecciona el (id) solo si se cumple el (where) y trae (1).
Curso.objects.filter(correo="brandon@gmail.com")[:1].values('id')

# Podemos comparar de manera explícita (=).
Curso.objects.filter(correo="brandon@gmail.com", activo=1).values('correo', 'edad')

# ------------------ #
# ------ Join ------ #
# ------------------ #

# De (Curso) a (categorias).
# Si (cursos.categoria_id = categorias.id).
Curso.objects \
    .join('categorias', 'cursos.categoria_id', '=', 'categorias.id') \
    .values('cursos.*', categoria_nombre='categorias.nombre')

# Realizando el Inner Join implícito.
Pedido.objects.filter(producto__categoria__id=50) # Pedidos[]

# Para optimizar la consulta y evitar consultas adicionales.
Pedido.objects \
    .select_related('producto__categoria') \
    .filter(producto__categoria__id=50)

# ---------------------- #
# ------ Replicar ------ #
# ---------------------- #

# Extraer registro.
curso = Curso.objects.get(id=10)

# Replicar registro a un objeto nuevo.
curso_clon = curso

# Podemos modificarlo y guardarlo en la base de datos.
curso_clon.pk = None  # Elimina el ID para que sea un nuevo objeto
curso_clon.save()

# ------------------------ #
# ------ Paginación ------ #
# ------------------------ #

# Esto devuelve un array con todos los registros (paginados de 3 en 3).
cursos = Curso.objects.filter(correo__icontains='gmail').paginate(page=1, per_page=3)

# Proporciona los links de la paginación.
cursos.paginator.page_range

# ##########=========================##########
# ######===--- Convertir registros ---===######
# ##########=========================##########

# Convierte a un (diccionario).
curso_dict = curso.__dict__

# Solo convierte ciertas propiedades a un (diccionario).
curso_dict = {key: curso.__dict__[key] for key in ["id", "nombre", "descripcion"]}

# Convierte a un objeto JSON.
import json
curso_json = json.dumps(curso.__dict__)

# Convierte el diccionario a un objeto.
curso_object = dict(curso.__dict__)

# Convierte el diccionario a una colección.
from collections import namedtuple
Collection = namedtuple('Collection', curso.__dict__.keys())(*curso.__dict__.values())
