
# ##########==========########## */
# ######===--- Info ---===###### */
# ##########==========########## */

import sys

'''
    Muestra la información sobre la versión de Python y la configuración del entorno.
'''

# Versión del analizador de Python.
print("Versión de Python:", sys.version)

# Versión detallada (major, minor, micro).
print("Versión de Python (detalles):", sys.version_info)

'''
    Información sobre el entorno de ejecución.
'''

# Ruta donde está instalado Python.
print("Ruta de instalación de Python:", sys.executable)

# Rutas donde Python busca módulos.
print("Rutas de búsqueda de módulos:", sys.path)