# ##########==============##########
# ######===--- Conjunto ---===######
# ##########==============##########

"""
    Los conjuntos están diseñados para operaciones: 
        --- Rápidas de búsqueda, O(1) independientemente del tamaño del conjunto.
            --- No recorre todo el conjunto como en una lista, O(N)
        --- Eliminación.
        --- Unión de elementos.
        --- No repetir valores.
        --- Optimizada para operaciones de teoría de conjuntos.
            --- Unión, Intersección, Diferencia, Diferencia simétrica.
        --- Solo pueden almacenar elementos inmutables.
            --- Debido a que Python optimiza la búsqueda en conjuntos usando una función hash.
"""

# ##########==================##########
# ######===--- Conversiones ---===######
# ##########==================##########

# -------------------------- #
# ------ lista => set ------ #
# -------------------------- #

lista = [1, 2, 2, 3, 4]

# Convertir a conjunto (elimina duplicados)
conjunto = set(lista)  # {1, 2, 3, 4}

# -------------------------- #
# ------ tupla => set ------ #
# -------------------------- #

tupla = (1, 2, 2, 3)

# Convertir a conjunto
conjunto = set(tupla)  # {1, 2, 3}

# ------------------------ #
# ------ str => set ------ #
# ------------------------ #

# Cada caracter único se convierte en un elemento
conjunto = set("Hola")  # {'H', 'o', 'l', 'a'}

# ------------------------- #
# ------ dict => set ------ #
# ------------------------- #

diccionario = {'a': 1, 'b': 2}

# Solo las claves se convierten en elementos
conjunto = set(diccionario)  # {'a', 'b'}

# ##########==================================##########
# ######===--- Eliminar o agregar elementos ---===######
# ##########==================================##########

conjunto = set()
conjunto = {"Hola", True, 35}

# ------------------------------- #
# ------ Agregar elementos ------ #
# ------------------------------- #

# Agrega un nuevo elemento (solo si no existe)
conjunto.add("Python")
conjunto.add("Python")  # No se duplica

# Agrega múltiples elementos
conjunto.update([1, 2, 3])
conjunto.update(("a", "b"))

# -------------------------------- #
# ------ Eliminar elementos ------ #
# -------------------------------- #

# Elimina un elemento específico (lanza error si no existe)
conjunto.remove("Python")

# Elimina un elemento si existe (NO lanza error)
conjunto.discard("Python")

# Elimina y devuelve un elemento arbitrario
elemento = conjunto.pop()

# Elimina todos los elementos
conjunto.clear()

# ##########========================##########
# ######===--- Manipular conjunto ---===######
# ##########========================##########

# Lo conjuntos son desordenados, pero se puede ordenan convirtiendolo a una lista.
sorted({3, 1, 4, 2}) # List

# ##########====================##########
# ######===--- Buscar en sets ---===######
# ##########====================##########

con_1 = {1, 2, 3}
con_2 = {3, 4, 5}

# Devuelve un nuevo conjunto que contiene los datos que se encuentran en ambos conjuntos.
con_1.intersection(con_2) # {3}
con_1 & con_2 # {3}

# Devuelve los elementos del primer conjunto que no estan en el segundo cojunto.
con_1.difference(con_2)   # {1, 2}
con_1 - con_2 # {1, 2}

# Devuelve los elementos que están en un conjunto o en el otro, pero no en ambos.
con_1.symmetric_difference(con_2) # {1, 2, 4, 5}
con_1 ^ con_2 # {1, 2, 4, 5}

# Devuelve el valor maximo.
min(con_1) # 1

# Devuelve el valor minimo.
max(con_1) # 3

# Suma todos los elementos.
sum(con_1) # 6

conjunto = {"python", "javascript", "php"}

# Longitud del conjunto
len(conjunto)

# Verifica si un valor existe en el conjunto
"php" in conjunto     # True
"ruby" not in conjunto  # True

# ##########=====================##########
# ######===--- Concatenar sets ---===######
# ##########=====================##########

con_1 = {"frontend"}
con_2 = {"backend"}

# Concatena conjuntos SIN duplicarlos.
res = con_1 | con_2 # {"frontend", "backend"}
res = con_1.union(con_2) # {"frontend", "backend"}

# Agregar elementos de otro conjunto
con_1.update(con_2) # {"frontend", "backend"}

# ##########=====================##########
# ######===--- Recorrer sets ---===######
# ##########=====================##########

conjunto = {1, 2, 3, 4, 5}

# ------------------------- #
# ------ Bucle (for) ------ #
# ------------------------- #

for elemento in conjunto:
    # ...
    pass

# ------------------------- #
# ------ Enumerate -------- #
# ------------------------- #

# Se accede al valor directamente, no utilizando el indice, ya que los conjuntos no son ordenados.
for i, valor in enumerate(conjunto):
    print(f"{i}: {valor}")

# ------------------------------ #
# ------ Funcion (map) --------- #
# ------------------------------ #

def cuadrado(x): return x**2

set(map(cuadrado, conjunto))  # {1, 4, 9, 16, 25}

# ----------------------------- #
# ------ Funcion (filter) ----- #
# ----------------------------- #

def mayor_a_dos(x): return x > 2

set(filter(mayor_a_dos, conjunto))  # {3, 4, 5}

# ---------------------------- #
# ------ Combinaciones ------- #
# ---------------------------- #

from itertools import combinations

conjunto = {1, 2, 3}

for combinacion in combinations(conjunto, 2):
    print(combinacion)  # (1, 2), (1, 3), (2, 3)
