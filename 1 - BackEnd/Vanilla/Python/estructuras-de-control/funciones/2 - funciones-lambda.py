# ##########=================================================##########
# ######===--- funciones y funciones Lambda, (diferencias) ---===######
# ##########=================================================##########

"""
    Una función normal.
"""
def funcion_normal(str=""):
    return str.lower()

print(funcion_normal("HOLA"))

"""
    Una función lambda.

    En Python, las funciones lambda se utilizan para crear funciones anónimas de forma concisa.
    Se definen con la palabra reservada 'lambda' y son útiles para funciones simples de una sola línea.
"""
funcion_flecha = lambda str="": str.lower()

funcion_flecha("HOLA");
