# ##########================##########
# ######===--- Clase base ---===######
# ##########================##########

# Todo empieza por una clase normal.
class User:
    def __init__(self, nombre:str = "", edad:int = 0, correo:str = ""):
        # Propiedades protegidas
        self._nombre = nombre
        self._edad = edad
        self._correo = correo

    # Mostrar datos
    def mostrar_datos(self)->bool:
        print(f"""
            <div>
                <div>Nombre: {self._nombre}</div>
                <div>Edad: {self._edad}</div>
                <div>Correo: {self._correo}</div>
            </div>
        """)
        return False

# Crear una instancia de User
user = User("Brandon", 21, "brandonanthonyolivaresamador@gmail.com")

# ##########==============================##########
# ######===--- Clase que hereda de otra ---===######
# ##########==============================##########

# Primera clase
class Auto:
    def __init__(self, pais="Ninguno", estado="", color="Negro", costo=0.0, motor=0.0):
        # Propiedad protegida.
        self._pais = pais
        self._estado = estado
        self._motor = motor
        # Propiedad pública
        self.color = color
        self.costo = costo
        # (protegida) y (pública) son heredadas a otras clases.

    def mostrar_datos(self) -> None:
        print(f"""
            <div>
                <h3>Auto</h3>
                <div>
                    <b>Pais: </b><span>{self._pais}</span>
                    <b>Estado: </b><span>{self._estado}</span>
                    <b>Color: </b><span>{self.color}</span>
                    <b>Costo: </b><span>{self.costo}</span>
                    <b>Motor: </b><span>{self._motor}</span>
                </div>
            </div>
        """)

# Esta segunda clase hereda todas las propiedades así como los 
# métodos (incluyendo el método constructor), e incluso tiene otras 
# dos propiedades más y un método más.
class Toyota(Auto):

    # Propiedad protegida
    _marca = "Toyota"
    _fecha_salida = "201 / Mayo / 23"

    def mostrar_datos_especificos(self) -> None:
        print(f"""
            <div>
                <h3>Fechas y marca</h3>
                <div>
                    <b>Marca: </b><span>{self._marca}</span>
                    <b>Fecha de salida: </b><span>{self._fecha_salida}</span>
                </div>
            </div>
        """)

# Instanciamos dos objetos de ambas clases
auto = Auto("Mexico", "Tijuana", "Rojo", 300000, 3)
auto_1 = Toyota("Estados Unidos", "Texas", "Azul", 500000, 3)

# Utilizamos el método de la primera clase
auto.mostrar_datos()

# Utilizamos los métodos de la segunda clase
auto_1.mostrar_datos()
auto_1.mostrar_datos_especificos()

# ##########===========================##########
# ######===--- El método constructor ---===######
# ##########===========================##########

# Primera clase
class User:
    def __init__(self, nombre="", edad=0, correo=""):
        # Propiedades protegidas
        self._nombre = nombre
        self._edad = edad
        self._correo = correo

    def mostrar_datos(self) -> None:
        print(f"""
            <div>
                <div>Nombre: {self._nombre}</div>
                <div>Edad: {self._edad}</div>
                <div>Correo: {self._correo}</div>
            </div>
        """)

# La clase se extiende de la primera clase y toma todos sus métodos y propiedades.
class Admin(User):
    # Propiedad perteneciente a la clase.
    _numero = 172

    ''' Eredamos el metodo constructor '''

    # Sobreescribimos el método de la clase padre.
    def mostrar_datos(self) -> None:
        print(f"""
            <div>
                <div>Nombre: {self._nombre}</div>
                <div>Edad: {self._edad}</div>
                <div>Correo: {self._correo}</div>
                <div>Número de admin: {self._numero}</div>
            </div>
        """)

# Usuario instanciado de la primera clase.
usuario = User("Brandon", 21, "brandon@gmail.com")
usuario.mostrar_datos()

# Instanciando un administrador
admin = Admin("Carlos", 30, "carlos@gmail.com", 12345)
admin.mostrar_datos()

# ##########=========================##########
# ######===--- Constructor (padre) ---===######
# ##########=========================##########

class Admin(User):
    def __init__(self, nombre="", edad=0, correo="", numero=0):
        # Le damos los valores al primer metodo constructor.
        super().__init__(nombre, edad, correo)

        # Propiedad específica de esta clase.
        self._numero = numero

    # Sobreescribimos el método de la clase padre
    def mostrar_datos(self) -> None:
        print(f"""
            <div>
                <div>Nombre: {self._nombre}</div>
                <div>Edad: {self._edad}</div>
                <div>Correo: {self._correo}</div>
                <div>Número de admin: {self._numero}</div>
            </div>
        """)

# Usuario instanciado de la primera clase
usuario = User("Brandon", 21, "brandon@gmail.com")
usuario.mostrar_datos()

# Administrador instanciado de la clase extendida
admin = Admin("Anthony", 20, "anthony@gmail.com", 888)
admin.mostrar_datos()
