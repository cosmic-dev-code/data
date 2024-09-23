# ##########==================########## #
# ######===--- Conversiones ---===###### #
# ##########==================########## #

# Variable con datos separados por '/'.
fecha = "2021/5/13"
fecha_1 = "2021-5-13"
fecha_2 = "2021 del mes 5 y el dia 13"

# Convierte un "string" a una lista separándolo por algún carácter.
new_array = fecha.split("/")
new_array_1 = fecha_1.split("-")
new_array_2 = fecha_2.split(" ")

# -------------------------------- #
# ------ Dividir por partes ------ #
# -------------------------------- #

# El string se va a dividir en (dos) partes.
lista = fecha_2.split(" ", 1)  # Divide en 2 partes
'''
	"2021", 
	"del mes 5 y el dia 13"
'''

# El string se va a dividir en (tres) partes.
lista = fecha_2.split(" ", 2)  # Divide en 3 partes
'''
	"2021", 
	"del", 
	"mes 5 y el dia 13"
'''

# El string se va a dividir en (cuatro) partes.
lista = fecha_2.split(" ", 3)  # Divide en 4 partes
'''
	"2021", 
	"del", 
	"mes", 
	"5 y el dia 13"
'''

# Divide el string en una lista (menos el último elemento).
lista = fecha_1.split(" ")[:-1]
'''
	"2021", 
	"5"
'''

# Divide el string en una lista (menos los últimos elementos).
lista = fecha_1.split(" ")[:-2]
'''
	"2021"
'''

# ##########================================########## #
# ######===--- Buscar dentro de un string ---===###### #
# ##########================================########## #

# Devuelve el número de caracteres.
len("Hello") # 5

# Devuelve el número de palabras.
len( mensaje.split() )  # 2

# Busca la palabra y regresa la posición en que se encuentra.
# 	--- (-1) si no se encuentra
posicion = mensaje.find("grande")

# Busca una cadena de texto.
contiene = "texto" in mensaje.lower()  # True

# ##########=======================########## #
# ######===--- Cortar una cadena ---===###### #
# ##########=======================########## #

cadena = "Hello world!"

# Desde el índice 12, 6 caracteres
corte = cadena[12:18]

# Desde el índice 12 hasta el final
resto = cadena[12:]

# Desde el inicio hasta el índice 5
inicio = cadena[:5]

# Divide en la primera ocurrencia de " ", divide en una parte y el resto.
cadena.partition(" ") # ('Hello', ' ', 'world!')

# ##########============================########## #
# ######===--- Transformar una cadena ---===###### #
# ##########============================########## #

# Mensaje de ejemplo
mensaje = "Año de programación."

# Pone el texto al revés.
mensaje[::-1] # '.noicargorp ed oñA'

# Convertir a minúsculas.
mensaje.lower() # 'año de programación.'

# Convertir a mayúsculas.
mensaje.upper() # 'AÑO DE PROGRAMACIÓN.'

# Convierte la primera letra del string en mayúscula.
mensaje.capitalize() # 'Año de programación.'

# Convierte la primera letra del string en minúscula.
mensaje[0].lower() + mensaje[1:] # 'año de programación.'

# Convierte la primera letra de cada palabra en mayúscula.
mensaje.title() # 'Año De Programación.'
