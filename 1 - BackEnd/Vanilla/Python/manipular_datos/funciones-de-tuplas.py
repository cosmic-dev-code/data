# ##########==================##########
# ######===--- Conversiones ---===######
# ##########==================##########

# ------------------------- #
# ------ diccionario ------ #
# ------------------------- #

tupla = (('Manzana', 3), ('Pera', 5))
tupla_1 = (['Manzana', 3], ['Pera', 5])

# Convertir a diccionario, (clave => valor).
diccionario = dict(tupla)

# (dict), tiene que recibir una tupla, (clave, valor)
diccionario = dict((tuple(item) for item in tupla_1))

# ------------------- #
# ------ tupla ------ #
# ------------------- #

# Convertir a una lista, (mutable).
tupla = list(lista)

# -------------------- #
# ------ String ------ #
# -------------------- #

tupla = ("Hola", True, 35)

# Devuelve un objeto para convertir.
# 	--- Tipo de dato a convertir.
#	--- Dato a convertir.
map(str, tupla) # Esto crea un objeto map

# La función join permite convertir una 'tupla' a una cadena de texto.
str1 = ", ".join(map_str) # "Hola, True, 35"

str2 = " ".join(map_str) # "Hola True 35"

str3 = "---".join(map_str) # "Hola---True---35"

# También podemos convertir la (tupla completa) a su representación de cadena.
str_tupla = str(tupla) # "('Hola', True, 35)"

# ##########==================================##########
# ######===--- Eliminar o agregar elementos ---===######
# ##########==================================##########

# NOTA: Las tuplas son inmutables en Python, por lo que no se pueden agregar o eliminar elementos directamente.
# Sin embargo, podemos crear nuevas tuplas a partir de otras.

# Inicializar una tupla
tupla = ()

# ------------------------------- #
# ------ Agregar elementos ------ #
# ------------------------------- #

# Para agregar elementos, necesitas crear una nueva tupla
tupla += ("Otro",)  # Agrega un nuevo elemento al final

# Agrega más elementos a la tupla.
tupla += (1, 2, 3)  # Agrega más elementos

# (Reemplaza) el primer elemento creando una nueva tupla
tupla = ("nuevoPrimerElemento",) + tupla[1:]  # Reemplaza el primer elemento

# -------------------------------- #
# ------ Eliminar elementos ------ #
# -------------------------------- #

# NOTA: (Creando una nueva tupla).

# Eliminar el último elemento 
tupla = tupla[:-1]  # Elimina el último elemento

# Eliminar el primer elemento
tupla = tupla[1:]   # Elimina el primer elemento

# Eliminar todos los elementos
tupla = ()

# ------------------------ #
# ------ Conversion ------ #
# ------------------------ #

# Puedes convertir a (lista).
lista_temp = list(tupla)

# Usar todos los metodos de una lista.

# Convertir de nuevo a (tupla).
tupla = tuple(lista_temp)

# ##########=========================##########
# ######===--- Manipular elementos ---===######
# ##########=========================##########

# NOTA: (Crea una nueva tupla).

# Ejemplo de tupla
tupla = ("Amigo", "Tornado", "Musica")

# Ordenar los elementos en orden alfabético.
tuple(sorted(tupla))  # ('Amigo', 'Musica', 'Tornado')

# Ordenar los elementos en orden alfabético inverso.
tuple(sorted(tupla, reverse=True))  # ('Tornado', 'Musica', 'Amigo')

# Reversar la tupla.
tupla[::-1]  # ('Musica', 'Tornado', 'Amigo')

# ##########======================##########
# ######===--- Buscar en tuplas ---===######
# ##########======================##########

# Ejemplo de tupla
tupla = ("javascript", "python", "java", "javascript")

# Permite saber la longitud
len(tupla)  # 4

# Retorna el número de veces que el elemento aparece en la tupla
tupla.count("javascript")  # 2

# Retorna el índice del primer elemento que encuentra
tupla.index("python")  # 1

# Busca desde el índice específico
tupla.index("javascript", 1)  # 3

# Devuelve el valor maximo.
min(lista) # 1

# Devuelve el valor minimo.
max(lista) # 2

# Suma todos los elementos.
sum(lista)

# Intentar buscar un elemento que no se encuentra
try:
    tupla.index("otro")
except ValueError:
    print("Elemento no encontrado.")

# Verifica si un valor existe en la tupla
existe = "javascript" in tupla  # True

# ##########=======================##########
# ######===--- Concatenar tuplas ---===######
# ##########=======================##########

frontend = ('javascript',)
backend = ('php', 'laravel')

# Concatenar tuplas (+)
res = frontend + backend  # ('javascript', 'php', 'laravel')

# Usando (itertools.chain) para concatenar múltiples tuplas
from itertools import chain

# Convertir a tupla.
res = tuple(
    # Concatenar iterables.
    chain(frontend, backend)
)

# Usando el operador de expansión (sólo en Python 3.5+)
res = (*frontend, *backend)  # ('javascript', 'php', 'laravel')
res = (*frontend, "php")  # ['javascript', 'php']

# ##########=================================##########
# ######===--- Contar e imprimir una tupla ---===######
# ##########=================================##########

# Definir la tupla
tupla_frutas = ("Manzana", "Pera", "Uva")

# Cortar desde el índice (1) hasta el final
tupla_frutas[1:]  # ('Pera', 'Uva')

# Desde el inicio hasta el índice 2 (3 elementos)
tupla_frutas[:2]  # ('Manzana', 'Pera')

# Del índice (1) al (3) tomando un elemento cada (1) índice.
# Iteraciones, toma un elemento cada (2) índices.
tupla_frutas[1:3]  # ('Pera', 'Uva')

# Imprimir la tupla
print(tupla_frutas)  # ('Manzana', 'Pera', 'Uva')

# Imprimir el tipo de dato de cada elemento
for fruta in tupla_frutas:
    print(f"{fruta}: {type(fruta)}")

# ##########=====================##########
# ######===--- Recorrer tuplas ---===######
# ##########=====================##########

# --------------------------------- #
# ------ Función (enumerate) ------ #
# --------------------------------- #

tupla = ('a', 'b', 'c')

for indice, valor in enumerate(tupla):
    # Uso del (valor) y el (indice).
    pass

# ------------------------- #
# ------ Bucle (for) ------ #
# ------------------------- #

tupla = (1, 2, 3, 4, 5)

for elemento in tupla:
    # ...
    pass

# --------------------------- #
# ------ Por (Índices) ------ #
# --------------------------- #

tupla = (1, 2, 3, 4, 5)

for i in range(len(tupla)):
    print(tupla[i])  # Acceso por índice

# --------------------------- #
# ------ Función (map) ------ #
# --------------------------- #

tupla = (1, 2, 3, 4, 5)

def mapeado(x):
    return x**2

# La función (map) recibe por parámetro: 
# 	--- Nombre de la función con la lógica.
# 	--- La tupla convertida a lista.
list(map(mapeado, tupla))  # [1, 4, 9, 16, 25]

# ------------------------------ #
# ------ Función (filter) ------ #
# ------------------------------ #

tupla = (1, 2, 3, 4, 5)

def filtrar(x): 
    return x > 2

# La función (filter) recibe por parámetro: 
# 	--- Nombre de la función con la lógica.
# 	--- La tupla convertida a lista.
list(filter(filtrar, tupla))  # [3, 4, 5]

# --------------------------- #
# ------ Combinaciones ------ #
# --------------------------- #

from itertools import combinations

tupla = (1, 2, 3)

for combinacion in combinations(tupla, 2):
    print(combinacion)  # (1, 2), (1, 3), (2, 3)