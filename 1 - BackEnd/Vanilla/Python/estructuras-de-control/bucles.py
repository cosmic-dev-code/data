# ##########=================##########
# ######===--- Bucle (for) ---===######
# ##########=================##########

# ---------------------------- #
# ------ Uso de (range) ------ #
# ---------------------------- #

# Genera una secuencia de 5 números: 0, 1, 2, 3, 4
for i in range(5):
    print(i)

# Genera una secuencia de números desde 2 hasta 5
for i in range(2, 5):
    pass # Indicamos que el codigo (esta vacio).

# Genera una secuencia de números desde 0 hasta 8, con un paso de 2
for i in range(0, 8, 2):
    print(i)

# ----------------- #
# ------ For ------ #
# ----------------- #

# Recorre una lista.
for i in range(len(lista)):
    print(i)

# Itera sobre una (tupla) de números
for number in (1, 2, 3, 4, 5):
    print(number)  # Imprime: 1, 2, 3, 4, 5

# ---------------------------------- #
# ------ (break) y (continue) ------ #
# ---------------------------------- #

for i in range(100):
    # Romper bucle.
    if i == 50:
        break
    # Salta a la siguiente iteración.
    if i % 2:
        continue

# ##########=====================##########
# ######===--- Bucle (foreach) ---===######
# ##########=====================##########

# Iterar sobre una lista.
for valor in [10, "text", False]:
    print(valor)

# Iterar sobre un diccionario.
diccionario = {
    "Brandon": 23, 
    "Anthony": 20, 
    "Cosmic": 19
}

for nombre, edad in diccionario.items():
    print(f"<p><b>{nombre}</b>: {edad}</p>")

# ##########===================##########
# ######===--- Bucle (while) ---===######
# ##########===================##########

# Bucle while con incremento básico.
i = 0
while i <= 10:
    i += 1

# Mientras el número aleatorio no sea 5.
import random

while random.randint(1, 10) != 5:
    print("<p>Hola</p>")

# ##########======================##########
# ######===--- Bucle (do while) ---===######
# ##########======================##########

i = 0
while True:
    i += 1

    # Primero ejecuta, luego evalúa la condición.

    if i > 10:
        break