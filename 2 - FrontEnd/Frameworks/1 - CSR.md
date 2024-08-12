### ========================================= ###
###### ===--- Client-Side Rendering ---=== ######
### ========================================= ###

(Renderizado del lado del cliente). 

El navegador del usuario descarga una aplicación principalmente en forma de un archivo HTML mínimo. Archivos CSS, y un archivo JavaScript que contiene la lógica de la aplicación.

El JavaScript se ejecuta en el navegador y es responsable de construir y actualizar la interfaz de usuario así como de manejar la navegación y la lógica de la aplicación.

# ------------------ #
# ------ PROS ------ #
# ------------------ #

# Menor Carga Inicial del Servidor

El servidor envía una página HTML mínima y el resto del trabajo se realiza en el cliente, lo que puede reducir la carga en el servidor.

# Facilidad en el Desarrollo Front-End

Facilita la división y la organización del código, donde los componentes se pueden reutilizar y gestionar de manera modular.

# --------------------- #
# ------ CONTRAS ------ #
# --------------------- #

# Impacto en SEO

Los motores de búsqueda pueden tener dificultades para indexar el contenido generado por JavaScript, lo que afecta la visibilidad de la página en los resultados de búsqueda.

# Tiempo de Carga Inicial Más Largo

La página puede tardar más en estar completamente interactiva ya que el navegador debe descargar y ejecutar JavaScript antes de renderizar la interfaz.

# Dependencia de JavaScript

Si JavaScript está deshabilitado o falla, la página puede no funcionar correctamente, dejando al usuario con una experiencia limitada o rota.

# Problemas de Accesibilidad

Algunos usuarios, dispositivos o navegadores con capacidades limitadas pueden tener dificultades para acceder al contenido o interactuar con la página si depende en gran medida de JavaScript.

# Mayor Uso de Recursos del Cliente

Al descargar y ejecutar gran cantidad de JavaScript, se incrementa el uso de memoria y CPU en el dispositivo del usuario, lo que puede afectar el rendimiento en dispositivos menos potentes.

### ============================== ###
###### ===--- Frameworks ---=== ######
### ============================== ###

- React 
	- # Client-Side Rendering (CSR)
		- 1. Carga poco contenido HTML. (<div id="root"></div>).
		- 2. enera el resto de los elementos de la página con JavaScript.
		- 3. Inserta y actualiza el contenido en el DOM mediante el Virtual DOM.
- Ionic 
	- # Client-Side Rendering (CSR)
		- 1. Carga poco contenido HTML. (<ion-app></ion-app>).
		- 2. enera el resto de los elementos de la página con JavaScript.
		- 3. Inserta y actualiza el contenido en el DOM mediante el Virtual DOM.
		- 4. Optimizado para dispositivos moviles.
- Angular
	- # Client-Side Rendering (CSR)
		- 1. Carga poco contenido HTML. (<app-root></app-root>).
		- 2. Genera los demas elementos de la pagina con JavaScript.
		- 3. Lo carga en el DOM.
- Angular JS 
	- # Client-Side Rendering (CSR)
		- 1. Carga poco contenido HTML. (<div ng-app="myApp"></div>).
		- 2. Genera los demas elementos de la pagina con JavaScript.
		- 3. Lo carga en el DOM.