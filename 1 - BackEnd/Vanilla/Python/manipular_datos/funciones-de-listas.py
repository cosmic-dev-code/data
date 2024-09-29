# ##########==================##########
# ######===--- Conversiones ---===######
# ##########==================##########

lista = ["Hola", True, 35]

# ------------------------- #
# ------ diccionario ------ #
# ------------------------- #

lista = [('Manzana', 3), ('Pera', 5)]
lista = [['Manzana', 3], ['Pera', 5]]

# Convertir a diccionario, (clave => valor).
diccionario = dict(lista)

# ------------------- #
# ------ tupla ------ #
# ------------------- #

# Convertir a tupla, (inmutable).
tupla = tuple(lista)

# -------------------- #
# ------ String ------ #
# -------------------- #

# Devuelve un objeto para convertir.
#	--- Tipo de dato a convertir.
#	--- Dato a convertir.
map(str, lista)

# La función join permite convertir una 'lista' a una cadena de texto.
str1 = ", ".join(map(str, lista)) # Hola, True, 35.

str2 = " ".join(map(str, lista)) # Hola True 35.

str3 = "---".join(map(str, lista)) # Hola---true---35.

# Tambien podemos convertir la (lista completa).
str(lista) # [Hola, True, 35]

# ##########==================================##########
# ######===--- Eliminar o agregar elementos ---===######
# ##########==================================##########

lista = []

# ------------------------------- #
# ------ Agregar elementos ------ #
# ------------------------------- #

# Agrega un nuevo elemento al final, (inicializa la lista si no existe)
lista.append("Otro") # Elemento
lista.append([1,2]) # Lista
lista.append((1,4)) # Tupla

# Agrega mas elementos a la lista.
lista.extend([1, 2, 3])

# (Reemplaza) el primer elemento y retorna la cantidad de elementos.
lista.insert(0, "nuevoPrimerElemento")

# -------------------------------- #
# ------ Eliminar elementos ------ #
# -------------------------------- #

# Elimina el último elemento y lo retorna.
lista.pop()

# Elimina el primer elemento y lo retorna.
lista.pop(0)

# Elimina la primera coincidencia.
lista.remove("elementoAEliminar")

# Elimina todos los elementos de la lista.
lista.clear()

# ##########=========================##########
# ######===--- Manipular elementos ---===######
# ##########=========================##########

# Ejemplo de lista
lista = ["Amigo", "Tornado", "Musica"]

# Ordena los elementos en orden (Alfabético)
lista.sort() # ['Amigo', 'Musica', 'Tornado']

# Ordena los elementos en orden (Alfabético) inverso
lista.sort(reverse=True)  # ['Tornado', 'Musica', 'Amigo']

# Reversa la lista.
lista.reverse()

# ------------------------------- #
# ------ Copia Superficial ------ #
# ------------------------------- #

# Copia superficial
copia = lista.copy()

# Esto modifica la (copia) y la lista (original).
copia[2][0] = 98

# ---------------------------- #
# ------ Copia Profunda ------ #
# ---------------------------- #

import copy

# Copia profunda.
copia = copy.deepcopy(lista)

# Esto modifica solo la (copia).
copia[2][0] = 98

# ##########======================##########
# ######===--- Buscar en listas ---===######
# ##########======================##########

# Permite saber la longitud
len(lista)

# Retorna el número de veces que el elemento aparece en la lista.
lista.count("elemento")

# Retorna el indice del primer elemento que encuentra.
lista.index("elemento")

# Busca desde el indice especifico.
lista.index("elemento", 3)

# Devuelve el valor maximo.
min(lista) # 1

# Devuelve el valor minimo.
max(lista) # 2

# Suma todos los elementos.
sum(lista)

# Intentar buscar un elemento que no se encuentra.
try:
	lista.index("otro")
except Exception as e:
	raise

# Verifica si un valor existe en la lista
'javascript' in lista  # True|False

# ##########=======================##########
# ######===--- Concatenar listas ---===######
# ##########=======================##########

frontend = ['javascript']
backend = ['php', 'laravel']

# Concatenar listas (+)
res = frontend + backend  # ['javascript', 'php', 'laravel']

# Utilizando (extend).
frontend.extend(backend)  # ['javascript', 'php', 'laravel']

# Usando (itertools.chain) para concatenar múltiples listas
from itertools import chain
# Convertir a lista.
list(
	# Concatenar iterables.
	chain(frontend, backend)
)

# Usando el operador de expansión (sólo en Python 3.5+)
res = [*frontend, *backend]  # ['javascript', 'php', 'laravel']
res = [*frontend, "php"]  # ['javascript', 'php']

# ##########=================================##########
# ######===--- Contar e imprimir una lista ---===######
# ##########=================================##########

# Definir la lista
array_frutas = ["Manzana", "Pera", "Uva"]

# Cortar desde el índice (1) hasta el final
array_frutas[1:]  # ['Pera', 'Uva']

# Desde el índice 12 hasta el índice 18
corte = cadena[12:18]

# Desde el inicio hasta el índice 5
inicio = cadena[:5]  # 'Este '

# Del indice (1) al (6) tomando un elemento cada (1) indice.
# Iteraciones, toma un elemento cada (2) indices.
lista[1:6:2]

[1, 2, 3, 4, 5][
	# Devuelve un objeto (slice).
	slice(1, 4) # [2, 3, 4]
]

# Imprimir la lista
print(array_frutas)  # ['Manzana', 'Pera', 'Uva']

# Imprimir el tipo de dato de cada elemento
for fruta in array_frutas:
    print(f"{fruta}: {type(fruta)}")

# ##########=====================##########
# ######===--- Recorrer listas ---===######
# ##########=====================##########

# --------------------------------- #
# ------ Funcion (enumerate) ------ #
# --------------------------------- #

lista = ['a', 'b', 'c']

for indice, valor in enumerate(lista):
	# Uso del (valor) y el (indice).
    pass

# ------------------------- #
# ------ Bucle (for) ------ #
# ------------------------- #

lista = [1, 2, 3, 4, 5]

for elemento in lista:
	# ...
    pass

# --------------------------- #
# ------ Por (Indices) ------ #
# --------------------------- #

lista = [1, 2, 3, 4, 5]

for i in range(len(lista)):
    lista[i]

# --------------------------- #
# ------ Funcion (map) ------ #
# --------------------------- #

lista = [1, 2, 3, 4, 5]

def mapeado(x):
    return x**2

''' La funcion (map) recibe por parametro: 
		--- Nombre de la funcion con la logica.
		--- La lista.
'''
list(map(mapeado, lista)) # [1, 4, 9, 16, 25]
list(filter(lambda x: x**2, lista))

# ------------------------------ #
# ------ Funcion (filter) ------ #
# ------------------------------ #

lista = [1, 2, 3, 4, 5]

def filtrar(x): 
	return x > 2

''' La funcion (filter) recibe por parametro: 
		--- Nombre de la funcion con la logica.
		--- La lista.
'''
list(filter(filtrar, lista)) # [3, 4, 5]
list(filter(lambda x: x > 2, lista))

# --------------------------- #
# ------ Combinaciones ------ #
# --------------------------- #

from itertools import combinations

lista = [1, 2, 3]

for combinacion in combinations(lista, 2):
    print(combinacion)  # (1, 2), (1, 3), (2, 3)