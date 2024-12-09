### ============================== ###
###### ===--- Robots.txt ---=== ######
### ============================== ###

Utiliza el archivo [](robots.txt) para indicar a los motores de búsqueda qué páginas deben o no deben rastrear.

# ------------------------ #
# ------ Beneficios ------ #
# ------------------------ #

(Control de Rastreo):

<!-- Esto evita que los bots gasten tiempo y recursos en rastrear páginas irrelevantes. -->

(Optimización del Crawl Budget):

<!-- Optimizar el presupuesto de rastreo al dirigir a los motores de búsqueda hacia las partes más importantes de tu sitio. -->

(Prevención de Indexación No Deseada):

<!-- Puedes evitar que ciertas páginas o secciones se indexen en los motores de búsqueda, puede ser útil, 
para contenido duplicado o páginas de prueba. -->

(Indicación de Sitemaps):

<!-- Puedes facilitar a los motores de búsqueda la localización de tu sitemap, lo que ayuda a asegurar que todas las páginas importantes sean indexadas. -->

# --------------------- #
# ------ Ejemplo ------ #
# --------------------- #

<!-- Se crea en la raiz del proyecto. -->

###### --- --- --- --- --- --- {proyecto}/public/robots.txt --- --- --- --- --- --- ######

```bat
	: Indica a qué robots de búsqueda se aplican las reglas.
	:	--- (*), para todos los robots de busqueda.
	:	--- (Googlebot), para el bot de Google.
	User-agent: * 

	: Restringe el acceso a rutas específicas.
	Disallow: /private/
	Disallow: /tmp/

	: Permite el acceso a cualquier URL que comience con /public/.
	Allow: /public/
	Allow: /

	: Indica donde se encuentra el archivo (sitemap).
	Sitemap: https://www.example.com/sitemap.xml
```

# ------------------------- #
# ------ Modo de uso ------ #
# ------------------------- #

Los robots al visitar tu dominio automaticamente buscaran [](proyecto/public/robots.txt).

	https://www.example.com/robots.txt

# ----------------------------- #
# ------ Consideraciones ------ #
# ----------------------------- #

# NOTA:
	No Garantiza Privacidad, es solo informacion para los motores de busqueda, si tienes informacion sensible y 
	quieres bloquearla, es mejor un sistema de autenticacion, el bloqueo (Disallow) 
	solo es para los motores de busqueda.

# Sin Archivo robots.txt
	Si no hay un archivo robots.txt en la raíz de tu dominio, los motores de búsqueda asumirán 
	que no hay restricciones y rastrearán todas las páginas a las que tienen acceso.