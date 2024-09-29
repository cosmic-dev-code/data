# ##########==================================##########
# ######===--- Declaración e inicialización ---===######
# ##########==================================##########

# NOTA: (Placeholder) y (None): Indica que el codigo esta vacio, sino dara error.

# Las funciones se definen con la palabra reservada (def).
def funcion():
    # ...
    pass  # Placeholder para el contenido de la función

# Función anónima (lambda).
# Estas funciones son de una sola línea y no se almacenan en pila como las normales.
funcion_anomima = lambda: None  # Placeholder para una función anónima
suma = lambda x, y: x + y

# Llamando a la función anónima
suma(5, 3) # 8

# ------------------------- //
# ------ Llamamiento ------ //
# ------------------------- //

# Las funciones pueden llamar a otras dentro de sí mismas.
def funcion_principal():
    funcion_uno()
    funcion_dos()

funcion_principal()  # Llama a la función principal

# ----------------------- //
# ------ Anidación ------ //
# ----------------------- //

# Pueden haber funciones dentro de funciones y llamarse entre sí.
def funcion_anidada():
    def anidada_uno():
        print("Función Anidada Uno")

    def anidada_dos():
        print("Función Anidada Dos")

    anidada_uno()  # Llama a la función anidada uno
    anidada_dos()  # Llama a la función anidada dos

funcion_anidada()  # Llama a la función que contiene las anidadas

# ##########================##########
# ######===--- Parámetros ---===######
# ##########================##########

# Aquí podemos tener tipado (usando type hints).
#   --- (-> None), es el retorno.
def decir_nombre(nombre:str, edad:int)->None:
    # Recibimos los parámetros y los imprimimos.
    print(f"{nombre} tiene una edad de: {edad}.")

decir_nombre("Brandon", 21)

# Función anónima.
my_function = lambda numero: [
    print(f"Numero: {i} hasta {numero}") 
    for i in range(numero)
]

my_function(30)

# ------------------------------------- #
# ------ Valores predeterminados ------ #
# ------------------------------------- #

# Recibimos valores predefinidos.
def informacion(nombre:str = "Ninguno", edad:int = 21)->None:
    print(f"El usuario {nombre} tiene la edad de: {edad}.")

# En este caso el segundo argumento ya lo toma por defecto como (21).
informacion("Brandon")

# ----------------------------- #
# ------ Tipado opcional ------ #
# ----------------------------- #

# Importar para hacer el opcional similar a Typescript (?).
from typing import Optional

def funcion(name:Optional[str])->None:
    # ...
    pass

def get_name()->Optional[str]:
    return None

# -------------------- #
# ------ Listas ------ #
# -------------------- #

# Una lista (opcional).
def sumar(lista:list = [])->None: 
    print(f"La suma es: {sum(lista)}")

# Podemos pasarle una lista y esta sumará cada uno de sus valores.
sumar([5, 5, 5])
sumar([10, 20, 5, 2, 1, 10])

# Otros parámetros.
def mostrar_usuarios(arr_usuarios:list = [], mensaje:str = "Sin usuarios")->None:
    for usuario in arr_usuarios:
        print(f"usuario\n")

mostrar_usuarios(["Brandon", "Anthony", "Cosmic"])

mostrar_usuarios(
    ["Brandon", "Anthony", "Cosmic"], 
    "Son todos los usuarios por ahora."
)

# --------------------- #
# ------ Objetos ------ #
# --------------------- #

# Clase para nuestro tipado.
class Usuario:
    pass

'''
    Funciones
'''

def obtener(usuario)->None:
    # Aquí podemos recibir cualquier tipo de dato.
    pass

def objeto(objeto:object)->None:
    # Especifica que debe recibir un objeto (sin importar el tipo de objeto que sea).
    pass

def obtener_typado(usuario:Usuario)->None:
    # Aquí se declara que el parámetro debe ser una instancia de la clase Usuario.
    pass

# ##########======================##########
# ######===--- Retorno de datos ---===######
# ##########======================##########

# Función que retorna la suma de dos números.
def suma(numero_0:int = 0, numero_1:int = 0) -> int:
    return numero_0 + numero_1

# Ejemplo de uso
suma(5, 3)  # 8

# Función para redondear a un número de decimales específicos.
def to_fixed(numero:float = 0.0, decimales:int = 0)->float:
    num_texto = str(numero)
    num_final = ""

    # Aumentar decimales para incluir el redondeo.
    decimales += 1

    if "." in num_texto:
        posicion = num_texto.index(".") + decimales
        num_final = num_texto[:posicion]
    else:
        return 0.0

    return float(num_final)

to_fixed(5.553252525425, 3) # 5.553
to_fixed() # 0.0
to_fixed(555.555) # 555.0

# -------------------- #
# ------ Listas ------ #
# -------------------- #

# Función para etiquetar usuarios en una lista.
def etiquetar_usuarios(arr_usuarios:list = [])->list:
    etiquetados = []

    for key in arr_usuarios:
        etiquetados.append(f"(Usuario => {key})")

    # Retornamos la lista nueva.
    return etiquetados

etiquetar_usuarios(["Brandon", "Anthony", "Cosmic"])

# ----------------------- #
# ------ Funciones ------ #
# ----------------------- #

# Función que devuelve otra función.
def obtener():
    return lambda: print("Hola mundo")

# Guardar la función devuelta de forma anónima e invocarla.
funcion = obtener()
funcion()  # "Hola mundo"

# Invocarla directamente.
obtener()()  # "Hola mundo"

# --------------------- #
# ------ Objetos ------ #
# --------------------- #

class Unknown:
    pass

class Usuario:
    pass

# Puede devolver cualquier tipo de dato.
def sin_especificar()->list:
    return [Unknown(), Usuario()]

# Especifica que puede retornar cualquier objeto.
def retornar() -> object:
    return Unknown()

# Retorna un tipado específico.
def retornar_usuario() -> Usuario:
    return Usuario()

# ##########==============================##########
# ######===--- Referencias de variables ---===######
# ##########==============================##########

# -------------------------------- //
# ------ Variables globales ------ //
# -------------------------------- //

variable_global = True

def funcion():
    global variable_global  # Declaramos que usaremos la variable global
    print(variable_global)  # Accedemos a la variable global

funcion()  # True

# ##########==================##########
# ######===--- Recursividad ---===######
# ##########==================##########

# Creamos una variable global para llevar el conteo.
numero = 0

def recursividad(cadena="", limite=0):
    global numero  # Usamos la variable global
    
    # Cuando la condición se cumple finaliza.
    if numero >= limite:
        print("Fin")
        return False
    else:
        numero += 1
        print(cadena + str(numero))

        # Se llama a sí misma.
        recursividad(cadena, limite)

recursividad("El número es: ", 10)
'''
    El número es: 1
    El número es: 2
    El número es: 3
    El número es: 4
    El número es: 5
    El número es: 6
    El número es: 7
    El número es: 8
    El número es: 9
    El número es: 10
    Fin
'''

# ##########==============##########
# ######===--- Callback ---===######
# ##########==============##########

"""
    NOTA: Las funciones pueden aceptar (funciones anónimas) como (callbacks).
"""

def sumar(numero_0=0, numero_1=0):
    return numero_0 + numero_1

def llamar(callback):
    # Mandamos a llamar la (funcion).
    if callback() > 10:
        return True
    else:
        return False

# Llamamiento de la función y le pasamos el (callback) por parametro.
resultado = llamar(lambda: sumar(5, 5))