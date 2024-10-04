# ##########=============##########
# ######===--- Métodos ---===######
# ##########=============##########

# El nombre de la clase es: (Usuario).
class Usuario:
    
    # Método público.
    # NOTA: Todos los metodos deben llevar (self) para que sean validos.
    def saludar(self):
        return "Hola"

# Instanciamos un objeto perteneciente a la clase (Usuario).
usuario = Usuario()

# Llamar un método.
usuario.saludar()  # "Hola"

# NOTA: Todos los metodos deben llevar (self) para que sean validos.
# SELF: Representa el objeto que se instanciara de la clase.

# ------------------------------------------------ //
# ------ Métodos que llaman a otros métodos ------ //
# ------------------------------------------------ //

class Usuario:
    
    # SELF: Representa el objeto que se instanciara de la clase.
    # SELF: Necesario para que el metodo se (reconozca) como un metodo.

    def saludar(self)->str:
        # Con (self) mandamos a llamar un método o propiedad perteneciente a la clase.
        return self.saludo()

    # Método que retorna una cadena de texto.
    def saludo(self)->str:
        return "Hola mundo!"

usuario = Usuario()

usuario.saludar()  # "Hola mundo!"

# ##########=================##########
# ######===--- Propiedades ---===######
# ##########=================##########

class Usuario:
    # Propiedades públicas pertenecientes a la clase.
    nombre = "Brandon"
    edad = 21

    # SELF: Representa el objeto que se instanciara de la clase.

    # Método para obtener información.
    def get_info(self)->int:
        print(f"Nombre: {self.nombre} y edad: {self.edad}")
        return 0

# Instanciamos un objeto y llamamos a su método.
usuario = Usuario()
usuario.get_info()

# ------------------------------- #
# ------ Tipado (opcional) ------ #
# ------------------------------- #

class Usuario:
    def __init__(self, name:str = None):
        # Propiedad que puede ser un string o None.
        self.name: str = name

    # Método que puede retornar un dato de tipo string o None.
    def get_name(self)->str:
        return self.name

usuario = Usuario()

# ------------------------- #
# ------ Union types ------ #
# ------------------------- #

from typing import Union, Optional, List

class Usuario:
    # Podemos indicar un tipado dinámico, quizás una propiedad pueda ser una u otra cosa.
    propiedad:Union[str,int] = 50

    # También aplica para los métodos, pueden devolver una u otra cosa.
    def retornar(self)->Optional[Union[str, List]]:
        return None

# Ejemplo de uso
usuario = Usuario()

usuario.propiedad  # 50
usuario.retornar()  # None

# ##########========================##########
# ######===--- Método constructor ---===######
# ##########========================##########

class Usuario:

    # Propiedades sin valor.
    # NOTA: No es recomendado si quieres garantizar las propiedades de la instancia.
    nombre = None
    age = None

    # El metodo recibe los valores para sus propiedades internas.
    def __init__(self, nombre:str = "Brandon", age:int = 22):
        # Y asignar valor a sus propiedades internas.
        self.nombre = nombre
        self.age = age

# El objeto (usuario) tiene esas únicas propiedades.
usuario = Usuario("Brandon", 22)

# -------------------------- #
# ------ Método (new) ------ #
# -------------------------- #

# (new) Se manda a llamar primero que el (init).
#   --- (__init__) Es el encargado de crear la instancia de la clase.
#   --- (__new__) Es el encargado de crear la clase como tal.

class MiClase:
    def __new__(cls, *args, **kwargs):

        # Puedes hacer otro proceso aqui.
        
        # Llama a __new__ de la clase base
        # Devuelve la nueva instancia
        return super().__new__(cls)

    '''
        Parametros para (new)
    '''
    def __new__(cls, name, bases, attrs):
        # (cls): Representa el parametro en si.
        # (name): Nombre de la clase que se quiere crear.
        # (bases): Tupla que contiene las clases bases en la que se basa esta clase.
        # (attrs): Diccionario con las propiedades y metodos de la clase que se quiere crear.

        # Definimos un nuevo metodo.
        attrs['greet'] = lambda self: f"Hello, {self.name}!"

        # Retornamos todo.
        return super().__new__(cls, name, bases, attrs)

# --------------------------------- #
# ------ Método (destructor) ------ #
# --------------------------------- #

class Usuario:
    def __init__(self, nombre:str = "Brandon", edad:int = 21):
        self.nombre = nombre
        self.edad = edad

    # El método (destructor) se ejecuta cuando se elimina el objeto.
    # Se utiliza para liberar los datos.
    def __del__(self):
        self.nombre = ""
        self.edad = ""

    def get_info(self)->str:
        return f"Nombre: {self.nombre} y la edad: {self.edad}."

# ##########=============================##########
# ######===--- Modificadores de acceso ---===###### 
# ##########=============================##########

# ----------------------------- #
# ------ Encapsulamiento ------ #
# ----------------------------- #

# NOTA: En python no existen los modificadores de acceso, pero se suele seguir una convencion.

class Usuario:
    
    '''
        Propiedades y métodos (públicos).
    '''

    def __init__(self):
        # Propiedades publicas.
        self.descripcion = None
        self.descripcion_1 = None
        self.variable = 50

    def funcion_publica(self):
        """Se puede acceder a ella desde cualquier clase hija, 
        cualquier objeto instanciado desde la misma clase."""
        pass

    '''
        Propiedades y métodos (privados).
    '''

    def __init__(self):
        # Propiedades privadas.
        # NOTA: Esto hace (name mangling), aun se puede acceder (instancia._Usuario__correo_electronico)
        self.__correo_electronico = None  # Privada

    def __funcion_privada(self):
        """Únicamente se accede a esta función desde la clase donde es creada,
        las clases hijas no tienen acceso a ella."""
        pass

    '''
        Propiedades y métodos (protegidos).
    '''

    def __init__(self):
        # Propiedades protegidas.
        self._nombre = None
        self._edad = None

    def _funcion_protegida(self):
        """Se accede a esta función solo dentro de la misma clase o las clases hijas."""
        pass

