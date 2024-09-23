# /* ##########==========########## */
# /* ######===--- Args ---===###### */
# /* ##########==========########## */

# El operador *args indica que todos los parámetros que se van a recibir en la función se recibirán como una tupla.

def calculadora(simbolo="+", *arr_numeros):
    suma = 0

    for numero in arr_numeros:
        if simbolo == "+":
            suma += numero
        elif simbolo == "-":
            suma -= numero
        elif simbolo == "/":
            suma /= numero if suma != 0 else numero  # Evitar división por cero
        elif simbolo == "*":
            suma *= numero if suma != 0 else numero  # Inicializa con el primer número
        else:
            suma += numero  # Por defecto suma

    return suma

# Todos los parámetros desde el segundo donde se encuentra el *args, se almacenan en la tupla.
calculadora("+", 5, 5, 5)  # 15
calculadora("-", 10, 10, 5)  # -5
calculadora("*", 5, 5, 2)  # 50
calculadora("/", 10, 2, 2)  # 2.5

# -------------------------------------------------------------------------------------------

class Calculadora:
    
    @staticmethod
    def suma(*numeros):
        return sum(numeros)

    @staticmethod
    def resta(*numeros):
        return numeros[0] - sum(numeros[1:]) if numeros else 0

    @staticmethod
    def multiplicacion(*numeros):
        resultado = 1
        for numero in numeros:
            resultado *= numero
        return resultado

    @staticmethod
    def division(*numeros):
        if len(numeros) == 0:
            return 0

        resultado = numeros[0]
        
        for numero in numeros[1:]:
            if numero == 0:
                return "Error: División por cero"
            resultado /= numero
        return resultado

# Imprimimos los valores en pantalla.

print("La suma es:", Calculadora.suma(5, 5, 5))

print("La resta es:", Calculadora.resta(5, 5, 5))

print("La multiplicación es:", Calculadora.multiplicacion(5, 5, 5))

print("La división es:", Calculadora.division(5, 5, 5))
