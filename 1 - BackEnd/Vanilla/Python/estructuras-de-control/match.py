# ##########===============##########
# ######===--- Try Catch ---===######
# ##########===============##########

# La estructura de control (match) funciona de manera similar a la estructura de control (switch).
# La diferencia es que (match) retorna el valor que es seleccionado.

number = 3

match number:
    case 0:
        print("Numero 0")
    case 1:
        print("Numero 1")
    case 2:
        print("Numero 2")
    case 3:
        print("Numero 3")
    case 4:
        print("Numero 4")
    case 5:
        print("Numero 5")
    case 6:
        print("Numero 6")
    case 7:
        print("Numero 7")
    case 8:
        print("Numero 8")
    case 9:
        print("Numero 9")
    case 10:
        print("Numero 10")
    case _:
        print("Ningun numero seleccionado.")

# ---------------------------- #
# ------ Retornar valor ------ #
# ---------------------------- #

# El valor seleccionado se retorna.
usuario = match "1999":
    case "2019":
        "Brandon"
    case "2020":
        "Anthony"
    case "2022":
        "Cosmic"
    case _:
        "Ninguno"

# --------------------- #
# ------ Funcion ------ #
# --------------------- #

# Definición de una función usando match
def hola(val: str = ""):
    match val:
        case "uno":
            return "1"
        case "dos":
            return "2"
        case "tres":
            return "3"
        case _:
            return "nothing"

# Ejemplo de uso de la función
print(hola("dos"))  # Imprime: 2
