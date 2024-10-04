<?php

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

# Verifica que un objeto posea un atributo.
hasattr(obj, "_is_final")

# Verificar si un valor es NaN (Not a Number).
import math
is_nan = math.isnan(flotante)  # False en este caso

# Ejemplo de uso: 
isinstance(entero, int)  # True
isinstance(flotante, float)  # True
is_nan  # False

# ---------------------- #
# ------ callable ------ #
# ---------------------- #

def my_function():
    return "Hello"

class MyClass:
    def __call__(self):
        return "Hello from MyClass"

obj = MyClass()

# Verifica si algo se puede llamar, (invocar).

callable(my_function) # True
callable(obj) # True

/* ##########================########## */
/* ######===--- Ver tipado ---===###### */
/* ##########================########## */

# La funcion (var_dump) permite ver el tipo de dato y su valor.
$variable = 58;
var_dump($variable);

# Evalua booleanos.
var_dump(is_int($entero)); // true
var_dump(is_int($flotante)); // false

/* Tambien se pueden evaluar condiciones con 'var_dump'. */
var_dump(5 == "5"); # True.
var_dump(5 === "5"); # False.
var_dump(5 > 3); # True.
var_dump(5 < 5); # Falso.

/* Tambien s===e pueden realizar operaciones matematicas con 'var_dump'. */
var_dump(5 * 5); // 25.
var_dump(5 + 5); // 10.
var_dump(5 - 3); // 2.
var_dump(10 / 2); // 2.
var_dump(10 % 2); // 0.

# Es el (var_dump) pero para arreglos, permite ver el contenido de un arreglo.
print_r(array(0,1,2));

// Pueden verse tambien las caracteristicas de un objeto.
var_dump(new Usuario());