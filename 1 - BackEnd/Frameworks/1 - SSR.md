### ========================================= ###
###### ===--- Server-Side Rendering ---=== ######
### ========================================= ###

(Renderizado del lado del servidor). 

El HTML de una aplicación web se genera en el servidor y luego se envía al cliente (navegador) para su visualización.

A diferencia de los frameworks de renderizado del lado del cliente (como React estándar), en SSR, el contenido de la página se genera completamente en el servidor antes de enviarse al cliente.

# ------------------ #
# ------ PROS ------ #
# ------------------ #

# Mejor SEO

El contenido se genera en el servidor y se envía al navegador como HTML completo, lo que facilita a los motores de búsqueda indexar la página y mejorar su visibilidad en los resultados de búsqueda.

# Tiempo de Carga Inicial Más Rápido

La página aparece más rápidamente en el navegador porque el HTML ya está completamente renderizado en el servidor, lo que proporciona una percepción de mayor velocidad para el usuario.

# Accesibilidad Mejorada

Dado que el HTML está disponible desde el principio, la página es accesible incluso para usuarios que tienen JavaScript deshabilitado o están utilizando dispositivos más antiguos.

# Optimización del Rendimiento

La carga de trabajo se distribuye mejor entre el servidor y el cliente. El servidor se encarga de generar el HTML, lo que puede ser más eficiente en términos de tiempo de renderizado.

# Menor Dependencia del Cliente

Las páginas pueden funcionar mejor en dispositivos con recursos limitados, ya que no dependen tanto del rendimiento del dispositivo para renderizar el contenido.

# Soporte para Contenido Dinámico

El SSR es ideal para aplicaciones que necesitan mostrar contenido dinámico que cambia frecuentemente, ya que el contenido puede ser actualizado en cada solicitud del usuario.

# --------------------- #
# ------ CONTRAS ------ #
# --------------------- #

# Mayor Carga en el Servidor

El servidor necesita renderizar cada página para cada solicitud, lo que puede aumentar la carga en el servidor, especialmente con un gran número de usuarios simultáneos.

# Latencia del Servidor

La velocidad de la aplicación depende de la latencia entre el cliente y el servidor. Si el servidor está lejos o saturado, puede haber un retraso en la entrega del contenido.

# Escalabilidad

A medida que crece la base de usuarios, escalar una aplicación SSR puede ser más desafiante, ya que cada solicitud requiere que el servidor renderice la página desde cero.

### ============================== ###
###### ===--- Frameworks ---=== ######
### ============================== ###

- Laravel 
	- # Server-Side Rendering (SSR)
		- 1. Genera el HTML completo en el servidor para cada solicitud.
- Livewire 
	- # Server-Side Rendering (SSR)
		- 1. Actualiza el contenido en el servidor.
		- 2. Envía el HTML actualizado al cliente.
	- # Client-Side Rendering (CSR)
		- 1. Utiliza JavaScript para manejar la interactividad del cliente.
		- 2. Actualizar el contenido dinámicamente.
- NextJS 
	- # Server-Side Rendering (SSR)
		- 1. Genera el HTML en el servidor en cada solicitud.
	- # Client-Side Rendering (CSR)
		- 1. Genera contenido dinámico en el navegador del cliente utilizando JavaScript.
	- # Static Site Generation (SSG)
		- 1. Genera HTML estático en el momento de la construcción (build time).
		- 2. Sirve directamente a los usuarios el HTML estático generado.