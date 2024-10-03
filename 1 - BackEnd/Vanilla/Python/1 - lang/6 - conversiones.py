# ##########==================##########
# ######===--- Conversiones ---===######
# ##########==================##########

# Convertir un dato a (string).
string = str(5)

# Convertir un dato a int.
numero = int(float("55.55")) # Primero convertir a float para asegurar la conversión correcta

# Convertir un dato a float.
numero = float("55.55")

# Convertir un dato a booleano.
booleano = bool(string)  # True si string no está vacío

# ##########=======================##########
# ######===--- De Lista a String ---===######
# ##########=======================##########

# Convertir lista a string
arr = ["Hola", "true", "35"]

# El método join convierte una lista a una cadena, usando el separador especificado.
str_1 = ", ".join(arr)  # "Hola, true, 35"
str_2 = " ".join(arr)  # "Hola true 35"
str_3 = "".join(arr)  # "Holatrue35"

# ##########=======================##########
# ######===--- De String a Lista ---===######
# ##########=======================##########

fecha = "2021/5/13"
fecha_1 = "2021-5-13"
fecha_2 = "2021 del mes 5 y el dia 13"

# split() convierte un string en una lista, usando el delimitador especificado.
new_array = fecha.split("/")  # ['2021', '5', '13']
new_array_1 = fecha_1.split("-")  # ['2021', '5', '13']
new_array_2 = fecha_2.split(" ")  # ['2021', 'del', 'mes', '5', 'y', 'el', 'dia', '13']

# Limitar el número de partes
new_array_2_2 = fecha_2.split(" ", 2)  # ['2021', 'del', 'mes 5 y el dia 13']
new_array_2_3 = fecha_2.split(" ", 3)  # ['2021', 'del', 'mes', '5 y el dia 13']

# ##########========================##########
# ######===--- Variables a Listas ---===######
# ##########========================##########

# Variables
variable_0 = "Brandon"
variable_1 = None
variable_2 = True

# Convertir variables a diccionario.
arr_variables = {
    "variable_0": variable_0,
    "variable_1": variable_1,
    "variable_2": variable_2
}

print(arr_variables)
# Imprime: {'variable_0': 'Brandon', 'variable_1': None, 'variable_2': True}