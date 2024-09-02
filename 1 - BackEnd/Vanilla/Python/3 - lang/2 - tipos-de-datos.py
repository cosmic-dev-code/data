# ##########====================##########
# ######===--- Tipos de datos ---===######
# ##########====================##########

# Números.
numero = 54353
numero_float = 324235.435345

# Cadena de texto.
cadena = "Brandon Anthony"
cadena = 'Brandon Anthony'

# Listas.
lista = [10, 20, 30]
lista = ["Hola", "Brandon", "Anthony"]
lista = [10, False, "Brandon"]
lista = ["Hola", "mundo", True]
lista = {
    "nombre": "Brandon", 
    "edad": 22, 
    "Uno": None, 
    "arreglo": ["Uno", "Dos", "Tres"]
}

# Booleanos.
booleano = True
booleano = False

# Sin valor (None).
nulo = None

# Funciones anónimas (lambdas).
funcion_anonima = lambda: "string"

# Una clase.
class ClaseAnonima:
    def __init__(self):
        pass

# Dato de tipo objeto.
# Supongamos que tenemos una clase Usuario definida en otra parte.
class Usuario:
    pass

objeto = Usuario()

# Datos estáticos (en Python se usa el concepto de atributos de clase para similitudes).
class MiClase:
    estatico = 5

# Constantes.
PI = 3.1416
VARIABLE = "Este es el valor"