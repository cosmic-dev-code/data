# ##########============================##########
# ######===--- Declarar e inicializar ---===######
# ##########============================##########

# ------------------------- //
# ------ Declaracion ------ //
# ------------------------- //

# Lista vacía.
lista = []

# ---------------------------- //
# ------ Inicializacion ------ //
# ---------------------------- //

# Elementos de un solo tipo.
lista = ["Uno", "Dos", "Tres"]

# Elementos de tipos diferentes.
lista1 = ["Uno", False, 55, [5, "Uno"]]

# ##########====================##########
# ######===--- Unidimensional ---===######
# ##########====================##########

for i in range(len(lista)): 
	# Accedemos al valor.
	lista[i]

for valor in lista: 
	# Obtenemos el valor directamente
	valor
	pass

# ##########=====================##########
# ######===--- Bidimensionales ---===######
# ##########=====================##########

lista = [
    ["Brandon", "Anthony"],
    ["Olivares", "Amador"]
]

for i in range(len(lista)):
	# Sub lista.
	lista[i]

    for j in range(lista[i]):
        # Obtenemos el valor
        lista[i][j]
        pass

# ------------------------------------ //
# ------ Lista de forma directa ------ //
# ------------------------------------ //

for sub_lista in lista:
	# Obtenemos cada lista.

    for valor in sub_lista:
        # Obtenemos el valor
        pass

# ##########======================##########
# ######===--- Tridimensionales ---===######
# ##########======================##########

arr = [
    [ [22.35223, 3.325245] ],
    [ [0, 3.3] ],
    [ [341.134314, 1] ]
]

for i in range(len(arr)):
    for j in range(len(arr[i])):
        for k in range(len(arr[i][j])):
            # Imprimir el número con formato
            print(f"Num: {arr[i][j][k]:.2f}")