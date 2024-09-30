# ##########==================##########
# ######===--- Conversiones ---===######
# ##########==================##########

## ----------------------------- #
## ------ keys / values -------- #
## ----------------------------- #

# Ambos devuelven un (objeto) de referencia que refleja los cambios 
# en tiempo real del diccionario.

diccionario.keys() # dict_keys(['Manzana', 'Pera'])
diccionario.values() # dict_values([3, 5])
diccionario.items() # dict_items([('Manzana', 3), ('Pera', 5)])

## ----------------------------- #
## ------ Lista / tupla -------- #
## ----------------------------- #

# Conversion a lista.
lista = list(diccionario.items())

# Conversion a tupla.
tupla = tuple(diccionario.items())

## ---------------------- #
## ------ String -------- #
## ---------------------- #

diccionario = {
    "nombre": "Juan",
    "activo": True,
    "edad": 35
}

# La función join permite convertir un diccionario a una cadena de texto.
str1 = ", ".join(f"{clave}: {valor}" for clave, valor in diccionario.items())  # nombre: Juan, activo: True, edad: 35.

str2 = " | ".join(f"{clave}: {valor}" for clave, valor in diccionario.items())  # nombre: Juan | activo: True | edad: 35.

# También podemos convertir el diccionario completo a una cadena de texto.
str_diccionario = str(diccionario)  # "{'nombre': 'Juan', 'activo': True, 'edad': 35}"

# ##########==================================##########
# ######===--- Eliminar o agregar elementos ---===######
# ##########==================================##########

diccionario = {}

## ------------------------------- ##
## ------ Agregar elementos ------ ##
## ------------------------------- ##

# Agrega un nuevo par clave-valor.
diccionario["nuevoElemento"] = "valor"

# Agrega varios elementos al diccionario.
diccionario.update({
    "clave1": 1,
    "clave2": 2,
    "clave3": 3
})

# (Reemplaza) el valor de una clave existente
diccionario.setdefault("clave1", "nuevoValor")  # Retorna el valor anterior.

## -------------------------------- ##
## ------ Eliminar elementos ------ ##
## -------------------------------- ##

# Elimina y retorna el valor asociado a la clave especificada.
# Retorna el segundo parametro de no encontrar la clave.
diccionario.pop("clave2")  # Retorna 2
diccionario.pop("clave_inexistente", "No existe")  # Retorna "No existe".

# Elimina un elemento utilizando la clave (sin retorno).
del diccionario["clave3"]

# Elimina todos los elementos del diccionario.
diccionario.clear()

# ##########=========================##########
# ######===--- Manipular elementos ---===###### 
# ##########=========================##########

# Ejemplo de diccionario
diccionario = {
    "Amigo": 1,
    "Tornado": 2,
    "Musica": 3
}

# ------------------------------- #
# ------ Ordenar elementos ------ #
# ------------------------------- #

# Ordena los elementos en orden (alfabético).
dict(sorted(diccionario.items()))  # {'Amigo': 1, 'Musica': 3, 'Tornado': 2}

# Ordena los elementos en orden (alfabético) inverso.
dict(sorted(diccionario.items(), reverse=True))  # {'Tornado': 2, 'Musica': 3, 'Amigo': 1}

# Invertir claves y valores (suponiendo que los valores son únicos).
{v: k for k, v in diccionario.items()}  # {1: 'Amigo', 2: 'Tornado', 3: 'Musica'}

# ------------------------------- #
# ------ Copia Superficial ------ #
# ------------------------------- #

# Copia superficial
copia_superficial = diccionario.copy()

# Esto modifica solo la copia.
copia_superficial["Musica"] = 98  # Original no se modifica.

# ---------------------------- #
# ------ Copia Profunda ------ #
# ---------------------------- #

import copy

# Supongamos que los valores son listas.
diccionario_con_listas = {
    "Amigo": [1, 2],
    "Tornado": [3, 4],
    "Musica": [5, 6]
}

# Copia profunda.
copia_profunda = copy.deepcopy(diccionario_con_listas)

# Esto modifica solo la copia.
copia_profunda["Musica"][0] = 98  # Original no se modifica.

