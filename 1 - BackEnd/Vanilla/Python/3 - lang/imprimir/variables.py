# ##########========================##########
# ######===--- Impresión de datos ---===######
# ##########========================##########

texto = "Hola mundo"

# Detecta la variable en el string y la imprime.
print(f"El texto es: {texto}")

# Concatena e imprime.
print("El texto es: " + texto)

# Con comillas simples NO imprime la variable.
print('La variable es $texto')

# Imprime una lista.
array = [1, 2, 3, "Hola"]
print(array)

# Imprimir datos complejos
usuario = {"name": "Brandon"}
usuarios = {"usuario": {"name": "Anthony"}}

print(f"El nombre es: {usuario['name']}")
print(f"El nombre es: {usuarios['usuario']['name']}")

# --------------------------------------- #
# ------ Imprimir por (referencia) ------ #
# --------------------------------------- #

nombre = "Brandon"
jugar = "jugador de Smash."

print(f"{nombre} es un {jugar}")

# ---------------------------------- #
# ------ Imprimir (funciones) ------ #
# ---------------------------------- #

# Función normal.
def funcion():
    return "Función llamada"

# La función se manda a llamar.
print(funcion())

nombre = "funcion"

# Llamar a la función usando `globals()` para acceder dinámicamente.
print(globals()[nombre]())

# Función anónima (lambda).
get_name = lambda: "Anthony"

# Imprimir el resultado de la función anónima.
print(f"Nombre: {get_name()}")