# NOTA: En python no existen los modificadores de acceso, pero se suele seguir una convencion.

# ##########==========================================##########
# ######===--- Objetos con objetos como propiedades ---===######
# ##########==========================================##########

from typing import Optional

# Una clase con una propiedad.
class User:
    def __init__(self, admin):
        # La propiedad recibiendo una instancia.
        self.admin = admin

# Otra clase que solo tiene un método.
class Admin:
    def greet(self)->str|None: # Python 3.10
        return "Hola admin"

    def greet(self)->Optional[str]: # (Optional) para versiones posteriores.
        return "Hola admin"

# Pasamos el objeto Admin al constructor de User
user = User(Admin())

# Imprimimos el método que retorna un string perteneciente a la propiedad objeto.
user.admin.greet()

# ##########=============================##########
# ######===--- Métodos getter y setter ---===######
# ##########=============================##########

class Usuario:
    def __init__(self, nombre:str = "Brandon", edad:int = 21):
        self.nombre:str = nombre
        self.edad:int = edad

    # Método para extraer el valor de una propiedad.
    def get_name(self)->str:
        return self.nombre

    # Método para modificar el valor de una propiedad.
    def set_name(self, nuevo_nombre:str)->None:
        self.nombre = nuevo_nombre

# Creamos un objeto Usuario
usuario = Usuario("Anthony", 20)

# Modificamos la propiedad 'nombre' del objeto instanciado.
usuario.set_name("Brandon")
# Obtenemos la propiedad 'nombre' del objeto instanciado.
nombre = usuario.get_name()

# ------------------------- #
# ------ Decoradores ------ #
# ------------------------- #

class Usuario:
    def __init__(self, nombre:str = "Brandon", edad:int = 21):
        self.__nombre:str = nombre  # Atributo privado (__).
        self.edad:int = edad

    # El decorador (@property) define una propiedad (getter).
    @property
    def nombre(self)->str:
        return self._nombre

    # El decorador (@nombre.setter) define una propiedad (setter).
    @nombre.setter
    def nombre(self, nuevo_nombre:str)->None:
        self._nombre = nuevo_nombre

# Creamos un objeto Usuario
usuario = Usuario("Anthony", 20)

# Usamos el setter
usuario.nombre = "Brandon"
# Usamos el getter
usuario.nombre

# ------------------------------------ #
# ------ Propiedades (readonly) ------ #
# ------------------------------------ #

# Las propiedades (readonly) hacen que una propiedad pueda inicializarse una vez
# y que estas no puedan modificarse.

class Usuario:
    def __init__(self, nombre:str = "Brandon", edad:int = 21):
        # Se inicializan una vez.
        self.__nombre = nombre
        self.__edad = edad

    # Los decoradores sirven para generar (getters), pero no se modifican.

    @property
    def nombre(self):
        return self.__nombre

    @property
    def edad(self):
        return self.__edad

usuario = Usuario("Anthony", 20)

# Solo pueden leerse.
usuario.nombre # "Anthony"
usuario.edad # 20

# ##########=======================##########
# ######===--- Métodos estáticos ---===######
# ##########=======================##########

# Los metodos estaticos permiten acceder a un metodo de una clase directamente sin instanciarla.
class Usuario:
    def __init__(self, nombre:str = "Brandon", edad:int = 21):
        # Atributos privados, (__).
        self.__nombre = nombre
        self.__edad = edad

    def get_info(self)->bool:
        print(f"Nombre: {self.__nombre} y edad: {self.__edad}")
        return False

    # Se declara de manera explicita con el decorador (@staticmethod).
    @staticmethod
    def saludar()->bool:

        # NOTA: Aqui no recibimos por parametro a (self), ya que (self) representa la instancia de esta clase.
        # Pero no la clase como tal, asi que en este metodo (self) no esta disponible.
        return False

# Para acceder a los métodos de se instancia un objeto y se manda a llamar al método.
usuario = Usuario()
usuario.get_info()

# Para acceder a los métodos (estáticos) se utiliza la clase directamente.
Usuario.saludar()

# -------------------------------------------------- #
# ------ Métodos estáticos que llaman a otros ------ #
# -------------------------------------------------- #

class Usuario:
    # Propiedad pública estática
    propiedad_publica = 55

    # Constante, (Solo por convencion, pero si puede cambiar).
    CONSTANTE = 80

    def __init__(self, nombre:str = "Brandon"):
        # Atributo privado
        self.__nombre = nombre

    # Método estático privado (__).
    @staticmethod
    def __texto():
        return "Hola mundo!"

    # Método estático que llama a otro método estático
    @staticmethod
    def saludar()->None:
        # Llamando a un método estático dentro de la misma clase
        Usuario.__texto()

    # (cls) Permite referirse a la clase misma, como (self) a la instancia.
    # NOTA: Tambien debe recibirse por parametro.
    @staticmethod
    def otro(cls)->str:
        return cls.__texto()

# Llamamos al método estático que a su vez llama a otro
Usuario.saludar()
Usuario.otro()

# Acceso a la propiedad pública estática
Usuario.propiedad_publica

# Acceso a la constante.
# NOTA: (no es constante, pero se hace por convecion esperando no modificar su valor.)
Usuario.CONSTANTE = 10