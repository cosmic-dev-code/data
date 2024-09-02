# ##########================##########
# ######===--- Sin tipado ---===######
# ##########================##########

# Variables sin tipado.
variable = 50 # int
variable = True # bool
variable = 5.555 # float

# Instancia de objeto.
variable = Usuario()  # Usuario (suponiendo que Usuario es una clase definida)

# ##########============##########
# ######===--- Tipado ---===###### 
# ##########============##########

# Python no requiere la declaración de tipo explícita.
# Las variables se definen y el tipo se infiere automáticamente.

variable = 50        # int
variable = True      # bool
variable = 5.555    # float
variable = Usuario()  # object (suponiendo que Usuario es una clase definida)

# ##########===========##########
# ######===--- Scope ---===######
# ##########===========##########

# -------------------- #
# ------ Global ------ #
# -------------------- #

'''
    Acceder a las variables externas.
'''

# Otra forma de acceder a las variables locales.
local = ["dato"]

def my_function():
    # Accede a la variable externa usando `global` solo para variables globales, no para listas.
    global local
    print(local[0])

'''
    Modificar variables externas.
'''

# Variable global.
nombre = 70

def crear_global():
    global nombre
    # Variable global accesible en todas partes.
    nombre = "valor"

crear_global()
print(nombre)  # Imprime "valor"

# --------------------- #
# ------ Locales ------ #
# --------------------- #

# Variable global, pero la función NO tiene acceso a ella.
local = True

def funcion():
    # Variable local.
    variable_local = "valor"

# ------------------------------------ #
# ------ Estáticas en funciones ------ #
# ------------------------------------ #

# Ámbito estático de función.

def myFuncion():
    # (__dict__) es el diccionario de atributos de la funcion.
    if 'variable' not in myFuncion.__dict__:
        # Si no existe la inicializa.
        myFuncion.variable = 0

    myFuncion.variable += 1

    print(myFuncion.variable)

myFuncion()  # Imprime 1
myFuncion()  # Imprime 2

# ----------------------- #
# ------ (Closure) ------ #
# ----------------------- #

variable = 5

# Función anónima (closure) accede a la variable externa.
my_closure = lambda: print(variable)

my_closure()  # Imprime 5

# ##########================##########
# ######===--- Constantes ---===###### 
# ##########================##########

# Definir constantes en Python no es estricto, (pero puedes usar la convencion).
CONSTANTE = 50

# ##########=================##########
# ######===--- Referencias ---===###### 
# ##########=================##########

# ----------------- #
# ------ (&) ------ #
# ----------------- #

# En Python, se puede trabajar con referencias de manera indirecta.