# ##########============================##########
# ######===--- Buscar en diccionarios ---===###### 
# ##########============================##########

# Ejemplo de diccionario
diccionario = {
    "Amigo": 1,
    "Tornado": 2,
    "Musica": 3
}

# Permite saber la longitud.
len(diccionario)  # 3

# Verifica si una clave existe (siempre 0 o 1).
list(diccionario.keys()).count("Amigo")  # 1

# Retorna el valor de una clave específica.
# Retorna el segundo parametro de no encontrar la clave.
diccionario.get("Tornado")  # 2
diccionario.get("otro", "No existe")  # "No existe"

# Verifica si una clave existe en el diccionario.
"Musica" in diccionario  # True

# Obtener claves y valores
list(diccionario_frutas.keys())  # ['Manzana', 'Pera', 'Uva']
list(diccionario_frutas.values())  # [3, 5, 2]

# ##########=============================##########
# ######===--- Concatenar diccionarios ---===###### 
# ##########=============================##########

frontend = {'lenguaje': 'javascript'}
backend = {'lenguaje': 'php', 'framework': 'laravel'}

# NOTA: Las claves (duplicadas) se reemplazan.

# NOTA: (En Python 3.9 y posteriores).
# Concatenar diccionarios (unión de claves-valor).
res = frontend | backend # {'lenguaje': 'php', 'framework': 'laravel'}

# Usando el método update() para agregar elementos de otro diccionario.
frontend.update(backend) # {'lenguaje': 'php', 'framework': 'laravel'}

# NOTA: (Sólo en Python 3.5+).
# Usando el operador de expansión.
res = {**frontend, **backend}  # {'lenguaje': 'php', 'framework': 'laravel'}

# ##########======================================##########
# ######===--- Contar e imprimir un diccionario ---===###### 
# ##########======================================##########

# Definir el diccionario
frutas = {
    "Manzana": 3,
    "Pera": 5,
    "Uva": 2
}

# Cortar el diccionario para obtener un subconjunto
res = {key: frutas[key] for key in list(frutas)[:2]} # {'Manzana': 3, 'Pera': 5}
# Otra forma de hacerlo.
res = {}
for key in list(frutas)[:2]: 
	res[key] = frutas[key]

# ##########===========================##########
# ######===--- Recorrer diccionarios ---===###### 
# ##########===========================##########

# ------------------------- #
# ------ Bucle (for) ------ #
# ------------------------- #

diccionario = {'a': 1, 'b': 2, 'c': 3}

for clave in diccionario:
    # ...
    pass

for clave, valor in diccionario.items():
    # Uso de (clave) y (valor).
    pass

# --------------------------------- #
# ------ Funcion (enumerate) ------ #
# --------------------------------- #

diccionario = {'a': 1, 'b': 2, 'c': 3}

for indice, (clave, valor) in enumerate(diccionario.items()):
    # Uso de (clave), (valor) y (indice).
    pass

# --------------------------- #
# ------ Funcion (map) ------ #
# --------------------------- #

diccionario = {'a': 1, 'b': 2, 'c': 3}

def mapeado(item):
    clave, valor = item
    return (clave, valor**2)

# La función (map) recibe por parámetro: 
# 	--- Nombre de la función con la lógica.
# 	--- El diccionario convertido en lista de tuplas.
list(map(mapeado, diccionario.items())) # [('a', 1), ('b', 4), ('c', 9)]

# ------------------------------ #
# ------ Funcion (filter) ------ #
# ------------------------------ #

diccionario = {'a': 1, 'b': 2, 'c': 3}

def filtrar(item): 
    clave, valor = item
    return valor > 1

# La función (filter) recibe por parámetro: 
# 	--- Nombre de la función con la lógica.
# 	--- El diccionario convertido en lista de tuplas.
list(filter(filtrar, diccionario.items())) # [('b', 2), ('c', 3)]

# --------------------------- #
# ------ Combinaciones ------ #
# --------------------------- #

from itertools import combinations

diccionario = {'a': 1, 'b': 2, 'c': 3}

# Obtener combinaciones de claves
for combinacion in combinations(diccionario.keys(), 2):
    print(combinacion)  # ('a', 'b'), ('a', 'c'), ('b', 'c')