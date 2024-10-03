# ##########============================##########
# ######===--- Operadores aritmeticos ---===######
# ##########============================##########

operacion = (5 + 5)
operacion = (5 - 5)
operacion = (5 * 5)
operacion = (5 / 5)
operacion = (5 % 5)

# Exponente.
operacion = (5 ** 5)

# Concatenación.

# Hay que convertir explicitamente antes de concatenar.
operacion = str(5) + "5"  # "55"
# TypeError: unsupported operand type(s) for +: 'int' and 'str'
operacion = 5 + "5"

# ##########========================##########
# ######===--- Operadores logicos ---===######
# ##########========================##########

(5 == 5)
(5 < 5)
(5 > 5)
(5 <= 5)
(5 >= 5)

# Diferente a.
(5 != 5)

# ----------------------------- #
# ------ Comparar tipado ------ #
# ----------------------------- #

# Comparamos solo los datos.
(5 == 5);
(5 != 5);
(5 <= 5);
(5 >= 5);

# ---------------------------------- #
# ------ Mas de una condicion ------ #
# ---------------------------------- #

# Operador and: Ambas condiciones deben ser True.
(5 == 5 and 5 > 10)

# Operador or: Al menos una condición debe ser True.
(5 == 5 or 5 > 10)

# Operador not: Invierte el resultado de la condición.
not (5 == 5)

(5 == "5") # False