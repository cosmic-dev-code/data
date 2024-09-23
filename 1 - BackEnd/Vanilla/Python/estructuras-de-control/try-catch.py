# ##########=====================================##########
# ######===--- Try Except y lanzar excepciones ---===######
# ##########=====================================##########

# ------------------------------ #
# ------ Excepcion normal ------ #
# ------------------------------ #

try:
    # La palabra reservada (raise) permite lanzar excepciones.
    raise Exception("Variable: $hola")

except Exception as error:
    # El error se recibe.
    print(f"Error: {error}")

finally:
    # Bloque final de ejecución.
    print("Bloque finally ejecutado.")

# -------------------------------- #
# ------ Objeto (Exception) ------ #
# -------------------------------- #

try:
    # Se puede crear una instancia (Exception) y lanzarla.
    raise Exception("Mensaje")
except Exception as error:
    # El objeto lanzado posee la propiedad (args) que devuelve los errores en una (tupla).
    error.args[0]

# --------------------------------- #
# ------ Crear propio tipado ------ #
# --------------------------------- #

# Nuestra clase de Expecion personalizada.
class NoDivideException(Exception):
    pass

try:
    # Se lanza una excepción de tipo (NoDivideException).
    if 10 / 2 != 5:
        raise NoDivideException("Mensaje")

except NoDivideException as no_divisible:
    # Se recibe la excepción.
    no_divisible.args[0]

# ---------------------------------------- #
# ------ Recibir varias excepciones ------ #
# ---------------------------------------- #

try:
    # Se envían las excepciones.
    
    if True:  # Cambiar a la condición real
        raise Exception("Mensaje")

    if True:  # Cambiar a la condición real
        raise Exception("Mensaje")
    
    if True:  # Cambiar a la condición real
        raise NoDivideException("Mensaje")

except NoDivideException as no_divisible:
    no_divisible.args[0]
except Exception as exception:
    exception.args[0]