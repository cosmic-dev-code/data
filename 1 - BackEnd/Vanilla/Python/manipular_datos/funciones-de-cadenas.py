# ##########==================########## #
# ######===--- Conversiones ---===###### #
# ##########==================########## #

# ------------------- #
# ------ lista ------ #
# ------------------- #

# Convierte a una lista.
lista = list("Mi cadena")
lista = list(18)

# Otra forma de convertir a (lista).
new_array = "2021/5/13".split("/")
new_array_1 = "2021-5-13".split("-")
new_array_2 = "2021 del mes 5 y el dia 13".split(" ")

# -------------------------------- #
# ------ Dividir por partes ------ #
# -------------------------------- #

# Divide en (2) partes
lista = cadena.split(" ", 1)
'''
	"2021", 
	"del mes 5 y el dia 13"
'''

# Divide en (3) partes.
lista = cadena.split(" ", 2)
'''
	"2021", 
	"del", 
	"mes 5 y el dia 13"
'''

# Divide en (4) partes
lista = cadena.split(" ", 3)
'''
	"2021", 
	"del", 
	"mes", 
	"5 y el dia 13"
'''

# Divide (menos el último elemento).
lista = cadena.split(" ")[:-1]
'''
	"2021", 
	"5"
'''

# Divide (menos los últimos elementos).
lista = cadena.split(" ")[:-2]
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

# ##########========================##########
# ######===--- Concatenar cadenas ---===######
# ##########========================##########

# Las cadenas se pueden concatenar usando el operador (+).
text = "Hola" + " " + "mundo!"

# Usando f-strings para interpolación
result = f"La cadena es: {text}"

# ##########============================##########
# ######===--- Comparación de cadenas ---===######
# ##########============================##########

# Método de comparación normal.
"Hola" == "Hola"  # True
"Hola".lower() == "hola".lower()  # True

# Teniendo en cuenta mayúsculas y minúsculas.
"Hola" < "Adios"  # False (por orden alfabético)

# ##########========================##########
# ######===--- Relleno de cadenas ---===######
# ##########========================##########

string = ".  Esta es una cadena   "

# Remueve el exceso de espacios.
string.strip()  # 'Este es una cadena'

# Remueve solo el espacio del lado (izquierdo) del texto.
string.lstrip()

# Remueve solo el espacio del lado (derecho) del texto.
string.rstrip()

# Rellenar con '#' a ambos lados.
"39".center(8, '#')  # '###39###'

# Rellenar con '#' a la izquierda.
"39".rjust(8, '#')   # '#####39'

# Rellenar con '#' a la derecha.
"39".ljust(8, '#')  # '39#####'

# ##########=======================================##########
# ######===--- Extraer un carácter de una cadena ---===######
# ##########=======================================##########

# Extraer el primer carácter de una cadena.
cadena = "Hola"

cadena[0]  # 'H'

# ##########===========================##########
# ######===--- Reemplazar una cadena ---===######
# ##########===========================##########

text = "Este es un curso de php y javascript para aprender más."

# Reemplazamos los espacios con un guion.
slug = text.replace(' ', '-')  # 'Este-es-un-curso-de-php-y-javascript-para-aprender-más.'

# Reemplazamos la palabra 'php' por 'javascript'.
slug = text.replace('php', 'javascript')