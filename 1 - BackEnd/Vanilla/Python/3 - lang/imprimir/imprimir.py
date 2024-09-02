# ##########=========================##########
# ######===--- Formas de impresión ---===######
# ##########=========================##########

# Imprime cualquier tipo de dato.
print("Imprimimos un texto en pantalla con print.")

# La función format() permite formatear cadenas de manera similar a printf en C.
print("El número es {}.".format(555)) # El número es 555.
# Variables.
mensaje = "Mi nombre es {} y tengo {} años.".format(nombre, edad)

# ------------------------------- #
# ------ Impresión directa ------ #
# ------------------------------- #

# pero puedes utilizar (f-strings) para formatear texto directamente.
my_variable = "Texto"
my_result = "Resultado"

# Imprimir usando (f-strings) (disponible en Python 3.6+).
print(f"""
    <div>
        <h1>{my_variable}</h1>
    </div>
    <div>
        <p>{my_result}</p>
    </div>
""")

# También puedes usar la función (join) para combinar cadenas con saltos de línea.
cadena = "\n".join([
    f"<div>",
    f"    <h1>{my_variable}</h1>",
    f"</div>",
    f"<div>",
    f"    <p>{my_result}</p>",
    f"</div>"
])

# ##########=============##########
# ######===--- Escapes ---===###### 
# ##########=============##########

# Escapando comillas dobles
print("Estas son comillas dobles escapadas: \"comillas\"")

# Escapando backslash
print("Estos son backslashes escapados \\backslash\\")

# Comillas simples dentro de comillas dobles
print("Si usas comillas dobles, puedes usar 'comillas simples' sin ningún problema.")

# Comillas dobles dentro de comillas simples
print('Si usas comillas simples, puedes usar "comillas dobles" sin ningún problema.')
