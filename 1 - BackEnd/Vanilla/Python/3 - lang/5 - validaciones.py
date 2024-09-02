# ##########==================##########
# ######===--- Validaciones ---===######
# ##########==================##########

# Verificar tipo de dato

# Un entero.
isinstance(10, int)  # True

# Un flotante.
isinstance(10.5, float)  # True

# Una cadena de texto.
isinstance("texto", str)  # True

# Valor None (nulo).
isinstance(None, type(None))  # True

# Numérico (int o float).
isinstance(123, (int, float))  # True

# Una lista (equivalente a un arreglo).
isinstance([1, 2, 3], list)  # True

# Verificar si un valor es NaN (Not a Number).
import math
is_nan = math.isnan(flotante)  # False en este caso

# Ejemplo de uso: 
print( isinstance(entero, int) )  # True
print( isinstance(flotante, float) )  # True
print( is_nan )  # False

# ##########================##########
# ######===--- Ver tipado ---===######
# ##########================##########

# Verificar tipo de dato y valor.
type(58) # <class 'int'>

# Instancia de clase
type(Usuario()) # <class '__main__.Usuario'>

# Booleanas.
print(5 == "5")  # False
print(5 == 5)    # True
print(5 > 3)     # True
print(5 < 5)     # False

# Matemáticas.
print(5 * 5)     # 25
print(5 + 5)     # 10
print(5 - 3)     # 2
print(10 / 2)    # 5.0 (Python 3 siempre devuelve float)
print(10 % 2)    # 0

# Listas y diccionarios (equivalente a arrays).
print([0, 1, 2])  # [0, 1, 2]
print({'key': 'value'})  # {'key': 'value'}