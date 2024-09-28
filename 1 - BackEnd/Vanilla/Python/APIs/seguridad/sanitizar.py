# ##########====================##########
# ######===--- Etiquetas HTML ---===######
# ##########====================##########

# ---------------------------------- #
# ------ Eliminar (Etiquetas) ------ #
# ---------------------------------- #

import re

# Elimina las etiquetas HTML.
cleaned_html = re.sub(r'<.*?>', '', "<h3>Mi titulo</h3>")  # 'Mi titulo'

# --------------------------------- #
# ------ Escapar (Etiquetas) ------ #
# --------------------------------- #

import html

# Escapa los caracteres especiales (HTML).
escaped_html = html.escape("<div>Esta es una <b>cadena</b> de texto.</div>")